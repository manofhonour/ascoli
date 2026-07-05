import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Languages, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, services } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

const serviceIcons = [BookOpen, Languages, GraduationCap, Users];

export default function Teachers() {
  const { language, t } = useLanguage();

  return (
    <section id="teachers" className="py-24 md:py-32 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            {t('teachers.section_tag')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-charcoal-950 leading-tight">
            {t('teachers.section_title_part1')}{' '}
            <span className="italic text-olive-800">{t('teachers.section_title_italic')}</span>
          </h2>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-xl">
            {t('teachers.section_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-4 bg-travertine-100 border border-travertine-300 p-8 flex flex-col justify-between min-h-[420px]"
          >
            <div className="space-y-6">
              <img src={accademiaLogo} alt="Accademia logo" className="w-20 h-20 object-contain" />
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-terracotta-600">
                  {language === 'IT' ? 'Direzione' : 'Direction'}
                </span>
                <h3 className="font-serif text-3xl text-charcoal-950 font-light">{contactInfo.director}</h3>
              </div>
              <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                {language === 'IT'
                  ? 'La Dr. Antonella Valentini dirige la scuola, che unisce insegnamento dell italiano e servizi linguistici.'
                  : 'Dr. Antonella Valentini directs the school, which combines Italian language teaching with wider language services.'}
              </p>
            </div>
            <div className="pt-6 border-t border-travertine-300/70 text-[10px] uppercase tracking-widest text-olive-800 font-bold">
              Accademia Italiana - Accademia Internazionale
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] || BookOpen;
              const title = language === 'IT' ? service.titleIT : service.title;
              const description = language === 'IT' ? service.descriptionIT : service.description;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
                  className="bg-travertine-100 border border-travertine-200/80 p-7 space-y-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-11 h-11 bg-travertine-50 border border-travertine-300 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-olive-800 stroke-[1.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-charcoal-950 font-normal">{title}</h3>
                    <p className="text-xs text-charcoal-800 font-light leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
