import React from 'react';
import { motion } from 'motion/react';
import { Accessibility, Coffee, HeartHandshake, UserRound } from 'lucide-react';
import { culturalOfferings, images, inclusiveSupport } from '../data/officialContent';
import { useLanguage } from '../context/LanguageContext';

export default function StudentLifePage() {
  const { language } = useLanguage();
  const inclusionIcons = [UserRound, HeartHandshake, Accessibility];

  const events = [
    {
      id: 'conversation',
      title: language === 'IT' ? 'Conversazione quotidiana ad Ascoli' : 'Daily Conversation in Ascoli',
      tagline: language === 'IT' ? 'Caffe, strade e italiano pratico' : 'Cafes, streets, and practical Italian',
      description:
        language === 'IT'
          ? 'La scuola nel centro storico rende naturale usare l italiano per saluti, indicazioni, cibo, cultura e scambi quotidiani.'
          : 'The school setting in the historic centre makes it natural to use Italian for greetings, directions, food, culture, and everyday exchanges.',
      image: images.piazza,
    },
    ...culturalOfferings.slice(0, 3).map((item) => ({
      id: item.title,
      title: language === 'IT' ? item.italianTitle : item.title,
      tagline: language === 'IT' ? item.taglineIT : item.tagline,
      description: language === 'IT' ? item.descriptionIT : item.description,
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
            {language === 'IT' ? 'Vita studentesca costruita' : 'Student life built'} <br />
            <span className="italic text-olive-800">
              {language === 'IT' ? 'intorno all italiano reale.' : 'around real Italian.'}
            </span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            {language === 'IT'
              ? 'La vita studentesca all Accademia Italiana ruota intorno a lezioni, conversazione, Ascoli Piceno e corsi culturali opzionali.'
              : 'Student life at Accademia Italiana centres on lessons, conversation, Ascoli Piceno, and optional cultural courses.'}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            {language === 'IT' ? 'Ritmo di studio' : 'Learning Rhythm'}
          </span>
          <h2 className="font-serif text-3xl font-light text-charcoal-950">
            {language === 'IT'
              ? 'Piccoli gruppi, contesto locale e cultura opzionale.'
              : 'Small classes, local context, and optional culture.'}
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            {language === 'IT'
              ? 'L esperienza degli studenti unisce formati di corso, conversazione locale e studio culturale opzionale.'
              : 'The student experience centres on course formats, local conversation, and optional cultural study.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inclusiveSupport.map((item, index) => {
            const Icon = inclusionIcons[index] || HeartHandshake;
            return (
              <div key={item.title} className="bg-travertine-100 border border-travertine-200 p-6 space-y-4">
                <div className="w-10 h-10 bg-olive-50 border border-olive-200 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-olive-800 stroke-[1.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-charcoal-950 font-normal">
                    {language === 'IT' ? item.titleIT : item.title}
                  </h3>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                    {language === 'IT' ? item.descriptionIT : item.description}
                  </p>
                </div>
              </div>
            );
          })}
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
            {language === 'IT' ? '"Vivi l Italia, parla italiano."' : '"Live Italy, Speak Italian."'}
          </p>
          <span className="block text-[10px] tracking-wider uppercase text-olive-800 font-bold">
            Accademia Italiana
          </span>
        </div>
      </section>
    </motion.div>
  );
}
