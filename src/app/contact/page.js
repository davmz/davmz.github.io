import SocialMediaCard from "../../../components/ui/SocialMediaCard";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <div className="relative flex flex-col flex-grow items-start p-6 md:px-44">
            <section className="w-full">
                <h1 className="text-3xl font-bold text-left py-5">Get In Touch</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <SocialMediaCard
                        title="Facebook"
                        url="https://facebook.com"
                    >
                        <Facebook size={48} />
                    </SocialMediaCard>

                    <SocialMediaCard
                        title="GitHub"
                        url="https://github.com"
                    >
                        <Github size={48} />
                    </SocialMediaCard>

                    <SocialMediaCard
                        title="LinkedIn"
                        url="https://linkedin.com"
                    >
                        <Linkedin size={48} />
                    </SocialMediaCard>

                    <SocialMediaCard
                        title="Instagram"
                        url="https://instagram.com"
                    >
                        <Instagram size={48} />
                    </SocialMediaCard>
                </div>
            </section>
        </div>
    );
}