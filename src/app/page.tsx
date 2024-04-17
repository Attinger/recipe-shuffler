import { SignedIn, SignedOut } from "@clerk/nextjs";
import { desc } from "drizzle-orm";
import { db } from "~/server/db/index";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const recipes = await db.query.recipes.findMany({
    orderBy: model => desc(model.id),
  });

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
