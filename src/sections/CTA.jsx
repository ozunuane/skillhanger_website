import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.4, 0.25, 1]

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

export default function CTA() {
  return (
    <section className="py-32 lg:py-40 bg-obsidian relative overflow-hidden">

      {/* Background lime glow orb */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-lime blur-3xl opacity-[0.07] pointer-events-none"
      />

      {/* Animated border glow container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="rounded-3xl border border-lime/10 px-8 py-16 md:px-16 text-center"
          style={{
            boxShadow: '0 0 60px 0 rgba(199, 255, 61, 0.04)',
          }}
        >

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-white-primary"
          >
            <span className="block">HAVE AN IDEA?</span>
            <span className="block text-lime">LET&apos;S BUILD IT.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-muted text-lg mt-6 max-w-xl mx-auto leading-relaxed"
          >
            Let&apos;s talk about your challenge, your vision, and how we can
            make it real.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="font-body font-medium text-lg bg-lime text-obsidian px-10 py-5 rounded-xl hover:scale-105 transition-transform duration-200 select-none"
            >
              Start a Project &rarr;
            </Link>
            <a
              href="mailto:info@skillhanger.com.ng"
              className="font-body text-lg text-white-primary border border-white/20 px-10 py-5 rounded-xl hover:border-white/40 transition-colors duration-200 select-none"
            >
              Talk to SkillHanger
            </a>
          </motion.div>

        </motion.div>
      </div>

    </section>
  )
}
