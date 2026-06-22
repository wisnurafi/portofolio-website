type AvatarPose = "watching" | "alert" | "smug";

type AvatarProps = {
  className?: string;
  pose?: AvatarPose;
};

// Illustrated comic-style avatar — stand-in until Wisnu provides a real photo.
// Read: hooded operator, glowing visor, halftone shading, one glitch slice.
// `pose` lets the same character recur across sections with a different read:
//   watching (calm), alert (something's wrong), smug (caught it).
const POSES: Record<
  AvatarPose,
  { from: string; to: string; tilt: number; glitch: string; rim: string }
> = {
  watching: { from: "#22d3ee", to: "#bef264", tilt: 0, glitch: "#f472b6", rim: "#22d3ee" },
  alert: { from: "#f472b6", to: "#fde047", tilt: 0, glitch: "#22d3ee", rim: "#f472b6" },
  smug: { from: "#bef264", to: "#22d3ee", tilt: -3, glitch: "#fde047", rim: "#bef264" },
};

export default function Avatar({ className, pose = "watching" }: AvatarProps) {
  const p = POSES[pose];
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label={`Illustrated avatar of Wisnu Rafi (${pose})`}
      className={className}
      style={{ transform: `rotate(${p.tilt}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="av-halftone"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.6" cy="1.6" r="1.1" fill="#020617" opacity="0.55" />
        </pattern>
        <linearGradient id={`av-visor-${pose}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.from} />
          <stop offset="1" stopColor={p.to} />
        </linearGradient>
        <clipPath id="av-frame">
          <rect x="8" y="8" width="224" height="224" />
        </clipPath>
      </defs>

      <g clipPath="url(#av-frame)">
        {/* backdrop */}
        <rect x="8" y="8" width="224" height="224" fill="#0b1018" />
        <rect
          x="8"
          y="8"
          width="224"
          height="224"
          fill="url(#av-halftone)"
          opacity="0.4"
        />

        {/* speed lines behind head */}
        <g stroke="#1f2937" strokeWidth="3">
          <line x1="20" y1="40" x2="120" y2="58" />
          <line x1="18" y1="70" x2="96" y2="80" />
          <line x1="150" y1="44" x2="224" y2="34" />
          <line x1="156" y1="70" x2="224" y2="66" />
        </g>

        {/* shoulders / hoodie */}
        <path
          d="M40 232 Q44 168 92 150 L148 150 Q196 168 200 232 Z"
          fill="#11161f"
          stroke="#020617"
          strokeWidth="5"
        />
        <path
          d="M40 232 Q44 168 92 150 L148 150 Q196 168 200 232 Z"
          fill="url(#av-halftone)"
          opacity="0.25"
        />

        {/* hood */}
        <path
          d="M64 120 Q60 56 120 50 Q180 56 176 120 Q176 150 148 152 L92 152 Q64 150 64 120 Z"
          fill="#161c27"
          stroke="#020617"
          strokeWidth="5"
        />

        {/* face shadow */}
        <path
          d="M86 104 Q86 78 120 76 Q154 78 154 104 Q154 138 120 142 Q86 138 86 104 Z"
          fill="#0a0e15"
          stroke="#020617"
          strokeWidth="4"
        />

        {/* visor */}
        <rect
          x="92"
          y="98"
          width="56"
          height="17"
          rx="2"
          fill={`url(#av-visor-${pose})`}
          stroke="#020617"
          strokeWidth="3"
        />
        {/* visor scan pixels */}
        <g fill="#020617" opacity="0.7">
          <rect x="100" y="103" width="6" height="7" />
          <rect x="116" y="103" width="9" height="7" />
          <rect x="134" y="103" width="6" height="7" />
        </g>

        {/* glitch slice */}
        <g opacity="0.9">
          <rect x="92" y="106" width="56" height="3" fill={p.glitch} />
          <rect x="96" y="106" width="48" height="3" fill="#0b1018" />
        </g>
        {/* alert pose: extra glitch slice for tension */}
        {pose === "alert" && (
          <g opacity="0.85">
            <rect x="92" y="111" width="56" height="2" fill={p.glitch} />
            <rect x="104" y="111" width="40" height="2" fill="#0b1018" />
          </g>
        )}

        {/* hood rim highlight */}
        <path
          d="M64 120 Q60 56 120 50 Q180 56 176 120"
          fill="none"
          stroke={p.rim}
          strokeWidth="2.5"
          opacity="0.5"
        />

        {/* frame */}
        <rect
          x="8"
          y="8"
          width="224"
          height="224"
          fill="none"
          stroke="#020617"
          strokeWidth="8"
        />
      </g>
    </svg>
  );
}
