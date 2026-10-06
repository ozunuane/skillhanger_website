import { motion } from 'framer-motion'

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.4, 0.25, 1]

const METRICS = [
  { value: '+124%', label: 'Traffic' },
  { value: '+83%', label: 'Leads' },
  { value: '3.4x', label: 'ROAS' },
]

const CAPABILITIES = [
  'Content strategy that attracts, converts, and retains your ideal customers.',
  'Paid advertising across Google, Meta, LinkedIn, and programmatic channels.',
  'SEO that ranks you first for the terms that matter to your bottom line.',
  'Email and nurture sequences that turn prospects into revenue.',
  'Analytics and attribution that prove exactly where your growth comes from.',
  'Community and brand building that makes you the obvious choice.',
]

// ─── Animation variants ───────────────────────────────────────────────────────

const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

const metricVariants = {
  hidden: { opacity: 0, y: 32 },
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

const capabilityVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: EASE,
    },
  }),
}

// ─── Metric block ─────────────────────────────────────────────────────────────

function MetricBlock({ metric, index }) {
  return (
    <motion.div
      custom={index}
      variants={metricVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      <p className="font-display font-bold text-4xl md:text-5xl text-lime leading-none">
        {metric.value}
      </p>
      <p className="font-body text-muted text-sm mt-1 uppercase tracking-widest">
        {metric.label}
      </p>
    </motion.div>
  )
}

// ─── Capability item ──────────────────────────────────────────────────────────

function CapabilityItem({ text, index }) {
  return (
    <motion.div
      custom={index}
      variants={capabilityVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="p-6 rounded-xl border border-white/5 hover:border-lime/20 transition-colors duration-300 flex items-start gap-4"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" />
      <p className="font-body text-white-primary text-base leading-relaxed">
        {text}
      </p>
    </motion.div>
  )
}

// ─── Growth ───────────────────────────────────────────────────────────────────

export default function Growth() {
  return (
    <section className="py-32 bg-graphite">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={lineVariants}
            className="font-body font-medium text-sm text-lime tracking-[0.3em] uppercase mb-4"
          >
            GROWTH
          </motion.p>

          <motion.h2
            variants={lineVariants}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-white-primary"
          >
            <span className="block">ATTENTION ISN&apos;T ENOUGH.</span>
            <span className="block text-lime">TURN IT INTO GROWTH.</span>
          </motion.h2>

          <motion.p
            variants={lineVariants}
            className="font-body text-muted text-lg leading-relaxed mt-6 max-w-3xl"
          >
            Growth doesn&apos;t happen by accident. We combine strategy,
            storytelling, and relentless optimization to build engines that
            generate leads, convert buyers, and create brand authority.
          </motion.p>
        </motion.div>

        {/* Metrics row */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
          {METRICS.map((metric, index) => (
            <MetricBlock key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        {/* Capabilities grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((text, index) => (
            <CapabilityItem key={index} text={text} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
