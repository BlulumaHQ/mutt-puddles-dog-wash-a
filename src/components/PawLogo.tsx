import { Link } from "react-router-dom";
const PawLogo = () => (
  <Link to="/" className="flex items-center gap-3 min-h-[44px]">
    <span className="w-12 h-12 rounded-full bg-sunny border-[3px] border-ink flex items-center justify-center shrink-0">
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-ink" aria-hidden="true">
        <ellipse cx="6" cy="9" rx="2.2" ry="2.8" /><ellipse cx="10" cy="5.5" rx="2.2" ry="2.8" /><ellipse cx="14" cy="5.5" rx="2.2" ry="2.8" /><ellipse cx="18" cy="9" rx="2.2" ry="2.8" />
        <path d="M12 11c-3 0-6 3.5-6 6.2C6 19 7.4 20 9 20c1.2 0 2-.6 3-.6s1.8.6 3 .6c1.6 0 3-1 3-2.8C18 14.5 15 11 12 11z" />
      </svg>
    </span>
    <span className="leading-none">
      <span className="block font-display font-bold text-2xl text-ink">Mutt Puddles</span>
      <span className="block text-[11px] font-extrabold tracking-[0.18em] text-midblue mt-1">DOG WASH · TACOMA</span>
    </span>
  </Link>
);
export default PawLogo;
