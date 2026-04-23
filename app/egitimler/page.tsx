import Blobs from "@/components/Blobs";
import { CtaStrip, PageHero, Prose } from "@/components/Section";

export const metadata = {
  title: "Eğitimler ve Atölyeler",
  description:
    "Psikoloji/PDR öğrencileri, profesyoneller ve kurumlar için Şema Terapi, SFBT, Sanat Terapisi ve Resilience atölyeleri.",
};

function Group({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-soft mt-20">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="eyebrow mb-3">{eyebrow}</div>
        <h2 className="title-serif text-3xl sm:text-4xl">{title}</h2>
        {lead && (
          <p className="mt-5 text-inkSoft leading-relaxed">{lead}</p>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-3">{children}</div>
    </section>
  );
}

function Card({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="card-soft">
      <div className="eyebrow text-roseDeep mb-4">{tag}</div>
      <h3 className="title-serif text-2xl mb-3">{title}</h3>
      <p className="text-inkSoft text-[15px] leading-relaxed">{body}</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="relative">
        <Blobs />
        <PageHero
          eyebrow="Eğitimler & Atölyeler"
          title="Eğitim ve Gelişim Atölyeleri"
        />
      </div>

      <Prose>
        <p>
          Eğitim, benim için sadece bir bilgi aktarımı süreci değil; bireyin,
          uzmanın ve organizasyonun potansiyelini en üst düzeye çıkaran
          bilimsel bir köprüdür. Klinik tecrübemi ve akademik birikimimi,
          katılımcıların sadece dinleyici değil,{" "}
          <strong>"uygulayıcı"</strong> olduğu bir modelle harmanlıyorum.
          Sunduğum tüm programlar; vaka analizleri, rol oynama (role-playing),
          yaratıcı metaforlar ve kanıta dayalı ekoller üzerine kurgulanmıştır.
          Amacımız, teorik bilginin zihinsel bir yükten kurtulup; klinikte
          etkili bir müdahaleye, iş hayatında ise sürdürülebilir bir
          verimliliğe dönüşmesini sağlamaktır.
        </p>
      </Prose>

      <Group
        eyebrow="01"
        title="Psikoloji/PDR Öğrencileri ve Profesyonelleri İçin Klinik Eğitimler"
        lead='Mesleki yolculuğunun başındaki meslektaşlarım ve uzmanlığını derinleştirmek isteyen profesyoneller için "araç çantası" niteliğindedir.'
      >
        <Card
          tag="A"
          title="Şema Terapi Ekolüne Giriş ve Vaka Formülasyonu"
          body='18 temel uyumsuz şemayı ve bu şemaların yetişkinlikteki "mod" yansımalarını (Kopuk Korungan, Cezalandırıcı Ebeveyn, Sağlıklı Yetişkin vb.) detaylandırıyoruz. Katılımcılar karmaşık vakaları Şema Terapi perspektifiyle formüle etmeyi, bilişsel ve yaşantısal teknikleri (sandalye, imajinasyon) güvenle uygulamayı öğrenirler.'
        />
        <Card
          tag="B"
          title="Kısa Süreli Çözüm Odaklı Terapi (SFBT) Uygulamaları"
          body='Danışanın sahip olduğu kaynaklara ve gelecekteki çözüme odaklanan ekolü, pratik bir müdahale planı olarak sunuyorum. "Mucize Soru" tekniğinden ölçekleme sorularına; danışanı dirençten çıkarıp değişime odaklayan stratejileri vaka analizleri üzerinden inceliyoruz.'
        />
        <Card
          tag="C"
          title="Klinik Uygulamalarda Sanat Terapisi ve Metafor Kullanımı"
          body='Resim, kil, kolaj ve yaratıcı yazım gibi sanat terapisi araçlarının klinik görüşmelerde nasıl yapılandırılacağını işliyoruz. Duyguların somutlaştırılması, içsel çatışmaların dışa vurumu ve metaforların iyileştirici gücünü etik sınırlar içinde bir "projeksiyon aracı" olarak kullanmayı deneyimliyoruz.'
        />
      </Group>

      <section className="container-soft mt-20">
        <div className="rounded-[2.5rem] bg-gradient-blush p-10 sm:p-14 shadow-soft">
          <div className="eyebrow mb-3">02</div>
          <h2 className="title-serif text-3xl sm:text-4xl mb-4">
            Geleceğin Uzmanları İçin: Klinik Staj ve Mentorluk Programı
          </h2>
          <p className="text-inkSoft leading-relaxed mb-8 max-w-3xl">
            3. ve 4. sınıf psikoloji ve psikolojik danışmanlık öğrencilerinin,
            mezuniyet sonrası klinik hayata hazır girmelerini hedefleyen bu
            program; sadece gözlemi değil, derinlemesine bir mentorluk sürecini
            kapsar. Stajyerler, bir uzmanın klinik rutinini, etik karar verme
            süreçlerini ve seans yapılandırma aşamalarını birebir deneyimleme
            fırsatı bulurlar.
          </p>
          <ul className="space-y-4 text-inkSoft">
            <li className="pl-6 border-l-2 border-roseDeep/60">
              <strong className="text-ink">Vaka Tartışmaları ve Süpervizyon Desteği:</strong>{" "}
              Gerçek (anonimleştirilmiş) vakalar üzerinden ilerleyerek; danışan
              karşısında duruş, ilk görüşme teknikleri ve dosya takibi gibi
              temel klinik beceriler üzerine haftalık oturumlar.
            </li>
            <li className="pl-6 border-l-2 border-roseDeep/60">
              <strong className="text-ink">Akademik Okuma ve Tartışma Grupları:</strong>{" "}
              Belirlenen ekoller (Şema Terapi, BDT, Sistemik Yaklaşım) üzerine
              güncel literatür taraması ve klinik pratiğe entegrasyonu.
            </li>
            <li className="pl-6 border-l-2 border-roseDeep/60">
              <strong className="text-ink">Mesleki Kimlik İnşası:</strong>{" "}
              Mezuniyet sonrası kariyer planlaması, uzmanlık alanının seçimi ve
              etik sınırlar içerisinde bir profesyonel duruş geliştirme
              konusunda bireysel mentorluk.
            </li>
          </ul>
        </div>
      </section>

      <Group
        eyebrow="03"
        title="Kurumsal Gelişim ve Organizasyonel Esenlik Atölyeleri"
        lead='Kurumların insan kaynağını korumak ve psikolojik sermayeyi verimliliğe dönüştürmek için tasarlanmış bilimsel tabanlı "workshop" serileri.'
      >
        <Card
          tag="A"
          title="Psikolojik Dayanıklılık (Resilience) ve Belirsizlik Yönetimi"
          body='Zorlayıcı projeler ve kriz anlarında stresi regüle etmeyi, belirsizliğe karşı "bilişsel esneklik" kazanmayı işliyoruz. Katılımcılar krizleri birer engel değil, gelişimi tetikleyen birer "öğrenme fırsatı" olarak görmelerini sağlayacak bilimsel baş etme mekanizmaları kazanırlar.'
        />
        <Card
          tag="B"
          title="İş-Özel Hayat Dengesi ve Sürdürülebilir Sınır Yönetimi"
          body='"Her an ulaşılabilir olma" baskısı, tükenmişliğin en büyük tetikleyicisidir. Bu programda çalışanların hem profesyonel hem de kişisel yaşamlarında sağlıklı sınırlar çizebilmeleri için öz-bakım stratejileri ve zaman yönetimi teknikleri sunuyoruz.'
        />
        <Card
          tag="C"
          title="S-BIT Odaklı Çalışan Bağlılığı ve Güçlü Yönlerin Keşfi"
          body='Güçlü Yönlere Dayalı Kapsayıcı Çalışma Kuramı (S-BIT) çerçevesinde; çalışanların sadece "eksiklerini" kapatmaya değil, "güçlü yönlerini" parlatmaya odaklanıyoruz. JD-R gibi bilimsel modellerle aidiyeti artırıyoruz.'
        />
      </Group>

      <CtaStrip />
      <div className="h-16" />
    </>
  );
}
