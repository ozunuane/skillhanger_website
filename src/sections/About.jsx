import { motion } from 'framer-motion'

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.4, 0.25, 1]

const WHY_CARDS = [
  {
    title: 'Business-First Thinking',
    description:
      'We don\'t build technology just because we can. Every decision starts with your business outcome.',
  },
  {
    title: 'Modern Technology',
    description:
      'Web, mobile, AI, and automation. The right tool for the right problem, not the trendy one.',
  },
  {
    title: 'Practical Execution',
    description:
      'From strategy through implementation. We don\'t just plan—we ship.',
  },
  {
    title: 'People Development',
    description:
      'We build products while developing the people who will build tomorrow\'s technology.',
  },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const headlineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: EASE,
    },
  }),
}

const vennVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

// ─── Venn diagram ─────────────────────────────────────────────────────────────

function VennDiagram() {
  return (
    <motion.div
      variants={vennVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mt-16"
    >
      {/* Label above */}
      <p className="font-body text-sm text-muted tracking-[0.3em] uppercase text-center mb-10">
        Where we operate
      </p>

      {/* Triangle arrangement */}
      <div className="relative mx-auto w-full max-w-sm h-64 select-none">

        {/* Top: Technology */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border border-lime/20 flex items-center justify-center bg-obsidian/60">
            <span className="font-display font-bold text-xs text-white-primary tracking-widest uppercase text-center leading-snug px-1">
              TECH&shy;NOLOGY
            </span>
          </div>
        </div>

        {/* Bottom-left: Business */}
        <div className="absolute bottom-0 left-0 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border border-lime/20 flex items-center justify-center bg-obsidian/60">
            <span className="font-display font-bold text-xs text-white-primary tracking-widest uppercase text-center leading-snug px-1">
              BUSI&shy;NESS
            </span>
          </div>
        </div>

        {/* Bottom-right: Talent */}
        <div className="absolute bottom-0 right-0 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border border-lime/20 flex items-center justify-center bg-obsidian/60">
            <span className="font-display font-bold text-xs text-white-primary tracking-widest uppercase text-center leading-snug px-1">
              TALENT
            </span>
          </div>
        </div>

        {/* Center: SkillHanger */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center">
          <span className="font-display font-bold text-base text-lime tracking-wider text-center">
            SKILL
            <br />
            HANGER
          </span>
        </div>

        {/* Connector lines (decorative SVG) */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          viewBox="0 0 320 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* top-center to bottom-left */}
          <line x1="160" y1="48" x2="48" y2="208" stroke="#C7FF3D" strokeWidth="1" />
          {/* top-center to bottom-right */}
          <line x1="160" y1="48" x2="272" y2="208" stroke="#C7FF3D" strokeWidth="1" />
          {/* bottom-left to bottom-right */}
          <line x1="48" y1="208" x2="272" y2="208" stroke="#C7FF3D" strokeWidth="1" />
        </svg>

      </div>
    </motion.div>
  )
}

// ─── Why card ─────────────────────────────────────────────────────────────────

function WhyCard({ card, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="bg-obsidian rounded-2xl p-8 border border-white/5 hover:border-lime/20 transition-colors duration-300"
    >
      <h3 className="font-display text-xl font-bold text-white-primary">
        {card.title}
      </h3>
      <p className="font-body text-muted text-base mt-2 leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section id="about" className="py-32 bg-graphite scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top two-column area */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — headline */}
          <motion.div
            variants={headlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Label */}
            <motion.p
              variants={lineVariants}
              className="font-body font-medium text-sm text-lime tracking-[0.3em] uppercase mb-4"
            >
              ABOUT
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={lineVariants}
              className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[0.95] text-white-primary"
            >
              <span className="block">WE BELIEVE TECHNOLOGY</span>
              <span className="block text-lime">SHOULD CREATE OPPORTUNITY.</span>
            </motion.h2>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            variants={headlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-center gap-6"
          >
            <motion.p
              variants={lineVariants}
              className="font-body text-muted text-lg leading-relaxed"
            >
              SkillHanger sits at the intersection of technology, business, and
              education. We build digital products, drive measurable growth, and
              develop the talent that will shape tomorrow&apos;s technology
              landscape.
            </motion.p>
            <motion.p
              variants={lineVariants}
              className="font-body text-muted text-lg leading-relaxed"
            >
              We partner with teams bold enough to innovate and hungry enough to
              win. Not another agency—a technology partner that actually
              delivers.
            </motion.p>
          </motion.div>

        </div>

        {/* Venn diagram visual */}
        <VennDiagram />

        {/* Why SkillHanger grid */}
        <div className="mt-20">
          <motion.p
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="font-body font-medium text-sm text-muted tracking-[0.3em] uppercase mb-8"
          >
            Why SkillHanger
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {WHY_CARDS.map((card, index) => (
              <WhyCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
