import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#hakkinda',     label: 'Hakkında' },
  { href: '#upcore',       label: 'UpCore' },
  { href: '#hizmetler',    label: 'Hizmetler' },
  { href: '#uluslararasi', label: 'Uluslararası' },
  { href: '#iletisim',     label: 'İletişim' },
]

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setPastHero(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkColor = pastHero
    ? 'text-charcoal/45 hover:text-charcoal'
    : 'text-white/25 hover:text-white/60'

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          pastHero
            ? 'bg-cream/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.035)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-[88px]">
            {/* Logo */}
            <a href="#" className="relative z-50">
              <img
                src="/ASENAHOCAM.png"
                alt="Asena Türkay"
                className={`h-[22px] lg:h-[26px] w-auto transition-all duration-700 ${
                  pastHero
                    ? 'opacity-70 hover:opacity-100'
                    : 'brightness-0 invert opacity-40 hover:opacity-60'
                }`}
              />
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-11 lg:gap-14">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative text-[10.5px] font-medium tracking-[0.14em] uppercase transition-colors duration-400 group ${linkColor}`}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-warm group-hover:w-full transition-all duration-500 ease-out" />
                </a>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Menü"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={
                    i === 0
                      ? open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }
                      : i === 1
                      ? open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
                      : open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }
                  }
                  className={`block w-5 h-[1px] origin-center transition-colors duration-500 ${
                    open || pastHero ? 'bg-charcoal' : 'bg-white/50'
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Full-screen Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-40 bg-cream/[0.97] backdrop-blur-3xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.5 }}
                  className="font-serif text-[2.5rem] text-charcoal hover:text-warm transition-colors duration-300"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
