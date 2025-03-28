"use client";

import { useEffect, useRef, useState } from "react";

import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Hobbies from "./components/Hobbies";
import Overview from "./components/Overview";
import FutureGoals from "./components/FutureGoals";
import Photography from "./components/Photography";
import RandomFacts from "./components/RandomFacts";
import VerseOfTheDay from "./components/VerseOfTheDay";

import ScrollToTop from "../../../components/ui/ScrollToTop";
import SectionFade from "../../../components/ui/SectionFade";

export default function About() {
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const [currentSection, setCurrentSection] = useState(0);
    const scrolling = useRef(false);

    useEffect(() => {
        const handleWheel = (e) => {
            if (scrolling.current) return;

            scrolling.current = true;

            if (e.deltaY > 0 && currentSection < sectionRefs.length - 1) {
                setCurrentSection((prev) => prev + 1);
            } else if (e.deltaY < 0 && currentSection > 0) {
                setCurrentSection((prev) => prev - 1);
            }

            setTimeout(() => {
                scrolling.current = false;
            }, 500); // throttle scroll (adjust for faster/slower)
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
                window.removeEventListener("wheel", handleWheel);screenTop
            };
    }, [currentSection]);

    useEffect(() => {
        sectionRefs[currentSection].current?.scrollIntoView({ behavior: "smooth" });
    }, [currentSection]);

    return (
        <>
            <section ref={sectionRefs[0]} className="h-screen scroll-mt-16 bg-red-700">
                <div className="h-full container mx-auto px-4 py-12">
                    <SectionFade isActive={currentSection === 0}>
                        <Banner />
                    </SectionFade>
                </div>
            </section>

            <section ref={sectionRefs[1]} className="h-screen scroll-mt-16 bg-orange-700">
                <div className="h-full container mx-auto px-4 py-12">
                    <SectionFade isActive={currentSection === 1}>
                        <Overview />
                    </SectionFade>
                </div>
            </section>

            <section ref={sectionRefs[2]} className="h-screen scroll-mt-16 bg-yellow-700">
                <div className="h-full container mx-auto px-4 py-12">
                    <SectionFade isActive={currentSection === 2}>
                        <AboutMe />
                    </SectionFade>
                </div>
            </section>

            <section ref={sectionRefs[3]} className="h-screen scroll-mt-16 bg-green-700">
                <div className="h-full container mx-auto px-4 py-12">
                    <SectionFade isActive={currentSection === 3}>
                        <Photography />
                    </SectionFade>
                </div>
            </section>

            <section ref={sectionRefs[4]} className="h-screen scroll-mt-16 bg-blue-700">
                <div className="h-full container mx-auto px-4 py-12">
                    <SectionFade isActive={currentSection === 4}>
                        <VerseOfTheDay />
                    </SectionFade>
                </div>
            </section>

            <section ref={sectionRefs[5]} className="h-screen scroll-mt-16 bg-indigo-700">
                <div className="h-full container mx-auto px-4 py-12">
                    <SectionFade isActive={currentSection === 5}>
                        <Hobbies />
                    </SectionFade>
                </div>
            </section>

            <section ref={sectionRefs[6]} className="h-screen scroll-mt-16 bg-purple-700">
                <div className="h-full container mx-auto px-4 py-12">
                    <SectionFade isActive={currentSection === 6}>
                        <FutureGoals />
                    </SectionFade>
                </div>
            </section>

            <section ref={sectionRefs[7]} className="h-screen scroll-mt-16 bg-amber-700">
                <div className="h-full container mx-auto px-4 py-12">
                    <SectionFade isActive={currentSection === 7}>
                        <RandomFacts />
                    </SectionFade>
                </div>
            </section>

            <ScrollToTop onResetSection={() => setCurrentSection(0)} />
        </>
    );
}