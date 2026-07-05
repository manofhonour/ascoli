import React from 'react';
import { motion } from 'motion/react';
import { Bed, Check, HeartHandshake, Hotel, Home, Info, MapPin } from 'lucide-react';
import { accommodationOptions, contactInfo } from '../data/officialContent';

const icons = {
  'host-family': Home,
  bnb: Bed,
  hotel: Hotel,
};

export default function AccommodationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Accommodation
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Stay in Ascoli Piceno <br />
            <span className="italic text-terracotta-600">with school support.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            The school can help reserve host-family, B&B, or hotel accommodation in Ascoli Piceno. Students traveling alone, LGBTQ+ learners, and students with accessibility needs can contact the school before arrival.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {accommodationOptions.map((acc, idx) => {
          const Icon = icons[acc.id as keyof typeof icons] || Home;
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl relative">
                  <img
                    src={acc.image}
                    alt={acc.name}
                    className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-sm px-4 py-2 text-[10px] tracking-widest font-bold text-travertine-100 uppercase">
                    {acc.italianName}
                  </div>
                </div>
                <div className="absolute -inset-2 border border-travertine-300 pointer-events-none rounded-none -z-10 translate-x-3 translate-y-3 opacity-30" />
              </div>

              <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-1">
                  <span className="font-serif italic text-xs text-terracotta-600 block">{acc.italianName}</span>
                  <h2 className="font-serif text-2xl md:text-4xl text-charcoal-950 font-light leading-snug">
                    {acc.name}
                  </h2>
                </div>

                <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">{acc.description}</p>

                <div className="flex items-center gap-3 py-4 border-y border-travertine-200">
                  <Icon className="w-4 h-4 text-olive-800 stroke-[1.5]" />
                  <span className="text-xs text-charcoal-800 font-light">
                    Reservation support through {contactInfo.schoolName}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-charcoal-800 block mb-2 opacity-60">
                    Details:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {acc.features.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-xs text-charcoal-800">
                        <Check className="w-3.5 h-3.5 text-terracotta-500 shrink-0 mt-0.5" />
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

      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
              Booking
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-tight">
              Confirm availability directly with the school.
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              Contact the Accademia office for accommodation availability, address details, house rules, payment conditions, and final prices before booking travel.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <MapPin className="w-4 h-4 text-terracotta-600" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Town-Centre Focus</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Accommodation options include host family, B&B, and hotel stays in Ascoli Piceno.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <Info className="w-4 h-4 text-terracotta-600" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">No Extra Reservation Cost</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                The school can reserve accommodation for students without an additional reservation cost.
              </p>
            </div>

            <div className="bg-travertine-50 p-6 border border-travertine-200 space-y-2">
              <HeartHandshake className="w-4 h-4 text-terracotta-600" />
              <h4 className="font-serif text-sm text-charcoal-950 font-semibold">Welcoming Planning</h4>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                Solo travel, LGBTQ+ considerations, and accessibility needs can be discussed with the school before booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
