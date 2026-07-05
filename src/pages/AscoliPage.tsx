import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Compass, Plane, Train } from 'lucide-react';
import { ascoliHighlights, images } from '../data/officialContent';

export default function AscoliPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Ascoli Piceno
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            A historic city <br />
            <span className="italic text-terracotta-600">for Italian immersion.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Ascoli Piceno brings together history, culture, natural beauty, food, festivals, theatre, and access to the wider Marche region.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-widest uppercase font-bold text-olive-800 block">
              The City
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-snug">
              Language study surrounded by art, streets, food, and local rhythm.
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              Ascoli Piceno offers Piazza del Popolo, historic architecture, Roman traces, mountains and rivers, local dishes such as Olive all Ascolana, Teatro Ventidio Basso, concerts, and festivals.
            </p>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              The Marche region adds beaches, hill towns, vineyards, olive groves, churches, museums, Roman ruins, and Renaissance architecture.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl relative">
              <img src={images.ascoli} alt="Historic Italian city details" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              Highlights
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal-950">
              Places and traditions students meet.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ascoliHighlights.map((hl) => (
              <div key={hl.title} className="bg-travertine-100 p-6 border border-travertine-200/60 hover:shadow-xl transition-all duration-300 space-y-4">
                <span className="text-[9px] font-mono uppercase tracking-wider text-olive-800 bg-olive-50 px-2 py-0.5 border border-olive-200 inline-block">
                  {hl.type}
                </span>
                <h4 className="font-serif text-lg text-charcoal-950 font-normal">{hl.title}</h4>
                <p className="text-xs text-charcoal-800 font-light leading-relaxed">{hl.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              Travel
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-tight">
              Reaching Ascoli Piceno.
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              Students can plan routes by train, bus, car, and nearby airports. Current timetables should be checked before travelling.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Landmark className="w-5 h-5 text-olive-800" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">From Rome</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                By bus or car, Rome to Ascoli Piceno is about 2.5 hours, with routes via S4 or A24/E80.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Train className="w-5 h-5 text-olive-800" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">By Train</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                From Milan, the route goes via San Benedetto del Tronto, with onward local transport.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Plane className="w-5 h-5 text-olive-800" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Airports</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Ancona-Falconara is about 130 km away and Pescara is about 90 km away.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
