import { PostCards } from "@/components/post-cards";
import type { Post } from "@/lib/posts";

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

  return <PostCards headingLevel="h3" posts={cards} />;
}
