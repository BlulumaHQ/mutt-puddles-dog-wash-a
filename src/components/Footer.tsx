import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "About Us", path: "/about-us/" },
  { label: "Services", path: "/services/" },
  { label: "Testimonials", path: "/testimonials/" },
  { label: "FAQ", path: "/frequently-asked-questions/" },
  { label: "Contact Us", path: "/contact-us/" },
  { label: "Tips", path: "/tips/" },
];

const Footer = () => (
  <footer className="bg-bubble border-t-4 border-ink text-ink">
    <div className="section-container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-3xl mb-2">Mutt Puddles Dog Wash</h3>
        <p className="font-bold">Bonding through grooming. Self-serve tubs + pro grooming in Tacoma since 2007.</p>
      </div>
      <ul className="grid grid-cols-2 gap-x-4 content-start">
        {quickLinks.map((l) => (
          <li key={l.path}><Link to={l.path} className="flex items-center min-h-[44px] font-extrabold hover:underline underline-offset-4">{l.label}</Link></li>
        ))}
      </ul>
      <ul className="space-y-2 font-bold">
        <li className="flex gap-2"><MapPin className="h-5 w-5 shrink-0" />605 156th St E, Tacoma, WA 98445</li>
        <li><a href="tel:2535313387" className="flex gap-2 items-center min-h-[44px] hover:underline"><Phone className="h-5 w-5" />(253) 531-3387</a></li>
        <li className="flex gap-2"><Clock className="h-5 w-5 shrink-0" />Emergency Hours Available Upon Request</li>
      </ul>
    </div>
    <div className="border-t-[3px] border-ink">
      <p className="section-container py-4 text-sm font-bold text-center">
        © {new Date().getFullYear()} Mutt Puddles Dog Wash LLC. Website by{" "}
        <a href="https://swiftsite.ca" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">SwiftSite</a>
      </p>
    </div>
  </footer>
);

export default Footer;
