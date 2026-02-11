"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
    useEffect(() => {
        // Scroll native window
        window.scrollTo(0, 0);
        
        // Also handle GSAP ScrollSmoother wrapper if present
        const smoothWrapper = document.getElementById("smooth-wrapper");
        if (smoothWrapper) {
            smoothWrapper.scrollTop = 0;
        }
        const smoothContent = document.getElementById("smooth-content");
        if (smoothContent) {
            smoothContent.style.transform = "translate3d(0, 0, 0)";
        }
    }, []);

    return null;
}
