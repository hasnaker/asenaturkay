import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

/* ===== Page hero for detail pages ===== */
export function DetailHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative">
      <div className="container-wide pt-16 pb-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <div className="reveal max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="rule" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="display-lg">{title}</h1>
          {lead && (
            <p className="mt-8 text-[19px] leading-[1.7] text-inkSoft max-w-xl">
              {lead}
            </p>
          )}
        </div>
        <div className="frame-photo aspect-[4/5] lg:aspect-[3/4] reveal" style={{ animationDelay: "120ms" }}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Editorial article body ===== */
export function Article({
  children,
  withDropCap = false,
}: {
  children: ReactNode;
  withDropCap?: boolean;
}) {
  return (
    <section className="container-prose mt-10 lg:mt-16">
      <article className={`prose-article ${withDropCap ? "drop-cap" : ""}`}>
        {children}
      </article>
    </section>
  );
}

/* ===== Pull quote (big italic) ===== */
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <section className="container-prose my-16">
      <figure className="border-l-2 border-rust pl-8">
        <blockquote className="pull-quote">"{children}"</blockquote>
      </figure>
    </section>
  );
}

/* ===== Full-bleed image break ===== */
export function ImageBreak({
  src,
  alt,
  caption,
  height = "h-[60vh]",
}: {
  src: string;
  alt: string;
  caption?: string;
  height?: string;
}) {
  return (
    <section className="my-20">
      <div className={`relative ${height} overflow-hidden`}>
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      {caption && (
        <p className="container-wide pt-4 font-display italic text-muted text-[15px]">
          {caption}
        </p>
      )}
    </section>
  );
}

/* ===== Numbered specialty list ===== */
export function SpecialtyList({
  heading,
  items,
}: {
  heading?: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="container-soft mt-24">
      {heading && (
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="eyebrow mb-4">Özel Uzmanlık Alanları</div>
          <h2 className="display-md">{heading}</h2>
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        {items.map((it, i) => (
          <div
            key={i}
            className="grid grid-cols-[auto_1fr] gap-8 py-10 border-b border-ink/10 last:border-0"
          >
            <span className="label-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-ink mb-3">
                {it.title}
              </h3>
              <p className="text-[17px] leading-[1.7] text-inkSoft">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== CTA band ===== */
export function CtaBand({
  title = "Yolculuğunuza bugün başlayın.",
  body = "Birlikte keşfetmeye ve kalıcı bir dönüşümün eşiğinde durmaya hazır mısınız?",
  image = "/images/light-sunset.jpg",
}: {
  title?: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="relative mt-32">
      <div className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-soft text-center text-cream max-w-2xl">
            <div className="eyebrow !text-cream/70 mb-5">Randevu</div>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
              {title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="italic text-clay">
                {title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
            <p className="mt-8 max-w-lg mx-auto text-cream/80 leading-relaxed text-[17px]">
              {body}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/iletisim"
                className="btn-primary !bg-cream !text-ink hover:!bg-clay"
              >
                Randevu Al
              </Link>
              <Link
                href="/bireysel-danismanlik"
                className="btn-ghost !text-cream !border-cream/40 hover:!bg-cream hover:!text-ink"
              >
                Hizmetleri Keşfet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
