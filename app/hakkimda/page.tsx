import Image from "next/image";
import Blobs from "@/components/Blobs";
import { CtaStrip, PageHero } from "@/components/Section";

export const metadata = {
  title: "Hakkımda",
  description:
    "Doktorant Psikolojik Danışman Asena Türkay — akademik birikim ve klinik tecrübenin sentezi.",
};

export default function HakkimdaPage() {
  return (
    <>
      <div className="relative">
        <Blobs />
        <PageHero
          eyebrow="Hakkımda"
          title="Bilimin Işığında, İnsanın Hikâyesine Eşlik Etmek"
        />
      </div>

      <section className="container-soft mt-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-soft bg-linen sticky top-28">
              <Image
                src="/ASENAHOCAM.png"
                alt="Asena Türkay"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>

          <div className="text-inkSoft leading-relaxed space-y-6 text-[17px]">
            <p>
              Merhaba, ben <strong className="text-ink">Asena Türkay</strong>.
              İnsanın zihinsel ve ruhsal yolculuğuna eşlik etmeyi sadece bir
              meslek değil, bilimsel bir sorumluluk ve etik bir duruş olarak
              görüyorum. Psikolojik danışma dünyasındaki akademik birikimimi,
              klinik tecrübemle birleştirerek; bireylerin, ailelerin ve
              organizasyonların kendi potansiyellerini keşfetmelerine rehberlik
              ediyorum.
            </p>
            <p>
              Psikolojik danışma odasında ve kurumsal projelerimde temel
              felsefem; teorik bilginin pratik hayatla buluştuğu noktada kalıcı
              dönüşümün başladığıdır. Çalışmalarımda{" "}
              <strong className="text-ink">Şema Terapi</strong>,{" "}
              <strong className="text-ink">Bilişsel Davranışçı Terapi (BDT)</strong>{" "}
              ve <strong className="text-ink">Sanat Terapisi</strong> ekollerini
              merkeze alarak, bireylerin çocukluktan getirdiği uyumsuz kalıpları
              (şemaları) fark etmelerini ve daha sağlıklı "yetişkin" modlarına
              geçmelerini hedefliyorum. Benim için her danışan, kendine has bir
              ekosistem ve her seans, bu ekosistemin dengesini bulma
              yolculuğudur.
            </p>

            <div className="my-10 rounded-[2rem] bg-gradient-blush p-8">
              <div className="eyebrow mb-3">Akademik Danışmanlık</div>
              <p className="text-ink leading-relaxed">
                Klinik çalışmalarımın yanı sıra, organizasyonel psikoloji ve
                "insan odaklı tasarım" süreçlerinin bilimsel altyapısı üzerine
                odaklanıyorum.{" "}
                <a
                  href="https://upcore.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-roseDeep underline-offset-4 hover:underline"
                >
                  upcore.io
                </a>{" "}
                platformunda akademik ve bilimsel danışman olarak;
                organizasyonel mimariyi{" "}
                <strong>JD-R (İş Talepleri-Kaynakları Modeli)</strong> ve{" "}
                <strong>
                  S-BIT (Güçlü Yönlere Dayalı Kapsayıcı Çalışma Kuramı)
                </strong>{" "}
                gibi kanıta dayalı modeller çerçevesinde yapılandırıyorum.
                Amacım, iş dünyasındaki süreçlerin sadece verimlilik değil,
                insan psikolojisinin temel ihtiyaçları gözetilerek kurgulanmasını
                sağlamaktır.
              </p>
            </div>

            <div className="my-10 rounded-[2rem] border border-rose/40 p-8">
              <div className="eyebrow mb-3 text-roseDeep">
                Türk PDR Derneği — Genel Başkan Yardımcısı
              </div>
              <p>
                Mesleki sorumluluklarım kapsamında, Türk PDR Derneği çatısı
                altında Genel Başkan Yardımcılığı görevimi sürdürüyorum. Bu rol
                ile mesleki standartların korunması, meslektaşlar arası
                dayanışmanın güçlendirilmesi ve toplumsal fayda odaklı
                projelerin bilimsel koordinasyonu süreçlerinde aktif rol
                alıyorum.
              </p>
            </div>

            <p>
              Çalışmalarımın odağında, bilginin teoride kalmayıp hayata dokunan
              bir çözüm aracına dönüşmesi yer alıyor. Gerek mesleğe adım atan
              stajyerlerime sunduğum mentorluk süreçlerinde, gerekse kurumların
              çalışan esenliği projelerinde temel hedefim; psikolojik sermayesi
              güçlü, dayanıklı ve farkındalığı yüksek bireylerden oluşan bir
              toplumsal yapıya akademik katkı sağlamaktır.
            </p>
          </div>
        </div>
      </section>

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
