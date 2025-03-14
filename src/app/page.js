import Image from 'next/image';
import TypeWriterComponent from '../../components/ui/Typewriter';

import { typewriterData } from '../../data/typewriter-data';

export default function Home() {
  return (
    <div className="relative flex flex-col flexgrow justify-center items-center py-5 md:px-52 md:pt-10">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <section>
          <div>
            <div>
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
            </div>
          </div>
        </section>

        <section>

        </section>
      </div>
    </div>
);
}