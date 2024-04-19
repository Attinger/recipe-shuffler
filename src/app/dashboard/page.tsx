import Link from "next/link";
import { getAllRecipes } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Dasboard() {
    const recipes = await getAllRecipes();

    return (
        <div>
            {recipes.map((recipe) => (
            <div key={recipe.id} className="flex h-48 w-48 flex-col">
              <Link href={`/recipes/${recipe.id}`}>
                <div key={recipe.id}>
                  <p className="text-white">
                    {recipe.title}
                  </p>
                  <p className="text-white">
                    {recipe.description}
                  </p>
                </div>
              </Link>
            </div>
            ))}
        </div>
    )
}