import Link from "next/link";

import { cn } from "../../lib/utils";

const hoverVariants = {
    github: "hover:bg-black hover:text-white",
    facebook: "hover:bg-blue-800 hover:text-white",
    linkedin: "hover:bg-blue-600 hover:text-white",
    instagram: "hover:bg-pink-500 hover:text-white",
    twitter: "hover:bg-sky-500 hover:text-white",
};

export default function SocialMediaCard({ title, url, variant = "default", children }) {
    const hoverClass = hoverVariants[variant] || "hover:bg-white hover:text-black hover:border-gray-800";

    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-lg w-full flex flex-row items-start border border-gray-700 transition-all duration-300 transform sm:hover:scale-102 hover:scale-105 hover:shadow-[0_0_15px_5px_rgb(0,184,219,0.7)] hover:border-gray-700",
                hoverClass
            )}
        >
            <div className="flex-shrink-0 mr-4">{children}</div>

            <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <span className="text-cyan-500 hover:text-cyan-300 transition-colors">Visit {title}</span>
            </div>
        </Link>
    );
}