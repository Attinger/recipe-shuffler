import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getAllRecipes } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  const recipes = await getAllRecipes();

  return (
    <main className="">
      <div>
        <SignedOut>
          <div className="flex justify-center">
            <p>Please login to see content</p>
          </div>
        </SignedOut>
        <SignedIn>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            {recipe.name}
          </div>
        ))}
        </SignedIn>
      </div>
    </main>
  );
}
