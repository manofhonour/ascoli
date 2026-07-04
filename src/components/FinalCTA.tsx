import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, CalendarRange } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FinalCTAProps {
  onInquireClick: () => void;
}

export default function FinalCTA({ onInquireClick }: FinalCTAProps) {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-36 md:py-48 bg-charcoal-950 text-travertine-100 overflow-hidden border-t border-travertine-300/10">
      {/* Cinematic photograph background with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80"
          alt="Golden Italian hills of Marche"
          className="w-full h-full object-cover grayscale brightness-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/80 to-charcoal-950" />
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
        
        {/* Sub title stamp */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="inline-flex items-center gap-2.5 text-[9px] tracking-[0.25em] font-bold uppercase text-terracotta-100 bg-terracotta-800/30 px-4 py-2 border border-terracotta-700/20"
        >
          <CalendarRange className="w-3.5 h-3.5 text-terracotta-400 stroke-[1.25]" />
          <span>
            {language === 'IT' ? 'Limitato a 6 studenti per sessione' : 'Limited to 6 Students per Cohort'}
          </span>
        </motion.div>

        {/* Big Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight text-travertine-50 leading-[1.05] tracking-tight max-w-2xl mx-auto"
        >
          {language === 'IT' ? (
            <>
              Prenota il Tuo <br className="hidden md:block" />
              <span className="italic font-light text-olive-200">Viaggio Italiano.</span>
            </>
          ) : (
            <>
              Book Your <br className="hidden md:block" />
              <span className="italic font-light text-olive-200">Italian Journey.</span>
            </>
          )}
        </motion.h2>

        {/* Explanatory subtitle paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="text-xs md:text-sm lg:text-base text-travertine-300 font-light max-w-md mx-auto leading-relaxed"
        >
          {language === 'IT' 
            ? 'Passeggia per le piazze medievali, conversa con maestri artigiani e trova la tua vera voce italiana. Il tuo posto al Caffè Meletti ti aspetta.'
            : 'Wander through medieval plazas, converse with master craftspeople, and find your true Italian voice. Your stone seat at Caffè Meletti awaits.'}
        </motion.p>

        {/* Buttons: Primary and WhatsApp */}
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
            <span>{language === 'IT' ? 'Inizia la Tua Candidatura' : 'Begin Your Application'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/390000000"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-travertine-100/20 hover:border-terracotta-500 hover:text-terracotta-100 px-8 py-4.5 text-[11px] tracking-[0.2em] font-medium uppercase text-travertine-200 hover:bg-terracotta-700/20 transition-all duration-500 text-center flex items-center justify-center gap-2 rounded-none cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 stroke-[1.25]" />
            <span>{language === 'IT' ? 'Ammissioni WhatsApp' : 'WhatsApp Admissions'}</span>
          </a>
        </motion.div>

        {/* Small subtext disclaimer */}
        <p className="text-[9px] text-travertine-400 font-mono tracking-widest uppercase pt-6">
          {language === 'IT'
            ? 'Tutte le registrazioni sono rimborsabili fino a 30 giorni prima della partenza.'
            : 'All registrations are fully refundable up to 30 days prior to departure.'}
        </p>

      </div>
    </section>
  );
}
