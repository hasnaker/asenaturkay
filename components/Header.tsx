"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/bireysel-danismanlik", label: "Bireysel Danışmanlık" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/egitimler", label: "Eğitimler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-blush/40 bg-cream/85 backdrop-blur-md">
      <div className="container-soft flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-ink hover:text-roseDeep transition-colors"
        >
          Asena <span className="text-roseDeep">Türkay</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-inkSoft hover:text-roseDeep transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/iletisim" className="btn-primary !py-2 !px-5 !text-xs">
            Randevu Al
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menü"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-blush/40 bg-cream">
          <nav className="container-soft flex flex-col py-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base text-inkSoft hover:text-roseDeep"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="btn-primary w-full mt-2"
            >
              Randevu Al
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
