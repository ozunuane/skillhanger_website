import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

// ─── Background orbs ─────────────────────────────────────────────────────────

function BackgroundOrbs() {
  const orbs = [
    {
      color: 'bg-lime',
      size: 'w-[520px] h-[520px]',
      position: '-top-32 -left-24',
      duration: 11,
      yRange: [-20, 20],
    },
    {
      color: 'bg-violet',
      size: 'w-[480px] h-[480px]',
      position: '-bottom-24 -right-20',
      duration: 14,
      yRange: [20, -20],
    },
    {
      color: 'bg-white-primary',
      size: 'w-[340px] h-[340px]',
      position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      duration: 9,
      yRange: [-14, 14],
    },
  ]

  return (
    <>
      {orbs.map(({ color, size, position, duration, yRange }, i) => (
        <motion.div
          key={i}
          className={`absolute ${size} ${position} ${color} rounded-full blur-3xl opacity-[0.12] pointer-events-none`}
          animate={{ y: yRange }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

// ─── Grid overlay ─────────────────────────────────────────────────────────────

function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-[0.035]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 79px,
            rgba(245,247,250,0.6) 79px,
            rgba(245,247,250,0.6) 80px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 79px,
            rgba(245,247,250,0.6) 79px,
            rgba(245,247,250,0.6) 80px
          )
        `,
      }}
    />
  )
}

// ─── Noise overlay ───────────────────────────────────────────────────────────

function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
    />
  )
}

// ─── Service labels ───────────────────────────────────────────────────────────

const SERVICES = ['Web', 'Mobile', 'AI', 'Growth']

function ServiceLabels() {
  return (
    <div className="flex items-center gap-6 flex-wrap justify-center">
      {SERVICES.map((service, index) => (
        <div key={service} className="flex items-center gap-6">
          <span className="font-body text-sm text-muted tracking-wider uppercase">
            {service}
          </span>
          {index < SERVICES.length - 1 && (
            <span className="w-1 h-1 rounded-full bg-muted/40 block" />
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian pt-20">

      {/* Background layers */}
      <GridOverlay />
      <BackgroundOrbs />
      <NoiseOverlay />

      {/* Radial vignette to keep edges dark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #08090B 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full mx-auto px-6 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Label */}
        <motion.p
          variants={itemVariants}
          className="font-body font-medium text-sm text-lime tracking-[0.3em] uppercase mb-6"
        >
          Digital Agency
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-white-primary"
        >
          <span className="block">WE BUILD</span>
          <span className="block">WHAT&apos;S NEXT.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-body text-muted text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
        >
          Digital products, growth systems and AI-powered experiences built for
          ambitious businesses.
        </motion.p>

        {/* Button group */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Link
            to="/contact"
            className="font-body font-medium text-base bg-lime text-obsidian px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-200 select-none"
          >
            Start a Project →
          </Link>
          <Link
            to="/work"
            className="font-body text-base text-white-primary border border-white/20 px-8 py-4 rounded-xl hover:border-white/40 transition-colors duration-200 select-none"
          >
            Explore Our Work
          </Link>
        </motion.div>

        {/* Service labels */}
        <motion.div variants={itemVariants} className="mt-12">
          <ServiceLabels />
        </motion.div>
      </motion.div>
    </section>
  )
}
