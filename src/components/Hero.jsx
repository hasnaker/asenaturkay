import { motion } from 'framer-motion'

const easeOut = [0.25, 0.1, 0.25, 1]
const easePower = [0.76, 0, 0.24, 1]

/* Reusable text-reveal wrapper — masks overflow, slides child up */
function Reveal({ children, delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '120%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, delay, ease: easePower }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden bg-charcoal-dark">
      {/* ── Ambient glow ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(154,140,122,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Decorative ring ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: 'easeOut' }}
        className="absolute w-[520px] h-[520px] md:w-[700px] md:h-[700px] rounded-full border border-white/[0.025]"
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-5xl w-full">
        {/* Logo — blur-to-sharp + scale */}
        <motion.div
          initial={{ opacity: 0, scale: 1.12, filter: 'blur(24px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2.2, delay: 0.2, ease: easeOut }}
          className="mb-16 md:mb-20"
        >
          <img
            src="/ASENAHOCAM.png"
            alt="Asena Türkay"
            className="w-auto h-20 sm:h-28 md:h-36 lg:h-44 mx-auto brightness-0 invert opacity-85 select-none"
            draggable={false}
          />
        </motion.div>

        {/* Expanding accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: easeOut }}
          className="w-20 h-[1px] bg-warm/25 mx-auto mb-12 md:mb-14 origin-center"
        />

        {/* Label */}
        <div className="mb-8">
          <Reveal delay={1.6}>
            <p className="text-[10.5px] sm:text-[11.5px] tracking-[0.32em] uppercase text-white/25 font-medium">
              Doktorant Psikolojik Danışman
            </p>
          </Reveal>
        </div>

        {/* Main heading — two lines, staggered reveals */}
        <div className="mb-10 md:mb-12">
          <Reveal delay={1.9}>
            <h1 className="font-serif text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-white/90 leading-[1.06] pb-1">
              Organizasyonel Psikoloji
            </h1>
          </Reveal>
          <Reveal delay={2.15}>
            <h1 className="font-serif text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.06]">
              <span className="text-warm-light/80">&amp;</span>{' '}
              <span className="italic text-warm-light/60">Liderlik Sistemleri</span>
            </h1>
          </Reveal>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: easeOut }}
          className="text-white/20 text-[13.5px] sm:text-[15px] max-w-md mx-auto leading-[1.85] font-light"
        >
          Bilimsel bilgi üretimini kurumsal uygulamalarla bütünleştiren,
          insan odaklı organizasyonel dönüşüm.
        </motion.p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1.2 }}
        className="absolute bottom-10 sm:bottom-16 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-[8.5px] tracking-[0.35em] uppercase text-white/12 font-medium">
            Keşfet
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/12 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
