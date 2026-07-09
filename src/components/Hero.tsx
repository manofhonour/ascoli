import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
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
      detail: language === 'IT' ? 'Scuola e servizi linguistici' : 'Italian teaching and language services',
    },
    {
      label: language === 'IT' ? '3-6 studenti' : '3-6 students',
      detail: language === 'IT' ? 'Piccoli gruppi standard' : 'Small standard-course groups',
    },
    {
      label: 'Ascoli Piceno',
      detail: language === 'IT' ? 'Vita quotidiana nelle Marche' : 'Everyday life in the region Le Marche',
    },
  ];

  return (
    <section className="relative min-h-[calc(100dvh-72px)] w-full overflow-hidden border-b border-travertine-200/70 bg-travertine-50 py-10 md:py-14 lg:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(191,161,126,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(191,161,126,0.14)_1px,transparent_1px)] [background-size:96px_96px] opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16 w-full max-w-[100vw] box-border min-w-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        <div className="lg:col-span-5 xl:col-span-5 min-w-0 max-w-full overflow-hidden flex flex-col justify-center space-y-7 lg:space-y-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex w-full sm:w-auto max-w-[360px] sm:max-w-full items-center gap-3 border border-travertine-300/80 bg-travertine-50/85 px-3 py-2 shadow-sm">
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

            <figure className="sm:hidden border border-travertine-300 bg-travertine-100 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={images.groupLesson}
                  alt="Adults studying Italian in a small Accademia Italiana class"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: '50% 44%' }}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </figure>
            
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.15rem] xl:text-[5.8rem] font-normal text-charcoal-950 leading-[1.02] tracking-tight max-w-full text-balance">
              {t('hero.title_part1')} <br />
              {t('hero.title_part2')} <br />
              <span className="italic font-light text-olive-800 leading-[1.12] inline-block pb-1">{t('hero.title_italic')}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="text-sm lg:text-[15px] text-charcoal-800 font-light leading-relaxed w-full max-w-[360px] sm:max-w-md"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full max-w-[360px] sm:max-w-md md:w-auto md:max-w-none"
          >
            <a
              href="#courses"
              className="bg-olive-800 hover:bg-olive-900 text-travertine-50 px-7 md:px-8 py-4 text-[11px] tracking-[0.16em] font-semibold uppercase transition-all duration-300 shadow-sm flex items-center justify-center gap-2 border border-olive-700/50 rounded-none text-center whitespace-nowrap active:translate-y-px"
            >
              {t('hero.explore_courses')}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            
            <button
              onClick={onInquireClick}
              className="border border-charcoal-950/25 hover:border-charcoal-950 px-7 md:px-8 py-4 text-[11px] tracking-[0.16em] font-semibold uppercase text-charcoal-800 hover:text-charcoal-950 transition-all duration-300 text-center rounded-none cursor-pointer bg-travertine-50/70 whitespace-nowrap active:translate-y-px"
            >
              {t('hero.book_consultation')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 w-full max-w-[360px] sm:max-w-xl"
          >
            {proofPoints.map((point) => (
              <div key={point.label} className="border-t border-travertine-300/80 pt-3">
                <span className="block font-serif text-xl text-charcoal-950 leading-none">{point.label}</span>
                <span className="block text-xs text-charcoal-800 leading-snug mt-1">{point.detail}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden sm:block lg:col-span-7 xl:col-span-7 h-full relative pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="relative min-h-[460px] sm:min-h-[520px] md:min-h-[620px] lg:min-h-[660px]"
          >
            <div className="absolute left-0 sm:left-auto right-0 top-0 w-full sm:w-[88%] md:w-[82%] h-[56%] md:h-[58%] bg-travertine-100 overflow-hidden shadow-2xl border border-travertine-300/70">
              <img
                src={images.groupLesson}
                alt="Accademia Italiana students in a small group lesson"
                className="w-full h-full object-cover transition-transform duration-[6s] ease-out hover:scale-103"
                style={{ objectPosition: '50% 44%' }}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/35 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/15 pointer-events-none m-4" />
            </div>

            <div className="absolute left-0 bottom-0 w-[48%] min-w-[210px] h-[34%] bg-travertine-100 overflow-hidden shadow-xl border border-travertine-300/70 hidden sm:block">
              <img
                src={images.ascoli}
                alt="Piazza del Popolo in Ascoli Piceno"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 50%' }}
                loading="lazy"
                decoding="async"
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

            <div className="absolute left-4 right-4 sm:left-auto sm:right-12 bottom-0 w-auto sm:w-[42%] sm:min-w-[190px] h-[30%] bg-olive-900 text-travertine-50 border border-olive-800 shadow-2xl p-5 md:p-6 flex flex-col justify-between">
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
