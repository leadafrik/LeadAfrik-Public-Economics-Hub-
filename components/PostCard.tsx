import Link from "next/link";
import { Post } from "@/lib/types";
import { BLOG_TYPES } from "@/lib/constants";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
              {post.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
        </div>
        {post.featured && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded whitespace-nowrap ml-4">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">
          {BLOG_TYPES[post.type as keyof typeof BLOG_TYPES] || post.type}
        </span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>By {post.author}</span>
        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
      </div>
    </article>
  );
}
