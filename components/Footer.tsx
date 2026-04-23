import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-blush/40 bg-gradient-blush">
      <div className="container-soft py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl text-ink">
            Asena <span className="text-roseDeep">Türkay</span>
          </div>
          <p className="mt-3 text-sm text-inkSoft max-w-xs leading-relaxed">
            Doktorant Psikolojik Danışman. Bilimin ışığında, bireyin hikayesine
            eşlik etmek.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Hızlı Erişim</div>
          <ul className="space-y-2 text-sm text-inkSoft">
            <li><Link href="/hakkimda" className="hover:text-roseDeep">Hakkımda</Link></li>
            <li><Link href="/bireysel-danismanlik" className="hover:text-roseDeep">Bireysel Danışmanlık</Link></li>
            <li><Link href="/kurumsal" className="hover:text-roseDeep">Kurumsal</Link></li>
            <li><Link href="/egitimler" className="hover:text-roseDeep">Eğitimler & Atölyeler</Link></li>
            <li><Link href="/blog" className="hover:text-roseDeep">Blog</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">İletişim</div>
          <ul className="space-y-2 text-sm text-inkSoft">
            <li>
              <Link href="/iletisim" className="hover:text-roseDeep">
                Randevu Al
              </Link>
            </li>
            <li>
              <a
                href="https://upcore.io"
                target="_blank"
                rel="noreferrer"
                className="hover:text-roseDeep"
              >
                upcore.io (Kurumsal Platform)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blush/40">
        <div className="container-soft py-6 text-xs text-muted flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Asena Türkay. Tüm hakları saklıdır.</span>
          <span className="font-serif italic">
            Bilimin ışığında, insanın hikayesine.
          </span>
        </div>
      </div>
    </footer>
  );
}
