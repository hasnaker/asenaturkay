import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const pillars = [
  {
    num: '01',
    title: 'Liderlik Kapasitesi',
    text: 'Yönetici yetkinliklerinin geliştirilmesi ve stratejik liderlik kapasitesinin güçlendirilmesi.',
  },
  {
    num: '02',
    title: 'Sürdürülebilir Performans',
    text: 'Çalışan verimliliği ve uzun vadeli performans sistemlerinin bilimsel temelde yapılandırılması.',
  },
  {
    num: '03',
    title: 'Psikolojik Sağlamlık',
    text: 'Tükenmişlik risklerinin yönetimi ve bireysel dayanıklılığın organizasyonel düzeyde desteklenmesi.',
  },
  {
    num: '04',
    title: 'Aidiyet & Bağlılık',
    text: 'Kapsayıcı çalışma kültürlerinin inşası ve organizasyonel bağlılığın güçlendirilmesi.',
  },
  {
    num: '05',
    title: 'Değişim Yönetimi',
    text: 'Yeniden yapılanma ve belirsizlik süreçlerinin insan boyutuyla yönetilmesi.',
  },
]

export default function UpCore() {
  return (
    <section
      id="upcore"
      className="relative py-32 md:py-44 lg:py-56 bg-charcoal-dark text-white overflow-hidden"
    >
      {/* ── Ambient elements ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(154,140,122,0.04) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-[25%] left-[8%] w-[250px] h-[250px] rounded-full border border-white/[0.015]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-24 lg:mb-32">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-light/50 font-medium mb-8">
              Organizasyonel Yaklaşım
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-[3.5rem] md:text-7xl lg:text-8xl tracking-tight mb-5">
              Up<span className="text-warm-light">Core</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-[11px] tracking-[0.22em] uppercase text-white/18 mb-12">
              Organizational Psychology &amp; Leadership Systems
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-[15.5px] md:text-[17px] text-white/30 max-w-2xl leading-[1.95] font-light">
              İş psikolojisi, liderlik bilimleri ve pozitif psikoloji alanlarındaki güncel
              akademik literatüre dayanan; kurumların insan kaynağına ilişkin karar alma,
              yapılandırma ve dönüşüm süreçlerini stratejik, ölçülebilir ve sürdürülebilir
              bir çerçevede ele alan organizasyonel danışmanlık ve sistem yaklaşımı.
            </p>
          </AnimatedSection>
        </div>

        {/* ── Pillars ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.04] rounded-[22px] overflow-hidden">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.num} delay={0.1 * i}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                transition={{ duration: 0.4 }}
                className="bg-charcoal-dark p-10 lg:p-14 min-h-[240px] flex flex-col justify-between group cursor-default"
              >
                <span className="text-[9.5px] tracking-[0.3em] text-warm/35 font-medium mb-8 block">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-serif text-[1.4rem] md:text-[1.55rem] text-white/80 mb-3.5 group-hover:text-warm-light transition-colors duration-600">
                    {p.title}
                  </h3>
                  <p className="text-[12.5px] text-white/22 leading-[1.75] font-light">
                    {p.text}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}

          {/* CTA cell */}
          <AnimatedSection delay={0.5}>
            <motion.a
              href="#iletisim"
              whileHover={{ backgroundColor: 'rgba(154,140,122,0.08)' }}
              transition={{ duration: 0.4 }}
              className="bg-charcoal-dark p-10 lg:p-14 min-h-[240px] flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-warm/15 flex items-center justify-center mb-6 group-hover:border-warm/35 group-hover:scale-110 transition-all duration-600">
                <svg
                  className="w-4 h-4 text-warm/35 group-hover:text-warm-light transition-colors duration-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <span className="text-[11px] tracking-[0.15em] uppercase text-white/20 group-hover:text-white/45 transition-colors duration-500 font-medium">
                Detaylı Bilgi
              </span>
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
