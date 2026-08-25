import Link from "next/link";
import { infoPages } from "@/data/info";
import { formatDate } from "@/lib/date";
import { InfoFieldRow } from "@/components/InfoFieldRow";

export const metadata = {
  title: "Apontamentos // NOC — Rapeedo",
};

export default function InfoIndex() {
  return (
    <div className="grid-backdrop min-h-screen">
      <header className="sticky top-0 z-20 border-b border-(--color-line) bg-(--color-void)/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <div className="flex items-center justify-between gap-4">
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
            <Link
              href="/"
              className="focus-ring rounded-md border border-(--color-line) bg-(--color-panel) px-4 py-2 font-mono text-xs text-(--color-text-muted) transition-colors hover:border-(--color-text-faint) hover:text-(--color-text-primary)"
            >
              ← equipamentos
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-wider text-(--color-signal)">
          apontamentos · {infoPages.length} cadastrados
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-(--color-text-primary)">
          Configurações e acessos
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-(--color-text-muted)">
          Dados de apontamento de sistemas internos. Campos sensíveis ficam
          ocultos por padrão — clique para revelar ou copiar.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {infoPages.map((page) => (
            <section
              key={page.id}
              className="rounded-lg border border-(--color-line) bg-(--color-panel) p-5"
            >
              <div className="mb-1 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-(--color-text-faint)">
                <span>{page.category}</span>
                <span aria-hidden>·</span>
                <span>atualizado em {formatDate(page.updatedAt)}</span>
              </div>
              <h2 className="text-lg font-semibold text-(--color-text-primary)">
                {page.title}
              </h2>
              <p className="mt-1 text-sm text-(--color-text-muted)">
                {page.summary}
              </p>

              {page.fields && (
                <div className="mt-4 divide-y divide-(--color-line-soft) rounded-md border border-(--color-line-soft) bg-(--color-void)/50">
                  {page.fields.map((f) => (
                    <InfoFieldRow key={f.label} field={f} />
                  ))}
                </div>
              )}
            </section>
          ))}

          {infoPages.length === 0 && (
            <div className="rounded-lg border border-dashed border-(--color-line) py-16 text-center">
              <p className="font-mono text-sm text-(--color-text-muted)">
                nenhum apontamento cadastrado ainda
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
