import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Library, Film, Wine } from 'lucide-react';

export default function CulturePage() {
  const categories = [
    {
      icon: <Film className="w-6 h-6 text-terracotta-600 stroke-[1.25]" />,
      title: 'Neorealism & Masterpieces',
      italianTitle: 'Il Cinema d’Autore',
      description: 'Cinema is the gateway to natural pronunciation. Study Italian using early Fellini, Antonioni, and Pasolini scripts. Analyze characters’ emotional arcs, and practice regional vocal cadences.',
    },
    {
      icon: <Wine className="w-6 h-6 text-terracotta-600 stroke-[1.25]" />,
      title: 'The Poetry of Regional Wine',
      italianTitle: 'La Cultura del Vino',
      description: 'The Marche produces elite wines. Our sommelier coaching sessions teach you how to analyze Passerina, Pecorino, and Rosso Piceno. Learn custom Italian vocabulary to debate organic vintages like a pro.',
    },
    {
      icon: <Library className="w-6 h-6 text-terracotta-600 stroke-[1.25]" />,
      title: 'The Living Word',
      italianTitle: 'La Parola Scritta',
      description: 'Explore the modern writers who shaped Italy’s elegant syntax. From Italo Calvino’s playful metaphors to the direct realism of Cesare Pavese, understand style through historic printed literature.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      {/* Editorial Header */}
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            L’Arte di Vivere
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Italian culture, <br />
            <span className="italic text-olive-800">deconstructed and lived.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            We reject the idea that language is a mere set of tools. It is a philosophy, a design framework, and a direct expression of slow, beautiful Mediterranean existence.
          </p>
        </div>
      </section>

      {/* Main Culture Categories Columns */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        
        {/* Intro Block with Large Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] bg-travertine-200 overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
                alt="Marche vineyard golden hour"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-widest uppercase font-bold text-olive-800 block">
              Beyond Vocabulary
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-snug">
              Unlocking the elegant code of slow Italian living.
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              At Accademia, your afternoon outings are not mere leisure; they are interactive, structured laboratories. Every workshop connects with a custom vocabulary map, allowing you to discuss architectural styles, wine palettes, or classical cinema themes with ease.
            </p>
          </div>
        </div>

        {/* Culture Elements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-travertine-100 p-8 border border-travertine-200/60 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="bg-travertine-200 w-12 h-12 flex items-center justify-center border border-travertine-300">
                {cat.icon}
              </div>
              <div className="space-y-1">
                <span className="font-serif italic text-xs text-olive-800 block">
                  {cat.italianTitle}
                </span>
                <h3 className="font-serif text-lg text-charcoal-950 font-normal">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* The Non-Verbal Seminar section */}
      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              La Cinesica dell’Italiano
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-tight">
              The silent vocabulary: A masterclass in body language.
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              Over 50% of Italian communication is entirely non-verbal. We host a signature weekly seminar deciphering the precise grammar of micro-gestures, physical space, hand shapes, and elegant pauses that distinguish native conversationalists.
            </p>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              Learn how to express surprise, appreciation, doubt, or passion without saying a single word. Practice these subtle rules with local merchants, feeling completely in tune with Italian social codes.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
                alt="Elegant dialogue"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
