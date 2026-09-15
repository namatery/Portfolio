import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatPostDate } from "@/lib/post-date";

export type PostCard = {
  title: string;
  description: string;
  publishedAt: string;
  href: string;
};

type PostCardsProps = {
  posts: PostCard[];
  headingLevel?: "h2" | "h3";
};

export function PostCards({ posts, headingLevel = "h2" }: PostCardsProps) {
  const Heading = headingLevel;

  return (
    <div className="latest-post-grid">
      {posts.map((post, index) => (
        <article className="latest-post-card" key={post.href + post.title}>
          <div className="latest-post-image" aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          <Heading>
            <Link href={post.href}>{post.title}</Link>
          </Heading>
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
