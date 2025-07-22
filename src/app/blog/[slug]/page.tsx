import { notFound } from "next/navigation";

const posts = [
  {
    title: "Awakening to the Golden Age: What It Means for You",
    date: "2024-06-01",
    slug: "awakening-to-the-golden-age",
    content: `
      <p>The Golden Age is a time of spiritual awakening and transformation for all of humanity. In this post, we explore what the Golden Age means, how it is unfolding, and how you can align your life with higher vibrations of love and light.</p>
      <p>By raising your frequency and embracing your divine purpose, you contribute to the collective ascension of humanity. Now is the time to step into your light and help usher in a new era of peace, unity, and spiritual abundance.</p>
    `,
  },
  {
    title: "Raising Your Vibration: Daily Spiritual Practices",
    date: "2024-05-20",
    slug: "raising-your-vibration",
    content: `
      <p>Raising your vibration is essential for spiritual growth. This post shares simple, effective daily practices—such as meditation, gratitude, and mindful living—to help you elevate your energy and support humanity's spiritual progression.</p>
      <ul><li>Meditate daily to connect with your higher self</li><li>Practice gratitude and positive affirmations</li><li>Surround yourself with uplifting people and environments</li></ul>
    `,
  },
  {
    title: "The Power of Community on the Path to Ascension",
    date: "2024-05-10",
    slug: "power-of-community",
    content: `
      <p>Spiritual community is a powerful catalyst for growth. In this post, learn why connecting with like-minded souls is essential for your journey and how to find support, inspiration, and encouragement along the path to ascension.</p>
    `,
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-yellow-700">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article
        className="prose prose-lg text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <a href="/blog" className="mt-8 inline-block text-yellow-700 hover:underline">← Back to Blog</a>
    </main>
  );
} 