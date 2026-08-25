import Image from "next/image";
import { Device } from "@/lib/types";
import { formatDate, daysSince } from "@/lib/date";
import { DownloadLink } from "./DownloadLink";

const categoryLabel: Record<Device["category"], string> = {
  ONT: "ONT",
  ONU: "ONU",
  Roteador: "Roteador",
};

export function DeviceCard({ device }: { device: Device }) {
  const recent = daysSince(device.updatedAt) <= 60;

  return (
    <article className="relative flex overflow-hidden rounded-lg border border-(--color-line) bg-(--color-panel)">
      {/* Signature fiber-signal bar */}
      <div className="fiber-bar w-1 shrink-0 bg-(--color-line-soft)" aria-hidden />

      <div className="flex flex-1 flex-col">
        {device.image && (
          <div className="relative h-44 w-full shrink-0 overflow-hidden border-b border-(--color-line-soft) bg-(--color-panel-raised)">
            <Image
              src={device.image}
              alt={device.name}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-contain p-4"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-(--color-text-faint)">
              <span>{device.manufacturer}</span>
              <span aria-hidden>·</span>
              <span>{categoryLabel[device.category]}</span>
            </div>
            <h3 className="truncate text-[17px] font-semibold text-(--color-text-primary)">
              {device.name}
            </h3>
            <p className="truncate font-mono text-xs text-(--color-text-muted)">
              {device.model}
            </p>
          </div>
        </div>

        {/* Status log line */}
        <div className="flex items-center gap-2 rounded-md border border-(--color-line-soft) bg-(--color-void)/60 px-3 py-2 font-mono text-[11px]">
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              recent ? "bg-(--color-signal)" : "bg-(--color-text-faint)"
            }`}
            aria-hidden
          />
          <span className="text-(--color-text-muted)">
            {recent ? "atualizado" : "última atualização"} em{" "}
            <span className="text-(--color-text-primary)">
              {formatDate(device.updatedAt)}
            </span>
          </span>
        </div>

        {device.notes && (
          <p className="text-[13px] leading-relaxed text-(--color-text-muted)">
            {device.notes}
          </p>
        )}

        <div className="flex flex-col gap-2">
          {device.firmware?.map((f) => (
            <DownloadLink key={f.url} file={f} variant="primary" />
          ))}
          {device.presets?.map((p) => (
            <DownloadLink key={p.url} file={p} variant="secondary" />
          ))}
          {!device.firmware?.length && !device.presets?.length && (
            <p className="font-mono text-xs text-(--color-text-faint)">
              nenhum arquivo cadastrado
            </p>
          )}
        </div>
        </div>
      </div>
    </article>
  );
}
