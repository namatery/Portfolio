"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  const isArticlesPage = usePathname() === "/blog/";
  console.log(usePathname());
  return (
    <footer className="site-footer">
      <div className="container-shell footer-grid">
        <div className="footer-content">
          <h2 className="footer-title">
            {isArticlesPage ? "Enjoyed these notes?" : "Let’s talk"}
          </h2>
          <div className="footer-copy">
            {isArticlesPage ? (
              <p>
                I&rsquo;m always open to interesting conversations &mdash; whether
                it&rsquo;s about engineering, new opportunities, or just a friendly
                chat.
              </p>
            ) : (
              <>
                <p>
                  I&rsquo;m open to conversations around backend engineering, remote
                  opportunities, developer infrastructure, and interesting technical
                  products.
                </p>
                <p>The easiest way to reach me is by email.</p>
              </>
            )}
          </div>
          <ul className="footer-links" aria-label="Contact links">
            <li>
              <a
                className="footer-link-primary"
                href={`mailto:${profile.email}`}
              >
                Send me an email
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-illustration" aria-hidden="true">
          <Image
            src="/images/get-in-touch.png"
            alt=""
            fill
            sizes="(max-width: 800px) 100vw, 560px"
          />
        </div>
      </div>

      <div className="container-shell footer-bottom">
        <div className="footer-signature">
          <Link
            className="footer-monogram"
            href="/"
            aria-label="Alireza Rezapour, home"
          >
            AR.
          </Link>
          <span>© {new Date().getFullYear()} Alireza Rezapour. All rights reserved.</span>
        </div>
        <nav
          className="footer-bottom-links"
          aria-label="Social and contact links"
        >
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}
