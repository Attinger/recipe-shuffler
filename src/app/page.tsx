import { db } from "~/server/db/index";


export const dynamic = "force-dynamic";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div>
        {posts.map((post) => (
        <div key={post.id}>
          {post.name}
        </div>
        ))}
      </div>
    </main>
  );
}
