import Blobs from "@/components/Blobs";
import { CtaStrip, PageHero } from "@/components/Section";

export const metadata = {
  title: "Blog",
  description:
    "Psikoloji, organizasyonel esenlik ve insan olma halinin dışa vurumları üzerine yazılar.",
};

export default function Page() {
  return (
    <>
      <div className="relative">
        <Blobs />
        <PageHero
          eyebrow="Blog"
          title="Yakında"
          lead="Psikoloji, organizasyonel esenlik ve insan olma halinin dışa vurumları üzerine yazılar burada paylaşılacak."
        />
      </div>

      <section className="container-soft mt-8">
        <div className="max-w-xl mx-auto rounded-[2rem] bg-gradient-blush p-10 text-center shadow-soft">
          <div className="eyebrow mb-3">İlk yazıdan haberdar olmak ister misiniz?</div>
          <p className="text-inkSoft leading-relaxed mb-6">
            İletişim sayfasından bana ulaşabilir, bülten listesine eklenmek
            istediğinizi belirtebilirsiniz.
          </p>
          <a href="/iletisim" className="btn-primary">Bana Ulaşın</a>
        </div>
      </section>

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
