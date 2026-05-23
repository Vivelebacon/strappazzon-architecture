'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ACCUEIL', href: pathname === '/' ? '#home' : '/', target: '#home' },
    { name: 'RÉALISATIONS', href: pathname === '/' ? '#realisations' : '/#realisations', target: '#realisations' },
    { name: 'À PROPOS', href: pathname === '/' ? '#about' : '/#about', target: '#about' },
    { name: 'CONTACT', href: pathname === '/' ? '#contact' : '/#contact', target: '#contact' },
  ];

  const handleNavClick = (target: string) => {
    if (pathname !== '/') return; // on a sub-route, let the link navigate home
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('expand-hero', { detail: target }));
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="group flex flex-col items-start gap-0.5">
            <span className="text-xl md:text-2xl font-light tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-accent">
              ALAN STRAPPAZZON
            </span>
            <span className="text-[9px] tracking-[0.5em] text-zinc-400 font-mono">
              ARCHITECTURE & PROJECTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.target)}
                className="text-xs tracking-[0.2em] font-medium text-zinc-300 hover:text-accent transition-colors duration-300 relative py-1"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={pathname === '/' ? '#contact' : '/#contact'}
              onClick={() => handleNavClick('#contact')}
              className="group flex items-center gap-1.5 px-4 py-2 border border-zinc-750 text-xs tracking-[0.2em] hover:border-accent text-zinc-200 hover:text-white transition-all duration-300 rounded bg-zinc-900/40 backdrop-blur-sm"
            >
              MANDAT
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-zinc-950 flex flex-col justify-center px-8"
          >
            <div className="absolute inset-0 bg-radial-gradient from-zinc-900/50 to-zinc-950 pointer-events-none z-0" />
            <nav className="relative z-10 flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    onClick={() => { setIsOpen(false); handleNavClick(link.target); }}
                    href={link.href}
                    className="text-2xl tracking-[0.25em] font-light text-zinc-300 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-8 flex justify-center"
              >
                <Link
                  onClick={() => { setIsOpen(false); handleNavClick('#contact'); }}
                  href={pathname === '/' ? '#contact' : '/#contact'}
                  className="flex items-center gap-2 px-8 py-3 border border-accent/30 text-sm tracking-[0.2em] text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300 rounded"
                >
                  NOUS CONTACTER
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
