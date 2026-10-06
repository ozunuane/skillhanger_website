import { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Work', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'Training', to: '/#training' },
  { label: 'About', to: '/#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollToSection = useCallback((hash) => {
    const id = hash.replace('/#', '')
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname, navigate])

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300',
          scrolled
            ? 'bg-obsidian/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-display font-bold tracking-widest text-white-primary text-sm select-none"
          >
            SKILLHANGER
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <button
                  onClick={() => scrollToSection(to)}
                  className="font-body text-sm text-muted hover:text-white-primary transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="font-body font-medium text-sm bg-lime text-obsidian px-5 py-2.5 rounded-lg hover:scale-105 transition-transform duration-200 select-none"
            >
              Start a Project →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center text-white-primary w-10 h-10 -mr-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-0 z-[60] bg-obsidian/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Close button row */}
            <div className="h-20 flex items-center justify-between px-6">
              <Link
                to="/"
                className="font-display font-bold tracking-widest text-white-primary text-sm"
                onClick={() => setMobileOpen(false)}
              >
                SKILLHANGER
              </Link>
              <button
                className="flex items-center justify-center text-white-primary w-10 h-10 -mr-1"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {NAV_LINKS.map(({ label, to }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.08 + index * 0.07,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <button
                    className="font-display font-bold text-4xl text-white-primary hover:text-lime transition-colors duration-200 block py-3 cursor-pointer"
                    onClick={() => { setMobileOpen(false); scrollToSection(to) }}
                  >
                    {label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.08 + NAV_LINKS.length * 0.07,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="inline-block font-body font-medium text-base bg-lime text-obsidian px-8 py-4 rounded-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Project →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
