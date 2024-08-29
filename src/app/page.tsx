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
    <main className="flex flex-col min-h-screen p-6 lg:p-24 bg-gray-100">
      {/* Header with Create Post Button */}
      <div className="flex justify-between items-center mb-8 w-full">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Link
          href="/posts/create"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Create Post
        </Link>
      </div>

      {/* Grid Layout for Post Cards */}
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <Link href={`/posts/${post.id}/edit`} className="text-blue-700 hover:underline">
                <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-600">{post.content}</p>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              {"Updated at " + post.updatedAt.toLocaleDateString("en-US", dateOptions)}
            </div>
            <PostDelete id={post.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
