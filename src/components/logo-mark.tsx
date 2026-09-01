export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2 L26 9 V23 L16 30 L6 23 V9 Z"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <path
        d="M16 9 L21 12.5 V19.5 L16 23 L11 19.5 V12.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}
