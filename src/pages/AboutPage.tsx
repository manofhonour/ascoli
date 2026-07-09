import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Compass } from 'lucide-react';
import { contactInfo, images, services } from '../data/officialContent';
import { useLanguage } from '../context/LanguageContext';
import accademiaLogo from '../assets/accademia-logo.png';

export default function AboutPage() {
  const { language } = useLanguage();
  const pillars = [
    {
      icon: Compass,
      title: language === 'IT' ? 'Servizi linguistici dal 1997' : 'Language Services Since 1997',
      text:
        language === 'IT'
          ? 'Accademia opera come organizzazione di servizi linguistici dal 1997.'
          : 'Accademia has worked as a language-services organisation since 1997.',
    },
    {
      icon: ShieldCheck,
      title: language === 'IT' ? 'Direzione della Dr. Antonella Valentini' : 'Directed by Dr. Antonella Valentini',
      text:
        language === 'IT'
          ? 'La scuola e diretta dalla Dr. Antonella Valentini e supportata da docenti qualificati.'
          : 'The school is directed by Dr. Antonella Valentini and supported by highly qualified and passionate teachers.',
    },
    {
      icon: Heart,
      title: language === 'IT' ? 'Apprendimento su misura' : 'Tailor-Made Learning',
      text:
        language === 'IT'
          ? 'Le lezioni possono essere personalizzate per livello, obiettivi, date e interessi, online o in presenza.'
          : 'Lessons can be tailored by level, goals, dates, and interest area, including online or in-person formats.',
    },
    {
      icon: Sparkles,
      title: language === 'IT' ? 'Cultura italiana nel contesto' : 'Italian Culture in Context',
      text:
        language === 'IT'
          ? 'Lo studio della lingua puo collegarsi ad Ascoli Piceno, cucina, vino, olio d oliva, arte, letteratura, storia e tradizioni locali.'
          : 'Language study can connect with Ascoli Piceno, food, wine, olive oil, art, literature, history, and local traditions.',
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
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CBB49C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <img src={accademiaLogo} alt="Accademia Italiana logo" className="w-20 h-20 object-contain mx-auto" />
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Chi siamo
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            {language === 'IT' ? 'Insegnamento dell italiano e servizi linguistici' : 'Italian teaching and language services'} <br />
            <span className="italic text-olive-800">
              {language === 'IT' ? 'ad Ascoli Piceno.' : 'in Ascoli Piceno.'}
            </span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            {language === 'IT'
              ? 'Accademia Italiana e Accademia Internazionale condividono una missione pratica: insegnare lingue, sostenere la comunicazione e accompagnare gli studenti nella cultura italiana con cura.'
              : 'Accademia Italiana and Accademia Internazionale share a practical mission: teaching languages, supporting communication, and helping students experience Italian culture with care.'}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] tracking-widest uppercase font-bold text-olive-800 block">
            {language === 'IT' ? 'La scuola' : 'The School'}
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-charcoal-950 font-light leading-snug">
            {language === 'IT'
              ? `Un centro linguistico storico diretto da ${contactInfo.director}.`
              : `A long-standing language centre led by ${contactInfo.director}.`}
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            {language === 'IT'
              ? 'L istituzione e dedicata ai servizi linguistici dal 1997, con corsi di lingue straniere, corsi di italiano, formazione docenti, tutoraggio, preparazione esami e supporto internazionale.'
              : 'The institution has been dedicated to language services since 1997, with foreign language courses, Italian courses, teacher training, tutoring, exam preparation, and international support.'}
          </p>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            {language === 'IT'
              ? 'L offerta di italiano e pratica e flessibile: piccoli gruppi standard, corsi intensivi, lezioni individuali, corsi estensivi, aggiornamento docenti e percorsi su misura ad Ascoli Piceno o online.'
              : 'The Italian course offer is practical and flexible: small standard groups, intensive courses, extensive courses, individual lessons, teacher-refreshers, and tailor-made study plans in Ascoli Piceno or online.'}
          </p>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl relative">
            <img
              src={images.culturalClassroom}
              alt="Adult learners in a small Accademia Italiana classroom"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 48%' }}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-olive-900 text-travertine-50 p-6 max-w-xs shadow-xl hidden md:block">
            <span className="font-serif text-sm italic font-light block leading-relaxed">
              {language === 'IT' ? '"Vivi l Italia, parla italiano."' : '"Live Italy, Speak Italian."'}
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-travertine-100 border-y border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase">
              {language === 'IT' ? 'Impegni della scuola' : 'School Commitments'}
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-charcoal-950">
              {language === 'IT' ? 'Le basi della scuola.' : 'What the school stands on.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-travertine-50 p-8 border border-travertine-200/60 space-y-4">
                  <Icon className="w-6 h-6 text-olive-800 stroke-[1.25]" />
                  <h3 className="font-serif text-lg text-charcoal-950">{pillar.title}</h3>
                  <p className="text-xs text-charcoal-800 leading-relaxed font-light">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 space-y-4 max-w-xl">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            {language === 'IT' ? 'Servizi' : 'Services'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950">
            Accademia Italiana - Accademia Internazionale.
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            {language === 'IT'
              ? 'L istituzione unisce insegnamento dell italiano e una piu ampia offerta di servizi linguistici.'
              : 'The institution combines Italian teaching with a wider language-services offer.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="space-y-3 bg-travertine-100 p-6 border border-travertine-200/60 hover:shadow-xl transition-all duration-300">
              <h3 className="font-serif text-xl text-charcoal-950 font-normal">
                {language === 'IT' ? service.titleIT : service.title}
              </h3>
              <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                {language === 'IT' ? service.descriptionIT : service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
