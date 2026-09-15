import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatPostDate, type Post } from "@/lib/posts";

type LatestPostsProps = {
  posts: Post[];
};

const previewPosts = [
  {
    publishedAt: "2026-09-12",
    title: "Building reliable systems beyond the happy path",
    description:
      "Notes on failure modes, observability, and the decisions that keep systems dependable.",
  },
  {
    publishedAt: "2026-09-04",
    title: "What changes when AI becomes part of the product",
    description:
      "Practical lessons from turning promising models into useful, honest product experiences.",
  },
  {
    publishedAt: "2026-08-28",
    title: "Designing retrieval systems you can evaluate",
    description:
      "A closer look at relevance, feedback loops, and measuring whether retrieval actually helps.",
  },
] as const;

export function LatestPosts({ posts }: LatestPostsProps) {
  const latestPosts = posts.slice(0, 3);
  const cards =
    latestPosts.length > 0
      ? latestPosts.map((post) => ({
          ...post,
          href: `/blog/${post.slug}`,
        }))
      : previewPosts.map((post) => ({ ...post, href: "/blog" }));

  return (
    <div className="latest-post-grid">
      {cards.map((post, index) => (
        <article className="latest-post-card" key={post.title}>
          <div className="latest-post-image" aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          <h3>
            <Link href={post.href}>{post.title}</Link>
          </h3>
          <p>{post.description}</p>
          <Link className="latest-post-link" href={post.href}>
            Read more
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </article>
      ))}
    </div>
  );
}
