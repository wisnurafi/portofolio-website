type AvatarPose = "watching" | "alert" | "smug";

type AvatarProps = {
  className?: string;
  pose?: AvatarPose;
  animated?: boolean;
};

const POSES: Record<
  AvatarPose,
  { from: string; to: string; tilt: number; glitch: string; rim: string }
> = {
  watching: { from: "#c9973f", to: "#7fae9e", tilt: 0, glitch: "#b3554a", rim: "#c9973f" },
  alert: { from: "#b3554a", to: "#c9973f", tilt: 0, glitch: "#7fae9e", rim: "#b3554a" },
  smug: { from: "#7fae9e", to: "#c9973f", tilt: -3, glitch: "#9c6f8e", rim: "#7fae9e" },
};

export default function Avatar({
  className,
  pose = "watching",
  animated = true,
}: AvatarProps) {
  const p = POSES[pose];
  const uniqueId = pose;

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
        <pattern id={`av-halftone-${uniqueId}`} width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.1" fill="#000000" opacity="0.55" />
        </pattern>
        <linearGradient id={`av-visor-${uniqueId}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.from}>
            {animated && (
              <animate
                attributeName="stop-color"
                values={`${p.from};${p.to};${p.from}`}
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </stop>
          <stop offset="1" stopColor={p.to}>
            {animated && (
              <animate
                attributeName="stop-color"
                values={`${p.to};${p.from};${p.to}`}
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </stop>
        </linearGradient>
        <filter id={`av-glow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id={`av-frame-${uniqueId}`}>
          <rect x="8" y="8" width="224" height="224" />
        </clipPath>
      </defs>

      <g clipPath={`url(#av-frame-${uniqueId})`}>
        <rect x="8" y="8" width="224" height="224" fill="#07080a" />
        <rect
          x="8"
          y="8"
          width="224"
          height="224"
          fill={`url(#av-halftone-${uniqueId})`}
          opacity="0.35"
        />

        <g stroke="#1a1d21" strokeWidth="3">
          <line x1="20" y1="40" x2="120" y2="58" />
          <line x1="18" y1="70" x2="96" y2="80" />
          <line x1="150" y1="44" x2="224" y2="34" />
          <line x1="156" y1="70" x2="224" y2="66" />
        </g>

        <path
          d="M40 232 Q44 168 92 150 L148 150 Q196 168 200 232 Z"
          fill="#0d0f11"
          stroke="#000000"
          strokeWidth="5"
        />
        <path
          d="M40 232 Q44 168 92 150 L148 150 Q196 168 200 232 Z"
          fill={`url(#av-halftone-${uniqueId})`}
          opacity="0.2"
        />

        <path
          d="M64 120 Q60 56 120 50 Q180 56 176 120 Q176 150 148 152 L92 152 Q64 150 64 120 Z"
          fill="#111316"
          stroke="#000000"
          strokeWidth="5"
        />

        <path
          d="M86 104 Q86 78 120 76 Q154 78 154 104 Q154 138 120 142 Q86 138 86 104 Z"
          fill="#030405"
          stroke="#000000"
          strokeWidth="4"
        />

        <rect
          x="92"
          y="98"
          width="56"
          height="17"
          rx="2"
          fill={`url(#av-visor-${uniqueId})`}
          filter={animated ? `url(#av-glow-${uniqueId})` : undefined}
          stroke="#000000"
          strokeWidth="3"
        />
        <g fill="#000000" opacity="0.8">
          <rect x="100" y="103" width="6" height="7" />
          <rect x="116" y="103" width="9" height="7" />
          <rect x="134" y="103" width="6" height="7" />
        </g>

        <g opacity="0.9">
          <rect x="92" y="106" width="56" height="3" fill={p.glitch}>
            {animated && (
              <animate
                attributeName="opacity"
                values="0.9;0.25;0.9;0.45;1"
                dur="1.1s"
                repeatCount="indefinite"
              />
            )}
          </rect>
          <rect x="96" y="106" width="48" height="3" fill="#07080a">
            {animated && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 2,0; -1,0; 0,0"
                dur="0.7s"
                repeatCount="indefinite"
              />
            )}
          </rect>
        </g>

        {pose === "alert" && (
          <g opacity="0.85">
            <rect x="92" y="111" width="56" height="2" fill={p.glitch}>
              {animated && (
                <animate
                  attributeName="opacity"
                  values="0.85;0.15;0.85"
                  dur="0.55s"
                  repeatCount="indefinite"
                />
              )}
            </rect>
            <rect x="104" y="111" width="40" height="2" fill="#07080a" />
          </g>
        )}

        <path
          d="M64 120 Q60 56 120 50 Q180 56 176 120"
          fill="none"
          stroke={p.rim}
          strokeWidth="2.5"
          opacity="0.5"
        >
          {animated && (
            <animate
              attributeName="opacity"
              values="0.5;0.9;0.5"
              dur="2.5s"
              repeatCount="indefinite"
            />
          )}
        </path>

        <rect
          x="8"
          y="8"
          width="224"
          height="224"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
        />
      </g>
    </svg>
  );
}
