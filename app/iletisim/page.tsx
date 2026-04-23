"use client";

import Blobs from "@/components/Blobs";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // İlk etap: mailto fallback (backend hazır olana dek).
    const subject = `Randevu Talebi — ${data.hizmet || "Genel"}`;
    const body = [
      `İsim: ${data.isim} ${data.soyisim}`,
      `Telefon: ${data.telefon}`,
      `Hizmet Türü: ${data.hizmet}`,
      "",
      "Mesaj:",
      data.mesaj,
    ].join("\n");

    const mailto = `mailto:info@asenaturkay.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setState("ok");
    form.reset();
  }

  return (
    <>
      <div className="relative">
        <Blobs />
        <section className="relative pt-20 pb-14">
          <div className="container-soft text-center fade-up">
            <div className="eyebrow mb-4">İletişim</div>
            <h1 className="title-serif text-5xl sm:text-6xl leading-[1.05]">
              Yolculuğunuza <span className="italic text-roseDeep">Bugün</span> Başlayın.
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-inkSoft leading-relaxed">
              Bireysel, aile ya da kurumsal destek süreci için aşağıdaki formu
              doldurabilir veya WhatsApp üzerinden hızlıca iletişime
              geçebilirsiniz.
            </p>
          </div>
        </section>
      </div>

      <section className="container-soft mt-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-white/80 backdrop-blur-sm p-8 sm:p-10 shadow-soft space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="isim" label="İsim" required />
              <Field name="soyisim" label="Soyisim" required />
            </div>
            <Field name="telefon" label="Telefon" type="tel" required />
            <div>
              <label className="block eyebrow mb-2">Hizmet Türü</label>
              <select
                name="hizmet"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-blush bg-cream/70 px-4 py-3 text-ink outline-none focus:border-roseDeep focus:bg-white transition"
              >
                <option value="" disabled>Seçiniz…</option>
                <option value="Bireysel">Bireysel Danışmanlık</option>
                <option value="Kurumsal">Kurumsal Danışmanlık</option>
                <option value="Eğitim">Eğitim & Atölye</option>
              </select>
            </div>
            <div>
              <label className="block eyebrow mb-2">Mesajınız</label>
              <textarea
                name="mesaj"
                rows={5}
                required
                className="w-full rounded-2xl border border-blush bg-cream/70 px-4 py-3 text-ink outline-none focus:border-roseDeep focus:bg-white transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={state === "sending"}
              className="btn-primary w-full !py-4"
            >
              {state === "sending" ? "Gönderiliyor…" : "Mesajı Gönder"}
            </button>

            {state === "ok" && (
              <p className="text-sm text-sageDeep text-center">
                Teşekkürler, e-posta uygulamanız açılacak. En kısa sürede
                dönüş yapacağız.
              </p>
            )}
          </form>

          {/* INFO */}
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-gradient-blush p-8 shadow-soft">
              <div className="eyebrow mb-3">WhatsApp</div>
              <h3 className="title-serif text-2xl mb-3">
                Hızlı bilgi ve randevu için bize yazın.
              </h3>
              <a
                href="https://wa.me/905000000000?text=Merhaba%2C%20asenaturkay.com%20%C3%BCzerinden%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="btn-primary !bg-sageDeep hover:!bg-sageDeep/90"
              >
                WhatsApp'tan Yaz
              </a>
            </div>

            <div className="rounded-[2rem] border border-blush p-8">
              <div className="eyebrow mb-3">Konum</div>
              <p className="text-inkSoft leading-relaxed">
                Adres bilgisi yakında güncellenecek.
              </p>
            </div>

            <div className="rounded-[2rem] border border-blush p-8">
              <div className="eyebrow mb-3">Kurumsal Platform</div>
              <p className="text-inkSoft leading-relaxed mb-4">
                Kurumsal projeler için{" "}
                <a
                  href="https://upcore.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-roseDeep underline-offset-4 hover:underline"
                >
                  upcore.io
                </a>{" "}
                üzerinden de iletişim kurabilirsiniz.
              </p>
            </div>
          </div>
        </div>
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
      <label className="block eyebrow mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-blush bg-cream/70 px-4 py-3 text-ink outline-none focus:border-roseDeep focus:bg-white transition"
      />
    </div>
  );
}
