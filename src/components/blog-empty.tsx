import Link from "next/link";

type BlogEmptyProps = {
  compact?: boolean;
};

export function BlogEmpty({ compact = false }: BlogEmptyProps) {
  const className = compact
    ? "empty-writing empty-writing-compact"
    : "empty-writing";

  return (
    <div className={className}>
      <span className="empty-mark" aria-hidden="true">
        01
      </span>
      <div>
        <h2>I haven’t published anything here yet.</h2>
        <p>
          I’ll write about things I’m learning, building, and exploring—mostly
          backend systems, practical AI, and the decisions behind the work.
        </p>
        {compact && (
          <Link className="text-link" href="/blog">
            Visit the writing desk <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
