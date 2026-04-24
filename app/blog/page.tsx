import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/Section";

export const metadata = {
  title: "Blog",
  description:
    "Psikoloji, organizasyonel esenlik ve insan olma halinin dışa vurumları üzerine yazılar.",
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="container-wide pt-16 pb-8 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="rule" />
            <span className="eyebrow">Blog</span>
          </div>
          <h1 className="display-xl">
            Sözcüklerle,
            <br />
            <span className="italic text-rust">içerden</span> dışarı.
          </h1>
          <p className="mt-10 text-[19px] leading-[1.7] text-inkSoft max-w-xl">
            Psikoloji, organizasyonel esenlik ve insan olma halinin dışa
            vurumları üzerine yazılar yakında burada paylaşılacak. İlk yazıdan
            haberdar olmak için bülten listesine eklenebilirsiniz.
          </p>
        </div>
        <div className="frame-photo aspect-[3/4] reveal" style={{ animationDelay: "120ms" }}>
          <Image
            src="/images/wellness.jpg"
            alt="Sıcak soyut"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Coming soon card */}
      <section className="container-soft mt-24">
        <div className="relative overflow-hidden bg-ink text-cream p-12 sm:p-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 opacity-25 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/sunset.jpg)" }}
          />
          <div className="relative">
            <div className="eyebrow !text-cream/60 mb-6">Yakında</div>
            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl mx-auto">
              İlk yazıdan <span className="italic text-clay">haberdar</span> olmak ister misiniz?
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-cream/80 leading-relaxed text-[16px]">
              Bültene eklenmek için iletişim sayfasından ulaşabilirsiniz.
            </p>
            <Link
              href="/iletisim"
              className="btn-primary mt-10 !bg-cream !text-ink hover:!bg-clay"
            >
              Bana Ulaşın
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
