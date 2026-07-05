import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { culturalOfferings } from '../data/officialContent';

export default function BeyondClassroom() {
  const { language, t } = useLanguage();

  return (
    <section id="beyond-classroom" className="py-24 md:py-32 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            {t('beyond.section_tag')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-charcoal-950 leading-tight">
            {t('beyond.section_title_part1')}{' '}
            <span className="italic text-olive-800">{t('beyond.section_title_italic')}</span>
          </h2>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-xl">
            {t('beyond.section_desc')}
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {culturalOfferings.map((exp, index) => {
            const isEven = index % 2 === 0;
            const title = language === 'IT' ? exp.italianTitle : exp.title;
            const tagline = language === 'IT' ? exp.taglineIT : exp.tagline;
            const description = language === 'IT' ? exp.descriptionIT : exp.description;
            return (
              <div key={exp.title} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-1">
                    <span className="font-serif italic text-xs text-terracotta-600">{exp.italianTitle}</span>
                    <h3 className="font-serif text-3xl font-light text-charcoal-950">{title}</h3>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-olive-700 font-bold">
                      {tagline}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                    {description}
                  </p>

                  <div className="border-l border-terracotta-500 pl-4 py-2 bg-travertine-100/50">
                    <p className="text-[11px] md:text-xs text-charcoal-800 leading-relaxed">
                      {language === 'IT'
                        ? 'Contatta la scuola per disponibilita, orari, livello e formato del corso.'
                        : 'Contact the school for availability, schedules, level placement, and course format.'}
                    </p>
                  </div>
                </div>

                <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="relative aspect-[3/2] overflow-hidden bg-travertine-100 shadow-xl border border-travertine-300/40 group"
                  >
                    <img
                      src={exp.image}
                      alt={title}
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-[1s] ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 border border-white/20 pointer-events-none m-3" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
