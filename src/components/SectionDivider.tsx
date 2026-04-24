type Props = { from: string; to: string; flip?: boolean };

/**
 * Organic wavy divider between two background colors.
 * `from` = top section color, `to` = bottom section color.
 */
export default function SectionDivider({ from, to, flip = false }: Props) {
  return (
    <div aria-hidden="true" className="relative -my-px" style={{ backgroundColor: from }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[60px]"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path d="M0,30 C240,60 480,0 720,25 C960,50 1200,10 1440,35 L1440,60 L0,60 Z" fill={to} />
      </svg>
    </div>
  );
}
