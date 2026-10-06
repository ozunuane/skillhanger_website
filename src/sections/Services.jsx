import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.4, 0.25, 1]

const SERVICES = [
  {
    number: '01',
    category: 'Digital Products',
    title: 'Web & Mobile Development',
    description:
      'We architect and ship digital products that users love. From concept to scale, we handle design, engineering, and optimization—so your product works as hard as you do.',
  },
  {
    number: '02',
    category: 'Growth',
    title: 'Digital Marketing That Works',
    description:
      'Traffic is noise. Conversions are truth. We run data-driven campaigns across content, paid, and organic channels to move your growth needle.',
  },
  {
    number: '03',
    category: 'Intelligence',
    title: 'AI & Automation',
    description:
      'Artificial intelligence isn\'t tomorrow—it\'s now. We build intelligent workflows, automation systems, and AI-powered features that multiply your output.',
  },
  {
    number: '04',
    category: 'Talent',
    title: 'Training & Internships',
    description:
      'Frontend, backend, DevOps, and data science training built around real projects. We develop job-ready technologists through hands-on programs and internships.',
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

// ─── Service card ─────────────────────────────────────────────────────────────

function ServiceCard({ service, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative bg-graphite rounded-2xl p-8 md:p-10 border border-transparent hover:border-lime/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default flex flex-col"
    >
      {/* Number */}
      <span className="font-display text-sm text-lime tracking-wider">
        {service.number}
      </span>

      {/* Category */}
      <span className="font-body text-muted text-sm mt-1 uppercase tracking-widest">
        {service.category}
      </span>

      {/* Title */}
      <h3 className="font-display font-bold text-2xl md:text-3xl text-white-primary mt-4 leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-body text-muted text-base leading-relaxed mt-3 flex-1">
        {service.description}
      </p>

      {/* Arrow */}
      <div className="flex justify-end mt-8">
        <ArrowUpRight
          size={20}
          className="text-muted group-hover:text-lime transition-colors duration-300"
        />
      </div>
    </motion.div>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section id="services" className="py-32 bg-obsidian scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section intro */}
        <motion.div
          variants={headlineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2
            variants={lineVariants}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white-primary"
          >
            <span className="block">WE TURN IDEAS INTO</span>
            <span className="block text-lime">DIGITAL ADVANTAGE.</span>
          </motion.h2>

          <motion.p
            variants={lineVariants}
            className="font-body text-muted text-lg max-w-2xl mt-6 leading-relaxed"
          >
            From bold products to measurable growth—we blend technology,
            strategy, and craft to deliver outcomes that matter to your
            business.
          </motion.p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
