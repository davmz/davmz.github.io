"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: use any icon
import { cn } from "../../lib/utils";

export default function BackToTop({ onResetSection }) {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisible = () => {
        setVisible(window.scrollY > 300);
      };
  
      window.addEventListener("scroll", toggleVisible);
      return () => window.removeEventListener("scroll", toggleVisible);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  
      // Reset currentSection in parent
      if (onResetSection) onResetSection();
    };
  
    return (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={cn(
            "fixed bottom-6 right-6 z-50 p-3 rounded-full border-2 transition-all duration-300",
            "bg-black border-cyan-400",
            "hover:bg-cyan-400 hover:scale-110",
            "cursor-pointer group",
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
            <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:text-black transition-colors" />
        </button>
    );
}