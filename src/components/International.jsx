import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const cards = [
  { label: 'Pozisyon',       value: 'Project Manager',          sub: 'APPASIL Innovations LLC' },
  { label: 'Lokasyon',       value: 'Wyoming, ABD',             sub: 'Organizasyonel Yapılandırma & Kurumsal Danışmanlık' },
  { label: 'Stratejik Rol',  value: 'CEO Düzeyinde Liderlik',   sub: 'Stratejik karar alma ve organizasyonel yönlendirme' },
]

export default function International() {
  return (
    <section id="uluslararasi" className="py-32 md:py-44 lg:py-56 px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">
          {/* ── Text ── */}
          <div>
            <AnimatedSection>
              <p className="text-[10px] tracking-[0.3em] uppercase text-warm font-medium mb-8">
                Uluslararası Çalışmalar
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-[2.8rem] md:text-[3.4rem] text-charcoal mb-12 leading-[1.04]">
                Global ölçekte
                <br />
                <span className="italic text-warm">organizasyonel etki.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-charcoal/45 leading-[2] mb-8 font-light text-[15px]">
                Wyoming eyaletinde konumlanan APPASIL Innovations LLC bünyesinde
                yürütülen organizasyonel yapılandırma ve kurumsal danışmanlık projelerinde{' '}
                <strong className="font-medium text-charcoal/60">Project Manager</strong>{' '}
                olarak görev almaktadır.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-charcoal/38 leading-[2] mb-8 font-light text-[14.5px]">
                Organizasyonel modellerin akademik çerçevesinin oluşturulması, proje
                stratejisinin belirlenmesi, disiplinler arası ekiplerin koordinasyonu
                ve kurumsal paydaşlarla yürütülen süreçlerin yönetiminden sorumludur.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-charcoal/38 leading-[2] font-light text-[14.5px]">
                Yürütülen çalışmalar kapsamında, organizasyonel karar alma
                mekanizmaları ve uygulama süreçlerinde CEO düzeyinde stratejik
                liderlik ve yönlendirme fonksiyonu üstlenmektedir.
              </p>
            </AnimatedSection>
          </div>

          {/* ── Cards ── */}
          <div className="space-y-5 lg:pt-10">
            {cards.map((c, i) => (
              <AnimatedSection key={i} delay={0.15 + i * 0.12} direction="right">
                <motion.div
                  whileHover={{ x: 5, transition: { duration: 0.35 } }}
                  className="group p-10 md:p-12 rounded-[22px] bg-white border border-charcoal/[0.03]
                             hover:shadow-[0_16px_48px_-14px_rgba(0,0,0,0.06)]
                             transition-shadow duration-600 cursor-default"
                >
                  <p className="text-[9.5px] tracking-[0.3em] uppercase text-warm/40 font-medium mb-5">
                    {c.label}
                  </p>
                  <p className="font-serif text-[1.5rem] md:text-[1.65rem] text-charcoal/75 mb-2
                               group-hover:text-warm-dark transition-colors duration-500">
                    {c.value}
                  </p>
                  <p className="text-[12.5px] text-charcoal/28 font-light">{c.sub}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
