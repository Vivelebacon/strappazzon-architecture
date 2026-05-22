'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialite() {
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
          POLITIQUE DE CONFIDENTIALITÉ
        </span>
        
        <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-12">
          Protection des données
        </h1>

        <div className="flex flex-col gap-8 text-zinc-400 font-light leading-relaxed text-sm md:text-base">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">1. Introduction</h2>
            <p>
              Alan Strappazzon Architecture s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site <span className="text-zinc-300">www.strappazzon-architecture.ch</span>, soient conformes à la loi fédérale sur la protection des données (LPD) en Suisse et au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est Alan Strappazzon, dont le bureau est situé à la Rue du Rhône 118, 1204 Genève, Suisse. Pour toute question ou demande concernant vos données personnelles, vous pouvez envoyer un courriel à <a href="mailto:info@strappazzon-architecture.ch" className="text-accent hover:underline">info@strappazzon-architecture.ch</a>.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">3. Collecte des données personnelles</h2>
            <p>
              Nous collectons uniquement les informations personnelles que vous nous transmettez volontairement via notre formulaire de contact ou par e-mail, telles que :
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-1.5 mt-2">
              <li>Votre nom et votre prénom</li>
              <li>Votre adresse de messagerie électronique (e-mail)</li>
              <li>Votre numéro de téléphone</li>
              <li>La nature de votre projet et les messages rédigés</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">4. Finalités du traitement</h2>
            <p>
              Vos données personnelles sont traitées exclusivement pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-1.5 mt-2">
              <li>Répondre à vos demandes d'information concernant nos prestations architecturales.</li>
              <li>Étudier et planifier les avant-projets immobiliers ou rénovations.</li>
              <li>Établir des relations contractuelles ou de facturation pour la direction de chantiers.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">5. Droits des utilisateurs</h2>
            <p>
              Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification, de portabilité, de limitation du traitement et de suppression de vos données personnelles. Pour exercer ces droits, veuillez nous contacter par e-mail à l'adresse indiquée ci-dessus.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-zinc-200">6. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées (chiffrement SSL, protocoles sécurisés) pour protéger vos données contre toute destruction, perte, altération, divulgation ou accès non autorisé.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
