import { cn } from "@/lib/utils";
import Avatar from "@/components/Avatar";

type ChapterHeaderProps = {
  code: string;
  title: string;
  kicker: string;
  className?: string;
};

export function ChapterHeader({
  code,
  title,
  kicker,
  className,
}: ChapterHeaderProps) {
  return (
    <div className={cn("comic-chapter mb-10", className)}>
      <span className="comic-chapter-code">{code}</span>
      <div>
        <p className="comic-kicker">{kicker}</p>
        <h2 className="comic-heading mt-2">{title}</h2>
      </div>
    </div>
  );
}

type ComicPanelProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "cyan" | "lime" | "magenta" | "yellow" | "neutral";
} & React.HTMLAttributes<HTMLDivElement>;

export function ComicPanel({
  children,
  className,
  tone = "neutral",
  ...props
}: ComicPanelProps) {
  return (
    <div
      {...props}
      className={cn(
        "comic-panel",
        tone === "cyan" && "comic-panel-cyan",
        tone === "lime" && "comic-panel-lime",
        tone === "magenta" && "comic-panel-magenta",
        tone === "yellow" && "comic-panel-yellow",
        className,
      )}
    >
      {children}
    </div>
  );
}

type ActionTagProps = {
  children: React.ReactNode;
  tone?: "cyan" | "lime" | "magenta" | "yellow";
};

export function ActionTag({ children, tone = "cyan" }: ActionTagProps) {
  return (
    <span
      className={cn(
        "action-tag",
        tone === "lime" && "action-tag-lime",
        tone === "magenta" && "action-tag-magenta",
        tone === "yellow" && "action-tag-yellow",
      )}
    >
      {children}
    </span>
  );
}

type SpeechBubbleProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "cyan" | "lime" | "magenta" | "yellow";
};

const BUBBLE_TONE: Record<NonNullable<SpeechBubbleProps["tone"]>, string> = {
  paper: "",
  cyan: "speech-box-cyan",
  lime: "speech-box-lime",
  magenta: "speech-box-magenta",
  yellow: "speech-box-yellow",
};

export function SpeechBubble({
  children,
  className,
  tone = "paper",
}: SpeechBubbleProps) {
  return (
    <div className={cn("speech-box", BUBBLE_TONE[tone], className)}>
      <p className="font-mono text-xs font-black uppercase leading-5 tracking-[0.1em]">
        {children}
      </p>
    </div>
  );
}

type SfxProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "cyan" | "lime" | "magenta" | "yellow" | "ink";
  tilt?: number;
};

const SFX_SIZE: Record<NonNullable<SfxProps["size"]>, string> = {
  sm: "text-3xl sm:text-4xl",
  md: "text-4xl sm:text-5xl",
  lg: "text-5xl sm:text-6xl",
  xl: "text-6xl sm:text-7xl lg:text-8xl",
};

const SFX_TONE: Record<NonNullable<SfxProps["tone"]>, string> = {
  cyan: "text-cyan-300",
  lime: "text-lime-300",
  magenta: "text-pink-400",
  yellow: "text-yellow-300",
  ink: "text-zinc-950",
};

export function Sfx({
  children,
  className,
  size = "lg",
  tone = "cyan",
  tilt = -3,
}: SfxProps) {
  return (
    <span
      className={cn("sfx inline-block", SFX_SIZE[size], SFX_TONE[tone], className)}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {children}
    </span>
  );
}

type MotionLinesProps = {
  className?: string;
};

// Speed/impact line overlay. Drop inside a `relative` panel.
export function MotionLines({ className }: MotionLinesProps) {
  return <span aria-hidden className={cn("motion-lines", className)} />;
}

type AvatarBeatProps = {
  pose?: "watching" | "alert" | "smug";
  caption?: string;
  className?: string;
  avatarClassName?: string;
};

// Recurring protagonist beat — small framed avatar + optional caption.
export function AvatarBeat({
  pose = "watching",
  caption,
  className,
  avatarClassName,
}: AvatarBeatProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <Avatar pose={pose} className={cn("w-full max-w-[120px]", avatarClassName)} />
      {caption ? (
        <span className="panel-caption w-full text-center">{caption}</span>
      ) : null}
    </div>
  );
}

