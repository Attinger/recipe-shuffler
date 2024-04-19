import { SignedIn, SignedOut } from "@clerk/nextjs";
import { CreateRecipe } from "./_components/createRecipe/createRecipe";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  return (
    <main>
      <div>
        <SignedOut>
          <div className="flex justify-center">
            <p>Please login to see content</p>
          </div>
        </SignedOut>
        <SignedIn>
          <CreateRecipe />
        </SignedIn>
      </div>
    </main>
  );
}
