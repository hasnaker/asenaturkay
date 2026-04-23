import Blobs from "@/components/Blobs";
import { Bullets, CtaStrip, PageHero, Prose } from "@/components/Section";

export const metadata = {
  title: "Aile ve Çift Danışmanlığı",
  description:
    "Sistemik Yaklaşım ve Çiftler İçin Şema Terapi merkezli aile ve çift danışmanlığı.",
};

export default function Page() {
  return (
    <>
      <div className="relative">
        <Blobs />
        <PageHero
          eyebrow="Bireysel Danışmanlık"
          title="Aile ve Çift Danışmanlığı"
        />
      </div>

      <Prose>
        <p>
          İlişkiler ve aile yapısı, bireyin en temel güven ve aidiyet ihtiyacını
          karşıladığı alanlardır. Ancak her ilişki, zaman zaman bireylerin kendi
          geçmişlerinden getirdiği duygusal yükler, iletişim kazaları ve yaşamın
          getirdiği stres faktörleri nedeniyle tıkanıklıklar yaşayabilir. Aile
          ve çift danışmanlığı sürecinde, ilişkiyi sadece iki kişinin bir araya
          gelmesi olarak değil,{" "}
          <strong>
            yaşayan ve sürekli etkileşim halinde olan bir "sistem"
          </strong>{" "}
          olarak ele alıyorum.
        </p>
        <p>
          Bu süreçte, partnerlerin birbirleriyle olan etkileşimlerini{" "}
          <strong>Sistemik Yaklaşım</strong> ve{" "}
          <strong>Çiftler İçin Şema Terapi</strong> merkeze alınarak analiz
          ediyoruz. Çiftlerin birbirlerini sadece "suçlu/haklı" ekseninde
          değil, birbirlerinin duygusal ihtiyaçlarını ve hassas noktalarını
          anlayan bir düzlemde görmelerini sağlıyoruz. Kendi çocukluk
          dönemimizden getirdiğimiz ve ilişkide tetiklenen "şemalarımızın"
          (terk edilme, kusurluluk, haklılık gibi) partnerimizle kurduğumuz
          bağı nasıl sabote ettiğini keşfediyor; yıkıcı tartışma döngülerini
          yapıcı, şefkatli ve işlevsel bir iletişim diliyle değiştiriyoruz.
        </p>
      </Prose>

      <Bullets
        heading="Özel Uzmanlık ve Çalışma Alanları"
        items={[
          {
            title: "İlişki Dinamikleri ve İletişim Problemleri",
            body:
              'Sürekli hale gelen çatışmaların altındaki kök nedenleri bulmak; "eleştiri-savunma-duvar örme" gibi yıkıcı iletişim döngülerini (Mahşerin Dört Atlısı) kırarak "duygusal aynalama" ve "etkin dinleme" becerilerini geliştirmek.',
          },
          {
            title: "Güven Kaybı ve Sadakatsizlik (Aldatma/Aldatılma)",
            body:
              "İlişkideki en büyük travmalardan biri olan güven sarsılmalarını; suçlayıcı bir dilden uzak, onarıcı ve duygusal dürüstlüğü temel alan bir süreçle yönetmek ve güvenin yeniden inşası üzerine çalışmak.",
          },
          {
            title: "Aile Yaşam Döngüsü ve Geçiş Süreçleri",
            body:
              "Evliliğe hazırlık, çocuk sahibi olma (ebeveynliğe geçiş), taşınma, kariyer değişimleri veya kayıplar gibi ailenin yapısını değiştiren kritik dönemeçlerde sistemin esnekliğini ve dayanıklılığını artırmak.",
          },
          {
            title: "Cinsel Sağlık ve Yakınlık Sorunları",
            body:
              "İlişkideki fiziksel ve duygusal yakınlığın azalması, cinsel isteksizlik veya uyumsuzluk gibi konularda, konunun psikolojik ve ilişkisel boyutlarını profesyonel bir gizlilik ve güven ortamında ele almak.",
          },
          {
            title: "Boşanma Süreci ve Sonrası Rehberlik",
            body:
              "Ayrılık kararı almış çiftlerin bu süreci birbirlerine ve (varsa) çocuklarına en az psikolojik hasar verecek şekilde, medeni ve sağlıklı bir biçimde yönetmelerine destek olmak.",
          },
        ]}
      />

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
