"use client";

import { useEffect, useRef, useState } from "react";

import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import FutureGoals from "./components/FutureGoals";
import Hobbies from "./components/Hobbies";
import Overview from "./components/Overview";
import Photography from "./components/Photography";
import RandomFacts from "./components/RandomFacts";
import VerseOfTheDay from "./components/VerseOfTheDay";

import ScrollToTop from "../../../components/ui/ScrollToTop";

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
            }, 1000); // throttle scroll (adjust for faster/slower)
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
                window.removeEventListener("wheel", handleWheel);
            };
    }, [currentSection]);

    useEffect(() => {
        sectionRefs[currentSection].current?.scrollIntoView({ behavior: "smooth" });
    }, [currentSection]);

    return (
        <>
      <section ref={sectionRefs[0]} className="h-screen">
        <div className="h-full container mx-auto px-4 py-12">
          <Banner />
        </div>
      </section>

      <section ref={sectionRefs[1]} className="h-screen">
        <div className="h-full container mx-auto px-4 py-12">
          <Overview />
        </div>
      </section>

      <section ref={sectionRefs[2]} className="h-screen">
        <div className="h-full container mx-auto px-4 py-12">
          <AboutMe />
        </div>
      </section>

      <section ref={sectionRefs[3]} className="h-screen">
        <div className="h-full container mx-auto px-4 py-12">
          <Photography />
        </div>
      </section>

      <section ref={sectionRefs[4]} className="h-screen">
        <div className="h-full container mx-auto px-4 py-12">
          <VerseOfTheDay />
        </div>
      </section>

      <section ref={sectionRefs[5]} className="h-screen">
        <div className="h-full container mx-auto px-4 py-12">
          <Hobbies />
        </div>
      </section>

      <section ref={sectionRefs[6]} className="h-screen">
        <div className="h-full container mx-auto px-4 py-12">
          <FutureGoals />
        </div>
      </section>

      <section ref={sectionRefs[7]} className="h-screen">
        <div className="h-full container mx-auto px-4 py-12">
          <RandomFacts />
        </div>
      </section>

        <ScrollToTop onResetSection={() => setCurrentSection(0)} />
      </>
    );
}