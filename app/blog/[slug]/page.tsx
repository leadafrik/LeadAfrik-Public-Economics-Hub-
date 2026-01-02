"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { mockPosts } from "@/lib/mockData";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:text-blue-700">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to blog
        </Link>

        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600 mb-6">
            <span>By {post.author}</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p>{post.excerpt}</p>
          <div className="whitespace-pre-wrap text-gray-700">{post.content}</div>
        </div>

        {post.references && post.references.length > 0 && (
          <div className="border-t border-gray-200 pt-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">References</h2>
            <ul className="space-y-2">
              {post.references.map((ref, idx) => (
                <li key={idx}>
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {ref.title} ↗
                    </a>
                  ) : (
                    <span>{ref.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
