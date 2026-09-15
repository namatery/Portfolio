import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { BlogEmpty } from "@/components/blog-empty";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <section className="container-shell hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="availability-dot" aria-hidden="true" />
            Trying to leave things better than I found them
          </p>
          <h1>Hey, I&rsquo;m Alireza.</h1>
          <p className="hero-lede">
            <strong>{profile.summaryLead}</strong>
            <span>{profile.summary}</span>
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/about#projects">
              More about me <span aria-hidden="true">→</span>
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
            More about my approach <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="container-shell home-section writing-preview">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Latest writing</p>
            <h2>Notes from the work.</h2>
          </div>
          <Link className="quiet-link" href="/blog">
            All writing <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <BlogEmpty compact />
      </section>
    </main>
  );
}
