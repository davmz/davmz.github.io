import Image from "next/image";

export default function Overview() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <Image
                src="/path-to-your-image.jpg"
                alt="Your Name"
                width={300}
                height={300}
                className="rounded-full mx-auto"
            />
            
            <h1 className="text-4xl font-bold">Hi, I&apos;m David Montañez</h1>
            <p className="text-muted-foreground">
                Passionate about creativity, technology, and making a difference. I’m driven by my faith, curiosity, and the joy of learning.
            </p>
        </div>
    );
}