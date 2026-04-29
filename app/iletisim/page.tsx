"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP_NUMBER = "905301180230";
const WHATSAPP_DISPLAY = "+90 530 118 02 30";
const PHONE_NUMBER = "905301180230";
const PHONE_DISPLAY = "+90 530 118 02 30";
const EMAIL = "info@asenaturkay.com";
const ADDRESS_LINE_1 = "Maslak Mah. Büyükdere Cad.";
const ADDRESS_LINE_2 = "No: — Sarıyer / İstanbul";
const MAPS_QUERY = encodeURIComponent("Maslak Büyükdere Caddesi Sarıyer İstanbul");
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

const WORKING_HOURS = [
  { day: "Pzt – Cum", time: "10:00 – 20:00" },
  { day: "Cumartesi", time: "10:00 – 16:00" },
  { day: "Pazar", time: "Kapalı" },
];

const FAQ = [
  {
    q: "Seans ne kadar sürer, ne sıklıkla yapılır?",
    a: "Standart bir seans 50 dakikadır. Çoğu süreçte haftada bir seansla başlanır; ihtiyaca göre iki haftada bire ya da iki haftada iki seansa göre uyarlanır.",
  },
  {
    q: "İlk görüşmede ne konuşulur?",
    a: "İlk görüşme bir 'tanışma ve değerlendirme' oturumudur. Başvuru nedeninizi, geçmişinizi ve hedeflerinizi dinliyor; ardından size en uygun ekol ve süreç planını birlikte belirliyoruz.",
  },
  {
    q: "Online görüşme yapılıyor mu?",
    a: "Evet. Yurt dışından veya şehir dışından bağlanan danışanlar için güvenli video platformları üzerinden online seanslar sunuyoruz.",
  },
  {
    q: "Gizlilik nasıl korunuyor?",
    a: "Tüm görüşmeler meslek etiği ve Türk PDR Derneği standartları çerçevesinde tam gizlilik ilkesiyle yürütülür. Hiçbir kişisel bilgi üçüncü şahıslarla paylaşılmaz.",
  },
  {
    q: "Randevu nasıl alınır?",
    a: "Sayfadaki formu doldurabilir, WhatsApp üzerinden yazabilir veya e-posta gönderebilirsiniz. 24 saat içinde size özel bir randevu saati önerilir.",
  },
];

