import { motion } from 'framer-motion'

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.4, 0.25, 1]

const CAPABILITIES = [
  'Intelligent workflow automation that learns and optimizes your processes.',
  'AI-powered content systems that maintain your voice at scale.',
  'Predictive analytics that turn raw data into actionable strategy.',
  'Conversational AI and chatbot systems that convert and support 24/7.',
  'Computer vision for product inspection, data extraction, and insights.',
  'Custom language models trained on your business data for competitive edge.',
]

const FLOW_NODES = [
  'Human Input',
  'AI Processing',
  'Automation',
  'Business Outcome',
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

const flowNodeVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
}

const connectorVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: (i) => ({
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.12 + 0.06,
      ease: EASE,
    },
  }),
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
      className="bg-graphite rounded-xl p-5 border border-white/5 hover:border-violet/30 transition-colors duration-300 flex items-start gap-4"
    >
      <span className="w-2 h-2 rounded-full bg-violet mt-2 shrink-0" />
      <p className="font-body text-white-primary text-base leading-relaxed">
        {text}
      </p>
    </motion.div>
  )
}

// ─── Flow diagram ─────────────────────────────────────────────────────────────

function FlowDiagram() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="hidden md:flex flex-col items-center mt-20"
    >
      {FLOW_NODES.map((node, i) => (
        <div key={node} className="flex flex-col items-center">
          {/* Node */}
          <motion.div
            custom={i}
            variants={flowNodeVariants}
            className="flex items-center gap-3"
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: '#8B5CF6', opacity: 0.6 + i * 0.1 }}
            />
            <span className="font-body text-xs uppercase tracking-widest text-muted">
              {node}
            </span>
          </motion.div>

          {/* Connector line between nodes */}
          {i < FLOW_NODES.length - 1 && (
            <motion.div
              custom={i}
              variants={connectorVariants}
              aria-hidden="true"
              className="w-px h-8 my-1"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(139,92,246,0.4), rgba(139,92,246,0.1))',
                transformOrigin: 'top',
              }}
            />
          )}
        </div>
      ))}
    </motion.div>
  )
}

// ─── AI ───────────────────────────────────────────────────────────────────────

export default function AI() {
  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">

      {/* Violet radial orb — top right */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />

      {/* Subtle violet glow — bottom left */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Two-column layout */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left column — headline */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p
              variants={lineVariants}
              className="font-body font-medium text-sm text-violet tracking-[0.3em] uppercase mb-4"
            >
              INTELLIGENCE
            </motion.p>

            <motion.h2
              variants={lineVariants}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-white-primary"
            >
              <span className="block">AI ISN&apos;T THE FUTURE.</span>
              <span className="block text-violet">IT&apos;S THE ADVANTAGE.</span>
            </motion.h2>

            <motion.p
              variants={lineVariants}
              className="font-body text-muted text-lg leading-relaxed mt-6"
            >
              We don&apos;t just talk about artificial intelligence. We build it
              into your operations, your products, and your workflows—AI that
              reduces costs, accelerates decisions, and unlocks growth.
            </motion.p>
          </motion.div>

          {/* Right column — capabilities */}
          <div className="flex flex-col gap-4 mt-12 lg:mt-0">
            {CAPABILITIES.map((text, index) => (
              <CapabilityItem key={index} text={text} index={index} />
            ))}
          </div>

        </div>

        {/* Flow diagram — below columns */}
        <FlowDiagram />

      </div>
    </section>
  )
}
