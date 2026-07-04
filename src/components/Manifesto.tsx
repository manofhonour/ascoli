import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Manifesto() {
  return (
    <section id="school" className="py-24 md:py-32 bg-travertine-100 relative overflow-hidden">
      {/* Absolute decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Subheading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Il Nostro Manifesto
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 leading-tight">
            An education carved in <span className="italic">travertine stone</span>, lived in conversation.
          </h2>
        </div>

        {/* Massive Centered Quote Block */}
        <div className="relative border-y border-travertine-300/80 py-12 md:py-16 my-16">
          <Quote className="absolute -top-4 left-6 text-terracotta-500/20 w-12 h-12" />
          <p className="font-serif text-2xl md:text-4xl text-center text-charcoal-900 font-light italic leading-relaxed max-w-4xl mx-auto">
            "Language is not an abstract catalog of verbs. It is the golden light hitting a 500-year-old arch, the aromatic steam of an morning macchiato, and the warm welcome of an artisan who has lived in Ascoli for generations."
          </p>
        </div>

        {/* Detailed 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          
          <div className="space-y-4">
            <div className="font-serif text-lg text-olive-800 italic flex items-center gap-2">
              <span className="text-sm font-sans font-semibold tracking-wider text-terracotta-600 not-italic">01.</span>
              The Art of Conversazione
            </div>
            <p className="text-sm md:text-base text-charcoal-800 font-light leading-relaxed">
              We reject cold computer screens and corporate worksheets. Our classrooms extend into the historic <span className="font-medium text-charcoal-950">Caffè Meletti</span>, the local vegetable markets, and quiet stone courtyards. You learn grammar to serve real connection, from day one.
            </p>
          </div>

          <div className="space-y-4">
            <div className="font-serif text-lg text-olive-800 italic flex items-center gap-2">
              <span className="text-sm font-sans font-semibold tracking-wider text-terracotta-600 not-italic">02.</span>
              Ascoli Piceno’s Rhythm
            </div>
            <p className="text-sm md:text-base text-charcoal-800 font-light leading-relaxed">
              Nestled between the rolling olive hills and the Adriatic coast, Ascoli remains purely, beautifully Italian. Untouched by globalised mass tourism, its residents speak with natural warmth, offering our guests the perfect immersion to practice effortlessly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="font-serif text-lg text-olive-800 italic flex items-center gap-2">
              <span className="text-sm font-sans font-semibold tracking-wider text-terracotta-600 not-italic">03.</span>
              A Sophisticated Cohort
            </div>
            <p className="text-sm md:text-base text-charcoal-800 font-light leading-relaxed">
              Our students are inquisitive minds, modern professionals, creative writers, and retirees. We cultivate a thoughtful, friendly, and inclusive ecosystem where mature individuals from around the world bond deeply over art, wine, and language.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
