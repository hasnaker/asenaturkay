import Blobs from "@/components/Blobs";
import { Bullets, CtaStrip, PageHero, Prose } from "@/components/Section";

export const metadata = {
  title: "Yetişkin Bireysel Psikoterapi ve Danışmanlık",
  description:
    "BDT, Şema Terapi ve Sanat Terapisi sentezi ile yetişkinler için derinlemesine psikoterapi.",
};

export default function Page() {
  return (
    <>
      <div className="relative">
        <Blobs />
        <PageHero
          eyebrow="Bireysel Danışmanlık"
          title="Yetişkin Bireysel Psikoterapi ve Danışmanlık"
        />
      </div>

      <Prose>
        <p>
          Günlük yaşamın getirdiği iş stresi, ilişki çatışmaları veya geçmişten
          gelen ve çözüm bekleyen derin duygusal düğümler... Yetişkinlik
          dönemi, hem geçmişin izlerini hem de bugünün sorumluluklarını aynı
          anda taşıdığımız karmaşık bir süreçtir. Yetişkin bireysel psikoterapi
          sürecimde, bireylerin bu karmaşa içinde kaybolmadan, kendi
          potansiyellerini keşfetmelerine ve zihinsel esneklik kazanmalarına
          yardımcı olmayı hedefliyorum.
        </p>
        <p>
          Bu süreçte sadece semptomları (kaygı, üzüntü, tükenmişlik) dindirmeyi
          değil, <strong>bu semptomların altında yatan kökenleri anlamayı ve
          değiştirmeyi</strong> önceliklendiriyorum. Terapi pratiğimde, bilimsel
          kanıta dayalı yöntemler olan <strong>Bilişsel Davranışçı Terapi
          (BDT)</strong>, <strong>Şema Terapi</strong> ve{" "}
          <strong>Sanat Terapisi</strong> ekollerini sentezleyerek kullanıyorum.
          BDT ile bugün yaşadığınız işlevsel olmayan düşünce kalıplarını ve
          davranışları değiştirirken, Şema Terapi ile çocukluk ve ergenlik
          döneminde geliştirdiğiniz, bugünkü hayatınızı sabote eden uyumsuz
          şemaları (terk edilme, kusurluluk, duygusal yoksunluk gibi) tespit
          ediyor ve daha sağlıklı modlarla değiştirmek üzerine derinlemesine
          çalışıyoruz.
        </p>
      </Prose>

      <Bullets
        heading="Özel Uzmanlık ve Çalışma Alanları"
        items={[
          {
            title: "Kaygı ve Panik Bozukluklar (Anksiyete)",
            body:
              "Genel kaygı, panik atak, agorafobi ve sosyal fobi gibi alanlarda; kaygının fizyolojik, bilişsel ve davranışsal boyutlarını ele alıyor, bireyin kaygı ile olan ilişkisini sağlıklı bir zemine oturtmasını sağlıyoruz.",
          },
          {
            title: "Depresyon ve Duygudurum Bozuklukları",
            body:
              "Derin üzüntü, motivasyon kaybı ve yaşama sevincinin yitirilmesi gibi durumlarda, bilişsel yeniden yapılandırma ve davranışsal aktivasyon yöntemleriyle danışanın yaşam enerjisini yeniden keşfetmesine destek oluyoruz.",
          },
          {
            title: "Tükenmişlik Sendromu (Burnout) ve İş Yaşamı Dengesi",
            body:
              'Modern hayatın en büyük sorunlarından biri olan tükenmişliği sadece "iş stresi" olarak değil, bireyin kendi sınırlarını yönetimi, mükemmeliyetçilik şemaları ve "iyi oluş" (well-being) ihtiyacı ekseninde ele alıyoruz.',
          },
          {
            title: "İlişki Problemleri ve Bağlanma Stilleri",
            body:
              "Tekrar eden ilişki kalıplarını, bağlanma modelleri (güvenli/güvensiz) ve iletişim çatışmaları üzerinden analiz ediyor, bireyin hem kendisiyle hem de çevresiyle daha sağlıklı bağlar kurmasına rehberlik ediyoruz.",
          },
        ]}
      />

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
