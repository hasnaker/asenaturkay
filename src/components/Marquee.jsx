const phrases = [
  'Organizasyonel Psikoloji',
  'Liderlik Sistemleri',
  'İnsan Kaynakları',
  'Pozitif Psikoloji',
  'Kurumsal Danışmanlık',
  'UpCore',
  'Psikolojik Sağlamlık',
  'Stratejik Yönetim',
  'Değişim Yönetimi',
]

function Phrase({ text }) {
  return (
    <span className="inline-flex items-center gap-10 mx-10">
      <span className="font-serif text-[1.15rem] md:text-xl tracking-wide text-charcoal/[0.14] whitespace-nowrap italic">
        {text}
      </span>
      <span className="w-[5px] h-[5px] rounded-full bg-warm/15 flex-shrink-0" />
    </span>
  )
}

export default function Marquee() {
  const strip = phrases.map((t, i) => <Phrase key={i} text={t} />)

  return (
    <div className="py-9 md:py-12 overflow-hidden bg-cream border-y border-charcoal/[0.035]">
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        <div className="flex shrink-0">{strip}</div>
        <div className="flex shrink-0">{strip}</div>
      </div>
    </div>
  )
}
