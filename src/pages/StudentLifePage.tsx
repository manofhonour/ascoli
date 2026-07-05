import React from 'react';
import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';
import { culturalOfferings, images } from '../data/officialContent';

export default function StudentLifePage() {
  const events = [
    {
      id: 'conversation',
      title: 'Daily Conversation in Ascoli',
      tagline: 'Cafes, streets, and practical Italian',
      description:
        'The school setting in the historic centre makes it natural to use Italian for greetings, directions, food, culture, and everyday exchanges.',
      image: images.piazza,
    },
    ...culturalOfferings.slice(0, 3).map((item) => ({
      id: item.title,
      title: item.title,
      tagline: item.tagline,
      description: item.description,
      image: item.image,
    })),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Vita da Studente
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Student life built <br />
            <span className="italic text-olive-800">around real Italian.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Student life at Accademia Italiana centres on lessons, conversation, Ascoli Piceno, and optional cultural courses.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Learning Rhythm
          </span>
          <h2 className="font-serif text-3xl font-light text-charcoal-950">
            Small classes, local context, and optional culture.
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            The student experience centres on course formats, local conversation, and optional cultural study.
          </p>
        </div>

        <div className="space-y-16">
          {events.map((event, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={event.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[16/10] bg-travertine-200 overflow-hidden shadow-xl">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-[10px] tracking-widest font-mono font-semibold uppercase text-olive-800 block">
                    {event.tagline}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal-950 font-normal">{event.title}</h3>
                  <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <Coffee className="w-8 h-8 text-terracotta-600 mx-auto stroke-[1.25]" />
          <p className="font-serif text-xl md:text-2xl text-charcoal-900 italic font-light leading-relaxed">
            "Live Italy, Speak Italian."
          </p>
          <span className="block text-[10px] tracking-wider uppercase text-olive-800 font-bold">
            Accademia Italiana
          </span>
        </div>
      </section>
    </motion.div>
  );
}
