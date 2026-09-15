import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { formatPostDate, type Post } from "@/lib/posts";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  return (
    <div className="post-list">
      {posts.map((post) => {
        const postHref = `/blog/${post.slug}`;

        return (
          <article key={post.slug}>
            <div className="post-meta">
              <span>{formatPostDate(post.publishedAt)}</span>
              <span>{post.readingTime}</span>
              <span>{post.category}</span>
            </div>

            <h2>
              <Link href={postHref}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>

            <div className="post-card-footer">
              <ul className="tag-list">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link aria-label={`Read ${post.title}`} href={postHref}>
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
