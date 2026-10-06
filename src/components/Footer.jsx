import { Link } from 'react-router-dom'

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES_LINKS = [
  { label: 'Web Development', to: '/services' },
  { label: 'Mobile Development', to: '/services' },
  { label: 'Digital Marketing', to: '/services' },
  { label: 'AI & Automation', to: '/services' },
]

const TRAINING_LINKS = [
  { label: 'Frontend Development', to: '/training' },
  { label: 'Backend Development', to: '/training' },
  { label: 'DevOps & Cloud', to: '/training' },
  { label: 'Data Science & Analysis', to: '/training' },
  { label: 'Internship Programs', to: '/training' },
]

const COMPANY_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Training', to: '/training' },
  { label: 'Contact', to: '/contact' },
]

const CONNECT_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/skillhanger/' },
  { label: 'Instagram', href: 'https://www.instagram.com/skillhanger/' },
  { label: 'Facebook', href: 'https://www.facebook.com/skillhanger' },
]

const SOCIAL_ICONS = [
  { label: 'LinkedIn', initial: 'in', href: 'https://www.linkedin.com/company/skillhanger/' },
  { label: 'Instagram', initial: 'Ig', href: 'https://www.instagram.com/skillhanger/' },
  { label: 'Facebook', initial: 'Fb', href: 'https://www.facebook.com/skillhanger' },
]

// ─── Reusable column heading ──────────────────────────────────────────────────

function ColHeading({ children }) {
  return (
    <h3 className="text-white-primary font-display font-medium text-sm tracking-wider uppercase mb-4">
      {children}
    </h3>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5">
      <div className="py-20 max-w-7xl mx-auto px-6">

        {/* ── Top grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display font-bold text-2xl tracking-widest text-white-primary hover:text-lime transition-colors duration-200"
            >
              SKILLHANGER
            </Link>

            <p className="text-muted text-base mt-4 max-w-xs leading-relaxed font-body">
              Digital products. Growth strategies. AI and automation. Talent for
              tomorrow.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6" aria-label="Social media links">
              {SOCIAL_ICONS.map(({ label, initial, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center text-muted hover:text-lime hover:bg-graphite transition-colors duration-200 font-body text-xs font-medium select-none"
                >
                  {initial}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <ColHeading>Services</ColHeading>
            <ul className="space-y-0">
              {SERVICES_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-muted text-sm leading-loose hover:text-white-primary transition-colors duration-200 font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Training */}
          <div>
            <ColHeading>Training</ColHeading>
            <ul className="space-y-0">
              {TRAINING_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-muted text-sm leading-loose hover:text-white-primary transition-colors duration-200 font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <ColHeading>Company</ColHeading>
            <ul className="space-y-0">
              {COMPANY_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-muted text-sm leading-loose hover:text-white-primary transition-colors duration-200 font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <ColHeading>Connect</ColHeading>
            <ul className="space-y-0">
              {CONNECT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted text-sm leading-loose hover:text-white-primary transition-colors duration-200 font-body"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@skillhanger.com.ng"
                  className="text-lime text-sm leading-loose hover:text-white-primary transition-colors duration-200 font-body"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-muted text-sm font-body">
            &copy; 2026 SkillHanger. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted text-sm hover:text-white-primary transition-colors duration-200 font-body"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted text-sm hover:text-white-primary transition-colors duration-200 font-body"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
