'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-accent selection:text-zinc-950">
      <Navbar />

      <main className="container mx-auto px-6 md:px-12 pt-32 pb-24 max-w-4xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-zinc-400 hover:text-accent mb-12 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          RETOUR À L'ACCUEIL
        </Link>

        <span className="text-xs tracking-[0.3em] font-medium text-accent font-mono block mb-4">
          MENTIONS LÉGALES
        </span>
        
        <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-12">
          Informations légales
        </h1>

        <div className="flex flex-col gap-8 text-zinc-400 font-light leading-relaxed text-sm md:text-base">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">1. Éditeur du site</h2>
            <p>
              Le site internet <span className="text-zinc-300">www.strappazzon-architecture.ch</span> est la propriété exclusive de :
            </p>
            <div className="pl-4 border-l border-accent/30 flex flex-col gap-1 font-mono text-xs text-zinc-300 mt-2">
              <span>ALAN STRAPPAZZON</span>
              <span>Architecte HES Indépendant</span>
              <span>Rue du Rhône 118, 1204 Genève, Suisse</span>
              <span>Email: info@strappazzon-architecture.ch</span>
              <span>Téléphone: +41 (0) 79 341 39 07</span>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">2. Hébergement du site</h2>
            <p>
              Le site internet est hébergé en Suisse par Infomaniak Network SA.
            </p>
            <div className="pl-4 border-l border-zinc-800 flex flex-col gap-1 font-mono text-xs text-zinc-300 mt-2">
              <span>Infomaniak Network SA</span>
              <span>Rue Eugène-Marziano 25, 1227 Les Acacias, Genève, Suisse</span>
              <span>Site web: www.infomaniak.ch</span>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site (structure générale, textes, photographies, plans architecturaux, infographies et logos) relève de la législation suisse et internationale sur le droit d'auteur et la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l'autorisation écrite préalable d'Alan Strappazzon.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">4. Limitation de responsabilité</h2>
            <p>
              Alan Strappazzon s'efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p>
              Des liens hypertextes peuvent renvoyer vers d'autres sites web. Alan Strappazzon décline toute responsabilité quant aux contenus ou politiques de confidentialité de ces sites tiers.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
