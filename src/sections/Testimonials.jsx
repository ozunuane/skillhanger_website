import { motion } from 'framer-motion'

// ─── Animation variants ───────────────────────────────────────────────────────

const EASE = [0.25, 0.4, 0.25, 1]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

// ─── Testimonial data ─────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      'SkillHanger didn\u2019t just build our platform\u2014they built our confidence. We went from idea to product-market fit in six months.',
    name: 'Sarah Chen',
    role: 'Co-Founder & CEO',
    company: 'Velocity Analytics',
  },
  {
    quote:
      'They understand SaaS, they understand marketing, and they understand what actually drives revenue. Our CAC dropped 34% in four months.',
    name: 'Marcus Johnson',
    role: 'VP Growth',
    company: 'Nexus AI',
  },
  {
    quote:
      'The training program transformed our hiring problem into a competitive advantage. Zero regrets.',
    name: 'Elena Rousseau',
    role: 'Head of Engineering',
    company: 'DataFlow Systems',
  },
]

// ─── Testimonial card ─────────────────────────────────────────────────────────

function TestimonialCard({ quote, name, role, company }) {
  return (
    <motion.article
      variants={cardVariants}
      className="bg-obsidian rounded-2xl p-8 border border-white/5 flex flex-col"
    >
      {/* Opening quote mark */}
      <span
        aria-hidden="true"
        className="font-display text-lime text-5xl leading-none mb-4 select-none"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="text-white-primary text-base leading-relaxed italic flex-1">
        {quote}
      </p>

      {/* Divider */}
      <div className="w-12 h-px bg-lime/30 mt-6 mb-4" aria-hidden="true" />

      {/* Attribution */}
      <div>
        <p className="font-display font-bold text-white-primary">{name}</p>
        <p className="text-muted text-sm mt-0.5">
          {role}, {company}
        </p>
      </div>
    </motion.article>
  )
}

// ─── Testimonials section ─────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section className="py-32 bg-graphite">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <motion.p
          className="text-lime text-sm tracking-[0.3em] uppercase font-medium mb-4 font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          Testimonials
        </motion.p>

        {/* Card grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
