import {
  Article,
  CtaBand,
  DetailHero,
  ImageBreak,
  PullQuote,
  SpecialtyList,
} from "@/components/Section";

export const metadata = {
  title: "Ebeveyn Danışmanlığı",
  description:
    "Bilinçli Ebeveynlik ve bağlanma odaklı yaklaşımla ebeveyn-çocuk ilişkisini güçlendirmek.",
};

export default function Page() {
  return (
    <>
      <DetailHero
        eyebrow="Bireysel · 04"
        title="Ebeveyn Danışmanlığı"
        lead="Sadece 'davranış değiştirme teknikleri' değil; ebeveynin kendi çocukluğundan getirdiği kalıpları fark etmesi ve dönüştürmesi üzerine kurulu bir süreç."
        image="/images/parent-child.jpg"
        imageAlt="Ebeveyn-çocuk anı"
      />

      <Article withDropCap>
        <p>
          Ebeveynlik, modern çağın en büyük sorumluluklarından biri olduğu
          kadar, en karmaşık öğrenme süreçlerinden de biridir. Çoğu zaman kendi
          çocukluğumuzdan getirdiğimiz yaralar, şemalar ve toplumsal
          beklentiler, çocuklarımızla olan bağımızı gölgeleyebilir.
        </p>
        <p>
          Bu süreçte temel felsefem,{" "}
          <strong>"Bilinçli Ebeveynlik" (Conscious Parenting)</strong> ve{" "}
          <strong>bağlanma odaklı</strong> yaklaşımdır. Ebeveynin kendi uyumsuz
          şemalarının (terk edilme, aşırı denetleme, cezalandırma gibi) çocukla
          kurduğu ilişkiyi nasıl etkilediğini analiz ediyor ve bu kalıpları
          sağlıklı sınırlar, duygusal bağ ve olumlu disiplin yöntemleriyle
          değiştiriyoruz.
        </p>
      </Article>

      <PullQuote>
        Amacımız, sadece itaat eden bir çocuk değil; duygusal zekâsı yüksek,
        özgüvenli ve sağlıklı sınırlar koyabilen bir birey yetiştirmenize destek
        olmaktır.
      </PullQuote>

      <ImageBreak
        src="/images/interior.jpg"
        alt="Sessiz bir köşe"
        height="h-[55vh]"
      />

      <SpecialtyList
        heading="Ebeveynlik, en derin öğrenme."
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

      <CtaBand image="/images/parent-child.jpg" />
    </>
  );
}
