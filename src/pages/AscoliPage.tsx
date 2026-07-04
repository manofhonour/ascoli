import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Compass, Award, MapPin } from 'lucide-react';

export default function AscoliPage() {
  const highlights = [
    {
      title: 'Piazza del Popolo',
      italianTitle: 'Il Salotto d’Italia',
      description: 'Often called the "living room of Italy", this entirely travertine-paved square is framed by Renaissance arches and Gothic towers. At golden hour, the floor behaves like a massive mirror, throwing warm amber light onto visitors.',
      image: 'https://images.unsplash.com/photo-1562011107-da2e2955e1e0?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Caffè Meletti',
      italianTitle: 'Ritrovo Storico',
      description: 'Established in 1907, this Art Nouveau masterpiece remains the center of intellectual life in Ascoli. Sit on original sage-green velvet benches and taste a drop of Meletti’s private aniseed liqueur under neoclassical frescoes.',
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'The Roman Bridge',
      italianTitle: 'Ponte di Solestà',
      description: 'One of the world’s few surviving Roman bridges that you can still walk across. Descend into the Solestà neighborhood to hear the quiet murmur of the Tronto river splashing against ancient stone foundations.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
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
        <div className="absolute inset-0 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            The Last Secret of Marche
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Ascoli Piceno: A city <br />
            <span className="italic text-terracotta-600">sculpted in travertine.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Unlike Italy’s busiest art cities, Ascoli Piceno has kept a slower civic rhythm. Students can become familiar faces at the market, the cafe, and the evening passeggiata within days.
          </p>
        </div>
      </section>

      {/* Travertine Storytelling Column Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-widest uppercase font-bold text-olive-800 block">
              Architectural Honesty
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-snug">
              Every arch, alley, and doorway tells a 2,000-year-old story.
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              Ascoli is built from warm travertine quarried from the surrounding Apennine landscape. The stone shifts throughout the day, pale in the midday sun and softly golden at twilight.
            </p>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              As you wander the quiet medieval alleys (called "rue"), look up. Many Renaissance doorframes are carved with custom Latin and old Italian mottos, left by philosophers, artists, and merchants centuries ago to welcome thoughtful travelers.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1562011107-da2e2955e1e0?auto=format&fit=crop&w=900&q=80"
                alt="Travertine details in Ascoli Piceno"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Individual landmarks cards */}
        <div className="space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              The Salotto Experience
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal-950">
              The crown jewels of our town.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((hl) => (
              <div key={hl.title} className="bg-travertine-100 p-6 border border-travertine-200/60 hover:shadow-xl transition-all duration-300 space-y-6">
                <div className="aspect-[4/3] bg-travertine-200 overflow-hidden relative shadow-sm">
                  <img
                    src={hl.image}
                    alt={hl.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-sm px-3.5 py-1.5 text-[9px] font-bold text-travertine-100 tracking-widest uppercase">
                    {hl.italianTitle}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-charcoal-950 font-normal">{hl.title}</h4>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Reach section */}
      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              L’Arrivo in Accademia
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-tight">
              Reaching our travertine sanctuary.
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              Located in the central Marche region, Ascoli Piceno is easily accessible from Rome, Ancona, or Pescara, yet remains nestled away in quiet mountain serenity.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Landmark className="w-5 h-5 text-olive-800" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">From Rome</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Take the direct Roma-Ascoli coach from Tiburtina station. The route crosses the Apennines and reaches the city in under 3 hours.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Compass className="w-5 h-5 text-olive-800" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">By Train</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Arrive via Ancona or Pescara along the Adriatic railway line, then connect by regional train to Ascoli Piceno.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Award className="w-5 h-5 text-olive-800" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Concierge Car</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Our team can arrange a private car transfer from Rome Fiumicino airport directly to your residence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
