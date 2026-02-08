import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const inputBase =
  'w-full bg-transparent border-b border-white/[0.06] pb-5 pt-1 text-white/70 ' +
  'placeholder-white/12 focus:border-warm/30 focus:outline-none transition-colors ' +
  'duration-600 font-light text-[14.5px] tracking-wide'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="iletisim" className="py-32 md:py-44 lg:py-56 px-6 lg:px-8 bg-charcoal-dark text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">
          {/* ── Left ── */}
          <div>
            <AnimatedSection>
              <p className="text-[10px] tracking-[0.3em] uppercase text-warm-light/40 font-medium mb-8">
                İletişim
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-[2.8rem] md:text-[3.4rem] mb-12 leading-[1.04]">
                Birlikte
                <br />
                <span className="italic text-warm-light/70">çalışalım.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-white/25 leading-[2] font-light mb-16 max-w-sm text-[14.5px]">
                Kurumsal danışmanlık, bireysel psikolojik destek veya
                organizasyonel yapılandırma projeleriniz için iletişime geçin.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="space-y-10">
                <div>
                  <p className="text-[9.5px] tracking-[0.3em] uppercase text-white/14 mb-2.5">Merkez</p>
                  <p className="text-white/50 font-light text-[14.5px]">Psikokent Eğitim ve Danışmanlık Merkezi</p>
                  <p className="text-white/22 font-light text-[12.5px] mt-1">Ankara, Türkiye</p>
                </div>
                <div>
                  <p className="text-[9.5px] tracking-[0.3em] uppercase text-white/14 mb-2.5">Uluslararası</p>
                  <p className="text-white/50 font-light text-[14.5px]">APPASIL Innovations LLC</p>
                  <p className="text-white/22 font-light text-[12.5px] mt-1">Wyoming, ABD</p>
                </div>
                <div>
                  <p className="text-[9.5px] tracking-[0.3em] uppercase text-white/14 mb-2.5">E-posta</p>
                  <a href="mailto:info@asenaturkay.com" className="text-warm-light/50 hover:text-warm-light/80 font-light text-[14.5px] transition-colors duration-300">
                    info@asenaturkay.com
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Right: Form ── */}
          <AnimatedSection delay={0.15}>
            <form className="space-y-9 lg:pt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[9.5px] tracking-[0.28em] uppercase text-white/15 mb-4">
                  İsim Soyisim
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className={inputBase}
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label className="block text-[9.5px] tracking-[0.28em] uppercase text-white/15 mb-4">
                  E-posta
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className={inputBase}
                  placeholder="E-posta adresiniz"
                />
              </div>

              <div>
                <label className="block text-[9.5px] tracking-[0.28em] uppercase text-white/15 mb-4">
                  Konu
                </label>
                <select
                  value={form.subject}
                  onChange={update('subject')}
                  className={`${inputBase} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-charcoal-dark text-white/30">Konu seçiniz</option>
                  <option value="kurumsal" className="bg-charcoal-dark">Kurumsal Danışmanlık</option>
                  <option value="bireysel" className="bg-charcoal-dark">Bireysel Danışmanlık</option>
                  <option value="liderlik" className="bg-charcoal-dark">Liderlik Gelişimi</option>
                  <option value="upcore" className="bg-charcoal-dark">UpCore Hizmetleri</option>
                  <option value="diger" className="bg-charcoal-dark">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-[9.5px] tracking-[0.28em] uppercase text-white/15 mb-4">
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={update('message')}
                  className={`${inputBase} resize-none`}
                  placeholder="Mesajınızı yazın..."
                />
              </div>

              {/* Submit Button + Status */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 text-emerald-400/70 text-[13.5px] font-light"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Mesajınız başarıyla gönderildi.
                    </motion.div>
                  ) : status === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 text-red-400/70 text-[13.5px] font-light"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      Bir hata oluştu. Lütfen tekrar deneyin.
                    </motion.div>
                  ) : (
                    <motion.button
                      key="btn"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={status === 'sending'}
                      type="submit"
                      className="px-12 py-[18px] bg-warm/12 hover:bg-warm/22 text-warm-light/80
                               text-[11px] tracking-[0.16em] uppercase rounded-full
                               transition-colors duration-500 font-medium cursor-pointer
                               disabled:opacity-40 disabled:cursor-wait"
                    >
                      {status === 'sending' ? (
                        <span className="flex items-center gap-3">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Gönderiliyor...
                        </span>
                      ) : (
                        'Gönder'
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
