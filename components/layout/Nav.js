"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";

import { Button } from "../ui/Button";
import image from "../../public/images/dm-logo.jpg";

export default function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // After mounting, we can safely show the UI that depends on the theme
    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Skills', href: '/skills' },
        { name: 'Experiences', href: '/experiences' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b ${scrolled ? 'border-blue-800' : 'border-gray-200 dark:border-gray-700'}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    {/* Logo on the left */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                alt="David Montanez Logo"
                                className="rounded-full"
                                height={40}
                                width={40}
                                src={image}
                            />
                            <span className="hidden lg:inline text-xl font-bold">David Montañez</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                    {navigation.map((item) => (
                        <Link
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                            isActive(item.href)
                            ? 'bg-white text-black font-semibold'
                            : 'text-muted-foreground hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary'
                        }`}
                        >
                        {item.name}
                        </Link>
                    ))}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        aria-label="Toggle theme"
                    >
                        {mounted && (
                        <>
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </>
                        )}
                    </Button>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="flex items-center md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="mr-2"
                        aria-label="Toggle theme"
                    >
                        {mounted && (
                        <>
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </>
                        )}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                        <X className="h-6 w-6" />
                        ) : (
                        <Menu className="h-6 w-6" />
                        )}
                    </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md ${
                                    isActive(item.href)
                                    ? 'bg-white text-black font-semibold'
                                    : 'text-muted-foreground hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};