"use client";

import Link from "next/link";

export function Header({
  query,
  onQueryChange,
  resultCount,
}: {
  query: string;
  onQueryChange: (v: string) => void;
  resultCount: number;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-(--color-line) bg-(--color-void)/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <img
              src="/logo-rapeedo.png"
              alt="Rapeedo Telecom"
              className="h-8 w-auto sm:h-9"
            />
            <span className="flex items-baseline gap-1.5 border-l border-(--color-line) pl-3 font-mono text-[14px] text-(--color-text-muted) transition-colors group-hover:text-(--color-text-primary)">
              NOC<span className="text-(--color-signal)">//</span>arquivos
            </span>
          </Link>

          <nav className="flex items-center gap-5 font-mono text-[13px] text-(--color-text-muted)">
            <Link
              href="/"
              className="focus-ring rounded-sm hover:text-(--color-text-primary) transition-colors"
            >
              equipamentos
            </Link>
            <Link
              href="/info"
              className="focus-ring rounded-sm hover:text-(--color-text-primary) transition-colors"
            >
              apontamentos
            </Link>
          </nav>
        </div>

        <div className="mt-4">
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-sm text-(--color-signal)">
              $
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="buscar por modelo, fabricante ou categoria..."
              aria-label="Buscar equipamento"
              className="focus-ring w-full rounded-md border border-(--color-line) bg-(--color-panel) py-2.5 pl-9 pr-24 font-mono text-sm text-(--color-text-primary) placeholder:text-(--color-text-faint) outline-none transition-colors focus:border-(--color-signal-dim)"
            />
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-(--color-text-faint)">
              {resultCount} resultado{resultCount === 1 ? "" : "s"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
