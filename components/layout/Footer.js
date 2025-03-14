import Link from "next/link";
import { Github, Linkedin, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-6 border-t bg-background/80 backdrop-blur-md border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p className="text-muted-foreground text-center">
                            Designed and Developed <br /> with Next.js © 2025
                        </p>
                    </div>
                    
                    <div className="flex space-x-4">
                        <Link 
                            target="_blank" 
                            href="https://github.com/davmz" 
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        >
                            <Github className="h-6 w-6" />
                        </Link>

                        <Link 
                            target="_blank" 
                            href="https://www.linkedin.com/in/davmz/" 
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        >
                            <Linkedin className="h-6 w-6" />
                        </Link>

                        <Link 
                            target="_blank" 
                            href="https://www.instagram.com/dav.mz/" 
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        >
                            <Instagram className="h-6 w-6" />
                        </Link>

                        <Link 
                            target="_blank" 
                            href="https://www.facebook.com/david.p.montanez/" 
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        >
                            <Facebook className="h-6 w-6" />
                        </Link>

                        <Link 
                            href="mailto:montanezdavid@gmail.com" 
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        >
                            <Mail className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}