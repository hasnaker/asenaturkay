import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from './AnimatedSection'

const credentials = [
  { top: 'Doktora',          bottom: 'Gazi Üniversitesi' },
  { top: 'Kurucu Danışman',  bottom: 'UpCore Systems' },
  { top: 'Project Manager',  bottom: 'APPASIL — Wyoming, ABD' },
  { top: 'Kurucu',           bottom: 'Psikokent Merkezi' },
]

function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {value}{suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">{value}{suffix}</span>
      )}
    </span>
  )
}

export default function About() {
  return (
    <section id="hakkinda" className="py-32 md:py-44 lg:py-56 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <AnimatedSection>
          <p className="text-[10px] tracking-[0.3em] uppercase text-warm font-medium mb-10">
            Hakkında
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-28">
          {/* ── Left: Pull Quote ── */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] text-charcoal leading-[1.04] mb-12">
                Akademik
                <br />
                derinlik,
                <br />
                <span className="text-warm italic">kurumsal etki.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="w-10 h-[1px] bg-warm/25 mb-8" />
              <div className="space-y-0.5 text-[12.5px] text-charcoal/30 tracking-wide font-light">
                <p>Gazi Üniversitesi</p>
                <p>Psikolojik Danışma ve Rehberlik</p>
                <p className="text-warm/50 font-normal">Doktora Programı</p>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Right: Biography ── */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.15}>
              <p className="text-[1.15rem] md:text-[1.3rem] text-charcoal/60 leading-[1.9] mb-9 font-light">
                Asena Türkay, 1995 yılında Ankara'da doğmuştur. İlk, orta ve lise
                öğrenimini Ankara'da tamamlamış; Psikolojik Danışma ve Rehberlik
                alanındaki lisans ve yüksek lisans eğitimlerinin ardından akademik
                çalışmalarını Gazi Üniversitesi Psikolojik Danışma ve Rehberlik
                Doktora Programı'nda sürdürmektedir.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-[15px] text-charcoal/42 leading-[2] font-light">
                Doktora çalışmalarında pozitif psikoloji ve örgütsel psikoloji
                disiplinlerinin kesişiminde yoğunlaşmakta; iş yaşamında umut,
                güçlü yönler, psikolojik sağlamlık, psikolojik güçlenme, aidiyet
                ve anlam gibi kavramların bireysel performans, liderlik kapasitesi
                ve organizasyonel sürdürülebilirlik üzerindeki etkilerini bilimsel
                yöntemlerle incelemektedir. Akademik çalışmalarının odağında,
                bilimsel bilgi üretimini kurumsal uygulamalarla bütünleştirmek yer
                almaktadır.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* ── Credentials Row ── */}
        <div className="mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-charcoal/[0.04] rounded-2xl overflow-hidden">
          {credentials.map((c, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="bg-cream p-8 md:p-10 text-center group cursor-default hover:bg-surface transition-colors duration-500">
                <p className="font-serif text-xl md:text-[1.4rem] text-charcoal/75 mb-1.5 group-hover:text-warm-dark transition-colors duration-500">
                  {c.top}
                </p>
                <p className="text-[11px] tracking-[0.1em] text-charcoal/25 font-light">
                  {c.bottom}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
