"use client";

import { Category, Manufacturer } from "@/lib/types";

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`focus-ring rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
        active
          ? "border-(--color-signal-dim) bg-(--color-signal)/10 text-(--color-signal)"
          : "border-(--color-line) bg-(--color-panel) text-(--color-text-muted) hover:border-(--color-text-faint) hover:text-(--color-text-primary)"
      }`}
    >
      {label}
    </button>
  );
}

export function FilterBar({
  categories,
  manufacturers,
  activeCategory,
  activeManufacturer,
  onCategoryChange,
  onManufacturerChange,
}: {
  categories: Category[];
  manufacturers: Manufacturer[];
  activeCategory: Category | "Todos";
  activeManufacturer: Manufacturer | "Todos";
  onCategoryChange: (c: Category | "Todos") => void;
  onManufacturerChange: (m: Manufacturer | "Todos") => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-(--color-text-faint)">
          categoria
        </span>
        <Chip
          label="todos"
          active={activeCategory === "Todos"}
          onClick={() => onCategoryChange("Todos")}
        />
        {categories.map((c) => (
          <Chip
            key={c}
            label={c.toLowerCase()}
            active={activeCategory === c}
            onClick={() => onCategoryChange(c)}
          />
        ))}
      </div>

      <div className="hidden h-4 w-px bg-(--color-line) sm:block" />

      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-(--color-text-faint)">
          fabricante
        </span>
        <Chip
          label="todos"
          active={activeManufacturer === "Todos"}
          onClick={() => onManufacturerChange("Todos")}
        />
        {manufacturers.map((m) => (
          <Chip
            key={m}
            label={m.toLowerCase()}
            active={activeManufacturer === m}
            onClick={() => onManufacturerChange(m)}
          />
        ))}
      </div>
    </div>
  );
}
