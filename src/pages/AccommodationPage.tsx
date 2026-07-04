import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Bed, MapPin, Eye, ShieldAlert } from 'lucide-react';

export default function AccommodationPage() {
  const accommodations = [
    {
      id: 'fresco',
      title: 'The Fresco Suite',
      italianTitle: 'La Suite Affrescata',
      area: '85 sqm',
      view: 'Piazza Ventidio Basso',
      perks: ['16th-Century restored frescoes', 'Private travertine bathtub', 'French linen bedding', 'Double-height vaulted ceilings'],
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      description: 'Stay directly inside history. This refined master suite sits in the noble wing of Palazzo Sgariglia, pairing restored Renaissance details with modern comfort.',
    },
    {
      id: 'terrace',
      title: 'The Olive Terrace Garden Loft',
      italianTitle: 'Altana dell’Olivo',
      area: '65 sqm',
      view: 'Ascoli Towers & Olive Hills',
      perks: ['Private rooftop terrace', 'Artisanal writing study', 'Rustic chestnut wood beams', 'Local terracotta flooring'],
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      description: 'A sun-drenched loft with views of Ascoli’s medieval towers and the olive hills beyond. The private terrace is ideal for evening study, reading, or quiet writing.',
    },
    {
      id: 'courtyard',
      title: 'The Sanctuary Courtyard Apartment',
      italianTitle: 'Dimora del Cortile',
      area: '70 sqm',
      view: 'Private Stone Courtyard',
      perks: ['Direct courtyard access', 'Stone fireplace hearth', 'Premium chef kitchen', 'Custom travertine sinks'],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      description: 'A secluded ground-floor retreat behind hand-carved oak doors. Ideal for writers and solo travelers who want quiet, privacy, and direct access to a stone courtyard.',
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
        <div className="absolute inset-0 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Dimore d’Autore
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Elegant residences nestled <br />
            <span className="italic text-terracotta-600">in medieval stone.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Every guest is housed in a carefully selected apartment inside our restored 16th-century Palazzo Sgariglia or a nearby historic residence.
          </p>
        </div>
      </section>

      {/* Main Accommodations List */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {accommodations.map((acc, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl relative">
                  <img
                    src={acc.image}
                    alt={acc.title}
                    className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-sm px-4 py-2 text-[10px] tracking-widest font-bold text-travertine-100 uppercase">
                    {acc.italianTitle}
                  </div>
                </div>
                {/* Underframe outline border decor */}
                <div className="absolute -inset-2 border border-travertine-300 pointer-events-none rounded-none -z-10 translate-x-3 translate-y-3 opacity-30" />
              </div>

              {/* Text Information Column */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-1">
                  <span className="font-serif italic text-xs text-terracotta-600 block">
                    {acc.italianTitle}
                  </span>
                  <h2 className="font-serif text-2xl md:text-4xl text-charcoal-950 font-light leading-snug">
                    {acc.title}
                  </h2>
                </div>

                <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                  {acc.description}
                </p>

                {/* Technical specifications */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-travertine-200">
                  <div className="flex items-center gap-2 text-xs text-charcoal-800">
                    <Bed className="w-4 h-4 text-olive-800 stroke-[1.5]" />
                    <span className="font-light">Size: <span className="font-semibold text-charcoal-950">{acc.area}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal-800">
                    <Eye className="w-4 h-4 text-olive-800 stroke-[1.5]" />
                    <span className="font-light">View: <span className="font-semibold text-charcoal-950">{acc.view}</span></span>
                  </div>
                </div>

                {/* Perky features list */}
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-charcoal-800 block mb-2 opacity-60">
                    Residency Highlights:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {acc.perks.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-xs text-charcoal-800">
                        <span className="w-1.5 h-1.5 bg-terracotta-500 rounded-full shrink-0" />
                        <span className="font-light">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Concierge Services list */}
      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
              Servizio Esclusivo
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-tight">
              A private hotel standard, inside a historic residence.
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              The comfort of your residence directly affects the quality of your study. Accademia offers discreet concierge care that blends apartment independence with polished boutique-hotel touches.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Sparkles className="w-4 h-4 text-terracotta-600" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Housekeeping & Linens</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Bi-weekly professional cleaning and change of fine organic French flax sheets and premium fluffy towels.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <MapPin className="w-4 h-4 text-terracotta-600" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Culinary Stocking</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Arrive to a kitchen stocked with local olive oil, fresh focaccia, seasonal fruit, coffee, and selected Marche wine.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Bed className="w-4 h-4 text-terracotta-600" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Ergonomic Work Desks</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Every apartment is equipped with a gorgeous dedicated hardwood writing desk, fast fiber Wi-Fi, and gentle reading lighting.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <ShieldAlert className="w-4 h-4 text-terracotta-600" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Liaison Support</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Our concierge desk is available 24/7 via private message to arrange local train pick-ups, doctor appointments, or osteria bookings.
              </p>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
