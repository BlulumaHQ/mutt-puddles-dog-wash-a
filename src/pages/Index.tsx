import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ShowerHead, Scissors, GraduationCap, Heart, Star, MapPin, Clock, ArrowRight } from "lucide-react";
import PageMeta from "../components/PageMeta";
import ContactForm from "../components/ContactForm";
import Wave from "../components/Wave";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const inView = { variants: fadeUp, initial: "hidden", whileInView: "show", viewport: { once: true } } as const;

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-14 lg:py-20">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="sticker bg-card -rotate-2 mb-6"><Heart className="h-4 w-4 fill-pink" /> Tacoma's happiest tubs since 2007</span>
        <h1 className="heading-display lg:text-[88px] mt-6 mb-6">
          Splish. Splash. <span className="text-midblue">Spoiled</span>{" "}
          <span className="inline-block bg-sunny border-[3px] border-ink rounded-2xl px-3 rotate-2">pup.</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
          Wash your dog yourself in our spa-style tubs — towels, shampoo and tools all included — or hand the leash to our groomers. Either way, everyone goes home fluffy.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <a href="tel:2535313387" className="btn-sticker bg-ink text-primary-foreground shadow-[5px_5px_0_hsl(var(--pink))]"><Phone className="h-5 w-5" />Call (253) 531-3387</a>
          <Link to="/services/" className="btn-sticker bg-card text-ink">See what we do</Link>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-extrabold">
          {["All breeds welcome", "Everything supplied", "Same-day visits"].map((t, i) => (
            <li key={t} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full border-2 border-ink ${["bg-bubble", "bg-pink", "bg-sunny"][i]}`} />{t}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="relative mx-auto w-full max-w-[520px] aspect-square">
        <div className="absolute inset-4 blob bg-bubble border-4 border-ink translate-x-4 translate-y-4" />
        <img src="/images/hero-bg.jpg" alt="Happy golden retriever after grooming" className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover object-right blob border-4 border-ink" />
        {[["top-0 left-6 w-10 h-10", "0s"], ["top-1/3 -right-2 w-7 h-7", "1s"], ["bottom-8 right-10 w-12 h-12", "2s"], ["top-1/2 -left-3 w-6 h-6", "1.5s"]].map(([c, d]) => (
          <span key={c} className={`absolute ${c} rounded-full border-[3px] border-ink bg-card/70 animate-float`} style={{ animationDelay: d }} />
        ))}
        <span className="sticker bg-sunny absolute top-6 right-0 rotate-[8deg]">DIY or done-for-you!</span>
        <span className="sticker bg-card absolute bottom-6 left-0 -rotate-[5deg]"><Star className="h-4 w-4 fill-sunny" /> Winston's pampering spot</span>
      </div>
    </div>
    <Wave />
  </section>
);

const services = [
  { icon: ShowerHead, title: "Self-Serve Dog Wash", desc: "Clean tubs, towels, shampoos, conditioners, and professional tools. Bond with your pet in our spa-like facility.", to: "/service-dog-wash-tacoma-wa/", bg: "bg-sky", sh: "shadow-blue", tile: "bg-bubble" },
  { icon: Scissors, title: "Professional Grooming", desc: "Skilled and experienced groomers for all breeds. Your pet's satisfaction is our priority.", to: "/dog-grooming-tacoma-wa/", bg: "bg-pink-tint", sh: "shadow-pink", tile: "bg-pink" },
  { icon: GraduationCap, title: "Learn to Groom", desc: "Our employees will assist you in learning to care for the appearance of your pet by yourself, while avoiding the cost of a professional pet groomer.", to: "/pet-groomer-in-tacoma-wa/", bg: "bg-sunny-tint", sh: "shadow-sunny", tile: "bg-sunny" },
];

const Services = () => (
  <section className="bg-card py-16 lg:py-24">
    <div className="section-container">
      <motion.div {...inView} className="text-center mb-12">
        <p className="overline mb-3">PICK YOUR SPLASH</p>
        <h2 className="text-4xl md:text-5xl">Three ways to a squeaky-clean pup</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div key={s.title} {...inView} className={`sticker-card ${s.bg} ${s.sh} p-8 flex flex-col ${i === 1 ? "md:-rotate-1" : i === 2 ? "md:rotate-1" : ""}`}>
            <div className={`icon-tile ${s.tile} mb-5`}><s.icon className="h-7 w-7" /></div>
            <h3 className="text-2xl mb-3">{s.title}</h3>
            <p className="mb-6 flex-1">{s.desc}</p>
            <Link to={s.to} className="inline-flex items-center gap-2 min-h-[44px] font-extrabold text-midblue hover:underline">Learn more <ArrowRight className="h-5 w-5" /></Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="bg-sunny border-y-4 border-ink py-16 lg:py-24">
    <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div {...inView} className="relative">
        <img src="/images/Pet-Groomer-1080x720.jpg" alt="Professional Pet Groomer at Mutt Puddles" className="w-full rounded-[40px] border-4 border-ink -rotate-2 object-cover" style={{ boxShadow: "12px 12px 0 hsl(var(--ink))" }} />
        <span className="sticker bg-pink absolute -top-4 right-6 rotate-6 text-base">Since 2007</span>
      </motion.div>
      <motion.div {...inView}>
        <p className="overline mb-3 text-ink">ABOUT US</p>
        <h2 className="text-4xl md:text-5xl mb-6">Bonding through grooming.</h2>
        <p className="prose-body mb-4">If you want to treat your pet to a nice grooming session or you want to learn how to groom your dog by yourself, we are the specialists who will offer you the professional services you need. Serving customers in Tacoma, WA, we can offer you grooming services or help you become the pet groomer of your furry friend.</p>
        <p className="prose-body mb-8">With Mutt Puddles Dog Wash, you will rely on skilled and experienced people.</p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[["2007", "Serving Tacoma"], ["All", "Breeds & sizes"], ["0", "Mess at home"]].map(([n, l]) => (
            <div key={l} className="sticker-card rounded-3xl p-4 text-center shadow-[4px_4px_0_hsl(var(--ink))]">
              <p className="font-display font-bold text-3xl">{n}</p>
              <p className="text-sm font-extrabold">{l}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Review = () => (
  <section className="py-20 lg:py-28">
    <div className="section-container max-w-4xl">
      <motion.div {...inView} className="relative sticker-card border-4 shadow-blue p-8 md:p-14 pt-12">
        <span className="sticker bg-pink absolute -top-5 left-1/2 -translate-x-1/2 -rotate-3 whitespace-nowrap">Good boy approved</span>
        <div className="flex gap-1 mb-5 justify-center">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 fill-sunny text-ink" />)}
        </div>
        <blockquote className="font-display font-semibold text-2xl md:text-3xl leading-snug text-center mb-6">
          "I brought my baby Winston in the same day. The owners were so helpful and patient with me… I found my spot for Winston's pampering days."
        </blockquote>
        <p className="text-center font-extrabold text-midblue">— Winston's owner, English bulldog, age 1</p>
        <div className="text-center mt-6">
          <Link to="/testimonials/" className="btn-sticker bg-sky text-ink">Read more reviews</Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const deals = [
  { label: "Happy Hour", sub: "Call for details", c: "bg-bubble", r: "-rotate-2" },
  { label: "Senior Discount", sub: "Available", c: "bg-pink", r: "rotate-2" },
  { label: "Military Discount", sub: "Thank you for your service", c: "bg-sunny", r: "-rotate-1" },
  { label: "Police K-9", sub: "Always FREE", c: "bg-card", r: "rotate-3" },
];

const Deals = () => (
  <section className="bg-ink py-16 lg:py-24">
    <div className="section-container">
      <h2 className="text-4xl md:text-5xl text-primary-foreground text-center mb-12">Treats for the humans, too.</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {deals.map((d) => (
          <motion.div key={d.label} {...inView} className={`${d.c} ${d.r} rounded-card border-4 border-ink p-6 text-center text-ink`} style={{ boxShadow: "6px 6px 0 hsl(var(--card))" }}>
            <p className="font-display font-bold text-xl md:text-2xl mb-1">{d.label}</p>
            <p className="font-extrabold text-sm">{d.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Visit = () => (
  <section id="contact-section" className="py-20 lg:py-28">
    <div className="section-container">
      <motion.div {...inView} className="text-center mb-12">
        <p className="overline mb-3">VISIT US</p>
        <h2 className="text-4xl md:text-5xl">Your tub is waiting.</h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-8">
          <div className="sticker-card shadow-sunny p-6 space-y-4">
            {[
              [MapPin, "bg-bubble", <span key="a">605 156th St E, Tacoma, WA 98445</span>],
              [Phone, "bg-pink", <a key="p" href="tel:2535313387" className="hover:underline">(253) 531-3387</a>],
              [Clock, "bg-sunny", <span key="c">Emergency Hours Available Upon Request</span>],
            ].map(([Icon, bg, node], i) => {
              const I = Icon as typeof MapPin;
              return <div key={i} className="flex items-center gap-4 font-extrabold"><div className={`icon-tile w-12 h-12 ${bg}`}><I className="h-5 w-5" /></div>{node as React.ReactNode}</div>;
            })}
          </div>
          <div className="rounded-card border-4 border-ink overflow-hidden shadow-blue">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.5!2d-122.403!3d47.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fbe5b1a4e4e7%3A0x6e5c6d6c7c8b9a0b!2s605%20156th%20St%20E%2C%20Tacoma%2C%20WA%2098445!5e0!3m2!1sen!1sus!4v1700000000000"
              width="100%" height="340" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Mutt Puddles Dog Wash Location"
            />
          </div>
        </div>
        <div className="sticker-card bg-pink-tint shadow-pink p-7 md:p-10">
          <h3 className="text-3xl mb-2">Drop us a woof</h3>
          <p className="mb-6 font-bold">Call us today for further details or send us a message below.</p>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

const Index = () => (
  <>
    <PageMeta
      title="Home | Mutt Puddles Dog Wash"
      description="Professional dog grooming and self-service wash facility in Tacoma, WA. Since 2007, providing a spa-like experience for you and your furry friends."
    />
    <Hero />
    <Services />
    <About />
    <Review />
    <Deals />
    <Visit />
  </>
);

export default Index;
