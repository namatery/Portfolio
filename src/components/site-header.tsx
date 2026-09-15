import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Articles" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Alireza Rezapour, home"
        >
          AR<span aria-hidden="true">.</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
