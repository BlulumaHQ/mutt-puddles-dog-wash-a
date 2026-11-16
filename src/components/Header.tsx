import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PawLogo from "./PawLogo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us/" },
  {
    label: "Services", path: "/services/",
    children: [
      { label: "Dog Wash Studio", path: "/dog-wash-studio-tacoma-wa/" },
      { label: "Self-Service Dog Wash", path: "/service-dog-wash-tacoma-wa/" },
      { label: "Pet Groomer", path: "/pet-groomer-in-tacoma-wa/" },
      { label: "Dog Grooming", path: "/dog-grooming-tacoma-wa/" },
      { label: "Dog Groomer", path: "/dog-groomer-tacoma-wa/" },
    ],
  },
  { label: "Testimonials", path: "/testimonials/" },
  { label: "Contact Us", path: "/contact-us/" },
  { label: "FAQ", path: "/frequently-asked-questions/" },
  { label: "Tips", path: "/tips/" },
];

const pill = (active: boolean) =>
  `inline-flex items-center min-h-[44px] px-3.5 rounded-full font-extrabold text-sm border-[3px] transition-colors ${
    active ? "bg-sunny border-ink" : "border-transparent hover:border-ink hover:bg-card"
  }`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); setServicesOpen(false); }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-ink">
      <div className="bg-ink text-primary-foreground">
        <div className="section-container flex items-center justify-between py-1.5 text-xs sm:text-sm font-bold">
          <span className="hidden sm:inline">Self-serve tubs + pro grooming in Tacoma since 2007</span>
          <span className="sm:hidden">Tacoma since 2007</span>
          <a href="tel:2535313387" className="text-sunny hover:underline">Call (253) 531-3387</a>
        </div>
      </div>

      <div className="section-container flex items-center justify-between py-2 gap-4" style={{ minHeight: 72 }}>
        <PawLogo />
        <nav className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.path} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <Link to={link.path} className={pill(location.pathname === link.path)}>{link.label}</Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-60 sticker-card shadow-blue p-2 rounded-3xl">
                      {link.children.map((c) => (
                        <Link key={c.path} to={c.path} className="flex items-center min-h-[44px] px-3 rounded-full font-bold text-sm hover:bg-sky">{c.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.path} to={link.path} className={pill(location.pathname === link.path)}>{link.label}</Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:2535313387" className="btn-sticker hidden sm:inline-flex bg-pink text-ink shadow-[4px_4px_0_hsl(var(--ink))] px-5">Book a Bath</a>
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden w-12 h-12 rounded-2xl border-[3px] border-ink bg-sunny flex items-center justify-center" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.2 }}
            className="xl:hidden overflow-hidden border-t-[3px] border-ink bg-background max-h-[calc(100vh-110px)] overflow-y-auto">
            <nav className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link to={link.path} className={pill(location.pathname === link.path) + " w-full text-base"}>{link.label}</Link>
                  {link.children && (
                    <div className="ml-4 grid grid-cols-1 sm:grid-cols-2">
                      {link.children.map((c) => (
                        <Link key={c.path} to={c.path} className="flex items-center min-h-[44px] px-3 font-bold text-sm text-midblue">{c.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="tel:2535313387" className="btn-sticker bg-pink text-ink shadow-[4px_4px_0_hsl(var(--ink))] mt-3 sm:hidden">Book a Bath</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
