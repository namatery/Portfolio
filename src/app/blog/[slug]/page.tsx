import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { ComponentProps } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

export const dynamicParams = false;

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-light",
          keepBackground: false,
        },
      ],
    ],
  },
} satisfies NonNullable<ComponentProps<typeof MDXRemote>["options"]>;

export function generateStaticParams() {
  const posts = getAllPosts();

  // Static export requires at least one concrete parameter. The sentinel renders
  // the normal 404 and disappears naturally as soon as the first post is added.
  return posts.length ? posts.map(({ slug }) => ({ slug })) : [{ slug: "_empty" }];
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container-shell article-shell">
      <Link className="back-link" href="/blog">
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to writing
      </Link>
      <article>
        <header className="article-header">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <div className="post-meta">
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
            <span>{post.readingTime}</span>
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        <div className="prose">
          <MDXRemote source={post.content} options={mdxOptions} />
        </div>
      </article>
    </main>
  );
}
