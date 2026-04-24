import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-ink text-cream">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/sunset.jpg)" }}
      />
      <div className="relative container-wide py-20 grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="eyebrow !text-cream/50 mb-5">Asena Türkay</div>
          <h3 className="font-display font-light text-4xl sm:text-5xl leading-[1.05] max-w-md">
            Bilimin ışığında,
            <br />
            <span className="italic text-clay">insanın hikâyesine</span>
            <br />
            eşlik etmek.
          </h3>
          <div className="mt-8">
            <Link href="/iletisim" className="btn-primary !bg-cream !text-ink hover:!bg-clay hover:!text-ink">
              Randevu Al →
            </Link>
          </div>
        </div>

        <div>
          <div className="eyebrow !text-cream/50 mb-5">Keşfet</div>
          <ul className="space-y-3 text-cream/80 font-sans text-[15px]">
            <li><Link href="/hakkimda" className="hover-underline hover:text-cream">Hakkımda</Link></li>
            <li><Link href="/bireysel-danismanlik" className="hover-underline hover:text-cream">Bireysel Danışmanlık</Link></li>
            <li><Link href="/kurumsal" className="hover-underline hover:text-cream">Kurumsal</Link></li>
            <li><Link href="/egitimler" className="hover-underline hover:text-cream">Eğitimler & Atölyeler</Link></li>
            <li><Link href="/blog" className="hover-underline hover:text-cream">Blog</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow !text-cream/50 mb-5">Bağlantılar</div>
          <ul className="space-y-3 text-cream/80 font-sans text-[15px]">
            <li>
              <a href="https://upcore.io" target="_blank" rel="noreferrer" className="hover-underline hover:text-cream">
                upcore.io ↗
              </a>
            </li>
            <li>
              <Link href="/iletisim" className="hover-underline hover:text-cream">
                İletişim
              </Link>
            </li>
          </ul>
          <div className="mt-8 eyebrow !text-cream/50">Türk PDR Derneği</div>
          <div className="mt-1 font-display italic text-xl text-clay">
            Genel Başkan Yardımcısı
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-cream/50 font-sans uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} Asena Türkay</span>
          <span className="font-display italic normal-case tracking-normal text-[14px] text-clay">
            "Her danışan, kendine has bir ekosistem."
          </span>
        </div>
      </div>
    </footer>
  );
}
