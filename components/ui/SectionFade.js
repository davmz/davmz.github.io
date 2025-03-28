"use client";

import { useEffect, useRef, useState } from "react";

/**
 * SectionFade component
 * 
 * Fades and slides in its children when the section becomes visible (75%+ in view).
 * Adds a slight delay before animating in, and reverses animation when scrolled out.
 */
export default function SectionFade({ children }) {
    const ref = useRef(null); // Reference to the section DOM node
    const [isVisible, setIsVisible] = useState(false); // Tracks visibility state
    const timeoutRef = useRef(null); // Tracks animation delay timeout

    useEffect(() => {
        // Create an intersection observer to detect visibility of the section
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.75) {
                    // Section is 75% or more in view — delay before triggering animation
                    timeoutRef.current = setTimeout(() => {
                        setIsVisible(true);
                    }, 500); // Delay of 0.5 seconds (adjustable)
                } else {
                    // Section is less than 75% visible — reset the animation
                    clearTimeout(timeoutRef.current);
                    setIsVisible(false);
                }
            },
            {
                threshold: [0.75], // Only trigger when 75% or more of the section is visible
            }
        );

        const el = ref.current;

        // Start observing the section
        if (el) observer.observe(el);

        // Cleanup when component unmounts or rerenders
        return () => {
            if (el) observer.unobserve(el);
            clearTimeout(timeoutRef.current); // Prevent memory leaks
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`
                transition-all duration-[1200ms] ease-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
        >
            {children}
        </div>
    );
}
