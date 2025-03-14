import Image from 'next/image';

import { Button } from "../../components/ui/Button";
import { typewriterData } from '../../data/typewriter-data';
import image from "../../public/images/home/gradpicpark.jpg";
import TypeWriterComponent from '../../components/ui/Typewriter';
import LearnMoreCardButton from "../../components/ui/LearnMoreCard";

export default function Home() {
  return (
    <div className="relative flex flex-col flexgrow justify-center items-center py-5 md:px-52 md:pt-10">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <section className="flex flex-col md:flex-row justify-evenly items-center w-full gap-5 md:gap-10 p-5 md:p-10">
            <div className="text-center md:text-left">
              <div className="text-xl md:text-4xl font-semibold text-cyan-500 mb-4">
              <TypeWriterComponent
                isLoop={true}
                typeSpeed={70}
                cursorStyle="|"
                deleteSpeed={50}
                delaySpeed={1500}
                data={typewriterData}
              />
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">David Montañez</h1>
              <h2 className="text-lg md:text-2xl font-medium text-yellow-300 mt-4">Full-Stack Developer | DevOps Enthusiast | Observability | Cinemavideography</h2>

              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <Button
                  variant="primary"
                  size="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Learn More
                </Button>

                <Button
                  variant="link"
                  size="full"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden md:block glowing-gradient hover-spin">
            <Image
              src={image}
              alt="Selfie picture of David Montanez"
              className="rounded-full"
              width={350}
              height={350}
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-evenly items-center w-full gap-5 md:gap-6 p-5 md:p-8">
          <LearnMoreCardButton
            title="Skills"
            description="Explore my technical expertise and capabilities"
            href="
            /skills"
          />

          <LearnMoreCardButton
            title="Experience"
            description="Professional journey and achievements"
            href="/experiences"
          />

          <LearnMoreCardButton
            title="Projects"
            description="Explore my latest work and contributions"
            href="/projects"
          />
        </section>
      </div>
    </div>
);
}