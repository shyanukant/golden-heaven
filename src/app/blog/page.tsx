import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "golden/src/app/blog/posts");

function getPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      title: data.title,
      date: data.date,
      slug: filename.replace(/\.md$/, ""),
      excerpt: content.split("\n")[0],
    };
  });
}

export default function Blog() {
  const posts = getPosts();
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-yellow-700">Blog</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 mb-2">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}`}
              className="text-yellow-700 hover:underline font-medium"
            >
              Read more
            </a>
          </article>
        ))}
      </div>
    </main>
  );
} 