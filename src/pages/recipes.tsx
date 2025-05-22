import Navbar from "@/components/navbar";
import { RECIPES } from "@/lib/data";
import { BlurFade } from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function Recipes() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <h1 className="font-medium text-2xl mb-8 tracking-tighter">recipes</h1>
                </BlurFade>
                {RECIPES
                    .map((post, id) => (
                        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.title}>
                            <a
                                className="flex flex-col space-y-1 mb-4"
                                href={post.href}
                            >
                                <div className="w-full flex flex-col">
                                    <p className="tracking-tight">{post.title}</p>
                                    <p className="h-6 text-xs text-muted-foreground">
                                        {post.date}
                                    </p>
                                </div>
                            </a>
                        </BlurFade>
                    ))}
            </div>
        </div>
    );
}