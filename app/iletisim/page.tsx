"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState<"idle" | "sending" | "ok">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const subject = `Randevu Talebi — ${data.hizmet || "Genel"}`;
    const body = [
      `İsim: ${data.isim} ${data.soyisim}`,
      `Telefon: ${data.telefon}`,
      `Hizmet Türü: ${data.hizmet}`,
      "",
      "Mesaj:",
      data.mesaj,
    ].join("\n");

    window.location.href = `mailto:info@asenaturkay.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setState("ok");
    form.reset();
  }

  return (
    <>
      {/* Hero */}
      <section className="container-wide pt-16 pb-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="rule" />
            <span className="eyebrow">İletişim</span>
          </div>
          <h1 className="display-xl">
            Yolculuğunuza
            <br />
            <span className="italic text-rust">bugün</span> başlayın.
          </h1>
          <p className="mt-10 text-[19px] leading-[1.7] text-inkSoft max-w-xl">
            Bireysel, aile ya da kurumsal destek süreci için aşağıdaki formu
            doldurabilir veya WhatsApp üzerinden hızlıca iletişime
            geçebilirsiniz.
          </p>
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

      {/* Form + side info */}
      <section className="container-wide mt-16 lg:mt-24 pb-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="bg-bone p-8 sm:p-12"
        >
          <div className="eyebrow mb-8">Randevu Formu</div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Field name="isim" label="İsim" required />
            <Field name="soyisim" label="Soyisim" required />
          </div>
          <div className="mt-6">
            <Field name="telefon" label="Telefon" type="tel" required />
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
              <option value="Bireysel">Bireysel Danışmanlık</option>
              <option value="Kurumsal">Kurumsal Danışmanlık</option>
              <option value="Eğitim">Eğitim & Atölye</option>
            </select>
          </div>

          <div className="mt-6">
            <label className="eyebrow mb-3 block">Mesajınız</label>
            <textarea
              name="mesaj"
              rows={5}
              required
              className="w-full bg-transparent border-b border-ink/20 py-3 font-sans text-[16px] text-ink outline-none focus:border-ink resize-none transition"
            />
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
              Teşekkürler, e-posta uygulamanız açılacak. En kısa sürede dönüş
              yapacağız.
            </p>
          )}
        </form>

        {/* Side info */}
        <aside className="space-y-6">
          <div className="relative overflow-hidden bg-ink text-cream p-10 min-h-[260px]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-25 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/sunset.jpg)" }}
            />
            <div className="relative">
              <div className="eyebrow !text-cream/60 mb-4">WhatsApp</div>
              <div className="font-display font-light text-3xl leading-tight">
                Hızlı bilgi ve randevu için{" "}
                <span className="italic text-clay">bize yazın.</span>
              </div>
              <a
                href="https://wa.me/905000000000?text=Merhaba%2C%20asenaturkay.com%20%C3%BCzerinden%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8 !bg-cream !text-ink hover:!bg-clay"
              >
                WhatsApp'tan Yaz →
              </a>
            </div>
          </div>

          <div className="border border-ink/15 p-10">
            <div className="eyebrow mb-4">Kurumsal Platform</div>
            <p className="text-inkSoft leading-relaxed text-[15px]">
              Kurumsal projeler için{" "}
              <a
                href="https://upcore.io"
                target="_blank"
                rel="noreferrer"
                className="text-rust border-b border-rust hover:text-ink hover:border-ink transition-colors"
              >
                upcore.io
              </a>{" "}
              üzerinden de iletişim kurabilirsiniz.
            </p>
          </div>

          <div className="border border-ink/15 p-10">
            <div className="eyebrow mb-4">Konum</div>
            <p className="text-inkSoft leading-relaxed text-[15px]">
              Adres bilgisi yakında güncellenecek.
            </p>
          </div>
        </aside>
      </section>

      <div className="h-24" />
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