export default function Page() {
  const [state, setState] = useState<"idle" | "sending" | "ok">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const subject = `Randevu Talebi — ${data.hizmet || "Genel"}`;
    const body = [
      `İsim: ${data.isim} ${data.soyisim}`,
      `Telefon: ${data.telefon}`,
      `E-posta: ${data.email}`,
      `Hizmet Türü: ${data.hizmet}`,
      `Görüşme Tipi: ${data.tip}`,
      "",
      "Mesaj:",
      data.mesaj,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setState("ok");
    form.reset();
  }

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="container-wide pt-16 pb-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="rule" />
            <span className="eyebrow">İletişim · Randevu</span>
          </div>
          <h1 className="display-xl">
            Yolculuğunuza
            <br />
            <span className="italic text-rust">bugün</span> başlayın.
          </h1>
          <p className="mt-10 text-[19px] leading-[1.7] text-inkSoft max-w-xl">
            Bireysel, aile ya da kurumsal destek için birden çok yoldan
            ulaşabilirsiniz. Mesajlara genellikle{" "}
            <strong className="text-ink">24 saat içinde</strong> dönüş yapıyoruz.
          </p>

          {/* Quick contact chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-sm font-medium tracking-wide hover:bg-[#1ebb5a] transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              WhatsApp
            </a>
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-5 py-3 border border-ink/20 text-sm font-medium tracking-wide hover:bg-ink hover:text-cream transition-all"
            >
              Telefon
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-3 border border-ink/20 text-sm font-medium tracking-wide hover:bg-ink hover:text-cream transition-all"
            >
              E-posta
            </a>
          </div>
        </div>

        <div className="frame-photo aspect-[3/4] reveal" style={{ animationDelay: "120ms" }}>
          <Image
            src="/images/interior.jpg"
            alt="Sessiz bir köşe"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ==================== MAIN: FORM + SIDEBAR ==================== */}
      <section className="container-wide mt-16 lg:mt-24 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* ===== FORM ===== */}
        <form onSubmit={onSubmit} className="bg-bone p-8 sm:p-12 lg:p-14">
          <div className="flex items-center gap-4 mb-10">
            <span className="label-number">01</span>
            <div className="eyebrow">Randevu Formu</div>
          </div>
          <h2 className="display-md mb-8">
            Size en uygun
            <br />
            <span className="italic text-rust">süreci</span> birlikte tasarlayalım.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <Field name="isim" label="İsim" required />
            <Field name="soyisim" label="Soyisim" required />
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <Field name="telefon" label="Telefon" type="tel" required />
            <Field name="email" label="E-posta" type="email" required />
          </div>

          <div className="mt-6">
            <label className="eyebrow mb-3 block">Hizmet Türü</label>
            <select
              name="hizmet"
              required
              defaultValue=""
              className="w-full bg-transparent border-b border-ink/20 py-3 font-sans text-[16px] text-ink outline-none focus:border-ink transition"
            >
              <option value="" disabled>Seçiniz…</option>
              <option value="Ergen & Genç Yetişkin">Ergen & Genç Yetişkin</option>
              <option value="Yetişkin Psikoterapi">Yetişkin Psikoterapi</option>
              <option value="Aile & Çift">Aile & Çift Danışmanlığı</option>
              <option value="Ebeveyn">Ebeveyn Danışmanlığı</option>
              <option value="Kurumsal">Kurumsal Danışmanlık</option>
              <option value="Eğitim">Eğitim & Atölye</option>
            </select>
          </div>

          <div className="mt-6">
            <label className="eyebrow mb-3 block">Görüşme Tipi</label>
            <div className="flex gap-3 flex-wrap">
              {["Yüz Yüze", "Online", "Fark Etmez"].map((t) => (
                <label key={t} className="cursor-pointer">
                  <input
                    type="radio"
                    name="tip"
                    value={t}
                    defaultChecked={t === "Fark Etmez"}
                    className="peer sr-only"
                  />
                  <span className="inline-flex px-5 py-2.5 border border-ink/20 text-sm peer-checked:bg-ink peer-checked:text-cream peer-checked:border-ink transition-all">
                    {t}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="eyebrow mb-3 block">Mesajınız</label>
            <textarea
              name="mesaj"
              rows={4}
              required
              placeholder="Nasıl bir süreç hedefliyorsunuz? Kısaca anlatın."
              className="w-full bg-transparent border-b border-ink/20 py-3 font-sans text-[16px] text-ink outline-none focus:border-ink resize-none transition placeholder:text-muted"
            />
          </div>

          <div className="mt-4 flex items-start gap-3">
            <input
              type="checkbox"
              id="kvkk"
              required
              className="mt-1.5 accent-ink"
            />
            <label htmlFor="kvkk" className="text-[13px] text-inkSoft leading-relaxed">
              Kişisel verilerimin KVKK kapsamında, yalnızca randevu süreciyle
              ilgili kullanılmak üzere işlenmesine onay veriyorum.
            </label>
          </div>

          <button
            type="submit"
            disabled={state === "sending"}
            className="btn-primary mt-10 w-full sm:w-auto"
          >
            {state === "sending" ? "Gönderiliyor…" : "Mesajı Gönder →"}
          </button>

          {state === "ok" && (
            <p className="mt-6 text-sm text-forest">
              Teşekkürler — e-posta uygulamanız açıldı. En kısa sürede dönüş yapılacak.
            </p>
          )}
        </form>

        {/* ===== SIDEBAR: WhatsApp + Contacts + Hours ===== */}
        <aside className="space-y-5">
          {/* WhatsApp — featured */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba, randevu almak istiyorum.")}`}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden bg-ink text-cream p-8 sm:p-10 transition-all hover:bg-forest"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-20 bg-cover bg-center transition-opacity group-hover:opacity-30"
              style={{ backgroundImage: "url(/images/sunset.jpg)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]" />
                </span>
                <span className="eyebrow !text-cream/70">WhatsApp · Aktif</span>
              </div>
              <h3 className="font-display font-light text-3xl sm:text-4xl leading-[1.1]">
                Hızlı bilgi için{" "}
                <span className="italic text-clay">hemen yazın.</span>
              </h3>
              <p className="mt-4 text-cream/70 text-[14px] leading-relaxed max-w-xs">
                Genellikle birkaç saat içinde dönüş yapılır. Hafta sonları dahil.
              </p>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-cream/15 pt-6">
                <span className="font-sans text-[13px] text-cream/60">
                  {WHATSAPP_DISPLAY}
                </span>
                <span className="font-sans text-[13px] uppercase tracking-[0.2em] text-clay group-hover:translate-x-1 transition-transform">
                  Yaz →
                </span>
              </div>
            </div>
          </a>

          {/* Telefon */}
          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="group block border border-ink/15 p-8 hover:bg-bone transition-colors"
          >
            <div className="eyebrow mb-3">Ofis Telefonu</div>
            <div className="font-display text-2xl text-ink group-hover:text-rust transition-colors">
              {PHONE_DISPLAY}
            </div>
            <p className="mt-2 text-[13px] text-muted">Mesai saatleri içinde</p>
          </a>

          {/* E-posta */}
          <a
            href={`mailto:${EMAIL}`}
            className="group block border border-ink/15 p-8 hover:bg-bone transition-colors"
          >
            <div className="eyebrow mb-3">E-posta</div>
            <div className="font-display text-2xl text-ink group-hover:text-rust transition-colors break-all">
              {EMAIL}
            </div>
            <p className="mt-2 text-[13px] text-muted">24 saat içinde dönüş</p>
          </a>

          {/* Çalışma Saatleri */}
          <div className="border border-ink/15 p-8">
            <div className="eyebrow mb-5">Çalışma Saatleri</div>
            <ul className="divide-y divide-ink/10">
              {WORKING_HOURS.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <span className="font-sans text-[14px] text-inkSoft">{h.day}</span>
                  <span className={`font-display text-[16px] ${h.time === "Kapalı" ? "text-muted italic" : "text-ink"}`}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div className="border border-ink/15 p-8">
            <div className="eyebrow mb-3">Kurumsal Projeler</div>
            <p className="text-inkSoft leading-relaxed text-[14px]">
              Organizasyonel esenlik ve kurumsal işbirlikleri için{" "}
              <a
                href="https://upcore.io"
                target="_blank"
                rel="noreferrer"
                className="text-rust border-b border-rust hover:text-ink hover:border-ink transition-colors"
              >
                upcore.io
              </a>
              .
            </p>
          </div>
        </aside>
      </section>

      {/* ==================== LOCATION ==================== */}
      <section className="container-wide mt-24 lg:mt-32">
        <div className="flex items-end justify-between mb-10 gap-8 flex-wrap">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="label-number">02</span>
              <span className="eyebrow">Konum</span>
            </div>
            <h2 className="display-md max-w-xl">
              Danışmanlık ofisinde ya da{" "}
              <span className="italic text-rust">online</span> görüşme.
            </h2>
          </div>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-link"
          >
            Google Maps'te aç ↗
          </a>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.7fr_1fr]">
          {/* Map embed */}
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[560px] bg-bone overflow-hidden">
            <iframe
              src={MAPS_EMBED}
              className="absolute inset-0 h-full w-full border-0 grayscale contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ofis Konumu"
              allowFullScreen
            />
          </div>

          {/* Address block */}
          <div className="bg-ink text-cream p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="eyebrow !text-cream/60 mb-6">Adres</div>
              <div className="font-display font-light text-3xl sm:text-4xl leading-[1.15] text-cream">
                {ADDRESS_LINE_1}
                <br />
                <span className="text-clay italic">{ADDRESS_LINE_2}</span>
              </div>

              <div className="rule-long my-10 !bg-cream/15" />

              <div className="space-y-4 text-[14px] text-cream/70 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="font-display italic text-clay text-lg leading-none w-16 shrink-0">
                    Metro
                  </span>
                  <span>M2 hattı — İTÜ Ayazağa istasyonuna yürüme mesafesinde.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-display italic text-clay text-lg leading-none w-16 shrink-0">
                    Otopark
                  </span>
                  <span>Danışanlar için valenli otopark mevcuttur.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-display italic text-clay text-lg leading-none w-16 shrink-0">
                    Online
                  </span>
                  <span>Şehir/yurt dışından bağlanan danışanlar için güvenli video seansı.</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-3 flex-wrap">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !bg-cream !text-ink hover:!bg-clay text-center"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="container-wide mt-24 lg:mt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4 mb-6">
              <span className="label-number">03</span>
              <span className="eyebrow">Sık Sorulan</span>
            </div>
            <h2 className="display-md">
              Başlamadan önce{" "}
              <span className="italic text-rust">bilmeniz gerekenler</span>.
            </h2>
            <p className="mt-8 text-inkSoft text-[16px] leading-relaxed max-w-sm">
              Bunların dışındaki her soru için bana formdan veya WhatsApp'tan
              ulaşabilirsiniz — yanıtsız bırakmıyoruz.
            </p>
          </div>

          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 text-left"
                  >
                    <span className="label-number !text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-display text-xl sm:text-2xl transition-colors ${open ? "text-rust" : "text-ink"}`}>
                      {item.q}
                    </span>
                    <span
                      className={`font-display text-3xl leading-none transition-transform ${
                        open ? "rotate-45 text-rust" : "text-ink/40"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden pl-16 pr-14 text-[16px] leading-[1.75] text-inkSoft">
                      {item.a}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="h-32" />
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow mb-3 block">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-ink/20 py-3 font-sans text-[16px] text-ink outline-none focus:border-ink transition"
      />
    </div>
  );
}
