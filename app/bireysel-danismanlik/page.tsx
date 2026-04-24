import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/Section";

export const metadata = {
  title: "Bireysel Danışmanlık",
  description:
    "Ergen, yetişkin, aile-çift ve ebeveyn danışmanlığı. Şema Terapi, BDT ve Sanat Terapisi sentezi.",
};

const cards = [
  {
    num: "01",
    href: "/bireysel-danismanlik/ergen-genc-yetiskin",
    title: "Ergen & Genç Yetişkin",
    body:
      "Kimlik inşası, sınav kaygısı, sosyal medya ve kabul arayışı — genç bireyin fırtınalı denizinde profesyonel bir pusula.",
    image: "/images/sunset.jpg",
  },
  {
    num: "02",
    href: "/bireysel-danismanlik/yetiskin-psikoterapi",
    title: "Yetişkin Psikoterapi",
    body:
      "Kaygı, depresyon, burnout ve ilişki kalıpları — semptomların altındaki kökleri BDT ve Şema Terapi ile çalışmak.",
    image: "/images/yetiskin.jpg",
  },
  {
    num: "03",
    href: "/bireysel-danismanlik/aile-cift",
    title: "Aile & Çift Danışmanlığı",
    body:
      "İlişkiyi yaşayan bir sistem olarak ele alan; iletişim, güven ve bağın yeniden inşası odaklı süreç.",
    image: "/images/cift.jpg",
  },
  {
    num: "04",
    href: "/bireysel-danismanlik/ebeveyn",
    title: "Ebeveyn Danışmanlığı",
    body:
      "Bilinçli Ebeveynlik ve bağlanma odaklı yaklaşımla duygusal zekâsı yüksek bir birey yetiştirmek.",
    image: "/images/parent-child.jpg",
  },
];

export default function BireyselPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-wide pt-16 pb-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="rule" />
            <span className="eyebrow">Bireysel Danışmanlık</span>
          </div>
          <h1 className="display-xl">
            Kendi <span className="italic text-rust">potansiyelinize</span> dönen yolculuk.
          </h1>
          <p className="mt-10 text-[19px] leading-[1.7] text-inkSoft max-w-2xl">
            Her hikâye kendine özgüdür. Size en uygun ekol ve yaklaşımı birlikte
            belirleyerek, kalıcı dönüşümün eşiğinde duran küçük ama derin adımlar
            atıyoruz.
          </p>
        </div>
      </section>

      {/* Service grid — alternating large editorial cards */}
      <section className="container-wide mt-16 lg:mt-24 space-y-24 lg:space-y-32">
        {cards.map((c, i) => {
          const reverse = i % 2 === 1;
          return (
            <Link
              key={c.href}
              href={c.href}
              className={`group grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center`}
            >
              <div
                className={`frame-photo aspect-[4/5] ${
                  reverse ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className={reverse ? "lg:pr-8" : "lg:pl-8"}>
                <div className="flex items-baseline gap-6 mb-6">
                  <span className="label-number">{c.num}</span>
                  <div className="eyebrow">Bireysel</div>
                </div>
                <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink group-hover:text-rust transition-colors leading-[1.05]">
                  {c.title}
                </h2>
                <p className="mt-8 text-[17px] leading-[1.75] text-inkSoft max-w-lg">
                  {c.body}
                </p>
                <div className="mt-10 btn-link">Detaylı bilgi →</div>
              </div>
            </Link>
          );
        })}
      </section>

      <CtaBand />
    </>
  );
}
