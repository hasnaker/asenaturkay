import {
  Article,
  CtaBand,
  DetailHero,
  ImageBreak,
  PullQuote,
  SpecialtyList,
} from "@/components/Section";

export const metadata = {
  title: "Ergen ve Genç Yetişkin Danışmanlığı",
  description:
    "Kimlik inşası, sınav kaygısı, sosyal kabul ve dijital dünya denkleminde gençler için profesyonel danışmanlık.",
};

export default function Page() {
  return (
    <>
      <DetailHero
        eyebrow="Bireysel · 01"
        title="Ergen ve Genç Yetişkin Danışmanlığı"
        lead='Gelişimin en kırılgan ve en güçlü döneminde; "Kimlik vs. Rol Karmaşası" aşamasında olan gençlere, fırtınalı denizde profesyonel bir pusula.'
        image="/images/young-adult.jpg"
        imageAlt="Genç bireyin düşünceli portresi"
      />

      <Article withDropCap>
        <p>
          Ergenlik, çocukluktan yetişkinliğe geçişin çok ötesinde; kimlik
          inşasının, biyolojik ve nörolojik değişimin (frontal lob olgunlaşması)
          ve yoğun duygusal dalgalanmaların yaşandığı kritik bir dönemdir.
          Psikolog Erik Erikson'un tanımladığı{" "}
          <strong>"Kimlik vs. Rol Karmaşası"</strong> aşamasında olan ergenler,
          hem bireysel özerkliklerini kazanmaya çalışır hem de sosyal kabul
          arayışıyla baş ederler. Bu süreçte genç bireyin yaşadığı karmaşayı
          sadece bir "sorun" değil, sağlıklı bir gelişimsel kriz olarak ele
          alıyor, onlara bu fırtınalı denizde profesyonel bir pusula sunuyorum.
        </p>
        <p>
          Terapi sürecinde gençlerin dünyasına yargılamadan, empatiyle ve
          profesyonel sınırlar içinde yaklaşıyorum. Onların kendilerini ifade
          edebilecekleri, mahremiyete önem verilen güvenli bir alan
          oluşturuyoruz.
        </p>
      </Article>

      <PullQuote>
        Amacım; gencin sadece "sorun çözmesine" değil, özsaygısını
        güçlendirmesine, duygusal regülasyon becerileri kazanmasına ve geleceğe
        dair sağlıklı hedefler kurmasına destek olmaktır.
      </PullQuote>

      <ImageBreak
        src="/images/field-soft.jpg"
        alt="Soft kır manzarası"
        height="h-[50vh]"
      />

      <SpecialtyList
        heading="Ergenlik, kısa bir fırtına. Alınan ders, bir ömür."
        items={[
          {
            title: "Sınav Kaygısı ve Akademik Performans Yönetimi",
            body:
              'Sınavın yarattığı kaygıyı sadece "kazanma/kaybetme" olarak değil, bireyin kendi performans potansiyeli, zaman yönetimi, odaklanma becerileri ve "kusurluluk" şemaları üzerinden ele alıyoruz.',
          },
          {
            title: "Sosyal Kaygı ve Akran Zorbalığı",
            body:
              "Gençlerin sosyal kabul arayışındaki tıkanıklıkları, sosyal beceri eksikliklerini ve varsa zorbalığa maruz kalmanın yarattığı travmatik etkileri BDT temelli yöntemlerle çalışıyoruz.",
          },
          {
            title: "Teknoloji, Ekran ve Sosyal Medya Bağımlılığı",
            body:
              "Dijital dünyanın yarattığı dopamin döngülerini, FOMO etkisini ve gencin gerçek yaşamla olan bağlantısını sağlıklı bir sınıra oturtmak üzerine yapılandırılmış bir rehberlik sunuyoruz.",
          },
          {
            title: "Kimlik Gelişimi, Özsaygı ve Gelecek Kaygısı",
            body:
              'Bireyin "Ben kimim?" sorusuna yanıt ararken yaşadığı kafa karışıklıklarını, değerlerini keşfetmesini ve kendi yeteneklerine uygun gelecek planları kurmasını destekliyoruz. Aileyi, sürecin gerekli aşamalarında bilgilendirici ve destekleyici bir unsur olarak konumlandırıyoruz.',
          },
        ]}
      />

      <CtaBand image="/images/field-soft.jpg" />
    </>
  );
}
