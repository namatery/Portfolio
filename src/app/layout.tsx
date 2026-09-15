import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-bpn.pages.dev"),
  title: {
    default: "Alireza Rezapour — Backend Engineer",
    template: "%s — Alireza Rezapour",
  },
  description:
    "Backend engineer building reliable distributed systems, data infrastructure, and practical AI products.",
  authors: [{ name: "Alireza Rezapour" }],
  creator: "Alireza Rezapour",
  icons: { icon: "/assets/favicon.png" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alireza Rezapour — Backend Engineer",
    description:
      "Reliable backend systems, data infrastructure, and practical AI products.",
    siteName: "Alireza Rezapour",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})()`;

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alireza Rezapour",
  jobTitle: "Backend Engineer",
  url: "https://github.com/namatery",
  sameAs: [
    "https://github.com/namatery",
    "https://www.linkedin.com/in/alirezarezapour",
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </body>
    </html>
  );
}
