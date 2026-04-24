import Image from "next/image";
import { Article, CtaBand, DetailHero, PullQuote } from "@/components/Section";

export const metadata = {
  title: "Eğitimler ve Atölyeler",
  description:
    "Psikoloji/PDR öğrencileri, profesyoneller ve kurumlar için Şema Terapi, SFBT, Sanat Terapisi ve Resilience atölyeleri.",
};

function TrackBlock({
  number,
  label,
  title,
  lead,
  items,
  image,
  reverse,
}: {
  number: string;
  label: string;
  title: string;
  lead: string;
  items: { letter: string; title: string; body: string }[];
  image: string;
  reverse?: boolean;
}) {
  return (
    <section className="container-wide mt-28 lg:mt-40">
      <div
        className={`grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.2fr] items-start`}
      >
        <div className={`frame-photo aspect-[4/5] lg:sticky lg:top-28 ${reverse ? "lg:order-2" : ""}`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-baseline gap-5 mb-8">
            <span className="label-number">{number}</span>
            <span className="eyebrow">{label}</span>
          </div>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink">
            {title}
          </h2>
          <p className="mt-8 text-[17px] leading-[1.75] text-inkSoft">{lead}</p>

          <div className="mt-12 space-y-10">
            {items.map((it) => (
              <div
                key={it.letter}
                className="grid grid-cols-[auto_1fr] gap-6 pb-8 border-b border-ink/10 last:border-0"
              >
                <span className="font-display text-4xl text-rust font-light">
                  {it.letter}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink font-light mb-3">
                    {it.title}
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-inkSoft">
                    {it.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <DetailHero
        eyebrow="Eğitimler · Atölyeler"
        title="Eğitim ve Gelişim Atölyeleri"
        lead="Bilginin zihinsel bir yükten kurtulup; klinikte etkili bir müdahaleye, iş hayatında ise sürdürülebilir bir verimliliğe dönüşmesini sağlamak."
        image="/images/workspace-warm.jpg"
        imageAlt="Atölye çalışma alanı"
      />

      <Article withDropCap>
        <p>
          Eğitim, benim için sadece bir bilgi aktarımı süreci değil; bireyin,
          uzmanın ve organizasyonun potansiyelini en üst düzeye çıkaran
          bilimsel bir köprüdür. Klinik tecrübemi ve akademik birikimimi,
          katılımcıların sadece dinleyici değil,{" "}
          <strong>"uygulayıcı"</strong> olduğu bir modelle harmanlıyorum.
          Sunduğum tüm programlar; vaka analizleri, rol oynama (role-playing),
          yaratıcı metaforlar ve kanıta dayalı ekoller üzerine kurgulanmıştır.
        </p>
      </Article>

      <PullQuote>
        Teorik bilgi, ancak uygulanabildiğinde hayatın içinde bir dönüşüm aracına
        dönüşür.
      </PullQuote>

      <TrackBlock
        number="01"
        label="Profesyoneller · Öğrenciler"
        title="Psikoloji/PDR için Klinik Eğitimler"
        lead='Mesleki yolculuğunun başındaki meslektaşlarım ve uzmanlığını derinleştirmek isteyen profesyoneller için "araç çantası" niteliğindedir.'
        image="/images/tea-book.jpg"
        items={[
          {
            letter: "A",
            title: "Şema Terapi Ekolüne Giriş ve Vaka Formülasyonu",
            body:
              '18 temel uyumsuz şemayı ve bu şemaların yetişkinlikteki "mod" yansımalarını (Kopuk Korungan, Cezalandırıcı Ebeveyn, Sağlıklı Yetişkin vb.) detaylandırıyoruz. Katılımcılar karmaşık vakaları Şema Terapi perspektifiyle formüle etmeyi, bilişsel ve yaşantısal teknikleri (sandalye, imajinasyon) güvenle uygulamayı öğrenirler.',
          },
          {
            letter: "B",
            title: "Kısa Süreli Çözüm Odaklı Terapi (SFBT) Uygulamaları",
            body:
              'Danışanın sahip olduğu kaynaklara ve gelecekteki çözüme odaklanan ekolü, pratik bir müdahale planı olarak sunuyorum. "Mucize Soru" tekniğinden ölçekleme sorularına; danışanı dirençten çıkarıp değişime odaklayan stratejileri vaka analizleri üzerinden inceliyoruz.',
          },
          {
            letter: "C",
            title: "Klinik Uygulamalarda Sanat Terapisi ve Metafor",
            body:
              'Resim, kil, kolaj ve yaratıcı yazım gibi sanat terapisi araçlarının klinik görüşmelerde nasıl yapılandırılacağını işliyoruz. Duyguların somutlaştırılması, içsel çatışmaların dışa vurumu ve metaforların iyileştirici gücünü etik sınırlar içinde bir "projeksiyon aracı" olarak kullanmayı deneyimliyoruz.',
          },
        ]}
      />

      {/* Mentorluk — full width editorial block */}
      <section className="container-wide mt-32">
        <div className="relative overflow-hidden bg-ink text-cream min-h-[60vh] flex">
          <div className="absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url(/images/still-life.jpg)" }} />
          <div className="relative p-10 sm:p-16 lg:p-24 flex flex-col justify-center max-w-4xl">
            <div className="flex items-baseline gap-5 mb-8">
              <span className="label-number !text-cream/40">02</span>
              <span className="eyebrow !text-cream/60">Mentorluk</span>
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Geleceğin Uzmanları için{" "}
              <span className="italic text-clay">Klinik Staj ve Mentorluk</span>
            </h2>
            <p className="mt-8 max-w-2xl text-cream/80 text-[17px] leading-[1.75]">
              3. ve 4. sınıf psikoloji ve psikolojik danışmanlık öğrencilerinin,
              mezuniyet sonrası klinik hayata hazır girmelerini hedefleyen bu
              program; sadece gözlemi değil, derinlemesine bir mentorluk
              sürecini kapsar. Stajyerler, bir uzmanın klinik rutinini, etik
              karar verme süreçlerini ve seans yapılandırma aşamalarını birebir
              deneyimleme fırsatı bulurlar.
            </p>
            <ul className="mt-12 space-y-6 max-w-2xl">
              <li className="pl-5 border-l border-clay text-cream/85">
                <strong className="text-cream">Vaka Tartışmaları ve Süpervizyon Desteği</strong>{" "}
                — anonimleştirilmiş vakalar üzerinden haftalık oturumlar.
              </li>
              <li className="pl-5 border-l border-clay text-cream/85">
                <strong className="text-cream">Akademik Okuma Grupları</strong>{" "}
                — Şema Terapi, BDT, Sistemik Yaklaşım literatürü.
              </li>
              <li className="pl-5 border-l border-clay text-cream/85">
                <strong className="text-cream">Mesleki Kimlik İnşası</strong>{" "}
                — kariyer planlaması ve etik duruş.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <TrackBlock
        number="03"
        label="Kurumsal Atölyeler"
        title="Organizasyonel Esenlik Atölyeleri"
        lead='Kurumların insan kaynağını korumak ve psikolojik sermayeyi verimliliğe dönüştürmek için tasarlanmış bilimsel tabanlı "workshop" serileri.'
        image="/images/kurumsal-warm.jpg"
        reverse
        items={[
          {
            letter: "A",
            title: "Psikolojik Dayanıklılık (Resilience) ve Belirsizlik Yönetimi",
            body:
              'Zorlayıcı projeler ve kriz anlarında stresi regüle etmeyi, belirsizliğe karşı "bilişsel esneklik" kazanmayı işliyoruz. Katılımcılar krizleri birer engel değil, gelişimi tetikleyen birer "öğrenme fırsatı" olarak görmelerini sağlayacak bilimsel baş etme mekanizmaları kazanırlar.',
          },
          {
            letter: "B",
            title: "İş-Özel Hayat Dengesi ve Sürdürülebilir Sınır Yönetimi",
            body:
              '"Her an ulaşılabilir olma" baskısı, tükenmişliğin en büyük tetikleyicisidir. Bu programda çalışanların hem profesyonel hem de kişisel yaşamlarında sağlıklı sınırlar çizebilmeleri için öz-bakım stratejileri ve zaman yönetimi teknikleri sunuyoruz.',
          },
          {
            letter: "C",
            title: "S-BIT Odaklı Çalışan Bağlılığı ve Güçlü Yönlerin Keşfi",
            body:
              'Güçlü Yönlere Dayalı Kapsayıcı Çalışma Kuramı (S-BIT) çerçevesinde; çalışanların sadece "eksiklerini" kapatmaya değil, "güçlü yönlerini" parlatmaya odaklanıyoruz. JD-R gibi bilimsel modellerle aidiyeti artırıyoruz.',
          },
        ]}
      />

      <CtaBand />
    </>
  );
}
