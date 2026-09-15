import type { Metadata } from "next";
import { BlogEmpty } from "@/components/blog-empty";
import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/posts";
export const metadata: Metadata = { title: "Writing", description: "Notes on backend systems, practical AI, architecture, and the decisions behind the work.", alternates: { canonical: "/blog/" } };
export default function BlogPage() { const posts = getAllPosts(); return <main className="container-shell page-shell blog-page"><header className="page-intro"><p className="eyebrow">Writing</p><h1>Ideas become more useful when they’re written down.</h1><p className="lead">Notes on backend systems, practical AI, architecture, and the decisions behind the work.</p></header>{posts.length ? <PostList posts={posts} /> : <BlogEmpty />}</main> }
