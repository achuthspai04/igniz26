"use client";

import Image from "next/image";
import Link from "next/link";

type CulturalEventCardProps = {
    src: string;
    alt: string;
    href?: string;
    imageStyle?: React.CSSProperties;
};

export default function CulturalEventCard({ src, alt, href, imageStyle }: CulturalEventCardProps) {
    const content = (
        <div className="relative w-full aspect-[4/5] flex items-center justify-center group cursor-pointer -my-4 md:-my-6 overflow-visible">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-125 scale-[1.15]"
                style={imageStyle}
            />
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block">
                {content}
            </Link>
        );
    }

    return content;
}
