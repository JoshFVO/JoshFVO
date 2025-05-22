import Navbar from "@/components/navbar";
import { RECIPES } from "@/lib/data";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Recipe() {

    const { id } = useParams();
    const slugify = (str: string) =>
        str.toLowerCase().replace(/\s+/g, "-");

    const recipe = RECIPES.find(
        (recipe) => slugify(recipe?.title ?? "") === id
    );

    return (
        <div id={recipe?.title} className="relative">
            <Navbar />

            <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
                <BlurFade delay={0.04}>
                    <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">{recipe?.title}</h1>
                    <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
                        <Suspense fallback={<p className="h-5" />}>
                            <p className="text-sm text-neutral-600 dark:text-neutral-600">
                                {recipe?.date}
                            </p>
                        </Suspense>
                    </div>
                    <p className="mt-4">{recipe?.description}</p>
                    <hr className="my-6 border-t border-neutral-200 dark:border-neutral-700" />
                </BlurFade>
                <BlurFade delay={0.08}>
                    <div className="mt-4">
                        <ul className="text-sm text-slate-950 list-inside">
                            {recipe?.ingredients && recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </BlurFade>

                <BlurFade delay={0.12}>
                    <hr className="my-6 border-t border-neutral-200 dark:border-neutral-700" />
                    <div className="mt-4">
                        <ul className="text-sm text-slate-950 list-inside">
                            {recipe?.instructions?.map((instruction, index) => (
                                <li key={index} className="mt-2">{instruction}</li>
                            ))}
                        </ul>
                    </div>
                </BlurFade>
            </div>

        </div>
    )
}