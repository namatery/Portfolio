import { describe, expect, it } from "vitest";
import { formatPostDate, parsePost } from "@/lib/posts";

const validPost = `---
title: A useful title
description: A concise summary
publishedAt: 2026-09-14
category: Systems
tags:
  - PostgreSQL
  - Reliability
---

# A useful title

This is enough prose to calculate a reading time.
`;

describe("parsePost", () => {
  it("normalizes valid frontmatter and calculates reading time", () => {
    const post = parsePost("useful-title", validPost);
    expect(post.slug).toBe("useful-title");
    expect(post.tags).toEqual(["PostgreSQL", "Reliability"]);
    expect(post.draft).toBe(false);
    expect(post.readingTime).toMatch(/min read/);
  });

  it("rejects incomplete frontmatter", () => {
    expect(() => parsePost("broken", "---\ntitle: Broken\n---\nBody")).toThrow(/description/);
  });

  it("rejects invalid dates and tags", () => {
    expect(() => parsePost("bad-date", validPost.replace("2026-09-14", "not-a-date"))).toThrow(/publishedAt/);
    expect(() => parsePost("bad-tags", validPost.replace("tags:\n  - PostgreSQL\n  - Reliability", "tags: PostgreSQL"))).toThrow(/tags/);
  });
});

describe("formatPostDate", () => {
  it("formats dates consistently in UTC", () => {
    expect(formatPostDate("2026-09-14")).toBe("September 14, 2026");
  });
});
