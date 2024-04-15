import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db/index";


export const dynamic = "force-dynamic";

async function GenerateData() {
  const posts = await db.query.posts.findMany();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.name}
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div>
        <SignedOut>
          <div className="flex justify-center">
            <p>Please login to see content</p>
          </div>
        </SignedOut>
        <SignedIn>
          <GenerateData />
        </SignedIn>
      </div>
    </main>
  );
}
