import Link from "next/link";

export default function SocialMediaCard({ title, url, children }) {
    return (
        <div className="bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-lg w-full flex flex-row items-start hover:bg-white hover:text-black hover:border-gray-800 border transition-colors">
            <div className="flex-shrink-0 mr-4">
                {children}
            </div>
            
            <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <Link href={url} className="text-cyan-500 hover:text-cyan-300 transition-colors">
                    Visit {title}
                </Link>
            </div>
        </div>
    );
}