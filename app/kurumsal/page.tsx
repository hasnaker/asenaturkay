import Blobs from "@/components/Blobs";
import { Bullets, CtaStrip, PageHero, Prose } from "@/components/Section";

export const metadata = {
  title: "Kurumsal Psikolojik Danışmanlık ve Organizasyonel Esenlik",
  description:
    "JD-R ve S-BIT modelleriyle organizasyonel esenlik, liderlik psikolojisi ve burnout yönetimi.",
};

export default function Page() {
  return (
    <>
      <div className="relative">
        <Blobs />
        <PageHero
          eyebrow="Kurumsal Danışmanlık (Upcore)"
          title="Kurumsal Psikolojik Danışmanlık ve Organizasyonel Esenlik"
          lead="Organizasyonun en büyük sermayesi olan 'insan' kaynağının psikolojik iyi oluşu üzerine kurulu, bilimsel temelli sistemler."
        />
      </div>

      <Prose>
        <p>
          Modern iş dünyasında sürdürülebilir başarı, sadece teknik becerilerle
          veya finansal verilerle değil, organizasyonun en büyük sermayesi olan
          "insan" kaynağının <strong>psikolojik iyi oluşu (well-being)</strong>{" "}
          ile ölçülmektedir. Kurumsal Psikolojik Danışmanlık ve Organizasyonel
          Esenlik hizmetimde, bilimi iş dünyasının dinamikleriyle birleştirerek
          hem bireysel performansı artıran hem de kurum kültürünü güçlendiren
          bilimsel temelli sistemler kuruyorum.
        </p>
        <p>
          Organizasyonel mimariyi sadece "yapısal süreçler" olarak değil, bir
          organizasyonun yaşayan bir organizma olarak psikolojik sağlığı olarak
          ele alıyorum. <strong>Çalışan Yaşam Döngüsü (Employee Life Cycle)</strong>{" "}
          boyunca; işe alım süreçlerindeki psikolojik değerlendirmelerden,
          liderlik yetkinliklerinin geliştirilmesine, çatışma yönetiminden
          işten ayrılış süreçlerine kadar olan tüm aşamaları psikolojik
          modellerle (<strong>JD-R</strong> gibi) analiz ediyor ve optimize
          ediyorum.
        </p>
      </Prose>

      <Bullets
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

      <section className="container-soft mt-20">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-lavender via-blush to-rose/50 p-10 sm:p-14 text-center shadow-soft">
          <div className="eyebrow mb-3">Kurumsal Platform</div>
          <h2 className="title-serif text-3xl sm:text-4xl mb-4">upcore.io</h2>
          <p className="max-w-2xl mx-auto text-ink/80 leading-relaxed">
            Organizasyonel psikoloji ve insan odaklı tasarım süreçlerinin
            bilimsel altyapısı üzerine çalıştığımız kurumsal platform.
          </p>
          <a
            href="https://upcore.io"
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8"
          >
            Platformu Ziyaret Et →
          </a>
        </div>
      </section>

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
