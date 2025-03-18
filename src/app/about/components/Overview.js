export default function Overview() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
                <img
                    src="/path-to-your-image.jpg"
                    alt="Your Name"
                    className="w-32 h-32 rounded-full mx-auto"
                />
                <h1 className="text-4xl font-bold">Hi, I'm David Montañez</h1>
                <p className="text-xl text-muted-foreground">
                    Passionate about creativity, technology, and making a difference. I’m driven by my faith, curiosity, and the joy of learning.
                </p>
                
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-2xl font-semibold">What Drives Me?</h2>
                    <p className="text-muted-foreground">I strive to live with purpose and impact, not just for myself but for those around me.</p>
                        
                    <ul>
                        <li>• For Christ – To reflect His love and truth in all that I do.</li>
                        <li>• For My Future Family & Present Family – To build a strong foundation for those I love.</li>
                        <li>• For Others – To be a light to the world, helping and encouraging people.</li>
                        <li>• For Myself – To make the most of my opportunities, never wasting the life I’ve been given.</li>
                    </ul>

                        
                    <p className="text-muted-foreground">Every project, every learning experience, and every challenge is a step toward growth, purpose, and making a difference.</p>
                </div>
            </div>
        </div>
    );
}