import Image from "next/image";
import {
  Article,
  CtaBand,
  DetailHero,
  PullQuote,
  SpecialtyList,
} from "@/components/Section";

export const metadata = {
  title: "Kurumsal Psikolojik Danışmanlık ve Organizasyonel Esenlik",
  description:
    "JD-R ve S-BIT modelleriyle organizasyonel esenlik, liderlik psikolojisi ve burnout yönetimi.",
};

export default function Page() {
  return (
    <>
      <DetailHero
        eyebrow="Kurumsal · Upcore"
        title="Kurumsal Psikolojik Danışmanlık ve Organizasyonel Esenlik"
        lead="Organizasyonun en büyük sermayesi olan 'insan' kaynağının psikolojik iyi oluşu üzerine kurulu, bilimsel temelli sistemler."
        image="/images/kurumsal-warm.jpg"
        imageAlt="Çalışma alanı"
      />

      <Article withDropCap>
        <p>
          Modern iş dünyasında sürdürülebilir başarı, sadece teknik becerilerle
          veya finansal verilerle değil, organizasyonun en büyük sermayesi olan
          "insan" kaynağının{" "}
          <strong>psikolojik iyi oluşu (well-being)</strong> ile ölçülmektedir.
          Kurumsal Psikolojik Danışmanlık ve Organizasyonel Esenlik hizmetimde,
          bilimi iş dünyasının dinamikleriyle birleştirerek hem bireysel
          performansı artıran hem de kurum kültürünü güçlendiren bilimsel
          temelli sistemler kuruyorum.
        </p>
        <p>
          Organizasyonel mimariyi sadece "yapısal süreçler" olarak değil, bir
          organizasyonun yaşayan bir organizma olarak psikolojik sağlığı olarak
          ele alıyorum.{" "}
          <strong>Çalışan Yaşam Döngüsü (Employee Life Cycle)</strong> boyunca;
          işe alım süreçlerindeki psikolojik değerlendirmelerden, liderlik
          yetkinliklerinin geliştirilmesine, çatışma yönetiminden işten ayrılış
          süreçlerine kadar olan tüm aşamaları psikolojik modellerle (
          <strong>JD-R</strong> gibi) analiz ediyor ve optimize ediyorum.
        </p>
      </Article>

      <PullQuote>
        Bir organizasyonun performansı, çalıştığı insanların psikolojik
        iyiliğini yansıtan bir aynadır.
      </PullQuote>

      <SpecialtyList
        heading="Kurumsal Uzmanlık ve Çalışma Alanları"
        items={[
          {
            title: "Liderlik Psikolojisi ve Yönetici Koçluğu",
            body:
              "Yöneticilerin sadece işi yönetmelerini değil, ekiplerinin psikolojik iyi oluşunu (psychological safety) ve performansını artıran liderlik becerileri (feedback, empati, delegasyon) kazanmalarını destekliyoruz.",
          },
          {
            title: "Çalışan Esenliği (Well-being) ve Burnout Yönetimi",
            body:
              "S-BIT (Güçlü Yönlere Dayalı Kapsayıcı Çalışma Kuramı) temelinde, çalışanların güçlü yönlerini keşfetmelerini, iş tatminlerini artırmalarını ve tükenmişlik ile baş etme mekanizmaları geliştirmelerini sağlayan kurumsal projeler yürütüyoruz.",
          },
          {
            title: "Organizasyonel Mimari ve Süreç Optimizasyonu",
            body:
              "Kurum kültürünü, iletişim akışını ve organizasyonel yapıyı psikolojik modellerle analiz ediyor, kurumun stratejik hedefleriyle örtüşen, daha esnek ve verimli bir organizasyon yapısı kuruyoruz.",
          },
          {
            title: "Çatışma Yönetimi ve Takım Dinamikleri",
            body:
              'Ekipler arası çatışmaları sadece "anlaşmazlık" değil, iletişim çatlakları ve rol belirsizliği üzerinden analiz ediyor, çözüm odaklı, sağlıklı takım dinamikleri oluşturuyoruz.',
          },
        ]}
      />

      {/* Upcore showcase */}
      <section className="container-wide mt-32">
        <div className="relative overflow-hidden bg-ink text-cream">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/kurumsal-warm.jpg)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end p-10 sm:p-16 lg:p-24">
            <div>
              <div className="eyebrow !text-cream/60 mb-6">Kurumsal Platform</div>
              <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
                upcore<span className="italic text-clay">.io</span>
              </h2>
              <p className="mt-8 text-cream/80 max-w-lg text-[17px] leading-[1.7]">
                Organizasyonel psikoloji ve insan odaklı tasarım süreçlerinin
                bilimsel altyapısı üzerine çalıştığımız kurumsal platform.
                Akademik ve bilimsel danışman rolüyle; organizasyonel mimariyi
                kanıta dayalı modellerle yapılandırıyoruz.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start lg:items-end">
              <a
                href="https://upcore.io"
                target="_blank"
                rel="noreferrer"
                className="btn-primary !bg-cream !text-ink hover:!bg-clay"
              >
                Platformu Ziyaret Et ↗
              </a>
              <div className="eyebrow !text-cream/50 mt-2">JD-R · S-BIT Modelleri</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
