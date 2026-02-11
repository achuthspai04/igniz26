"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const FADE_DURATION_MS = 400;
const MAX_WAIT_MS = 8000;

function preloadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
    });
}

export default function PageLoader({
    children,
    assets,
}: {
    children: React.ReactNode;
    assets: string[];
}) {
    const [ready, setReady] = useState(false);
    const [fadingOut, setFadingOut] = useState(false);

    const reveal = useCallback(() => {
        setFadingOut(true);
        setTimeout(() => setReady(true), FADE_DURATION_MS);
    }, []);

    useEffect(() => {
        let cancelled = false;

        Promise.all(assets.map(preloadImage)).then(() => {
            if (!cancelled) reveal();
        });

        const timeout = setTimeout(() => {
            if (!cancelled) reveal();
        }, MAX_WAIT_MS);

        return () => {
            cancelled = true;
            clearTimeout(timeout);
        };
    }, [assets, reveal]);

    return (
        <>
            {/* Loading overlay */}
            {!ready && (
                <div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A0000]"
                    style={{
                        fontFamily: '"Might Makes Right BB", system-ui, sans-serif',
                        opacity: fadingOut ? 0 : 1,
                        transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
                        pointerEvents: fadingOut ? "none" : "auto",
                    }}
                >
                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src="/images/navbarlogo.svg"
                            alt="IGNIZ"
                            width={160}
                            height={120}
                            className="w-28 md:w-36 h-auto object-contain"
                            priority
                        />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#FFD120] rounded-full animate-bounce [animation-delay:0ms]" />
                            <div className="w-2 h-2 bg-[#FFD120] rounded-full animate-bounce [animation-delay:150ms]" />
                            <div className="w-2 h-2 bg-[#FFD120] rounded-full animate-bounce [animation-delay:300ms]" />
                        </div>
                    </div>
                </div>
            )}

            {/* Page content — always mounted for SEO, hidden until ready */}
            <div
                style={{
                    opacity: ready ? 1 : 0,
                    visibility: ready ? "visible" : "hidden",
                    transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
                }}
            >
                {children}
            </div>
        </>
    );
}
