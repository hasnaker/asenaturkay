import Link from "next/link";
import Blobs from "@/components/Blobs";
import { CtaStrip, PageHero } from "@/components/Section";

export const metadata = {
  title: "Bireysel Danışmanlık",
  description:
    "Ergen, yetişkin, aile-çift ve ebeveyn danışmanlığı. Şema Terapi, BDT ve Sanat Terapisi sentezi.",
};

const cards = [
  {
    href: "/bireysel-danismanlik/ergen-genc-yetiskin",
    title: "Ergen & Genç Yetişkin",
    body: "Kimlik inşası, sınav kaygısı, sosyal medya ve kabul arayışı — genç bireyin fırtınalı denizinde profesyonel bir pusula.",
    tone: "from-blush to-rose",
  },
  {
    href: "/bireysel-danismanlik/yetiskin-psikoterapi",
    title: "Yetişkin Psikoterapi",
    body: "Kaygı, depresyon, burnout ve ilişki kalıpları — semptomların altındaki kökleri BDT ve Şema Terapi ile çalışmak.",
    tone: "from-rose to-lavender",
  },
  {
    href: "/bireysel-danismanlik/aile-cift",
    title: "Aile & Çift Danışmanlığı",
    body: "İlişkiyi yaşayan bir sistem olarak ele alan; iletişim, güven ve bağın yeniden inşası odaklı süreç.",
    tone: "from-sage to-blush",
  },
  {
    href: "/bireysel-danismanlik/ebeveyn",
    title: "Ebeveyn Danışmanlığı",
    body: "Bilinçli Ebeveynlik ve bağlanma odaklı yaklaşımla duygusal zekâsı yüksek bir birey yetiştirmek.",
    tone: "from-lavender to-sage",
  },
];

export default function BireyselPage() {
  return (
    <>
      <div className="relative">
        <Blobs />
        <PageHero
          eyebrow="Bireysel Danışmanlık"
          title="Kendi potansiyelinize dönen yolculuk"
          lead="Her hikâye kendine özgüdür. Size en uygun ekol ve yaklaşımı birlikte belirleyerek, kalıcı dönüşümün eşiğinde duran küçük ama derin adımlar atıyoruz."
        />
      </div>

      <section className="container-soft mt-8">
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="card-soft group block">
              <div
                className={`h-12 w-12 rounded-full bg-gradient-to-br ${c.tone} mb-6`}
              />
              <h2 className="title-serif text-3xl mb-3">{c.title}</h2>
              <p className="text-inkSoft leading-relaxed">{c.body}</p>
              <div className="mt-6 text-sm font-sans text-roseDeep group-hover:translate-x-1 transition-transform">
                Detaylı Bilgi →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
