export default function WhatsAppButton() {
  // Numara belirlendiğinde güncellenecek — placeholder.
  const phone = "905000000000";
  const text = encodeURIComponent(
    "Merhaba, asenaturkay.com üzerinden randevu/bilgi almak istiyorum."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sageDeep text-white shadow-glow transition-transform hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.1.55 4.16 1.6 5.97L0 24l6.23-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.82 0-3.6-.49-5.15-1.42l-.37-.22-3.7.97.99-3.6-.24-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.47-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.42-1.49 9.1 9.1 0 0 1-1.68-2.09c-.17-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.49 1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
