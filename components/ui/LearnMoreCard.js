import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LearnMoreCardButton({ title, description, href }) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className="bg-gray-900 text-white p-5 md:p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col border border-gray-700 transition-all duration-300 transform sm:hover:scale-102 hover:scale-105 hover:shadow-[0_0_15px_5px_rgb(0,184,219,0.7)] hover:border-gray-700 hover:bg-black"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center text-white hover:text-cyan-300 transition-colors">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </Link>
  );
}