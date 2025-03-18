import React from "react";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Banner Section */}
            <div className="relative w-full h-64 md:h-96 mb-12">
                <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/path-to-your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Overview Section */}
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="space-y-4 text-center">
                    <img
                        src="/path-to-your-image.jpg"
                        alt="Your Name"
                        className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h1 className="text-4xl font-bold">Hi, I'm David Montañez</h1>
                    <p className="text-xl text-muted-foreground">
                        Passionate about creativity, technology, and making a difference. I’m driven by my faith, curiosity, and the joy of learning.
                    </p>
                    
                    <div className="space-y-4">
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

                {/* About Me Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">About Me</h2>
                    <p className="text-muted-foreground">
                    I first got into computer science in high school, but I had no idea what I wanted to pursue long-term. Engineering? Software? Something else entirely?

Being the quiet kid didn’t stop me from wanting to connect with others and be part of a community. That’s what eventually led me to Red River College Polytechnic to study Business Information Technology—a decision encouraged by my dad. Once I started, I saw the potential in myself and found success in my classes.

My education was unique—remote learning for Grade 12 and two years of college during COVID—which made it harder to meet people at first. But by the end of college, I had the opportunity to connect with a lot of great people.

What truly amazed me about tech was how a simple spark of an idea could turn into something real—from development to production. That realization fueled my passion for building.
                    </p>

                    <h3>Church Involvement</h3>
                    <p>
                        Being involved in church helped me discover my true self. It made me realize what I truly needed—a Savior to guide and influence my life and future. My faith isn’t something I hide, but I also don’t force it on anyone. It’s simply a part of who I am.
                        Looking ahead to 2025, I’m making a conscious shift—prioritizing character growth, mindset shifts, and letting go of bad habits that have held me back. It’s a year of transformation.
                    </p>
                </div>

                {/* Hobbies & Interests Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Hobbies & Interests: The Year of Trying Everything</h2>
                    <p className="text-muted-foreground">
                    If 2024 had a theme, it would be "Try Everything"—because that’s exactly what I’ve been doing.

🧗 Bouldering | 🏃 Running | 💪 Calisthenics | 🎸 Bass & Guitar | 🎨 Drawing | 🍳 Cooking
📸 Photography & Cinematography | ⛳ Golfing | 🏂 Snowboarding

It’s been a fun challenge exploring new hobbies, seeing what sticks, and pushing myself to step outside my comfort zone.
                    </p>
                </div>

                {/* Photography Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">📸 Photography & Cinematography: Capturing Moments, Telling Stories</h2>
                    <p className="text-muted-foreground">
                        It all started with seeing clean, cinematic edits on Instagram—from vlogs to highlight reels—the kind of edits that made everyday moments feel epic. My sister’s edits with her friends and the kuyas at church who were into photography and film also inspired me.
                    </p>
                    <p className="text-muted-foreground">
                        That’s when I started documenting my own life, creating edits straight from my phone using CapCut. Over time, I wanted to take things further.
                    </p>

                    {/* Gear & Progression */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">🎥 Gear & Progression</h3>
                        <ul className="list-disc list-inside text-muted-foreground">
                            <li>📸 Started with photography on a Canon Rebel T5i</li>
                            <li>🎥 Upgraded to the Sony ZV-E10 for better photo & video quality</li>
                            <li>🏆 Invested in more gear:</li>
                            <ul className="list-disc list-inside pl-4">
                                <li>Osmo Pocket 3 🎥 (for stabilized handheld shots)</li>
                                <li>DJI Action 4 🏔️ (for adventure footage)</li>
                                <li>Looking to buy a drone soon for aerial cinematography 🚁</li>
                            </ul>
                        </ul>
                    </div>

                    {/* Learning & Future Goals */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">🎨 Learning & Future Goals</h3>
                        <ul className="list-disc list-inside text-muted-foreground">
                            <li>Mastering DaVinci Resolve 🎞️ → Learning color grading & advanced editing</li>
                            <li>Consistently posting edits & photos ✨</li>
                            <li>Exploring more cinematic techniques 🎬</li>
                        </ul>
                    </div>

                    <p className="text-muted-foreground">
                        Photography and cinematography have become more than just a hobby—it’s a way to capture life, tell stories, and share perspectives.
                    </p>

                    <p className="text-muted-foreground">
                        Check out my work on Instagram: 📷 <a href="https://instagram.com/dav.mz.photography" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@dav.mz.photography</a>
                    </p>
                </div>

                {/* Verse of the Day Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Verse of the Day</h2>
                    <div className="p-4 rounded-lg border bg-card">
                        <p className="text-muted-foreground">
                            {/* Replace this with a dynamic API call to fetch the verse */}
                            "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11
                        </p>
                    </div>
                    <p className="text-muted-foreground">
                        I include this section to share my faith and remind myself and others of the hope and guidance we can find in scripture.
                    </p>
                </div>

                {/* Future Goals & Inspirations Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Future Goals & Inspirations</h2>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>• Rebuild past projects from high school & college</li>
                        <li>• Build without worrying about perfectionism → Get it working first, make it pretty later</li>
                        <li>• Stay involved in the community → Tech, church, creative spaces</li>
                        <li>• Land a corporate developer job</li>
                        <li>• Maintain a healthy work-life balance</li>
                        <li>• Continue to make cinematic videos and make edits of my life</li>
                        <li>• Live by principles, priorities, and a strong foundation</li>
                    </ul>
                    <p className="text-muted-foreground">
                        The goal? Keep growing, keep building, and stay grounded in what matters most.
                    </p>
                </div>

                {/* Random Facts Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">3 Random Facts About Me</h2>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>• I like pineapple 🍍 on pizza 🍕.</li>
                        <li>• I joined the varsity badminton team in grade 10.</li>
                        <li>• I have 5 2tb external drives of footage, pictures, project files.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}