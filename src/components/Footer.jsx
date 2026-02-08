export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-charcoal-dark border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo */}
          <img
            src="/ASENAHOCAM.png"
            alt="Asena Türkay"
            className="h-[18px] w-auto brightness-0 invert opacity-20"
          />

          {/* Copyright */}
          <p className="text-[10px] tracking-[0.18em] text-white/12 font-light order-3 md:order-2">
            &copy; {new Date().getFullYear()} Asena Türkay &mdash; Tüm hakları saklıdır.
          </p>

          {/* Nav */}
          <div className="flex items-center gap-9 order-2 md:order-3">
            {[
              ['#hakkinda', 'Hakkında'],
              ['#upcore', 'UpCore'],
              ['#hizmetler', 'Hizmetler'],
              ['#iletisim', 'İletişim'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[10px] tracking-[0.14em] uppercase text-white/15
                         hover:text-white/40 transition-colors duration-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
