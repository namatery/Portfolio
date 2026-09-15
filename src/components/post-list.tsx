"use client";

import { useState } from "react";
import { PostCards } from "@/components/post-cards";
import type { Post } from "@/lib/posts";

type PostListProps = {
  posts: Post[];
};

const filters = ["All", "Engineering", "Career", "AI"] as const;
type PostFilter = (typeof filters)[number];

export function PostList({ posts }: PostListProps) {
  const [activeFilter, setActiveFilter] = useState<PostFilter>("All");
  const filteredPosts = posts.filter(
    (post) => activeFilter === "All" || post.category === activeFilter,
  );
  const cards = filteredPosts.map((post) => ({
    ...post,
    href: `/blog/${post.slug}`,
  }));

  return (
    <section aria-label="Articles">
      <div aria-label="Filter articles" className="post-filters" role="group">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className="post-filter"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      {cards.length > 0 ? (
        <PostCards posts={cards} />
      ) : (
        <p aria-live="polite" className="filtered-posts-empty">
          No {activeFilter.toLowerCase()} articles yet.
        </p>
      )}
    </section>
  );
}
