import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black/60 backdrop-blur-sm border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-center md:text-left">
            The Party Returns February 2026.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-pink-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-pink-500 transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
