import type { Metadata } from "next";
import Image from "next/image";
import { BlogEmpty } from "@/components/blog-empty";
import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on engineering, products, career, ideas, and the experiences that shape how I think and work.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="container-shell page-shell blog-page">
      <section className="blog-hero">
        <header className="page-intro">
          <p className="eyebrow">Writing</p>
          <h1>Things I’ve learned. Things I’m still figuring out.</h1>
          <p className="lead">
            Notes on engineering, products, career, ideas, and the experiences that
            shape how I think and work.
          </p>
        </header>

        <Image
          className="blog-illustration"
          src="/images/article.png"
          alt="A hand-drawn desk scene with books, a notebook, coffee, a plant, and a mountain view"
          width={1774}
          height={887}
          priority
          sizes="(max-width: 540px) calc(100vw - 32px), (max-width: 800px) calc(100vw - 48px), 520px"
        />
      </section>

      {posts.length > 0 ? <PostList posts={posts} /> : <BlogEmpty />}
    </main>
  );
}
