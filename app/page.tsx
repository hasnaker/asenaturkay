import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/Section";

const services = [
  {
    href: "/bireysel-danismanlik/ergen-genc-yetiskin",
    num: "01",
    title: "Ergen & Genç Yetişkin",
    body: "Kimlik inşası, sınav kaygısı ve dijital dünya denkleminde profesyonel bir pusula.",
    image: "/images/young-adult.jpg",
  },
  {
    href: "/bireysel-danismanlik/yetiskin-psikoterapi",
    num: "02",
    title: "Yetişkin Psikoterapi",
    body: "BDT, Şema Terapi ve Sanat Terapisi sentezi ile derinlemesine çalışma.",
    image: "/images/window-light.jpg",
  },
  {
    href: "/bireysel-danismanlik/aile-cift",
    num: "03",
    title: "Aile & Çift",
    body: "İlişkiyi yaşayan bir sistem olarak ele alan; iletişim ve güveni yeniden inşa süreci.",
    image: "/images/couple-hands.jpg",
  },
  {
    href: "/bireysel-danismanlik/ebeveyn",
    num: "04",
    title: "Ebeveyn Danışmanlığı",
    body: "Bilinçli Ebeveynlik ve bağlanma odaklı yaklaşımla çocukla sağlıklı bağ.",
    image: "/images/parent-child.jpg",
  },
  {
    href: "/kurumsal",
    num: "05",
    title: "Kurumsal Danışmanlık",
    body: "JD-R ve S-BIT modelleriyle organizasyonel esenlik ve liderlik psikolojisi.",
    image: "/images/kurumsal-warm.jpg",
  },
  {
    href: "/egitimler",
    num: "06",
    title: "Eğitimler & Atölyeler",
    body: "Şema Terapi, SFBT, Sanat Terapisi eğitimleri; PDR öğrencilerine mentorluk.",
    image: "/images/workspace-warm.jpg",
  },
];

const credentials = [
  "Doktorant Psikolojik Danışman",
  "Türk PDR Derneği Genel Başkan Yardımcısı",
  "Şema Terapi · BDT · Sanat Terapisi",
  "upcore.io Akademik Danışman",
  "JD-R · S-BIT Modelleri",
  "Organizasyonel Psikoloji",
];

