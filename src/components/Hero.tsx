import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, MessageCircle, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, images } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

interface HeroProps {
  onInquireClick: () => void;
}

export default function Hero({ onInquireClick }: HeroProps) {
  const { language, t } = useLanguage();

  const proofPoints = [
    {
      label: language === 'IT' ? 'Dal 1997' : 'Since 1997',
      detail: language === 'IT' ? 'Scuola e servizi linguistici' : 'Italian school and language services',
    },
    {
      label: language === 'IT' ? '3-6 studenti' : '3-6 students',
      detail: language === 'IT' ? 'Gruppi standard piccoli' : 'Small standard groups',
    },
    {
      label: 'Ascoli Piceno',
      detail: language === 'IT' ? 'Centro storico delle Marche' : 'Historic centre of Le Marche',
    },
  ];

  return (
    <section className="relative min-h-[760px] md:min-h-[820px] lg:min-h-[840px] w-full bg-travertine-50 overflow-hidden border-b border-travertine-200/70 py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(203,180,156,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(203,180,156,0.18)_1px,transparent_1px)] [background-size:96px_96px] opacity-35 pointer-events-none" />
      <div className="absolute -right-24 top-24 h-96 w-96 bg-olive-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 bg-terracotta-100/55 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16 w-full max-w-[100vw] box-border min-w-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        <div className="lg:col-span-5 xl:col-span-5 min-w-0 max-w-full overflow-hidden flex flex-col justify-center space-y-7 lg:space-y-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex w-full sm:w-auto max-w-[340px] sm:max-w-full items-center gap-3 border border-travertine-300/80 bg-travertine-50/80 px-3 py-2 shadow-sm">
              <img src={accademiaLogo} alt="Accademia Italiana logo" className="h-9 w-9 object-contain" />
              <div className="min-w-0">
                <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.24em] text-terracotta-600 uppercase leading-snug">
                  {t('hero.subtitle')}
                </span>
                <span className="block text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.14em] text-olive-800 uppercase truncate">
                  {contactInfo.addressLine1}, Ascoli Piceno
                </span>
              </div>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-extralight text-charcoal-950 leading-[0.98] tracking-tight max-w-full text-balance">
              {t('hero.title_part1')} <br />
              {t('hero.title_part2')} <br />
              <span className="italic font-light text-olive-800 leading-[1.12] inline-block pb-1">{t('hero.title_italic')}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="text-sm lg:text-[15px] text-charcoal-800 font-light leading-relaxed w-full max-w-[340px] sm:max-w-md"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full max-w-[340px] sm:max-w-md md:w-auto md:max-w-none"
          >
            <a
              href="#courses"
              className="bg-olive-800 hover:bg-olive-900 text-travertine-50 px-7 md:px-8 py-4 text-[11px] tracking-[0.18em] font-medium uppercase transition-all duration-500 shadow-xl flex items-center justify-center gap-2 border border-olive-700/50 rounded-none text-center whitespace-nowrap active:translate-y-px"
            >
              {t('hero.explore_courses')}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            
            <button
              onClick={onInquireClick}
              className="border border-charcoal-950/25 hover:border-charcoal-950 px-7 md:px-8 py-4 text-[11px] tracking-[0.18em] font-medium uppercase text-charcoal-800 hover:text-charcoal-950 transition-all duration-500 text-center rounded-none cursor-pointer bg-travertine-50/60 whitespace-nowrap active:translate-y-px"
            >
              {t('hero.book_consultation')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 w-full max-w-[340px] sm:max-w-xl"
          >
            {proofPoints.map((point) => (
              <div key={point.label} className="border-t border-travertine-300/80 pt-3">
                <span className="block font-serif text-xl text-charcoal-950 leading-none">{point.label}</span>
                <span className="block text-[10px] text-charcoal-800 leading-snug mt-1">{point.detail}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-7 xl:col-span-7 h-full relative pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="relative min-h-[460px] sm:min-h-[520px] md:min-h-[620px] lg:min-h-[680px]"
          >
            <div className="absolute left-0 sm:left-auto right-0 top-0 w-full sm:w-[88%] md:w-[82%] h-[68%] md:h-[72%] bg-travertine-100 overflow-hidden shadow-2xl border border-travertine-300/70">
              <img
                src={images.studentGroup}
                alt="Accademia Italiana students in a small group lesson"
                className="w-full h-full object-cover object-center transition-transform duration-[6s] ease-out hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/35 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/15 pointer-events-none m-4" />
              <div className="absolute right-4 top-4 md:right-7 md:top-7 text-charcoal-950 bg-travertine-50/92 backdrop-blur-sm border border-travertine-300/70 px-3 py-2 shadow-lg">
                <span className="flex items-center gap-2 text-[9px] tracking-[0.18em] uppercase font-bold text-olive-800">
                  <Users className="w-3.5 h-3.5" />
                  {language === 'IT' ? 'Piccoli gruppi reali' : 'Real small groups'}
                </span>
              </div>
            </div>

            <div className="absolute left-0 bottom-10 w-[48%] min-w-[210px] h-[38%] bg-travertine-100 overflow-hidden shadow-xl border border-travertine-300/70 hidden sm:block">
              <img
                src={images.ascoli}
                alt="Piazza del Popolo in Ascoli Piceno"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-travertine-50">
                <span className="flex items-center gap-2 text-[9px] tracking-widest uppercase font-bold">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-300" />
                  Ascoli Piceno
                </span>
              </div>
            </div>

            <div className="absolute left-4 right-4 sm:left-auto sm:right-8 bottom-0 w-auto sm:w-[42%] sm:min-w-[190px] h-[30%] bg-olive-900 text-travertine-50 border border-olive-800 shadow-2xl p-5 md:p-6 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <img src={accademiaLogo} alt="" className="h-11 w-11 object-contain bg-travertine-50 p-1.5" />
                <div>
                  <span className="block text-[9px] tracking-[0.22em] uppercase text-olive-200 font-bold">
                    {language === 'IT' ? 'Direzione' : 'Direction'}
                  </span>
                  <span className="block font-serif text-sm text-travertine-50">
                    {contactInfo.director}
                  </span>
                </div>
              </div>
              <div className="pt-5 border-t border-olive-700/60">
                <span className="flex items-center gap-2 text-[10px] text-olive-100">
                  <MessageCircle className="w-3.5 h-3.5 text-terracotta-300" />
                  {contactInfo.email}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
