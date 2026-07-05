import React from 'react';
import { motion } from 'motion/react';
import { Library, Palette, Wine, Utensils } from 'lucide-react';
import { culturalOfferings, images } from '../data/officialContent';
import { useLanguage } from '../context/LanguageContext';

const icons = [Utensils, Wine, Palette, Library];

export default function CulturePage() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            {language === 'IT' ? 'Cultura italiana' : 'Italian Culture'}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            {language === 'IT' ? 'Corsi di cultura' : 'Culture courses'} <br />
            <span className="italic text-olive-800">
              {language === 'IT' ? 'che sostengono la lingua.' : 'that support language.'}
            </span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            {language === 'IT'
              ? 'Accademia Italiana offre corsi di cultura italiana e temi specialistici che possono ampliare lo studio standard o intensivo.'
              : 'Accademia Italiana offers Italian culture courses and specialist topics that can extend standard or intensive Italian study.'}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] bg-travertine-200 overflow-hidden shadow-2xl relative">
              <img src={images.wine} alt="Historic cafe interior in Ascoli Piceno" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-widest uppercase font-bold text-olive-800 block">
              {language === 'IT' ? 'Oltre il vocabolario' : 'Beyond Vocabulary'}
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-snug">
              {language === 'IT'
                ? 'Dalla grammatica ai luoghi, al cibo, all arte e alla societa.'
                : 'From grammar to place, food, art, and society.'}
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              {language === 'IT'
                ? 'Le lezioni culturali trasformano il vocabolario in lingua utilizzabile. Gli studenti possono parlare di cibo, vino, storia locale, arte, letteratura, contesti professionali, turismo e Italia contemporanea.'
                : 'Cultural lessons turn vocabulary into usable language. Students can discuss food, wine, local history, art, literature, business contexts, tourism, and contemporary Italy.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturalOfferings.map((cat, index) => {
            const Icon = icons[index] || Library;
            return (
              <div key={cat.title} className="bg-travertine-100 p-8 border border-travertine-200/60 hover:shadow-xl transition-all duration-300 space-y-4">
                <div className="bg-travertine-200 w-12 h-12 flex items-center justify-center border border-travertine-300">
                  <Icon className="w-6 h-6 text-terracotta-600 stroke-[1.25]" />
                </div>
                <div className="space-y-1">
                  <span className="font-serif italic text-xs text-olive-800 block">{cat.italianTitle}</span>
                <h3 className="font-serif text-lg text-charcoal-950 font-normal">
                  {language === 'IT' ? cat.italianTitle : cat.title}
                </h3>
                </div>
                <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                  {language === 'IT' ? cat.descriptionIT : cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              {language === 'IT' ? 'Temi specialistici' : 'Specialist Topics'}
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal-950 leading-tight">
              {language === 'IT'
                ? 'Business, turismo, esami, universita e cultura italiana.'
                : 'Business, tourism, exams, university, and Italian culture.'}
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              {language === 'IT'
                ? 'I moduli includono attualita, italiano per il business, turismo e hotel management, preparazione universitaria, preparazione agli esami di certificazione, storia italiana, storia dell arte, letteratura e Italia oggi.'
                : 'Add-ons include current affairs, business Italian, tourism and hotel management, university admission preparation, certification exam preparation, Italian history, art history, literature, and Italy today.'}
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl">
              <img src={images.study} alt="Italian lesson at Accademia Italiana" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
