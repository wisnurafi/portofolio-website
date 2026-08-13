"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Avatar from "@/components/visuals/Avatar";

type AsciiAvatarProps = {
  className?: string;
  photoSrc?: string;
  photoAlt?: string;
};

export default function AsciiAvatar({
  className,
  photoSrc,
  photoAlt = "Wisnu Rafi",
}: AsciiAvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = photoSrc && !imgError;

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-amber/25 bg-card",
        className,
      )}
      style={{
        boxShadow:
          "inset 0 0 30px rgba(201, 151, 63, 0.06), 0 0 0 1px rgba(0,0,0,0.7)",
      }}
    >
      <span className="absolute left-2 top-2 z-10 h-3 w-3 border-l border-t border-amber/40" />
      <span className="absolute right-2 top-2 z-10 h-3 w-3 border-r border-t border-amber/40" />
      <span className="absolute bottom-2 left-2 z-10 h-3 w-3 border-b border-l border-amber/40" />
      <span className="absolute bottom-2 right-2 z-10 h-3 w-3 border-b border-r border-amber/40" />

      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoSrc}
          alt={photoAlt}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover grayscale contrast-125"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#07080a] p-1">
          <Avatar pose="watching" animated className="h-full w-full" />
        </div>
      )}
    </div>
  );
}