export default function HomePage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <section className="relative -mt-20 pt-20 bg-cream">
        <div className="container-wide pt-12 pb-16 lg:pb-24 grid gap-12 lg:gap-20 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <div className="reveal">
            <div className="flex items-center gap-4 mb-10">
              <div className="rule" />
              <span className="eyebrow">Doktorant Psikolojik Danışman</span>
            </div>
            <h1 className="display-xl">
              Bilimin
              <br />
              ışığında,
              <br />
              <span className="italic font-normal text-rust">insanın</span>
              <br />
              hikâyesine.
            </h1>
            <p className="mt-10 max-w-lg text-[18px] leading-[1.7] text-inkSoft">
              Merhaba, ben <strong className="text-ink">Asena Türkay</strong>.
              Bireylerin, ailelerin ve organizasyonların kendi potansiyellerini
              keşfetmelerine; Şema Terapi, Bilişsel Davranışçı Terapi ve Sanat
              Terapisi ekollerini merkeze alan kanıta dayalı bir çerçevede
              rehberlik ediyorum.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link href="/iletisim" className="btn-primary">Randevu Al</Link>
              <Link href="/hakkimda" className="btn-link">
                Daha fazlası →
              </Link>
            </div>
          </div>

          {/* Hero image collage */}
          <div className="relative grid grid-cols-5 grid-rows-6 gap-4 h-[600px] lg:h-[720px] reveal" style={{ animationDelay: "120ms" }}>
            <div className="frame-photo col-span-3 row-span-4 col-start-3 row-start-1">
              <Image
                src="/ASENAHOCAM.png"
                alt="Asena Türkay"
                fill
                sizes="(max-width: 1024px) 60vw, 400px"
                className="object-cover"
                priority
              />
            </div>
            <div className="frame-photo col-span-3 row-span-3 col-start-1 row-start-3">
              <Image
                src="/images/hero-botanical.jpg"
                alt="Botanik doku"
                fill
                sizes="(max-width: 1024px) 60vw, 350px"
                className="object-cover"
              />
            </div>
            <div className="frame-photo col-span-2 row-span-2 col-start-4 row-start-5">
              <Image
                src="/images/dried-flowers.jpg"
                alt="Kuru çiçekler"
                fill
                sizes="(max-width: 1024px) 40vw, 250px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Marquee credentials */}
        <div className="border-y border-ink/10 bg-bone/60 overflow-hidden py-5">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...credentials, ...credentials, ...credentials].map((c, i) => (
              <span
                key={i}
                className="eyebrow-dark flex items-center gap-12 shrink-0"
              >
                {c}
                <span className="w-1 h-1 rounded-full bg-ink/30" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ======== PHILOSOPHY ======== */}
      <section className="container-wide py-28 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="frame-photo aspect-[3/4]">
            <Image
              src="/images/still-life.jpg"
              alt="Sessiz bir köşe"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="label-number !text-2xl">01</span>
              <span className="eyebrow">Yaklaşım</span>
            </div>
            <p className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-ink">
              Her danışan, kendine has bir{" "}
              <span className="italic text-rust">ekosistem</span>.
              Her seans, bu ekosistemin dengesini bulma yolculuğudur.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 max-w-md text-inkSoft">
              <div>
                <div className="font-display text-5xl text-rust">15+</div>
                <div className="eyebrow mt-2">Yıl Akademik Birikim</div>
              </div>
              <div>
                <div className="font-display text-5xl text-rust">3</div>
                <div className="eyebrow mt-2">Ana Terapi Ekolü</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SERVICES ======== */}
      <section className="relative bg-bone">
        <div className="container-wide py-24 lg:py-32">
          <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="label-number !text-2xl">02</span>
                <span className="eyebrow">Çalışma Alanları</span>
              </div>
              <h2 className="display-lg max-w-2xl">
                Birlikte keşfedeceğimiz <span className="italic">alanlar</span>.
              </h2>
            </div>
            <Link href="/bireysel-danismanlik" className="btn-link">
              Tümünü gör →
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group">
                <div className="frame-photo aspect-[4/5] mb-6">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display text-ink/40">{s.num}</span>
                  <h3 className="font-display text-2xl text-ink group-hover:text-rust transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="text-inkSoft text-[15px] leading-relaxed pl-11">
                  {s.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== ABOUT PREVIEW ======== */}
      <section className="container-wide py-28 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="label-number !text-2xl">03</span>
              <span className="eyebrow">Hakkımda</span>
            </div>
            <h2 className="display-lg">
              Teorik bilginin,
              <br />
              <span className="italic text-rust">hayata dokunduğu</span> yer.
            </h2>
            <p className="mt-10 max-w-lg text-[18px] leading-[1.7] text-inkSoft">
              Psikolojik danışma odasında ve kurumsal projelerimde temel
              felsefem; teorik bilginin pratik hayatla buluştuğu noktada kalıcı
              dönüşümün başladığıdır. <strong className="text-ink">upcore.io</strong>{" "}
              platformunda akademik ve bilimsel danışman olarak organizasyonel
              mimariyi JD-R ve S-BIT modelleri çerçevesinde yapılandırıyorum.
            </p>
            <div className="mt-12">
              <Link href="/hakkimda" className="btn-ghost">
                Tanışalım
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="frame-photo aspect-[3/4]">
              <Image
                src="/images/tea-book.jpg"
                alt="Çay ve kitap"
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="frame-photo aspect-[3/4] mt-12">
              <Image
                src="/images/field-soft.jpg"
                alt="Kır çiçekleri"
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <CtaBand />
    </>
  );
}
