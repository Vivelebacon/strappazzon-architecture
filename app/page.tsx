'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Filter,
  Layers,
  MapPin,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Send,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { projects } from '@/data/projects';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Testimonial } from '@/components/ui/testimonial';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const testimonials = [
  {
    quote:
      "Architecte très passionné, professionnel et à l'écoute de ses clients. Merci beaucoup pour cette belle collaboration !",
    authorName: 'Samuel S.',
    authorPosition: 'Client',
    highlightedText: 'professionnel et à l\'écoute',
  },
  {
    quote:
      "Un architecte de talent ! Grâce à son expertise et à son sens aigu de l'esthétique, notre projet a pris une dimension incroyable.",
    authorName: 'Laureen M.',
    authorPosition: 'Cliente',
    highlightedText: 'sens aigu de l\'esthétique',
  },
  {
    quote:
      "Alan est un architecte qui combine habilement l'innovation et la tradition. Ses projets se distinguent par un souci du détail.",
    authorName: 'Mina Caterina',
    authorPosition: 'Cliente',
    highlightedText: 'souci du détail',
  },
];

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'villa' | 'residentiel' | 'commerce' | 'bureaux'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filter projects based on type
  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'villa') return project.category.toLowerCase().includes('villa');
    if (filter === 'residentiel') return project.category.toLowerCase().includes('résidentiel');
    if (filter === 'commerce') return project.category.toLowerCase().includes('commerce');
    if (filter === 'bureaux') return project.category.toLowerCase().includes('bureaux');
    return true;
  });

  const categories = [
    { id: 'all', name: 'TOUS' },
    { id: 'villa', name: 'CONSTRUCTION VILLA' },
    { id: 'residentiel', name: 'RÉSIDENTIEL' },
    { id: 'commerce', name: 'COMMERCES' },
    { id: 'bureaux', name: 'BUREAUX' }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div id="home" className="bg-zinc-950 text-zinc-100 font-sans selection:bg-accent selection:text-zinc-950">
      <Navbar />

      {/* Hero section with ScrollExpandMedia */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/realisations/projet-confignon/03.jpg"
        bgImageSrc="/realisations/projet-confignon/03.jpg"
        slides={[
          '/realisations/projet-confignon/03.jpg',
          '/realisations/projet-confignon/01.jpg',
          '/realisations/seymaz-parc/01.jpg',
          '/realisations/villa-anieres-ge/01.jpg',
        ]}
        title="ALAN STRAPPAZZON"
        date="ARCHITECTURE D'EXCEPTION"
        scrollToExpand="DÉFILEZ POUR DECOUVRIR"
        textBlend={false}
      >
        {/* Everything inside children gets shown only when hero is expanded */}
        
        {/* Realisations / Portfolio Section */}
        <section id="realisations" className="py-24 border-t border-zinc-900/50">
          <div className="container mx-auto">
            
            {/* Header section */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="flex flex-col gap-4">
                <span className="text-xs tracking-[0.3em] font-medium text-accent font-mono">
                  NOTRE PORTFOLIO
                </span>
                <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                  Projets d'architecture & <br className="hidden md:inline" />
                  Management de chantiers
                </h2>
              </div>
              <p className="text-zinc-400 text-sm md:text-base font-light max-w-md leading-relaxed">
                Une sélection de réalisations marquantes allant de villas de standing contemporaines à des boutiques de luxe internationales, en passant par de complexes structures acoustiques et tertiaires.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-zinc-900 pb-6">
              <span className="text-[10px] tracking-widest text-zinc-500 font-mono flex items-center gap-1.5 mr-4">
                <Filter className="w-3.5 h-3.5" /> FILTRER PAR :
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id as any)}
                  className={`cursor-pointer px-4 py-2 text-[10px] tracking-widest font-mono border rounded transition-all duration-300 ${
                    filter === cat.id
                      ? 'border-accent text-accent bg-accent/5'
                      : 'border-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Grid of Projects */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                    style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/realisations/${project.slug}`} className="block cursor-pointer">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900 mb-5 border border-zinc-900/60 shadow-lg transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-2xl group-hover:shadow-accent/10">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Overlay with details */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] tracking-widest text-accent font-mono">
                              DÉTAILS DU PROJET
                            </span>
                            <span className="p-2 bg-accent/90 rounded-full text-zinc-950">
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card Meta */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-[10px] tracking-widest text-zinc-500 font-mono">
                          <span>{project.category.toUpperCase()}</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-light text-zinc-100 group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-light mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Philosophy & Numbers / Accent Section */}
        <section id="about" className="py-24 border-t border-zinc-900/50 relative overflow-hidden">
          {/* Subtle concrete background light */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Image with glass overlay */}
              <div className="lg:col-span-5 relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-2xl border border-zinc-900">
                <Image
                  src="/hero/about-1.jpg"
                  alt="Réalisation Alan Strappazzon Architecture"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20" />
                
                {/* Floating glass badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel rounded p-6 flex flex-col gap-2">
                  <span className="text-[10px] tracking-[0.25em] text-accent font-mono font-medium">PHILOSOPHIE</span>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    "L'architecture n'est pas seulement le dessin des espaces, c'est la rigueur de sa réalisation concrète."
                  </p>
                </div>
              </div>

              {/* Right Column: Editorial details */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-xs tracking-[0.3em] font-medium text-accent font-mono">
                    NOTRE HISTOIRE & SAVOIR-FAIRE
                  </span>
                  <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
                    Alan Strappazzon, <br />
                    Architecte HES Indépendant
                  </h2>
                </div>
                
                <div className="flex flex-col gap-5 text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                  <p>
                    Actif à Genève et à travers la Suisse romande, <strong className="text-zinc-200">Alan Strappazzon</strong> est un architecte diplômé HES au parcours d'exception. À travers sa pratique libérale et ses collaborations d'associé (notamment avec <em>KSarchitecture SA</em>), il a acquis une expertise unique combinant une vision esthétique exigeante et une maîtrise technique pointue de la direction de travaux.
                  </p>
                  <p>
                    Son champ d'intervention s'étend de la conception de somptueuses villas individuelles contemporaines (comme à Confignon, Conches ou Anières) à la réalisation lourde d'espaces commerciaux pour de prestigieuses enseignes de luxe mondiales sur la Rue du Rhône (PRADA, VERSACE).
                  </p>
                  <p>
                    Reconnu pour sa rigueur et sa gestion technique irréprochable (normes SIA, acoustique de pointe, chauffage géothermique et isolation Minergie), il pilote des chantiers complexes sous nappe phréatique et coordonne l'ensemble des mandataires avec une transparence absolue sur les coûts et les plannings.
                  </p>
                </div>

                {/* KPI/Stats section */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl md:text-4xl text-accent font-light font-mono">15+</span>
                    <span className="text-[10px] tracking-wider text-zinc-500 font-mono uppercase">RÉALISATIONS</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl md:text-4xl text-accent font-light font-mono">12+</span>
                    <span className="text-[10px] tracking-wider text-zinc-500 font-mono uppercase">ANS D'EXPERTISE</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl md:text-4xl text-accent font-light font-mono">100%</span>
                    <span className="text-[10px] tracking-wider text-zinc-500 font-mono uppercase">SATISFACTION</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 border-t border-zinc-900/50 relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto relative">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <span className="text-xs tracking-[0.3em] font-medium text-accent font-mono">
                CLIENTS SATISFAITS
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight max-w-2xl">
                La confiance de nos clients,<br className="hidden md:inline" /> notre meilleure réalisation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.authorName}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{ perspective: 1200 }}
                >
                  <Testimonial
                    quote={t.quote}
                    authorName={t.authorName}
                    authorPosition={t.authorPosition}
                    highlightedText={t.highlightedText}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-zinc-900/50 bg-zinc-950/40 relative z-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Contact details */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-xs tracking-[0.3em] font-medium text-accent font-mono">
                    NOUS RENSEIGNER
                  </span>
                  <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                    Commençons <br />
                    votre projet
                  </h2>
                </div>
                
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                  Que ce soit pour une construction neuve de villa de standing, la restructuration d'un immeuble classé ou le pilotage technique d'un aménagement de commerce de luxe, nous mettons notre expertise au service de vos ambitions.
                </p>

                <div className="flex flex-col gap-6 pt-6 border-t border-zinc-900/60 font-light text-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded text-accent mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase">TÉLÉPHONE</span>
                      <a href="tel:+41793413907" className="text-zinc-200 hover:text-white transition-colors">
                        +41 (0) 79 341 39 07
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded text-accent mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase">EMAIL DIRECT</span>
                      <a href="mailto:info@strappazzon-architecture.ch" className="text-zinc-200 hover:text-white transition-colors">
                        info@strappazzon-architecture.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded text-accent mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase">BUREAU ARCHITECTE</span>
                      <span className="text-zinc-200">
                        Rue du Rhône 118, 1204 Genève, Suisse
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Contact form */}
              <div className="lg:col-span-7 glass-panel rounded-lg p-8 md:p-10 shadow-2xl relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/10 via-accent to-accent/10" />

                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] tracking-widest text-zinc-500 font-mono uppercase">
                        VOTRE NOM
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Ex: Jean Dupont"
                        className="px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-accent/60 text-sm font-light transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] tracking-widest text-zinc-500 font-mono uppercase">
                        ADRESSE EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="Ex: name@domain.com"
                        className="px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-accent/60 text-sm font-light transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[10px] tracking-widest text-zinc-500 font-mono uppercase">
                      TYPE DE MANDAT
                    </label>
                    <select
                      id="subject"
                      className="cursor-pointer px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded text-zinc-200 focus:outline-none focus:border-accent/60 text-sm font-light transition-all"
                    >
                      <option className="bg-zinc-950" value="villa">Construction de Villa individuelle</option>
                      <option className="bg-zinc-950" value="renovation">Rénovation Thermique / Restructuration</option>
                      <option className="bg-zinc-950" value="commerce">Aménagement de Commerce de luxe / Bureaux</option>
                      <option className="bg-zinc-950" value="pilotage">Management de projet / Direction de travaux</option>
                      <option className="bg-zinc-950" value="other">Autre demande</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] tracking-widest text-zinc-500 font-mono uppercase">
                      DÉTAILS DE VOTRE PROJET
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Décrivez brièvement la nature de vos travaux, la localisation et vos objectifs..."
                      className="px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-accent/60 text-sm font-light transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer group relative flex items-center justify-center gap-2 mt-2 px-8 py-3.5 bg-accent text-zinc-950 font-mono font-bold tracking-widest text-xs hover:bg-accent-hover active:scale-[0.98] transition-all rounded shadow-lg shadow-accent/10"
                  >
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    ENVOYER LE MESSAGE
                  </button>

                  <AnimatePresence>
                    {formSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-400 rounded text-xs leading-relaxed text-center font-light mt-2"
                      >
                        Merci pour votre message ! Nous vous recontacterons sous 24 heures pour étudier votre projet.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </ScrollExpandMedia>
    </div>
  );
}
