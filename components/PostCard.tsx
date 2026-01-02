import Link from "next/link";
import { Post } from "@/lib/types";
import { SanityPost } from "@/lib/sanity.types";
import { BLOG_TYPES } from "@/lib/constants";

interface PostCardProps {
  post: Post | SanityPost;
}

export default function PostCard({ post }: PostCardProps) {
  const isPost = (p: Post | SanityPost): p is Post => 'id' in p;
  const isSanityPost = (p: Post | SanityPost): p is SanityPost => '_id' in p;

  const slug = isPost(post) ? post.slug : post.slug.current;
  const title = post.title;
  const excerpt = isPost(post) ? post.excerpt : post.excerpt || post.content?.substring(0, 150) || '';
  const featured = isPost(post) ? post.featured : post.featured;
  const tags = post.tags || [];
  const type = post.type;
  const publishedAt = post.publishedAt;
  const authorName = isPost(post) ? post.author : post.author?.name || 'Anonymous';

  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            <Link href={`/blog/${slug}`} className="hover:text-blue-600">
              {title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 mb-2">{excerpt}</p>
        </div>
        {featured && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded whitespace-nowrap ml-4">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">
          {BLOG_TYPES[type as keyof typeof BLOG_TYPES] || type}
        </span>
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>By {authorName}</span>
        <span>{new Date(publishedAt).toLocaleDateString()}</span>
      </div>
    </article>
  );
}
