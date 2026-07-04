import React from 'react';
import { motion } from 'motion/react';
import { Compass, Music, MapPin, Coffee, ArrowRight } from 'lucide-react';

export default function StudentLifePage() {
  const events = [
    {
      id: 'aperitivo',
      title: 'Tavola Aperta: The Welcome Aperitivo',
      tagline: 'Mingle & Wine Tasting at Palazzo Sgariglia',
      description: 'Every Monday evening, our private courtyard lights up with candlelight. Mingle with fellow writers, professionals, and language coaches. Sip on vintage biodynamic Pecorino and taste local olive nibbles while practicing your initial greetings.',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cooking',
      title: 'The Alchemy of Olive all’Ascolana',
      tagline: 'Private Culinary Workshops with Nonna Luisa',
      description: 'Ascoli Piceno is famous across Italy for its stuffed, fried olives. Under Luisa’s patient guidance, learn the carving, filling, and breading process while practicing clear Italian kitchen commands.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'opera',
      title: 'Cinema Sotto le Stelle (Retro Movie Night)',
      tagline: 'Vintage screenings under the Roman arches',
      description: 'As twilight settles, we project masterworks of classical Italian cinema (Fellini, Antonioni, Pasolini) directly onto the stone walls of the courtyard. Sip on regional Rosso Piceno and debate screen motifs under a canopy of stars.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
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
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Vita da Studente
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            A thoughtful community <br />
            <span className="italic text-olive-800">built through daily Italian.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Student life is built around conversation, shared meals, local craft, and the kind of calm connection that makes language feel natural.
          </p>
        </div>
      </section>

      {/* Grid of Highlight Cultural Events */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Social Rituals
          </span>
          <h2 className="font-serif text-3xl font-light text-charcoal-950">
            A weekly sequence of cultural landmarks.
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            We curate three high-end communal activities every week, designed to spark conversation, explore local craft legacies, and embrace the authentic rhythms of the region.
          </p>
        </div>

        <div className="space-y-16">
          {events.map((event, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={event.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[16/10] bg-travertine-200 overflow-hidden shadow-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-[10px] tracking-widest font-mono font-semibold uppercase text-olive-800 block">
                    {event.tagline}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal-950 font-normal">
                    {event.title}
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Subtle quote callout block */}
      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <Coffee className="w-8 h-8 text-terracotta-600 mx-auto stroke-[1.25]" />
          <p className="font-serif text-xl md:text-2xl text-charcoal-900 italic font-light leading-relaxed">
            "I joined Accademia seeking to brush up on my Italian verbs. I left with an entire community of sophisticated global friends, private memories inside ancient vineyards, and a soul completely restored."
          </p>
          <span className="block text-[10px] tracking-wider uppercase text-olive-800 font-bold">
            - Eleanor Vance, Architectural Designer (Fall Sojourn)
          </span>
        </div>
      </section>
    </motion.div>
  );
}
