import React from 'react';
import { Languages, MessageCircle, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, directorQuote, directorQuoteIT, images, services } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

const schoolNotes = [
  {
    title: 'Language, not performance',
    titleIT: 'Lingua, non performance',
    detail: 'The school favours communication, clear level placement, and authentic teaching material.',
    detailIT: 'La scuola privilegia comunicazione, livello chiaro e materiali didattici autentici.',
  },
  {
    title: 'A small institutional footprint',
    titleIT: 'Una realta piccola e concreta',
    detail: 'Accademia Internazionale connects teaching with translation, interpreting, and exam preparation.',
    detailIT: 'Accademia Internazionale collega didattica, traduzione, interpretariato e preparazione agli esami.',
  },
  {
    title: 'Careful planning before arrival',
    titleIT: 'Organizzazione attenta prima dell arrivo',
    detail: 'Students can discuss timing, accommodation, level, and practical needs before booking.',
    detailIT: 'Gli studenti possono parlare di date, alloggio, livello ed esigenze pratiche prima della prenotazione.',
  },
];

export default function TestimonialsSection() {
  const { language, t } = useLanguage();
  const quote = language === 'IT' ? directorQuoteIT : directorQuote;

  return (
    <section id="testimonials" className="bg-travertine-50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="border border-travertine-300 bg-travertine-100 p-7 md:p-9">
              <Quote className="h-8 w-8 text-terracotta-500 stroke-[1.25]" />
              <p className="mt-8 font-serif text-3xl font-normal italic leading-snug text-charcoal-950 md:text-4xl">
                "{quote}"
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-travertine-300 pt-6">
                <img src={accademiaLogo} alt="Accademia Italiana logo" className="h-12 w-12 object-contain" />
                <div>
                  <span className="block font-serif text-xl text-charcoal-950">{contactInfo.director}</span>
                  <span className="block text-xs font-light text-charcoal-800">{t('testimonials.based_on')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[16/9] overflow-hidden border border-travertine-300 bg-travertine-200">
              <img
                src={images.classroomCollage}
                alt={language === 'IT' ? 'Momento culturale in Accademia Italiana' : 'Cultural moment at Accademia Italiana'}
                className="h-full w-full object-cover grayscale-[10%]"
                style={{ objectPosition: '50% 46%' }}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {schoolNotes.map((note) => (
                <article key={note.title} className="border-t border-travertine-300 pt-5">
                  <h3 className="font-serif text-2xl font-normal leading-tight text-charcoal-950">
                    {language === 'IT' ? note.titleIT : note.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-charcoal-800">
                    {language === 'IT' ? note.detailIT : note.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 border border-travertine-300 bg-travertine-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Languages className="h-5 w-5 text-olive-800 stroke-[1.5]" />
                <span className="text-sm font-light text-charcoal-800">
                  {language === 'IT' ? `${services.length} aree di servizio linguistico` : `${services.length} language-service areas`}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-olive-800 stroke-[1.5]" />
                <span className="text-sm font-light text-charcoal-800">{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
