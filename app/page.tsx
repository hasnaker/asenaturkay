import Link from "next/link";
import Image from "next/image";
import Blobs from "@/components/Blobs";
import { CtaStrip } from "@/components/Section";

const services = [
  {
    href: "/bireysel-danismanlik/ergen-genc-yetiskin",
    title: "Ergen & Genç Yetişkin",
    body: "Kimlik inşası, sınav kaygısı, sosyal kabul ve dijital dünya denkleminde profesyonel bir pusula.",
  },
  {
    href: "/bireysel-danismanlik/yetiskin-psikoterapi",
    title: "Yetişkin Psikoterapi",
    body: "BDT, Şema Terapi ve Sanat Terapisi sentezi ile semptomların köküne inen derin bir çalışma.",
  },
  {
    href: "/bireysel-danismanlik/aile-cift",
    title: "Aile & Çift",
    body: "İlişkiyi bir sistem olarak ele alan; iletişimi, güveni ve duygusal bağı yeniden inşa eden süreç.",
  },
  {
    href: "/bireysel-danismanlik/ebeveyn",
    title: "Ebeveyn Danışmanlığı",
    body: "Bilinçli Ebeveynlik ve bağlanma odaklı yaklaşımla duygusal zekâsı yüksek çocuklar yetiştirmek.",
  },
  {
    href: "/kurumsal",
    title: "Kurumsal Psikolojik Danışmanlık",
    body: "JD-R ve S-BIT modelleriyle organizasyonel esenlik, liderlik psikolojisi ve burnout yönetimi.",
  },
  {
    href: "/egitimler",
    title: "Eğitimler & Atölyeler",
    body: "Şema Terapi, SFBT ve Sanat Terapisi eğitimleri; PDR öğrencilerine klinik staj ve mentorluk.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <Blobs />
        <div className="container-soft pt-20 pb-24 grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="fade-up">
            <div className="eyebrow mb-5">Doktorant Psikolojik Danışman</div>
            <h1 className="title-serif text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.02]">
              Bilimin ışığında,
              <br />
              <span className="italic text-roseDeep">insanın hikâyesine</span>
              <br />
              eşlik etmek.
            </h1>
            <p className="mt-8 max-w-xl text-inkSoft leading-relaxed text-[17px]">
              Merhaba, ben <strong className="text-ink">Asena Türkay</strong>.
              Bireylerin, ailelerin ve organizasyonların kendi potansiyellerini
              keşfetmelerine; Şema Terapi, Bilişsel Davranışçı Terapi ve Sanat
              Terapisi ekollerini merkeze alan kanıta dayalı bir çerçevede
              rehberlik ediyorum.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/iletisim" className="btn-primary">Randevu Al</Link>
              <Link href="/hakkimda" className="btn-ghost">Hakkımda</Link>
            </div>
          </div>

          <div className="relative fade-up">
            <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden shadow-soft bg-linen">
              <Image
                src="/ASENAHOCAM.png"
                alt="Asena Türkay"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white/90 backdrop-blur px-6 py-4 shadow-soft max-w-[240px]">
              <div className="eyebrow mb-1">Türk PDR Derneği</div>
              <div className="font-serif text-lg text-ink">Genel Başkan Yardımcısı</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-soft mt-12">
        <div className="rounded-[2.5rem] bg-white/70 backdrop-blur-sm p-10 sm:p-14 shadow-soft text-center">
          <div className="eyebrow mb-4">Yaklaşım</div>
          <p className="font-serif text-2xl sm:text-3xl leading-relaxed text-ink max-w-3xl mx-auto">
            Her danışan, kendine has bir ekosistem. Her seans, bu ekosistemin
            dengesini bulma yolculuğudur.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-soft mt-24">
        <div className="text-center mb-14">
          <div className="eyebrow mb-3">Çalışma Alanları</div>
          <h2 className="title-serif text-4xl sm:text-5xl">
            Birlikte keşfedeceğimiz alanlar
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="card-soft group block"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blush to-rose mb-6" />
              <h3 className="title-serif text-2xl mb-3">{s.title}</h3>
              <p className="text-inkSoft text-[15px] leading-relaxed">{s.body}</p>
              <div className="mt-6 text-sm font-sans text-roseDeep group-hover:translate-x-1 transition-transform">
                Detay →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-soft mt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">Hakkımda</div>
            <h2 className="title-serif text-4xl sm:text-5xl leading-tight">
              Teorik bilginin, <br />
              <span className="italic text-roseDeep">hayata dokunduğu</span> yer.
            </h2>
            <p className="mt-6 text-inkSoft leading-relaxed text-[17px]">
              Psikolojik danışma odasında ve kurumsal projelerimde temel
              felsefem; teorik bilginin pratik hayatla buluştuğu noktada kalıcı
              dönüşümün başladığıdır. upcore.io platformunda akademik ve
              bilimsel danışman olarak organizasyonel mimariyi JD-R ve S-BIT
              modelleri çerçevesinde yapılandırıyorum.
            </p>
            <Link href="/hakkimda" className="btn-ghost mt-8">
              Tanışalım
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-[2rem] bg-gradient-blush p-10 shadow-soft">
              <ul className="space-y-5 text-inkSoft">
                <li className="flex gap-3">
                  <span className="text-roseDeep font-serif text-xl">✦</span>
                  <span>Şema Terapi — 18 uyumsuz şema ve mod çalışması</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-roseDeep font-serif text-xl">✦</span>
                  <span>Bilişsel Davranışçı Terapi (BDT)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-roseDeep font-serif text-xl">✦</span>
                  <span>Sanat Terapisi ve dışavurumcu yöntemler</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-roseDeep font-serif text-xl">✦</span>
                  <span>Sistemik Yaklaşım & Çiftler için Şema Terapi</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-roseDeep font-serif text-xl">✦</span>
                  <span>Bilinçli Ebeveynlik (Conscious Parenting)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
