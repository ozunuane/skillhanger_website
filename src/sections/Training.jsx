import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Server, BarChart3, Globe, Cloud } from 'lucide-react'

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.4, 0.25, 1]

const PROGRAMS = [
  {
    icon: Globe,
    title: 'Frontend Development',
    description:
      'React, Next.js, TypeScript and modern CSS. Build interfaces that users love and businesses depend on.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'APIs, databases, authentication and system design. Build the engines that power real applications.',
    tags: ['Node.js', 'Python', 'PostgreSQL', 'REST/GraphQL'],
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud Engineering',
    description:
      'CI/CD, containers, infrastructure as code and cloud platforms. Ship and scale with confidence.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    icon: BarChart3,
    title: 'Data Science & Analysis',
    description:
      'Python, SQL, machine learning and data visualization. Turn raw data into decisions that drive growth.',
    tags: ['Python', 'SQL', 'Pandas', 'Machine Learning'],
  },
]

const STEPS = [
  {
    number: '1',
    name: 'Learn',
    description: 'Master industry tools through hands-on curriculum.',
  },
  {
    number: '2',
    name: 'Build',
    description: 'Ship real projects for your portfolio.',
  },
  {
    number: '3',
    name: 'Collaborate',
    description: 'Work in teams on live client projects.',
  },
  {
    number: '4',
    name: 'Experience',
    description: 'Internship placements solving real problems.',
  },
  {
    number: '5',
    name: 'Career',
    description: 'Launch into roles with confidence.',
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

const stepsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}

// ─── Program card ─────────────────────────────────────────────────────────────

function ProgramCard({ program, index }) {
  const Icon = program.icon
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group bg-graphite rounded-2xl p-8 border border-transparent hover:border-lime/20 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
    >
      <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center mb-4">
        <Icon size={20} className="text-lime" />
      </div>

      <h3 className="font-display font-bold text-xl md:text-2xl text-white-primary leading-tight">
        {program.title}
      </h3>

      <p className="font-body text-muted text-base leading-relaxed mt-3 flex-1">
        {program.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {program.tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-xs text-muted bg-obsidian px-3 py-1 rounded-full border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Journey step ─────────────────────────────────────────────────────────────

function JourneyStep({ step }) {
  return (
    <motion.div
      variants={stepVariants}
      className="flex flex-col items-center flex-1"
    >
      <div className="w-10 h-10 rounded-full border-2 border-lime/30 flex items-center justify-center shrink-0">
        <span className="font-display font-bold text-lime text-sm leading-none">
          {step.number}
        </span>
      </div>

      <p className="font-display font-bold text-base text-white-primary mt-2 text-center">
        {step.name}
      </p>

      <p className="text-muted text-xs mt-1 max-w-[160px] text-center leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  )
}

// ─── Step connector ───────────────────────────────────────────────────────────

function StepConnector() {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:flex lg:flex-1 lg:items-start lg:pt-5 shrink-0 min-w-[16px]"
    >
      <div className="w-full h-px bg-gradient-to-r from-lime/20 to-lime/5" />
    </div>
  )
}

// ─── Training ─────────────────────────────────────────────────────────────────

export default function Training() {
  return (
    <section id="training" className="py-32 bg-obsidian scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section intro */}
        <motion.div
          variants={headlineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={lineVariants}
            className="font-body font-medium text-sm text-lime tracking-[0.3em] uppercase mb-4"
          >
            Training &amp; Internships
          </motion.p>

          <motion.h2
            variants={lineVariants}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-white-primary"
          >
            <span className="block">BUILDING THE PEOPLE</span>
            <span className="block text-lime">WHO BUILD TOMORROW.</span>
          </motion.h2>

          <motion.p
            variants={lineVariants}
            className="font-body text-muted text-lg leading-relaxed mt-6 max-w-3xl"
          >
            Practical, project-based training and internship programs in the
            technologies that companies actually hire for. No theory dumps—real
            skills, real projects, real career outcomes.
          </motion.p>
        </motion.div>

        {/* Program cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>

        {/* Journey */}
        <motion.div
          variants={stepsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-20 flex flex-col lg:flex-row lg:items-start"
        >
          {STEPS.reduce((acc, step, index) => {
            acc.push(<JourneyStep key={step.number} step={step} />)
            if (index < STEPS.length - 1) {
              acc.push(<StepConnector key={`connector-${index}`} />)
            }
            return acc
          }, [])}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/training"
            className="font-body font-medium text-base bg-lime text-obsidian px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-200 select-none"
          >
            Explore Training &rarr;
          </Link>
          <Link
            to="/contact"
            className="font-body text-base text-white-primary border border-white/20 px-8 py-4 rounded-xl hover:border-white/40 transition-colors duration-200 select-none"
          >
            Apply for Internship
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
