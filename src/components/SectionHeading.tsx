import { motion } from "framer-motion";

interface SectionHeadingProps { overline?: string; title: string; description?: string; centered?: boolean; }

const SectionHeading = ({ overline, title, description, centered = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}
    className={`mb-12 ${centered ? "text-center" : ""}`}
  >
    {overline && <p className="overline mb-3">{overline}</p>}
    <h2 className="text-4xl md:text-5xl">{title}</h2>
    {description && <p className={`mt-4 text-lg text-muted-foreground leading-relaxed ${centered ? "mx-auto" : ""} max-w-[65ch]`}>{description}</p>}
  </motion.div>
);

export default SectionHeading;
