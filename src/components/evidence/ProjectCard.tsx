import { cn } from "@/lib/utils";
import { Code2, ExternalLink, FolderCode, Globe, ImageOff } from "lucide-react";

type ProjectCategory = "desktop" | "website" | "cybersecurity";

type ProjectCardProps = {
  title: string;
  description: string;
  category: ProjectCategory;
  tags?: string[];
  status?: "live" | "wip" | "private";
  /** path ke screenshot di /public, mis. /projects/portal.png */
  image?: string;
  /** link repository (github, dll) */
  repo?: string;
  /** link live preview (untuk website) */
  live?: string;
  rotation?: number;
  className?: string;
};

// Category carried as a 1px color rail + a single small dot — not a full accent swap.
const CATEGORY_CONFIG: Record<
  ProjectCategory,
  { label: string; dotClass: string }
> = {
  desktop: { label: "Desktop App", dotClass: "bg-amber" },
  website: { label: "Website", dotClass: "bg-slate" },
  cybersecurity: { label: "Cyber Security", dotClass: "bg-red" },
};

const STATUS_CONFIG: Record<string, { label: string; dotClass: string }> = {
  live: { label: "Live", dotClass: "bg-slate" },
  wip: { label: "In Progress", dotClass: "bg-amber" },
  private: { label: "Classified", dotClass: "bg-red" },
};

export default function ProjectCard({
  title,
  description,
  category,
  tags = [],
  status,
  image,
  repo,
  live,
  rotation = 0,
  className,
}: ProjectCardProps) {
  const config = CATEGORY_CONFIG[category];
  const statusCfg = status ? STATUS_CONFIG[status] : null;
  const hasLinks = Boolean(repo || live);

  return (
    <div
      className={cn(
        "evidence-card-mono evidence-card-mono-amber group card-lift flex h-full flex-col paper-torn",
        className,
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        ["--note-rotate" as string]: `${rotation}deg`,
      }}
      data-wall-pool="amber"
      data-reveal-child
    >
      <span className="paper-fibers" aria-hidden />
      <span className="paper-ink" aria-hidden />
      <span className="paper-edge-wear" aria-hidden />
      <span className="paper-crumple" aria-hidden />
      <span className="board-pin left-1/2 top-2 z-10 -translate-x-1/2" />

      {/* preview image — pinned photo of the evidence */}
      <div className="relative mb-3 mt-2 overflow-hidden border border-white/8 bg-black/40">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={`${title} preview`}
            className="aspect-[16/9] w-full object-cover opacity-90 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        ) : (
          <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-1.5 text-muted-foreground/50">
            <ImageOff className="h-5 w-5" />
            <span className="font-mono text-[0.55rem] font-black uppercase tracking-[0.18em]">
              no visual evidence
            </span>
          </div>
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" aria-hidden />
      </div>

      {/* category rail — single 1px line, no rainbow */}
      <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <FolderCode className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-mono text-[0.55rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
            {config.label}
          </span>
        </div>
        {statusCfg && (
          <span className="flex items-center gap-1.5 font-mono text-[0.55rem] font-black uppercase tracking-[0.14em] text-muted-foreground">
            <span className={cn("h-1.5 w-1.5 rounded-full", statusCfg.dotClass)} />
            {statusCfg.label}
          </span>
        )}
      </div>

      <h3 className="mb-2 text-base font-black uppercase tracking-wide text-foreground">
        {title}
      </h3>
      <p className="mb-4 flex-1 body-copy-sm">{description}</p>

      {tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/8 bg-white/[0.02] px-1.5 py-0.5 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-foreground/70"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {hasLinks && (
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/5 pt-3">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[0.6rem] font-black uppercase tracking-[0.14em] text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
            >
              <Code2 className="h-3.5 w-3.5" />
              Repo
            </a>
          )}
          {live && (
            <a
              href={live}
              target={live.startsWith("#") ? undefined : "_blank"}
              rel={live.startsWith("#") ? undefined : "noreferrer"}
              className="flex items-center gap-1.5 border border-slate/25 bg-slate/[0.06] px-2.5 py-1.5 font-mono text-[0.6rem] font-black uppercase tracking-[0.14em] text-slate transition-all hover:-translate-y-0.5 hover:border-slate/60 hover:text-foreground"
            >
              <Globe className="h-3.5 w-3.5" />
              Live
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export type { ProjectCategory };
