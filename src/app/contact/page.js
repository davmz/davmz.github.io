import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

import SocialMediaCard from "../../../components/ui/SocialMediaCard";

export default function Contact() {
    return (
        <div className="relative flex flex-col flex-grow items-start p-6 md:px-52">
            <section className="w-full">
                <h1 className="text-3xl font-bold text-left py-5 text-cyan-500">Get In Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <SocialMediaCard
                        title="Facebook"
                        url="https://www.facebook.com/david.p.montanez/"
                        variant="facebook"
                    >
                        <Facebook size={48} />
                    </SocialMediaCard>

                    <SocialMediaCard
                        title="GitHub"
                        url="https://github.com/davmz"
                        variant="github"
                    >
                        <Github size={48} />
                    </SocialMediaCard>

                    <SocialMediaCard
                        title="LinkedIn"
                        url="https://www.linkedin.com/in/davmz/"
                        variant="linkedin"
                    >
                        <Linkedin size={48} />
                    </SocialMediaCard>

                    <SocialMediaCard
                        title="Instagram"
                        url="https://www.linkedin.com/in/davmz/"
                        variant="instagram"
                    >
                        <Instagram size={48} />
                    </SocialMediaCard>
                </div>
            </section>
        </div>
    );
}