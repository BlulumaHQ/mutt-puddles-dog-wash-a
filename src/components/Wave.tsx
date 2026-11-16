const Wave = ({ className = "", fill = "hsl(var(--card))" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block w-full h-12 md:h-20 ${className}`} aria-hidden="true">
    <path d="M0,40 C180,90 360,-10 540,35 C720,80 900,5 1080,40 C1260,75 1350,30 1440,45 L1440,80 L0,80 Z" fill={fill} />
    <path d="M0,40 C180,90 360,-10 540,35 C720,80 900,5 1080,40 C1260,75 1350,30 1440,45" fill="none" stroke="hsl(var(--ink))" strokeWidth="4" />
  </svg>
);
export default Wave;
