export default function Photography() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
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
    );
}
