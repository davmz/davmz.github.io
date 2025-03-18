import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import FutureGoals from "./components/FutureGoals";
import Hobbies from "./components/Hobbies";
import Overview from "./components/Overview";
import Photography from "./components/Photography";
import RandomFacts from "./components/RandomFacts";
import VerseOfTheDay from "./components/VerseOfTheDay";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Banner Section */}
            <Banner />

            {/* Overview Section */}
            <Overview />

            {/* About Me Section */}
            <AboutMe />

            {/* Photography Section */}
            <Photography />

            {/* Verse of the Day Section */}
            <VerseOfTheDay />

            {/* Hobbies & Interests Section */}
            <Hobbies />

            {/* Future Goals & Inspirations Section */}
            <FutureGoals />

            {/* Random Facts Section */}
            <RandomFacts />
        </div>
    );
}