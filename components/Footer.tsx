import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-ink text-cream">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/sunset.jpg)" }}
      />

      {/* Big quote band */}
      <div className="relative border-b border-cream/10">
        <div className="container-wide py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="eyebrow !text-cream/50 mb-5">Asena Türkay</div>
            <h3 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Bilimin ışığında,
              <br />
              <span className="italic text-clay">insanın hikâyesine</span> eşlik etmek.
            </h3>
          </div>
        </div>
      </div>

      <div className="relative container-wide py-16 grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <div className="eyebrow !text-cream/50 mb-5">İletişim</div>
          <ul className="space-y-4 text-cream/85 font-sans text-[14px]">
            <li>
              <a
                href="https://wa.me/905000000000"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 hover:text-cream"
              >
                <span className="flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
                </span>
                <span>WhatsApp · +90 500 000 00 00</span>
              </a>
            </li>
            <li>
              <a href="tel:+902120000000" className="hover:text-cream hover-underline">
                +90 212 000 00 00
              </a>
            </li>
            <li>
              <a href="mailto:info@asenaturkay.com" className="hover:text-cream hover-underline">
                info@asenaturkay.com
              </a>
            </li>
          </ul>

          <div className="eyebrow !text-cream/50 mt-10 mb-3">Adres</div>
          <address className="not-italic text-cream/85 text-[14px] leading-relaxed">
            Maslak Mah. Büyükdere Cad.<br />
            No: — Sarıyer / İstanbul
          </address>
        </div>

        <div>
          <div className="eyebrow !text-cream/50 mb-5">Keşfet</div>
          <ul className="space-y-3 text-cream/80 font-sans text-[14px]">
            <li><Link href="/hakkimda" className="hover-underline hover:text-cream">Hakkımda</Link></li>
            <li><Link href="/bireysel-danismanlik" className="hover-underline hover:text-cream">Bireysel Danışmanlık</Link></li>
            <li><Link href="/kurumsal" className="hover-underline hover:text-cream">Kurumsal</Link></li>
            <li><Link href="/egitimler" className="hover-underline hover:text-cream">Eğitimler & Atölyeler</Link></li>
            <li><Link href="/blog" className="hover-underline hover:text-cream">Blog</Link></li>
            <li><Link href="/iletisim" className="hover-underline hover:text-cream">İletişim · Randevu</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow !text-cream/50 mb-5">Çalışma Saatleri</div>
          <ul className="space-y-2.5 text-cream/80 font-sans text-[13.5px]">
            <li className="flex items-baseline justify-between gap-3">
              <span>Pzt – Cum</span>
              <span className="font-display text-[15px] text-cream">10:00 – 20:00</span>
            </li>
            <li className="flex items-baseline justify-between gap-3">
              <span>Cumartesi</span>
              <span className="font-display text-[15px] text-cream">10:00 – 16:00</span>
            </li>
            <li className="flex items-baseline justify-between gap-3">
              <span>Pazar</span>
              <span className="font-display italic text-muted">Kapalı</span>
            </li>
          </ul>
          <p className="mt-6 text-[12.5px] text-cream/50 leading-relaxed">
            Online görüşmeler için saat dilimi esnekliği sağlanır.
          </p>
        </div>

        <div>
          <div className="eyebrow !text-cream/50 mb-5">Bağlantılar</div>
          <ul className="space-y-3 text-cream/80 font-sans text-[14px]">
            <li>
              <a
                href="https://upcore.io"
                target="_blank"
                rel="noreferrer"
                className="hover-underline hover:text-cream"
              >
                upcore.io ↗
              </a>
              <p className="text-[12.5px] text-cream/50 mt-1">Kurumsal Platform</p>
            </li>
          </ul>

          <div className="eyebrow !text-cream/50 mt-8 mb-3">Türk PDR Derneği</div>
          <div className="font-display italic text-lg text-clay leading-tight">
            Genel Başkan Yardımcısı
          </div>

          <Link href="/iletisim" className="btn-primary !bg-cream !text-ink hover:!bg-clay mt-10">
            Randevu Al →
          </Link>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-cream/50 font-sans uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} Asena Türkay · Tüm hakları saklıdır</span>
          <span className="font-display italic normal-case tracking-normal text-[14px] text-clay">
            "Her danışan, kendine has bir ekosistem."
          </span>
        </div>
      </div>
    </footer>
  );
}
