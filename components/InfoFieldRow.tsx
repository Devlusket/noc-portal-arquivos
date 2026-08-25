"use client";

import { useState } from "react";
import { InfoField } from "@/lib/types";

export function InfoFieldRow({ field }: { field: InfoField }) {
  const [revealed, setRevealed] = useState(!field.sensitive);
  const [copied, setCopied] = useState(false);

  const displayValue =
    field.sensitive && !revealed ? "•".repeat(Math.min(field.value.length, 16)) : field.value;

  async function copy() {
    try {
      await navigator.clipboard.writeText(field.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable, ignore silently
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 px-3.5 py-2.5">
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-faint)">
          {field.label}
        </p>
        <p className="truncate font-mono text-sm text-(--color-text-primary)">
          {displayValue}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        {field.sensitive && (
          <button
            onClick={() => setRevealed((r) => !r)}
            aria-label={revealed ? "Ocultar valor" : "Revelar valor"}
            className="focus-ring rounded-md border border-(--color-line) p-1.5 text-(--color-text-muted) transition-colors hover:border-(--color-text-faint) hover:text-(--color-text-primary)"
          >
            {revealed ? (
              <EyeOffIcon />
            ) : (
              <EyeIcon />
            )}
          </button>
        )}
        <button
          onClick={copy}
          aria-label="Copiar valor"
          className="focus-ring rounded-md border border-(--color-line) p-1.5 text-(--color-text-muted) transition-colors hover:border-(--color-text-faint) hover:text-(--color-text-primary)"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 10.5V3.5A1 1 0 0 1 4.5 2.5h7" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3 3 7-7" stroke="var(--color-signal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
function EyeOffIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M2 2l12 12M6.7 6.9a1.8 1.8 0 0 0 2.4 2.4M4.3 4.6C2.6 5.7 1.5 8 1.5 8s2.5 4.5 6.5 4.5c1.1 0 2.1-.3 2.9-.8M11.4 5.1C10.4 4.4 9.3 3.5 8 3.5c-.4 0-.8 0-1.2.1M14.5 8s-.7 1.3-2 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
