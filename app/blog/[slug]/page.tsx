import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity.client";
import { SINGLE_POST_QUERY } from "@/lib/sanity.queries";
import { SanityPost } from "@/lib/sanity.types";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await sanityFetch<SanityPost>({
    query: SINGLE_POST_QUERY,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to blog
        </Link>

        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600 mb-6">
            <span>By {post.author?.name || 'Anonymous'}</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          {post.excerpt && <p className="text-lg text-gray-600 font-serif mb-8">{post.excerpt}</p>}
          {post.content && (
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</div>
          )}
        </div>
      </article>
    </div>
  );
}
