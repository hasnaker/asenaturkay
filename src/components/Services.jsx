import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const I = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-[22px] h-[22px]">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)

const services = [
  {
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    title: 'Kurumsal Danışmanlık',
    desc: 'Organizasyonel yapılandırma, İK süreç optimizasyonu ve kurumsal dönüşüm projelerinde bilimsel referanslı danışmanlık.',
  },
  {
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    title: 'Liderlik Gelişimi',
    desc: 'Yönetici yetkinliklerinin değerlendirilmesi, liderlik kapasitesinin güçlendirilmesi ve stratejik karar alma süreçlerinin desteklenmesi.',
  },
  {
    icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    title: 'Bireysel Danışmanlık',
    desc: 'Kariyer kırılmaları, iş kaynaklı psikolojik belirtiler ve bireysel gelişim süreçlerinde profesyonel danışmanlık desteği.',
  },
  {
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    title: 'Grup Çalışmaları',
    desc: 'Takım dinamikleri, grup süreçleri ve kolektif kapasite geliştirme odaklı yapılandırılmış grup çalışmaları.',
  },
  {
    icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
    title: 'Sanat Terapisi',
    desc: 'Sanat terapisi temelli gelişim programları ile bireylerin yaratıcı ifade yoluyla iyileşme ve gelişim süreçlerinin desteklenmesi.',
  },
  {
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605',
    title: 'Performans Sistemleri',
    desc: 'Ölçülebilir ve sürdürülebilir performans değerlendirme modellerinin tasarlanması ve uygulanması.',
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className="py-32 md:py-44 lg:py-56 px-6 lg:px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-24 lg:mb-32">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm font-medium mb-8">
              Uzmanlık Alanları
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] text-charcoal mb-8">
              Hizmetler
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-charcoal/35 max-w-sm mx-auto leading-[1.8] font-light text-[14.5px]">
              Akademik uzmanlık ve saha deneyimini bir araya getiren,
              bilimsel temelli danışmanlık çözümleri.
            </p>
          </AnimatedSection>
        </div>

        {/* ── Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={0.07 * i}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
                className="group relative p-10 md:p-12 rounded-[22px] bg-white
                           border border-charcoal/[0.03]
                           hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.07)]
                           transition-shadow duration-700 cursor-default h-full"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-surface/80 flex items-center justify-center text-warm/70 mb-8
                              group-hover:bg-warm/[0.08] group-hover:text-warm transition-all duration-600">
                  <I d={s.icon} />
                </div>

                <h3 className="font-serif text-[1.25rem] md:text-[1.35rem] text-charcoal/80 mb-3
                             group-hover:text-warm-dark transition-colors duration-500">
                  {s.title}
                </h3>

                <p className="text-[12.5px] text-charcoal/30 leading-[1.75] font-light">
                  {s.desc}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-10 right-10 h-[2px] rounded-full bg-transparent
                              group-hover:bg-warm/15 transition-colors duration-700" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
