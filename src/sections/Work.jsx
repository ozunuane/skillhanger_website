import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.4, 0.25, 1]

const PROJECTS = [
  {
    name: 'TechFlow Dashboard',
    sector: 'SaaS / Analytics',
    tags: 'Web Application · Product Design · Development',
    result: '50k+ daily active users with 40% faster insights delivery.',
    gradient: 'from-obsidian via-[#0d1117] to-violet/40',
    accentFrom: '#8B5CF6',
    accentTo: '#08090B',
  },
  {
    name: 'Velocity Growth Campaign',
    sector: 'E-Commerce',
    tags: 'Digital Marketing · SEO · Content Strategy',
    result: '$2.3M attributed revenue in 6 months.',
    gradient: 'from-obsidian via-[#0d1117] to-lime/20',
    accentFrom: '#C7FF3D',
    accentTo: '#08090B',
  },
  {
    name: 'AutoScale Integration',
    sector: 'HR Tech',
    tags: 'AI Integration · Automation · Backend',
    result: '85% reduction in manual processing time.',
    gradient: 'from-obsidian via-[#0d1117] to-violet/30',
    accentFrom: '#8B5CF6',
    accentTo: '#101216',
  },
  {
    name: 'Developer Academy',
    sector: 'Tech Education',
    tags: 'Training Program · Curriculum · Internship Network',
    result: '200+ developers trained, 92% placement rate.',
    gradient: 'from-obsidian via-[#0d1117] to-lime/15',
    accentFrom: '#C7FF3D',
    accentTo: '#101216',
  },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
}

const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}

// ─── Project placeholder image ────────────────────────────────────────────────

function ProjectImage({ project }) {
  return (
    <div className="aspect-video bg-[#181C22] rounded-2xl overflow-hidden relative">
      {/* Gradient layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 70% at 30% 40%, ${project.accentFrom}22 0%, transparent 65%), linear-gradient(135deg, #08090B 0%, #181C22 60%, ${project.accentFrom}18 100%)`,
        }}
      />

      {/* Subtle grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(245,247,250,0.8) 39px, rgba(245,247,250,0.8) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(245,247,250,0.8) 39px, rgba(245,247,250,0.8) 40px)
          `,
        }}
      />

      {/* Sector label centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display font-bold text-xs tracking-[0.25em] uppercase opacity-20"
          style={{ color: project.accentFrom }}
        >
          {project.sector}
        </span>
      </div>

      {/* Hover scale layer — handled by parent group */}
    </div>
  )
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group cursor-pointer"
    >
      {/* Image area with hover scale */}
      <div className="overflow-hidden rounded-2xl">
        <div className="group-hover:scale-[1.03] transition-transform duration-500">
          <ProjectImage project={project} />
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-4">
        <h3 className="font-display font-bold text-xl md:text-2xl text-white-primary">
          {project.name}
        </h3>
        <p className="font-body text-muted text-sm mt-1">{project.tags}</p>
        <p className="font-body text-muted text-sm mt-2 italic">{project.result}</p>
      </div>
    </motion.div>
  )
}

// ─── Work ─────────────────────────────────────────────────────────────────────

export default function Work() {
  return (
    <section id="work" className="py-32 bg-graphite scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14"
        >
          <motion.p
            variants={lineVariants}
            className="font-body font-medium text-sm text-lime tracking-[0.3em] uppercase mb-4"
          >
            PORTFOLIO
          </motion.p>

          <motion.h2
            variants={lineVariants}
            className="font-display font-bold text-5xl md:text-6xl tracking-tight text-white-primary"
          >
            SELECTED WORK.
          </motion.h2>
        </motion.div>

        {/* First row — 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Second row — 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {PROJECTS.slice(2).map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index + 2}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/work"
            className="font-body font-medium text-lime hover:underline underline-offset-4 transition-all duration-200"
          >
            View All Work →
          </Link>
        </div>

      </div>
    </section>
  )
}
