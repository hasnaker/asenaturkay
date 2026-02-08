import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const areas = [
  { title: 'Çalışan Verimliliği',     sub: 'Sürdürülebilir performans sistemleri' },
  { title: 'Liderlik Gelişimi',       sub: 'Yönetici yetkinliklerinin güçlendirilmesi' },
  { title: 'Kariyer Kırılmaları',     sub: 'İş akdi feshi sonrası psikolojik destek' },
  { title: 'Psikolojik Dayanıklılık', sub: 'Değişim ve belirsizlik dönemlerinde güçlenme' },
]

export default function Approach() {
  return (
    <section className="py-32 md:py-44 lg:py-56 px-6 lg:px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="max-w-3xl mb-24 lg:mb-32">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm font-medium mb-8">
              Yaklaşım
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-[2.8rem] md:text-[3.4rem] text-charcoal mb-12 leading-[1.04]">
              Güçlü Yönlere Dayalı
              <br />
              <span className="italic text-warm">Kapsayıcı Çalışma Teorisi</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-charcoal/40 leading-[2] font-light text-[15.5px] md:text-[17px]">
              Psikokent Eğitim ve Danışmanlık Merkezi bünyesinde; bireysel
              psikolojik danışmanlık, grup çalışmaları, sanat terapisi temelli
              gelişim programları ve kurumsal danışmanlık hizmetleri sunulmaktadır.
            </p>
          </AnimatedSection>
        </div>

        {/* ── Focus Cards ── */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {areas.map((a, i) => (
            <AnimatedSection key={i} delay={0.08 * i}>
              <motion.div
                whileHover={{ x: 6, transition: { duration: 0.35, ease: 'easeOut' } }}
                className="group flex items-center gap-8 p-9 md:p-12 rounded-[22px] bg-white
                           border border-charcoal/[0.03] hover:border-warm/12
                           transition-colors duration-500 cursor-default"
              >
                <div className="flex-shrink-0 w-[3px] h-10 rounded-full bg-warm/15
                              group-hover:h-16 group-hover:bg-warm/35 transition-all duration-600" />
                <div>
                  <h3 className="font-serif text-xl md:text-[1.4rem] text-charcoal/75 mb-1.5
                               group-hover:text-warm-dark transition-colors duration-500">
                    {a.title}
                  </h3>
                  <p className="text-[12.5px] text-charcoal/28 font-light">{a.sub}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Manifesto Quote ── */}
        <AnimatedSection delay={0.4} className="mt-28 lg:mt-40 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-10 h-[1px] bg-warm/20 mx-auto mb-10" />
            <p className="font-serif text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem] text-charcoal/50 italic leading-[1.5]">
              &ldquo;İnsan odaklı, sürdürülebilir ve kapsayıcı
              organizasyonel yapılar oluşturmak.&rdquo;
            </p>
            <div className="mt-8">
              <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/20 font-medium">
                Asena Türkay
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
