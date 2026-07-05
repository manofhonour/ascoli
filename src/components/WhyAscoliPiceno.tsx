import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ascoliHighlights, contactInfo, images } from '../data/officialContent';

export default function WhyAscoliPiceno() {
  const { language, t } = useLanguage();

  const stats = [
    {
      value: 'Historic',
      valueIT: 'Storica',
      label: 'Art and streets',
      labelIT: 'Arte e strade',
      detail: 'A city known for history, architecture, churches, museums, and theatre',
      detailIT: 'Una citta nota per storia, architettura, chiese, musei e teatro',
    },
    {
      value: 'Marche',
      valueIT: 'Marche',
      label: 'Coast and mountains',
      labelIT: 'Costa e montagne',
      detail: 'A region of beaches, hill towns, vineyards, olive groves, and Apennine landscapes',
      detailIT: 'Una regione di spiagge, borghi, vigneti, uliveti e paesaggi appenninici',
    },
    {
      value: 'Walkable',
      valueIT: 'A misura d uomo',
      label: 'Daily immersion',
      labelIT: 'Immersione quotidiana',
      detail: 'A compact setting for cafes, markets, lessons, and local conversation',
      detailIT: 'Un contesto compatto per caffe, mercati, lezioni e conversazione locale',
    },
    {
      value: 'Festive',
      valueIT: 'Festiva',
      label: 'Local calendar',
      labelIT: 'Calendario locale',
      detail: 'Quintana, Carnival, and Sant Emidio mark the civic year',
      detailIT: 'Quintana, Carnevale e Sant Emidio scandiscono l anno cittadino',
    },
  ];

  return (
    <section id="why-ascoli" className="py-24 md:py-32 bg-travertine-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7 max-w-[340px] sm:max-w-none space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              {t('ascoli.section_tag')}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-[1.05] tracking-tight">
              {t('ascoli.section_title_part1')}{' '}
              <span className="italic">{t('ascoli.section_title_italic')}</span>{' '}
              {t('ascoli.section_title_part2')}
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              {t('ascoli.section_desc')}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
          className="relative h-[380px] md:h-[500px] w-full bg-travertine-200 overflow-hidden shadow-2xl mb-16 border border-travertine-300"
        >
          <img
            src={images.ascoli}
            alt="Piazza del Popolo in Ascoli Piceno"
            className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 hover:scale-102 transition-all duration-[2s] ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-travertine-50">
            <div className="space-y-1 max-w-md">
              <span className="font-serif italic text-xs text-terracotta-100">{t('ascoli.image_tag')}</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light">{t('ascoli.image_title')}</h3>
              <p className="text-[11px] text-travertine-200 font-light leading-relaxed">
                {t('ascoli.image_desc')}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] tracking-widest font-mono uppercase text-olive-100 bg-olive-900/60 backdrop-blur-sm px-4 py-2 border border-olive-700/50">
              <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Ascoli Piceno, Marche</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-travertine-300">
              {stats.map((stat) => (
                <div key={stat.value} className="space-y-1.5">
                  <span className="block font-serif text-3xl md:text-4xl text-olive-800 font-light">
                    {language === 'IT' ? stat.valueIT : stat.value}
                  </span>
                  <span className="block text-[11px] tracking-wider font-semibold text-charcoal-950 uppercase">
                    {language === 'IT' ? stat.labelIT : stat.label}
                  </span>
                  <p className="text-xs text-charcoal-800 font-light">{language === 'IT' ? stat.detailIT : stat.detail}</p>
                </div>
              ))}
            </div>

            <div className="border border-travertine-300 p-6 md:p-8 bg-travertine-50/50 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
              <div className="space-y-1.5">
                <span className="text-[10px] tracking-widest font-mono text-terracotta-600 uppercase font-bold">
                  {t('ascoli.map_tag')}
                </span>
                <h4 className="font-serif text-xl text-charcoal-950">{t('ascoli.map_title')}</h4>
                <p className="text-xs text-charcoal-800 font-light leading-relaxed max-w-xl">
                  {t('ascoli.map_desc')}
                </p>
              </div>

              <div className="relative border border-travertine-300/80 bg-travertine-100 h-44 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full text-travertine-400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 80 Q 150 20 250 120 T 450 60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 120 150 C 180 50, 300 160, 400 40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                </svg>

                <div className="absolute top-8 left-4 sm:left-1/4 flex items-center gap-1.5 bg-travertine-50 px-2 py-1 shadow-sm border border-travertine-300">
                  <span className="w-1.5 h-1.5 bg-terracotta-500 rounded-full animate-ping" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-charcoal-900 font-semibold">
                    {contactInfo.addressLine1}
                  </span>
                </div>

                <div className="absolute bottom-12 left-4 sm:left-1/2 flex items-center gap-1.5 bg-travertine-50 px-2 py-1 shadow-sm border border-travertine-300">
                  <span className="w-1.5 h-1.5 bg-olive-700 rounded-full" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-charcoal-900 font-semibold">Piazza del Popolo</span>
                </div>

                <div className="absolute top-24 right-12 hidden sm:flex items-center gap-1.5 bg-travertine-50 px-2 py-1 shadow-sm border border-travertine-300">
                  <span className="w-1.5 h-1.5 bg-charcoal-800 rounded-full" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-charcoal-900 font-semibold">
                    {language === 'IT' ? 'Centro storico' : 'Historic centre'}
                  </span>
                </div>

                <div className="absolute bottom-4 left-10 text-[9px] font-mono text-charcoal-800 opacity-60">
                  Castellano / Tronto
                </div>
                <div className="absolute top-4 right-10 text-[9px] font-mono text-charcoal-800 opacity-60">
                  {language === 'IT' ? 'Marche' : 'Le Marche'}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="border-b border-travertine-300 pb-4">
              <span className="text-[10px] tracking-widest font-mono text-olive-700 uppercase font-bold">
                {t('ascoli.gems_tag')}
              </span>
              <h4 className="font-serif text-2xl font-light text-charcoal-950 mt-1">{t('ascoli.gems_title')}</h4>
            </div>

            <div className="space-y-6">
              {ascoliHighlights.map((gem) => (
                <div key={gem.title} className="space-y-1.5 group">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif text-lg font-normal text-charcoal-950 group-hover:text-terracotta-500 transition-colors">
                      {language === 'IT' ? gem.titleIT : gem.title}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-olive-800 bg-olive-50 px-2 py-0.5 border border-olive-200">
                      {language === 'IT' ? gem.typeIT : gem.type}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                    {language === 'IT' ? gem.descriptionIT : gem.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-olive-900 text-travertine-100 p-6 border border-olive-800 space-y-3">
              <h5 className="font-serif text-lg font-normal text-travertine-50">{t('ascoli.purity_title')}</h5>
              <p className="text-xs text-olive-100 font-light leading-relaxed">{t('ascoli.purity_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
