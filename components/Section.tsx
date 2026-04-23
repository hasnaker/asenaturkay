import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative pt-20 pb-14">
      <div className="container-soft text-center fade-up">
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        <h1 className="title-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 mx-auto max-w-2xl text-inkSoft leading-relaxed">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="container-prose text-inkSoft leading-relaxed space-y-6 [&_h2]:title-serif [&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-2 [&_h3]:title-serif [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-2 [&_strong]:text-ink [&_p]:text-[17px] [&_li]:text-[17px]">
      {children}
    </div>
  );
}

export function Bullets({
  heading,
  items,
}: {
  heading?: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="container-prose mt-12">
      {heading && (
        <h3 className="title-serif text-2xl mb-6 text-ink">{heading}</h3>
      )}
      <ul className="space-y-5">
        {items.map((it, i) => (
          <li
            key={i}
            className="pl-6 border-l-2 border-rose/60 text-inkSoft leading-relaxed"
          >
            <span className="font-sans font-medium text-ink">{it.title}</span>
            {": "}
            <span className="text-[17px]">{it.body}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CtaStrip() {
  return (
    <section className="container-soft mt-24">
      <div className="rounded-[2.5rem] bg-gradient-blush p-10 sm:p-14 text-center shadow-soft">
        <div className="eyebrow mb-3">Yolculuğunuza Bugün Başlayın</div>
        <h2 className="title-serif text-3xl sm:text-4xl">
          Birlikte keşfetmeye hazır mısınız?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-inkSoft">
          Bireysel, aile ya da kurumsal destek için ilk adımı atın. Size en
          uygun süreci birlikte tasarlayalım.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a href="/iletisim" className="btn-primary">Randevu Al</a>
          <a href="/bireysel-danismanlik" className="btn-ghost">Hizmetleri Keşfet</a>
        </div>
      </div>
    </section>
  );
}
