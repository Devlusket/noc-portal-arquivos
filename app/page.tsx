"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { devices } from "@/data/devices";
import { Category, Manufacturer } from "@/lib/types";
import { Header } from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import { DeviceCard } from "@/components/DeviceCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "Todos">("Todos");
  const [manufacturer, setManufacturer] = useState<Manufacturer | "Todos">(
    "Todos"
  );

  const categories = useMemo(
    () => Array.from(new Set(devices.map((d) => d.category))) as Category[],
    []
  );
  const manufacturers = useMemo(
    () =>
      Array.from(new Set(devices.map((d) => d.manufacturer))) as Manufacturer[],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return devices.filter((d) => {
      if (category !== "Todos" && d.category !== category) return false;
      if (manufacturer !== "Todos" && d.manufacturer !== manufacturer)
        return false;
      if (!q) return true;
      return (
        d.name.toLowerCase().includes(q) ||
        d.model.toLowerCase().includes(q) ||
        d.manufacturer.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
      );
    });
  }, [query, category, manufacturer]);

  return (
    <div className="grid-backdrop min-h-screen">
      <Header query={query} onQueryChange={setQuery} resultCount={filtered.length} />

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-(--color-signal)">
              equipamentos · {devices.length} cadastrados
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-(--color-text-primary)">
              Firmwares e presets
            </h1>
          </div>
          <Link
            href="/info"
            className="focus-ring rounded-md border border-(--color-line) bg-(--color-panel) px-4 py-2 font-mono text-xs text-(--color-text-muted) transition-colors hover:border-(--color-text-faint) hover:text-(--color-text-primary)"
          >
            ver apontamentos →
          </Link>
        </div>

        <div className="mb-6 rounded-lg border border-(--color-line) bg-(--color-panel)/60 p-4">
          <FilterBar
            categories={categories}
            manufacturers={manufacturers}
            activeCategory={category}
            activeManufacturer={manufacturer}
            onCategoryChange={setCategory}
            onManufacturerChange={setManufacturer}
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <DeviceCard key={d.id} device={d} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-(--color-line) py-16 text-center">
            <p className="font-mono text-sm text-(--color-text-muted)">
              nenhum equipamento encontrado para essa busca
            </p>
            <p className="mt-1 font-mono text-xs text-(--color-text-faint)">
              tente outro termo ou limpe os filtros
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-(--color-line) py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs text-(--color-text-faint)">
          uso interno · técnicos NOC
          <span className="caret-blink text-(--color-signal)">_</span>
        </p>
      </div>
    </footer>
  );
}
