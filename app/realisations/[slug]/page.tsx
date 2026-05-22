'use client';

import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Briefcase, Maximize2, X } from 'lucide-react';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function RealisationPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  
  // Find project
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  
  // Handle not found
  useEffect(() => {
    if (!project) {
      router.push('/#realisations');
    }
  }, [project, router]);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
        <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Next and Previous projects for cycling
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-accent selection:text-zinc-950">
      <Navbar />

      {/* Hero Header with background blur image */}
      <section className="relative h-[65dvh] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30" />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link
              href="/#realisations"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-zinc-400 hover:text-accent mb-6 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              RETOUR AUX RÉALISATIONS
            </Link>
            
            <span className="inline-block px-3 py-1 border border-accent/20 bg-accent/5 rounded text-[10px] tracking-[0.25em] text-accent mb-4 font-mono font-medium">
              {project.category.toUpperCase()}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm text-zinc-400 font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent/80" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent/80" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent/80" />
                <span>{project.role}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <h2 className="text-[10px] tracking-[0.3em] font-medium text-zinc-400 uppercase font-mono">
                PRÉSENTATION DU PROJET
              </h2>
              <p className="text-lg md:text-xl font-light text-zinc-200 leading-relaxed">
                {project.description}
              </p>
              <div className="h-px bg-zinc-900 my-2" />
              <p className="text-zinc-400 font-light leading-relaxed whitespace-pre-line text-sm md:text-base">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Right side: Specs Card (Champagne/Minimalist style) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 glass-panel rounded-lg p-8 md:p-10 flex flex-col gap-8 shadow-2xl relative"
            >
              {/* Gold Top Light Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
              
              <h3 className="text-xs tracking-[0.25em] font-medium text-zinc-300 font-mono">
                FICHE TECHNIQUE
              </h3>

              <div className="flex flex-col gap-4 font-light text-sm">
                {project.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 py-3 border-b border-zinc-800/60 last:border-b-0">
                    <span className="text-zinc-500 text-xs tracking-wider uppercase font-mono">{spec.label}</span>
                    <span className="text-zinc-100 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900/40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-[10px] tracking-[0.3em] font-medium text-zinc-400 uppercase font-mono">
              GALERIE PHOTO
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-white">
              Vues architecturales & détails
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-zinc-900 shadow-lg border border-zinc-900/60"
                onClick={() => setActiveImageIndex(index)}
              >
                <Image
                  src={img}
                  alt={`${project.title} - Galerie Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-zinc-950/80 rounded-full border border-accent/30 text-accent transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Overlay Carousel */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4"
          >
            {/* Close trigger outside */}
            <div className="absolute inset-0" onClick={() => setActiveImageIndex(null)} />
            
            {/* Header controls */}
            <div className="absolute top-4 left-0 right-0 px-6 flex items-center justify-between text-white z-10">
              <span className="text-xs font-mono tracking-wider font-light">
                {activeImageIndex + 1} / {project.gallery.length} — {project.title.toUpperCase()}
              </span>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-2 hover:text-accent transition-colors focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Previous Image Trigger */}
            <button
              onClick={() => setActiveImageIndex((activeImageIndex - 1 + project.gallery.length) % project.gallery.length)}
              className="absolute left-6 p-3 bg-zinc-900/70 border border-zinc-800 hover:border-accent hover:text-accent rounded-full text-white transition-all z-10"
              aria-label="Image précédente"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Active Image Box */}
            <div className="relative max-w-5xl w-full aspect-[4/3] max-h-[80vh]">
              <Image
                src={project.gallery[activeImageIndex]}
                alt={`${project.title} - Lightbox Image`}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Next Image Trigger */}
            <button
              onClick={() => setActiveImageIndex((activeImageIndex + 1) % project.gallery.length)}
              className="absolute right-6 p-3 bg-zinc-900/70 border border-zinc-800 hover:border-accent hover:text-accent rounded-full text-white transition-all z-10"
              aria-label="Image suivante"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cycle Projects Navigation */}
      <section className="py-24 border-t border-zinc-900/60 bg-zinc-950 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Previous Project Card */}
            <Link
              href={`/realisations/${prevProject.slug}`}
              className="group glass-panel rounded-lg p-8 flex items-center justify-between border border-zinc-900 hover:border-accent/30 transition-all duration-350 shadow-md"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-widest text-zinc-500 font-mono flex items-center gap-1.5">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  PROJET PRÉCÉDENT
                </span>
                <span className="text-lg md:text-xl font-light text-zinc-300 group-hover:text-white transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/realisations/${nextProject.slug}`}
              className="group glass-panel rounded-lg p-8 flex items-center justify-between border border-zinc-900 hover:border-accent/30 transition-all duration-350 text-right shadow-md"
            >
              <div className="flex flex-col gap-2 ml-auto">
                <span className="text-[10px] tracking-widest text-zinc-500 font-mono flex items-center gap-1.5 justify-end">
                  PROJET SUIVANT
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-lg md:text-xl font-light text-zinc-300 group-hover:text-white transition-colors">
                  {nextProject.title}
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
