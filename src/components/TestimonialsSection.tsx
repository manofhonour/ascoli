import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Play, Quote, Languages, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, directorQuote, directorQuoteIT, services } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

const schoolNotes = [
  {
    title: 'Open up to the world',
    titleIT: 'Apriti al mondo',
    detail: 'Accademia Internazionale connects language teaching, translation, and international communication.',
    detailIT: 'Accademia Internazionale collega insegnamento linguistico, traduzione e comunicazione internazionale.',
  },
  {
    title: 'Precision in translation',
    titleIT: 'Precisione nella traduzione',
    detail: 'The institution combines teaching with translation and interpreting services.',
    detailIT: 'L istituzione unisce didattica, traduzione e interpretariato.',
  },
  {
    title: 'Passion for language teaching',
    titleIT: 'Passione per l insegnamento delle lingue',
    detail: 'The school profile highlights qualified teachers, flexibility, communication, and authentic teaching materials.',
    detailIT: 'La scuola valorizza docenti qualificati, flessibilita, comunicazione e materiali autentici.',
  },
];

export default function TestimonialsSection() {
  const { language, t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % schoolNotes.length);
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + schoolNotes.length) % schoolNotes.length);
  const activeNote = schoolNotes[activeIdx];
  const activeTitle = language === 'IT' ? activeNote.titleIT : activeNote.title;
  const activeDetail = language === 'IT' ? activeNote.detailIT : activeNote.detail;
  const quote = language === 'IT' ? directorQuoteIT : directorQuote;

  return (
    <section id="testimonials" className="py-32 md:py-44 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-travertine-200 pb-16 mb-24">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
            <span className="text-[10px] tracking-[0.25em] font-bold text-terracotta-600 uppercase">
              {t('testimonials.excellent_reviews')}
            </span>
            <div className="flex items-center gap-3">
              <img src={accademiaLogo} alt="Accademia logo" className="w-12 h-12 object-contain" />
              <span className="font-serif text-2xl text-charcoal-950 font-light">{contactInfo.director}</span>
            </div>
            <p className="text-xs text-charcoal-800 font-light">{t('testimonials.based_on')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-3 px-5 py-4 border border-travertine-300 bg-travertine-100">
              <Languages className="w-5 h-5 text-olive-800 stroke-[1.5]" />
              <div>
                <span className="block text-[9px] text-charcoal-800 uppercase tracking-[0.18em]">
                  {t('testimonials.google_rating')}
                </span>
                <span className="block font-serif text-sm text-charcoal-950">
                  {language === 'IT' ? 'Didattica comunicativa' : 'Communicative teaching'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 border border-travertine-300 bg-travertine-100">
              <GraduationCap className="w-5 h-5 text-olive-800 stroke-[1.5]" />
              <div>
                <span className="block text-[9px] text-charcoal-800 uppercase tracking-[0.18em]">
                  {t('testimonials.trustpilot_status')}
                </span>
                <span className="block font-serif text-sm text-charcoal-950">
                  {language === 'IT' ? `${services.length} aree principali` : `${services.length} core areas`}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="relative">
              <Quote className="absolute -top-12 -left-8 text-terracotta-500/10 w-24 h-24 stroke-[0.5]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  className="space-y-8"
                >
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-extralight italic text-charcoal-950 leading-relaxed">
                    "{activeTitle}"
                  </p>
                  <p className="text-sm text-charcoal-800 font-light leading-relaxed max-w-xl">
                    {activeDetail}
                  </p>
                  <div>
                    <h4 className="font-serif text-lg lg:text-xl font-light text-charcoal-950">
                      Accademia Italiana - Accademia Internazionale
                    </h4>
                    <span className="block text-[11px] text-charcoal-800 font-light font-sans tracking-wide mt-1">
                      {contactInfo.addressLine1}, {contactInfo.cityLine}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <button
                onClick={handlePrev}
                className="border border-charcoal-950/15 hover:border-charcoal-950 p-3.5 text-charcoal-800 hover:text-charcoal-950 transition-all duration-300 rounded-none bg-travertine-50 hover:bg-travertine-100 cursor-pointer"
                aria-label="Previous note"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.25]" />
              </button>
              <span className="text-[10px] font-mono text-charcoal-800/80 tracking-widest">
                0{activeIdx + 1} / 0{schoolNotes.length}
              </span>
              <button
                onClick={handleNext}
                className="border border-charcoal-950/15 hover:border-charcoal-950 p-3.5 text-charcoal-800 hover:text-charcoal-950 transition-all duration-300 rounded-none bg-travertine-50 hover:bg-travertine-100 cursor-pointer"
                aria-label="Next note"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.25]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] bg-olive-900 border border-olive-800/80 shadow-2xl overflow-hidden group">
              {!isQuoteOpen ? (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(#FAF2F0_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-8">
                    <img src={accademiaLogo} alt="Accademia logo" className="w-24 h-24 object-contain bg-travertine-50 p-3" />
                    <div className="space-y-2">
                      <span className="block text-[9px] tracking-[0.25em] font-mono uppercase text-terracotta-200">
                        {t('testimonials.video_diary')}
                      </span>
                      <span className="font-serif text-3xl text-travertine-50 italic">{t('testimonials.video_quote')}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-travertine-50/95 backdrop-blur-md flex items-center justify-center text-olive-800 shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer border border-travertine-300/50"
                    aria-label="Open director quote"
                  >
                    <Play className="w-5 h-5 fill-olive-800 stroke-none translate-x-0.5" />
                  </button>
                </>
              ) : (
                <div className="absolute inset-0 bg-charcoal-950 flex flex-col items-center justify-center p-8 text-center text-travertine-100 space-y-4">
                  <span className="text-[10px] font-mono text-terracotta-500 tracking-widest uppercase font-bold">
                    {t('testimonials.story_label')}
                  </span>
                  <p className="font-serif text-lg italic max-w-xs leading-relaxed">"{quote}"</p>
                  <span className="text-[10px] tracking-widest uppercase text-olive-200">{contactInfo.director}</span>
                  <button
                    onClick={() => setIsQuoteOpen(false)}
                    className="border border-travertine-100/30 hover:border-travertine-100 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-travertine-100/10 hover:bg-travertine-100/20 transition-all duration-300 rounded-none cursor-pointer"
                  >
                    {t('testimonials.close_video')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
