"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/bireysel-danismanlik", label: "Bireysel" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/egitimler", label: "Eğitimler" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur border-b border-ink/10 shadow-[0_1px_0_rgba(43,39,36,0.02)]"
          : "bg-cream/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-[20px] sm:text-[22px] tracking-tight text-ink">
            Asena Türkay
          </span>
          <span className="hidden sm:inline eyebrow !tracking-[0.3em] group-hover:text-rust transition-colors">
            · Dr. Psk. Dan.
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover-underline font-sans text-[13px] uppercase tracking-[0.2em] text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/iletisim" className="btn-primary !px-6 !py-3">
            Randevu Al
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="Menü"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-7 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-7 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-7 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer — only in DOM when open */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-cream border-t border-ink/10 overflow-y-auto">
          <nav className="container-soft flex flex-col py-10 gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-ink hover:text-rust transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="rule-long my-4" />
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="btn-primary self-start"
            >
              Randevu Al
            </Link>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-ghost self-start !border-[#25D366] !text-[#25D366] hover:!bg-[#25D366] hover:!text-white"
            >
              WhatsApp'tan Yaz
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
