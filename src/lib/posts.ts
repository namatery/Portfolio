import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostFrontmatter = { title: string; description: string; publishedAt: string; updatedAt?: string; category: string; tags: string[]; draft: boolean };
export type Post = PostFrontmatter & { slug: string; content: string; readingTime: string };
const postsDirectory = path.join(process.cwd(), "src/content/posts");

function normalizeDate(value: unknown): string | undefined {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && !Number.isNaN(Date.parse(value))) return value;
  return undefined;
}

export function parsePost(slug: string, source: string): Post {
  const { data, content } = matter(source);
  const required = ["title", "description", "category"] as const;
  for (const key of required) if (typeof data[key] !== "string" || !data[key].trim()) throw new Error(`Post "${slug}" is missing a valid ${key}`);
  const publishedAt = normalizeDate(data.publishedAt);
  const updatedAt = normalizeDate(data.updatedAt);
  if (!publishedAt) throw new Error(`Post "${slug}" has an invalid publishedAt date`);
  if (data.updatedAt && !updatedAt) throw new Error(`Post "${slug}" has an invalid updatedAt date`);
  if (data.tags !== undefined && (!Array.isArray(data.tags) || data.tags.some((tag: unknown) => typeof tag !== "string"))) throw new Error(`Post "${slug}" has invalid tags`);
  return { slug, content, title: data.title, description: data.description, publishedAt, updatedAt, category: data.category, tags: data.tags ?? [], draft: data.draft === true, readingTime: readingTime(content).text };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx")).map((file) => parsePost(file.replace(/\.mdx$/, ""), fs.readFileSync(path.join(postsDirectory, file), "utf8"))).filter((post) => !post.draft).sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}
export function getPost(slug: string) { return getAllPosts().find((post) => post.slug === slug); }
export function formatPostDate(date: string) { return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(date)); }
