import Image from "next/image";
import { Article, CtaBand, ImageBreak, PullQuote } from "@/components/Section";

export const metadata = {
  title: "Hakkımda",
  description:
    "Doktorant Psikolojik Danışman Asena Türkay — akademik birikim ve klinik tecrübenin sentezi.",
};

export default function HakkimdaPage() {
  return (
    <>
      {/* Opening editorial hero */}
      <section className="relative">
        <div className="container-wide pt-16 pb-8 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div className="frame-photo aspect-[3/4] lg:aspect-[4/5] reveal">
            <Image
              src="/ASENAHOCAM.png"
              alt="Asena Türkay"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
              priority
            />
          </div>
          <div className="reveal" style={{ animationDelay: "120ms" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="rule" />
              <span className="eyebrow">Hakkımda</span>
            </div>
            <h1 className="display-xl">
              Bilimin <span className="italic text-rust">ışığında</span>,
              <br />
              insanın hikâyesine eşlik etmek.
            </h1>
            <p className="mt-10 font-display italic text-2xl text-inkSoft max-w-xl">
              Doktorant Psikolojik Danışman · Şema Terapi · BDT · Sanat Terapisi
            </p>
          </div>
        </div>
      </section>

      <Article withDropCap>
        <p>
          Merhaba, ben <strong>Asena Türkay</strong>. İnsanın zihinsel ve
          ruhsal yolculuğuna eşlik etmeyi sadece bir meslek değil, bilimsel bir
          sorumluluk ve etik bir duruş olarak görüyorum. Psikolojik danışma
          dünyasındaki akademik birikimimi, klinik tecrübemle birleştirerek;
          bireylerin, ailelerin ve organizasyonların kendi potansiyellerini
          keşfetmelerine rehberlik ediyorum.
        </p>
        <p>
          Psikolojik danışma odasında ve kurumsal projelerimde temel felsefem;
          teorik bilginin pratik hayatla buluştuğu noktada kalıcı dönüşümün
          başladığıdır. Çalışmalarımda <strong>Şema Terapi</strong>,{" "}
          <strong>Bilişsel Davranışçı Terapi (BDT)</strong> ve{" "}
          <strong>Sanat Terapisi</strong> ekollerini merkeze alarak, bireylerin
          çocukluktan getirdiği uyumsuz kalıpları (şemaları) fark etmelerini ve
          daha sağlıklı "yetişkin" modlarına geçmelerini hedefliyorum.
        </p>
      </Article>

      <PullQuote>
        Benim için her danışan, kendine has bir ekosistem ve her seans, bu
        ekosistemin dengesini bulma yolculuğudur.
      </PullQuote>

      <ImageBreak
        src="/images/cift.jpg"
        alt="Doku"
        caption="Sessizliğin, dinlenmenin ve dönüşmenin önem kazandığı bir pratik."
        height="h-[70vh]"
      />

      <Article>
        <p>
          Klinik çalışmalarımın yanı sıra, organizasyonel psikoloji ve "insan
          odaklı tasarım" süreçlerinin bilimsel altyapısı üzerine odaklanıyorum.{" "}
          <a
            href="https://upcore.io"
            target="_blank"
            rel="noreferrer"
            className="text-rust border-b border-rust hover:text-ink hover:border-ink transition-colors"
          >
            upcore.io
          </a>{" "}
          platformunda akademik ve bilimsel danışman olarak; organizasyonel
          mimariyi <strong>JD-R (İş Talepleri-Kaynakları Modeli)</strong> ve{" "}
          <strong>S-BIT (Güçlü Yönlere Dayalı Kapsayıcı Çalışma Kuramı)</strong>{" "}
          gibi kanıta dayalı modeller çerçevesinde yapılandırıyorum. Amacım, iş
          dünyasındaki süreçlerin sadece verimlilik değil, insan psikolojisinin
          temel ihtiyaçları gözetilerek kurgulanmasını sağlamaktır.
        </p>
      </Article>

      {/* Credentials block */}
      <section className="container-wide my-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <div className="eyebrow mb-4">Mesleki Sorumluluklar</div>
            <h2 className="display-md max-w-md">
              Türk PDR Derneği <span className="italic text-rust">Genel Başkan Yardımcısı</span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.75] text-inkSoft max-w-xl">
            Mesleki sorumluluklarım kapsamında, Türk PDR Derneği çatısı altında
            Genel Başkan Yardımcılığı görevimi sürdürüyorum. Bu rol ile mesleki
            standartların korunması, meslektaşlar arası dayanışmanın
            güçlendirilmesi ve toplumsal fayda odaklı projelerin bilimsel
            koordinasyonu süreçlerinde aktif rol alıyorum.
          </p>
        </div>
      </section>

      <Article>
        <p>
          Çalışmalarımın odağında, bilginin teoride kalmayıp hayata dokunan bir
          çözüm aracına dönüşmesi yer alıyor. Gerek mesleğe adım atan
          stajyerlerime sunduğum mentorluk süreçlerinde, gerekse kurumların
          çalışan esenliği projelerinde temel hedefim;{" "}
          <strong>
            psikolojik sermayesi güçlü, dayanıklı ve farkındalığı yüksek
            bireylerden oluşan bir toplumsal yapıya
          </strong>{" "}
          akademik katkı sağlamaktır.
        </p>
      </Article>

      {/* Credentials timeline */}
      <section className="bg-ink text-cream py-24 lg:py-32 mt-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="label-number !text-cream/40">04</span>
              <span className="eyebrow !text-cream/60">Akademik & Klinik</span>
            </div>
            <h2 className="font-display font-light text-5xl sm:text-6xl leading-[1.05]">
              Birikim ve{" "}
              <span className="italic text-clay">duruş</span>.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
            {[
              {
                tag: "Unvan",
                title: "Doktorant Psikolojik Danışman",
                body: "Psikolojik Danışma ve Rehberlik alanında doktora eğitimi; akademik araştırmayla klinik pratiğin kesişiminde çalışıyorum.",
              },
              {
                tag: "Ekoller",
                title: "Şema Terapi · BDT · Sanat Terapisi",
                body: "Üç ekolü bireyin ihtiyacına göre sentezleyerek; hem semptomu hem de kökü olan uyumsuz şemaları birlikte ele alıyoruz.",
              },
              {
                tag: "Dernek",
                title: "Türk PDR Derneği · Genel Başkan Yardımcısı",
                body: "Meslek standartlarının korunması, meslektaşlar arası dayanışma ve toplumsal fayda odaklı projelerin bilimsel koordinasyonu.",
              },
              {
                tag: "Platform",
                title: "upcore.io · Akademik & Bilimsel Danışman",
                body: "Organizasyonel mimariyi JD-R (İş Talepleri-Kaynakları) ve S-BIT (Güçlü Yönlere Dayalı Kapsayıcı Çalışma) modelleriyle yapılandırma.",
              },
              {
                tag: "Uzmanlık",
                title: "Organizasyonel Psikoloji",
                body: "Çalışan yaşam döngüsü, liderlik psikolojisi, psikolojik güvenlik ve kurumsal esenlik (well-being) projeleri.",
              },
              {
                tag: "Değer",
                title: "Etik Sınırlar · Gizlilik · Bilimsel Temel",
                body: "Meslek etiği, mahremiyet ve kanıta dayalı yöntemler, pratiğimin tartışılmaz zemini.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="py-10 border-b border-cream/15 last:border-0 md:[&:nth-last-child(-n+2)]:border-0"
              >
                <div className="eyebrow !text-clay mb-4">{c.tag}</div>
                <h3 className="font-display text-2xl sm:text-3xl text-cream font-light mb-4">
                  {c.title}
                </h3>
                <p className="text-cream/70 text-[15px] leading-[1.7] max-w-md">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tanışmak ister misiniz?"
        body="Danışmanlık, kurumsal iş birliği ya da atölye talepleriniz için size özel bir süreç tasarlayalım."
      />
    </>
  );
}
