import Blobs from "@/components/Blobs";
import { Bullets, CtaStrip, PageHero, Prose } from "@/components/Section";

export const metadata = {
  title: "Ebeveyn Danışmanlığı",
  description:
    "Bilinçli Ebeveynlik ve bağlanma odaklı yaklaşımla ebeveyn-çocuk ilişkisini güçlendirmek.",
};

export default function Page() {
  return (
    <>
      <div className="relative">
        <Blobs />
        <PageHero eyebrow="Bireysel Danışmanlık" title="Ebeveyn Danışmanlığı" />
      </div>

      <Prose>
        <p>
          Ebeveynlik, modern çağın en büyük sorumluluklarından biri olduğu
          kadar, en karmaşık öğrenme süreçlerinden de biridir. Çoğu zaman kendi
          çocukluğumuzdan getirdiğimiz yaralar, şemalar ve toplumsal
          beklentiler, çocuklarımızla olan bağımızı gölgeleyebilir. Ebeveyn
          danışmanlığı sürecimde, ebeveynlere sadece "davranış değiştirme
          teknikleri" sunmuyor; onların çocuklarının dünyasını, gelişim
          aşamalarını ve kendi ebeveynlik tarzlarını daha derinlemesine
          anlamalarına rehberlik ediyorum.
        </p>
        <p>
          Bu süreçte temel felsefem,{" "}
          <strong>"Bilinçli Ebeveynlik" (Conscious Parenting)</strong> ve{" "}
          <strong>bağlanma odaklı</strong> yaklaşımdır. Ebeveynin kendi uyumsuz
          şemalarının (terk edilme, aşırı denetleme, cezalandırma gibi) çocukla
          kurduğu ilişkiyi nasıl etkilediğini analiz ediyor ve bu kalıpları
          sağlıklı sınırlar, duygusal bağ ve olumlu disiplin yöntemleriyle
          değiştiriyoruz. Amacımız, sadece itaat eden bir çocuk değil;{" "}
          <strong>
            duygusal zekâsı yüksek, özgüvenli ve sağlıklı sınırlar koyabilen
            bir birey yetiştirmenize
          </strong>{" "}
          destek olmaktır.
        </p>
      </Prose>

      <Bullets
        heading="Özel Uzmanlık ve Çalışma Alanları"
        items={[
          {
            title: "Çocuk ve Ergen ile Sağlıklı Bağ Kurma",
            body:
              "Bağlanma modelleri (güvenli/güvensiz) üzerinden ebeveyn-çocuk ilişkisini analiz ediyor, duygusal regülasyon ve aynalama teknikleriyle bağı güçlendiriyoruz.",
          },
          {
            title: "Sağlıklı Sınır Koyma ve Olumlu Disiplin",
            body:
              "Cezalandırıcı olmayan ama sınırları net olan olumlu disiplin yöntemlerini, ebeveynin aşırı denetleyici veya gevşek tutumlarını dengeleyerek öğretiyoruz.",
          },
          {
            title: "Çocuğun Duygusal Zekâsını Geliştirme",
            body:
              "Çocuğun duygularını tanımasını, isimlendirmesini ve sağlıklı yollarla ifade etmesini (Emotion Coaching) destekleyici ebeveyn tutumlarını öğretiyoruz.",
          },
          {
            title: "Gelişimsel Krizler ve Değişim Yönetimi",
            body:
              "Okula başlama, kardeş doğumu, boşanma gibi gelişimsel kriz aşamalarında ebeveynlerin ve çocukların bu süreci en az hasarla atlatmaları için rehberlik sunuyoruz.",
          },
        ]}
      />

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
