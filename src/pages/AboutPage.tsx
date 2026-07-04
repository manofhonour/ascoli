import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Compass } from 'lucide-react';

export default function AboutPage() {
  const staff = [
    {
      name: 'Dr. Francesca Moretti',
      role: 'Director & Co-Founder',
      quote: 'Linguistic immersion is the art of feeling at home in another culture.',
      bio: 'Francesca holds a Doctorate in Italian Literature from the University of Bologna. She spent 15 years designing custom language immersions for diplomats before returning to her hometown of Ascoli Piceno to establish Accademia Italiana.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Stefano Bertoni',
      role: 'Master of Gastronomy & Wine Educator',
      quote: 'To understand Italian syntax, you must first taste the soil of Marche.',
      bio: 'Stefano is a certified sommelier and slow-food scholar. He coordinates our specialized food-and-wine curricula, connecting local producers, vineyards, and chefs directly with each student cohort.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Matteo Rossini',
      role: 'Art Historian & Conversationalist',
      quote: 'Our streets are not backdrops; they are our blackboards.',
      bio: 'An expert in medieval architectural heritage, Matteo guides students through structural history, deciphering stone-carved poetry and leading workshops inside ancient local chapels.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
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
        <div className="absolute inset-0 bg-[radial-gradient(#CBB49C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            The Philosophy of Accademia
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Crafting a luxurious sanctuary <br />
            <span className="italic text-olive-800">for mindful language.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Founded with a singular mission: to strip away the industrial, institutional feel of traditional schooling and replace it with a bespoke, deeply personal soggiorno that nourishes both intellect and soul.
          </p>
        </div>
      </section>

      {/* Narrative Section - Twin Column Column */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] tracking-widest uppercase font-bold text-olive-800 block">
            Our Origin Story
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-charcoal-950 font-light leading-snug">
            Born from a desire to preserve slow Italian living.
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            In an era of rapid language apps and overcrowded tourist hubs, Accademia Italiana was conceived inside a quiet, frescoed corner of Palazzo Sgariglia. We envisioned an educational sanctuary where language is not treated as a transaction, but as an elegant key to community belonging.
          </p>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            By choosing the majestic travertine town of Ascoli Piceno, we settled in a region untouched by standard commercial tourism. Here, our guests are embraced like family, finding genuine immersion in the daily choreography of morning coffees, market visits, and historic evening promenades.
          </p>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1562011107-da2e2955e1e0?auto=format&fit=crop&w=900&q=80"
              alt="Historic travertine architecture in Ascoli Piceno"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-olive-900 text-travertine-50 p-6 max-w-xs shadow-xl hidden md:block">
            <span className="font-serif text-sm italic font-light block leading-relaxed">
              "We choose to do one thing perfectly: host mindful minds inside authentic Italy."
            </span>
          </div>
        </div>
      </section>

      {/* Core Values Bento Grid */}
      <section className="py-20 bg-travertine-100 border-y border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase">
              Our Core Pillars
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-charcoal-950">
              The commitments we live by.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-travertine-50 p-8 border border-travertine-200/60 space-y-4">
              <Compass className="w-6 h-6 text-olive-800 stroke-[1.25]" />
              <h3 className="font-serif text-lg text-charcoal-950">Absolute Immersion</h3>
              <p className="text-xs text-charcoal-800 leading-relaxed font-light">
                No artificial scenarios. Your lessons are woven directly into the fabric of Ascoli’s historical cafes, artisan workshops, and organic markets.
              </p>
            </div>

            <div className="bg-travertine-50 p-8 border border-travertine-200/60 space-y-4">
              <ShieldCheck className="w-6 h-6 text-olive-800 stroke-[1.25]" />
              <h3 className="font-serif text-lg text-charcoal-950">Conscious Hospitality</h3>
              <p className="text-xs text-charcoal-800 leading-relaxed font-light">
                We limit our total weekly enrollment to 12 guests. This guarantees customized private attention, high-end residences, and detailed personal concierge support.
              </p>
            </div>

            <div className="bg-travertine-50 p-8 border border-travertine-200/60 space-y-4">
              <Heart className="w-6 h-6 text-olive-800 stroke-[1.25]" />
              <h3 className="font-serif text-lg text-charcoal-950">Inclusive Community</h3>
              <p className="text-xs text-charcoal-800 leading-relaxed font-light">
                A warm, safe sanctuary welcoming mature professionals, solo creatives, and LGBTQ+ global travelers seeking meaningful connection.
              </p>
            </div>

            <div className="bg-travertine-50 p-8 border border-travertine-200/60 space-y-4">
              <Sparkles className="w-6 h-6 text-olive-800 stroke-[1.25]" />
              <h3 className="font-serif text-lg text-charcoal-950">Cultural Sophistication</h3>
              <p className="text-xs text-charcoal-800 leading-relaxed font-light">
                Language learning paired with classical literature, design heritage, organic sommelier journeys, and architectural masterclasses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cohort & Educators */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 space-y-4 max-w-xl">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Meet Our Guides
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950">
            Luminaries of Marche heritage.
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            Our private coaches and local guides are scholars, sommeliers, and historians dedicated to confident conversational fluency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {staff.map((member) => (
            <div key={member.name} className="space-y-6 bg-travertine-100 p-6 border border-travertine-200/60 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] bg-travertine-200 overflow-hidden shadow-sm relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-charcoal-950 font-normal">{member.name}</h3>
                  <span className="text-[10px] tracking-wider uppercase font-bold text-olive-800">{member.role}</span>
                </div>
                
                <p className="font-serif text-xs italic text-terracotta-600">
                  "{member.quote}"
                </p>

                <p className="text-xs text-charcoal-800 font-light leading-relaxed pt-2 border-t border-travertine-200">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
