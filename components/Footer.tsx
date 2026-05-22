'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 overflow-hidden z-10">
      {/* Decorative subtle gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex flex-col items-start gap-0.5">
              <span className="text-xl font-light tracking-[0.25em] text-white">
                ALAN STRAPPAZZON
              </span>
              <span className="text-[9px] tracking-[0.5em] text-zinc-400 font-mono">
                ARCHITECTURE & PROJECTS
              </span>
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs font-light">
              Architecte HES indépendant et pilote de chantiers de prestige en Suisse. Spécialiste en construction contemporaine et rénovation thermique haute performance.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.3em] font-medium text-zinc-400 uppercase font-mono">
              CONTACT & ADRESSE
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.google.com/maps/place/Rue+du+Rh%C3%B4ne+118,+1204+Gen%C3%A8ve,+Suisse"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors duration-250 font-light"
              >
                <MapPin className="w-4 h-4 text-zinc-500 group-hover:text-accent transition-colors" />
                <span>Rue du Rhône 118, 1204 Genève, Suisse</span>
              </a>
              <a
                href="tel:+41793413907"
                className="group flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors duration-250 font-light"
              >
                <Phone className="w-4 h-4 text-zinc-500 group-hover:text-accent transition-colors" />
                <span>+41 (0) 79 341 39 07</span>
              </a>
              <a
                href="mailto:info@strappazzon-architecture.ch"
                className="group flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors duration-250 font-light"
              >
                <Mail className="w-4 h-4 text-zinc-500 group-hover:text-accent transition-colors" />
                <span>info@strappazzon-architecture.ch</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4 md:items-end">
            <h4 className="text-[10px] tracking-[0.3em] font-medium text-zinc-400 uppercase font-mono">
              LIENS
            </h4>
            <div className="flex flex-wrap md:flex-col gap-3 md:items-end text-xs text-zinc-400">
              <Link href="/#realisations" className="hover:text-accent transition-colors">
                RÉALISATIONS
              </Link>
              <Link href="/#about" className="hover:text-accent transition-colors">
                À PROPOS
              </Link>
              <Link href="/#contact" className="hover:text-accent transition-colors">
                CONTACT
              </Link>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-1.5 hover:text-white transition-colors text-xs"
              >
                RETOUR EN HAUT
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-zinc-900 my-8" />

        {/* Bottom details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500 font-mono tracking-wider">
          <p>© {new Date().getFullYear()} ALAN STRAPPAZZON. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex gap-6">
            <Link href="/politique-de-confidentialite" className="hover:text-zinc-400 transition-colors uppercase">
              POLITIQUE DE CONFIDENTIALITÉ
            </Link>
            <Link href="/mentions-legales" className="hover:text-zinc-400 transition-colors uppercase">
              MENTIONS LÉGALES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
