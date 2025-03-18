export default function VerseOfTheDay() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-semibold">Verse of the Day</h2>
            <div className="p-4 rounded-lg border bg-card">
                <p className="text-muted-foreground">
                    {/* Replace this with a dynamic API call to fetch the verse */}
                    &quot;For I know the plans I have for you,&quot; declares the Lord, &quot;plans to prosper you and not to harm you, plans to give you hope and a future.&quot; - Jeremiah 29:11
                </p>
            </div>
            <p className="text-muted-foreground">
                I include this section to share my faith and remind myself and others of the hope and guidance we can find in scripture.
            </p>
        </div>
    );
}