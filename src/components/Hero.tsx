import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, images } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

interface HeroProps {
  onInquireClick: () => void;
}

export default function Hero({ onInquireClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] w-full bg-travertine-50 flex items-center overflow-hidden border-b border-travertine-200/60 py-14 md:py-20">
      
      {/* Delicate background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBB49C_1px,transparent_1px)] [background-size:40px_40px] opacity-10 pointer-events-none z-0" />
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-travertine-200/40 pointer-events-none hidden lg:block" />
      <div className="absolute right-[35%] top-0 bottom-0 w-[1px] bg-travertine-200/40 pointer-events-none hidden lg:block" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Premium Editorial Content */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:space-y-10 lg:pr-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-terracotta-500" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase">
                {t('hero.subtitle')}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-charcoal-950 leading-[1.08] tracking-tight max-w-full text-balance">
              {t('hero.title_part1')} <br />
              {t('hero.title_part2')} <br />
              <span className="italic font-light text-olive-800">{t('hero.title_italic')}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="text-sm lg:text-base text-charcoal-800 font-light leading-relaxed max-w-md"
          >
            {t('hero.desc')}
          </motion.p>

          {/* Interactive Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto"
          >
            <a
              href="#courses"
              className="bg-olive-800 hover:bg-olive-900 text-travertine-50 px-7 md:px-8 py-4 text-[11px] tracking-[0.18em] font-medium uppercase transition-all duration-500 shadow-xl flex items-center justify-center gap-2 border border-olive-700/50 rounded-none text-center whitespace-nowrap"
            >
              {t('hero.explore_courses')}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            
            <button
              onClick={onInquireClick}
              className="border border-charcoal-950/20 hover:border-charcoal-950 px-7 md:px-8 py-4 text-[11px] tracking-[0.18em] font-medium uppercase text-charcoal-800 hover:text-charcoal-950 transition-all duration-500 text-center rounded-none cursor-pointer bg-transparent whitespace-nowrap"
            >
              {t('hero.book_consultation')}
            </button>
          </motion.div>

          {/* Official address callout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="border-l border-travertine-300 pl-5 py-1.5 text-[11px] text-charcoal-700 max-w-sm space-y-2"
          >
            <span className="block font-sans text-[8px] tracking-[0.25em] uppercase font-bold text-olive-700">{t('hero.salon_title')}</span>
            <span className="block font-serif italic">{t('hero.salon_desc')}</span>
            <span className="block font-sans text-[10px] tracking-wide text-charcoal-800">
              {contactInfo.email} - WhatsApp {contactInfo.whatsapp}
            </span>
          </motion.div>
        </div>

        {/* Right Column: Panoramic golden hour image + Floating Cards */}
        <div className="lg:col-span-7 h-full relative flex items-center justify-center pt-10 lg:pt-0">
          
          {/* Asymmetric layout with huge gorgeous picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] bg-travertine-100 overflow-hidden shadow-2xl border border-travertine-300/40"
          >
            <img
              src={images.ascoli}
              alt="Travertine facade and historic clock in Piazza del Popolo, Ascoli Piceno"
              className="w-full h-full object-cover transition-transform duration-[6s] ease-out hover:scale-103"
              referrerPolicy="no-referrer"
            />
            
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-white/10 pointer-events-none m-4" />
            <div className="absolute bottom-6 right-6 bg-travertine-50/95 backdrop-blur-sm border border-travertine-300/70 shadow-xl px-4 py-3 flex items-center gap-3">
              <img src={accademiaLogo} alt="" className="w-10 h-10 object-contain" />
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest text-olive-800 font-bold">
                  Accademia Italiana
                </span>
                <span className="block font-serif text-sm text-charcoal-950">
                  {contactInfo.director}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating Luxury Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-6 right-4 lg:-right-4 bg-travertine-50/95 backdrop-blur-md p-5 max-w-[200px] shadow-2xl border border-travertine-300/60 border-l-2 border-l-terracotta-600 space-y-1.5 hidden sm:block"
          >
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-charcoal-950">{t('hero.palazzo_class_title')}</span>
            </div>
            <p className="font-serif text-[11px] italic text-charcoal-800 leading-relaxed">
              {t('hero.palazzo_class_desc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="absolute -bottom-6 left-4 lg:left-8 bg-olive-900/95 backdrop-blur-md p-5 max-w-[230px] shadow-2xl border border-olive-800/80 border-l-2 border-l-olive-200 text-travertine-50 space-y-1.5 hidden sm:block"
          >
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-olive-200" />
              <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-olive-200">{t('hero.immersion_care_title')}</span>
            </div>
            <p className="font-serif text-[11px] italic text-travertine-200 leading-relaxed">
              {t('hero.immersion_care_desc')}
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
