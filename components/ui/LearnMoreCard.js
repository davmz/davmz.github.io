import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LearnMoreCardButton = ({ title, description, href }) => {
  return (
    <div className="bg-black text-white p-5 md:p-6 rounded-lg w-full md:w-1/3 hover:bg-gray-800 transition-colors duration-300 border border-transparent hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link href={href} className="flex items-center text-white hover:text-cyan-300 transition-colors">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default LearnMoreCardButton;