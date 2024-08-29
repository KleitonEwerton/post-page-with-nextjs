import { fetchPosts } from "@/db/queries/posts";
import Link from "next/link";
import PostDelete from "@/components/post-delete";

export default async function Home() {
  const posts = await fetchPosts();
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <div className="mb-4">
        <Link href="/posts/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Post
        </Link>
      </div>
      <div className="mb-32 grid gap-x-8 gap-y-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow-sm">
            <div className="mb-4">
              <Link href={`/posts/${post.id}/edit`} className="text-blue-700 hover:underline">
                <h2 className="mb-3 text-2xl font-semibold">{post.title}</h2>
              </Link>
              <p className="m-0 max-w-[30ch] text-sm text-gray-600">{post.content}</p>
            </div>
            <div className="text-sm text-gray-500">
              {"Updated at " + post.updatedAt.toLocaleDateString("en-US", dateOptions)}
            </div>
            <PostDelete id={post.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
