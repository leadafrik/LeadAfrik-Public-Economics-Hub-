import Link from "next/link";
import { Post } from "@/lib/types";
import { SanityPost } from "@/lib/sanity.types";
import { BLOG_TYPES } from "@/lib/constants";

interface PostCardProps {
  post: Post | SanityPost;
}

export default function PostCard({ post }: PostCardProps) {
  const isPost = (p: Post | SanityPost): p is Post => 'id' in p;

  const slug = isPost(post) ? post.slug : post.slug.current;
  const title = post.title;
  const excerpt = isPost(post) ? post.excerpt : post.excerpt || post.content?.substring(0, 150) || '';
  const tags = post.tags || [];
  const type = post.type;
  const publishedAt = post.publishedAt;
  const authorName = isPost(post) ? post.author : post.author?.name || 'LeadAfrik';
  const featured = post.featured || false;
  const content = isPost(post) ? post.content : '';
  const readingTime = content ? Math.ceil(content.split(/\s+/).length / 200) : 5;

  return (
    <article className="border border-gray-200/60 rounded-lg p-8 hover:shadow-lg hover:border-gold transition-all duration-200 bg-white">
      {/* Featured Badge + Meta */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-700 rounded-sm">
          {BLOG_TYPES[type as keyof typeof BLOG_TYPES] || type || 'Article'}
        </span>
        {readingTime > 0 && (
          <span className="text-xs text-gray-600 font-medium">
            {readingTime} min read
          </span>
        )}
        {featured && (
          <span className="ml-auto px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-sm">
            Featured
          </span>
        )}
      </div>

      {/* Headline */}
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight">
        <Link href={`/blog/${slug}`} className="hover:text-gold transition-colors">
          {title}
        </Link>
      </h3>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-gray-700 mb-6 leading-relaxed line-clamp-2 font-serif">
          {excerpt}
        </p>
      )}

      {/* Metadata Row */}
      <div className="flex items-center gap-4 text-xs text-gray-600 font-medium uppercase tracking-wide border-t border-gray-100 pt-6 mb-6">
        <span>
          By <span className="text-gray-900 font-semibold">{authorName}</span>
        </span>
        <span>
          {new Date(publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs text-gray-600 border border-gray-200 rounded-sm hover:border-gold transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
