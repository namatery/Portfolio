import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AvailabilityStatus } from "@/components/availability-status";
import { LatestPosts } from "@/components/latest-posts";
import { profile } from "@/data/portfolio";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <main>
      <section className="container-shell hero">
        <div className="hero-copy">
          <AvailabilityStatus />
          <h1>Hey, I&rsquo;m Alireza.</h1>
          <p className="hero-lede">
            <strong>{profile.summaryLead}</strong>
            <span>{profile.summary}</span>
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/about#projects">
              More about me
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link className="button button-secondary" href="/blog">
              Read my notes
            </Link>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image
              src="/images/tehran.png"
              alt="Sketch of Tehran’s skyline and Milad Tower"
              fill
              priority
              sizes="(max-width: 540px) 280px, (max-width: 800px) 380px, 440px"
            />
          </div>
          <p>
            <span>Tehran, Iran</span> — Milad Tower beneath the Alborz Mountains.
          </p>
        </div>
      </section>

      <section className="container-shell home-section split-section">
        <div>
          <p className="eyebrow">What I do</p>
          <h2>Engineering beyond the happy path.</h2>
        </div>
        <div className="body-large">
          <p>
            I work where application code meets infrastructure: transactions,
            messaging, data stores, observability, and the awkward failure modes
            between them.
          </p>
          <p>
            More recently, that has included building retrieval systems and agentic
            products where usefulness depends on both software discipline and honest
            evaluation.
          </p>
          <Link className="text-link" href="/about">
            More about my approach
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <section className="container-shell home-section writing-preview">
        <div className="section-heading-row">
          <div>
            <h2>Latest from my notes</h2>
            <p className="section-subtitle">
              Thoughts, learning, and stories from my journey
            </p>
          </div>
          <Link className="quiet-link" href="/blog">
            All writing
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <LatestPosts posts={latestPosts} />
      </section>
    </main>
  );
}
