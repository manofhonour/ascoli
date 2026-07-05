import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, CalendarRange } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, images } from '../data/officialContent';

interface FinalCTAProps {
  onInquireClick: () => void;
}

export default function FinalCTA({ onInquireClick }: FinalCTAProps) {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-36 md:py-48 bg-charcoal-950 text-travertine-100 overflow-hidden border-t border-travertine-300/10">
      <div className="absolute inset-0 z-0">
        <img
          src={images.ascoli}
          alt="Piazza del Popolo in Ascoli Piceno"
          className="w-full h-full object-cover grayscale brightness-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/80 to-charcoal-950" />
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="inline-flex items-center gap-2.5 text-[9px] tracking-[0.25em] font-bold uppercase text-terracotta-100 bg-terracotta-800/30 px-4 py-2 border border-terracotta-700/20"
        >
          <CalendarRange className="w-3.5 h-3.5 text-terracotta-400 stroke-[1.25]" />
          <span>{t('cta.limited')}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight text-travertine-50 leading-[1.05] tracking-tight max-w-2xl mx-auto"
        >
          {language === 'IT' ? (
            <>
              Inizia il tuo <br className="hidden md:block" />
              <span className="italic font-light text-olive-200">corso di italiano.</span>
            </>
          ) : (
            <>
              Begin Your <br className="hidden md:block" />
              <span className="italic font-light text-olive-200">Italian Course.</span>
            </>
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="text-xs md:text-sm lg:text-base text-travertine-300 font-light max-w-md mx-auto leading-relaxed"
        >
          {t('cta.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto pt-4"
        >
          <button
            onClick={onInquireClick}
            className="bg-olive-800 hover:bg-olive-900 text-travertine-50 px-8 py-4.5 text-[11px] tracking-[0.2em] font-medium uppercase transition-all duration-500 shadow-xl flex items-center justify-center gap-2 rounded-none border border-olive-700/50 cursor-pointer"
          >
            <span>{t('cta.begin')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-travertine-100/20 hover:border-terracotta-500 hover:text-terracotta-100 px-8 py-4.5 text-[11px] tracking-[0.2em] font-medium uppercase text-travertine-200 hover:bg-terracotta-700/20 transition-all duration-500 text-center flex items-center justify-center gap-2 rounded-none cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 stroke-[1.25]" />
            <span>{t('cta.whatsapp')}</span>
          </a>
        </motion.div>

        <p className="text-[9px] text-travertine-400 font-mono tracking-widest uppercase pt-6">
          {t('cta.booking_note')}
        </p>
      </div>
    </section>
  );
}
