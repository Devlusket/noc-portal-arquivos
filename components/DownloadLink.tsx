import { DownloadFile } from "@/lib/types";

export function DownloadLink({
  file,
  variant = "primary",
}: {
  file: DownloadFile;
  variant?: "primary" | "secondary";
}) {
  const base =
    "focus-ring group flex items-center justify-between gap-3 rounded-md border px-3.5 py-2.5 text-left transition-colors";
  const styles =
    variant === "primary"
      ? "border-(--color-signal-dim) bg-(--color-signal)/[0.08] hover:bg-(--color-signal)/[0.14]"
      : "border-(--color-line) bg-(--color-panel-raised) hover:border-(--color-text-faint)";

  return (
    <a href={file.url} download className={`${base} ${styles}`}>
      <span className="min-w-0">
        <span className="block truncate font-mono text-[13px] text-(--color-text-primary)">
          {file.label}
        </span>
        {file.description && (
          <span className="block truncate text-xs text-(--color-text-muted)">
            {file.description}
          </span>
        )}
      </span>
      <span
        aria-hidden
        className="shrink-0 text-(--color-signal) transition-transform group-hover:translate-y-0.5"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 12.5h11"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
