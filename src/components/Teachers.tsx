import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, images, services } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

export default function Teachers() {
  const { language, t } = useLanguage();
  const homepageServices = services.slice(0, 3);

  return (
    <section id="teachers" className="bg-travertine-50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-7"
            >
              <div className="space-y-5">
                <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-terracotta-600">
                  {t('teachers.section_tag')}
                </span>
                <h2 className="font-serif text-4xl font-normal leading-tight text-charcoal-950 md:text-5xl lg:text-6xl">
                  {t('teachers.section_title_part1')}{' '}
                  <span className="inline-block pb-1 italic leading-[1.12] text-olive-800">
                    {t('teachers.section_title_italic')}
                  </span>
                </h2>
                <p className="max-w-lg text-sm font-light leading-relaxed text-charcoal-800 md:text-base">
                  {t('teachers.section_desc')}
                </p>
              </div>

              <div className="border border-travertine-300 bg-travertine-100 p-6">
                <div className="flex items-center gap-4">
                  <img src={accademiaLogo} alt="Accademia Italiana logo" className="h-14 w-14 object-contain" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-olive-800">
                      {language === 'IT' ? 'Direzione' : 'Direction'}
                    </span>
                    <span className="block font-serif text-2xl text-charcoal-950">{contactInfo.director}</span>
                  </div>
                </div>
                <p className="mt-5 text-sm font-light leading-relaxed text-charcoal-800">
                  {language === 'IT'
                    ? 'Una scuola piccola permette di parlare via WhatsApp prima dell\'arrivo, chiarire il livello e preparare un soggiorno adatto.'
                    : 'A small school means you can have a WhatsApp conversation before arrival, clarify your level, and plan a stay that feels manageable.'}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-8">
              <div className="aspect-[16/9] overflow-hidden border border-travertine-300 bg-travertine-100">
                <img
                  src={images.studentPortrait}
                  alt={language === 'IT' ? 'Studenti adulti in Accademia Italiana' : 'Adult learners at Accademia Italiana'}
                  className="h-full w-full object-cover grayscale-[12%]"
                  style={{ objectPosition: '50% 48%' }}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-1 border-l border-t border-travertine-300 md:grid-cols-3">
                {homepageServices.map((service) => {
                  const title = language === 'IT' ? service.titleIT : service.title;
                  const description = language === 'IT' ? service.descriptionIT : service.description;
                  return (
                    <article key={service.title} className="min-h-[210px] border-b border-r border-travertine-300 bg-travertine-50 p-6">
                      <h3 className="font-serif text-2xl font-normal leading-tight text-charcoal-950">{title}</h3>
                      <p className="mt-5 text-sm font-light leading-relaxed text-charcoal-800">{description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
