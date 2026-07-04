import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Hotel, Bed, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { accommodationOptions } from '../data/officialContent';

const accommodationIcons = {
  'host-family': Home,
  bnb: Bed,
  hotel: Hotel,
};

export default function AccommodationSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('host-family');

  const activeData = accommodationOptions.find((item) => item.id === activeTab) || accommodationOptions[0];
  const ActiveIcon = accommodationIcons[activeData.id as keyof typeof accommodationIcons] || Home;

  return (
    <section id="accommodation" className="py-32 md:py-44 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mb-24 space-y-6">
          <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase block">
            {t('accommodation.section_tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal-950 leading-tight">
            {t('accommodation.section_title_part1')}{' '}
            <span className="italic text-olive-800">{t('accommodation.section_title_italic')}</span>
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-charcoal-800 font-light max-w-xl leading-relaxed">
            {t('accommodation.section_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div className="flex flex-col border border-travertine-200/80 divide-y divide-travertine-200/80 bg-travertine-100/50">
              {accommodationOptions.map((type) => {
                const isSelected = activeTab === type.id;
                const Icon = accommodationIcons[type.id as keyof typeof accommodationIcons] || Home;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(type.id)}
                    className={`w-full text-left p-6 flex items-center justify-between transition-all duration-500 rounded-none cursor-pointer ${
                      isSelected ? 'bg-olive-900 text-travertine-50' : 'text-charcoal-900 hover:bg-travertine-200/50'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className={`block text-[9px] font-mono uppercase tracking-widest ${isSelected ? 'text-terracotta-200' : 'text-terracotta-600'}`}>
                        {type.italianName}
                      </span>
                      <span className="block font-serif text-lg lg:text-xl font-light">{type.name}</span>
                    </div>
                    <Icon className={`w-4 h-4 stroke-[1.25] ${isSelected ? 'text-terracotta-400' : 'text-olive-700'}`} />
                  </button>
                );
              })}
            </div>

            <div className="space-y-6 pt-4">
              <span className="text-[10px] font-bold tracking-[0.25em] text-olive-800 uppercase block">
                {activeData.tagline}
              </span>
              <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                {activeData.description}
              </p>

              <ul className="space-y-3 pt-2">
                {activeData.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-xs md:text-sm text-charcoal-950 font-light leading-relaxed">
                    <Check className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5 stroke-[1.5]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] bg-travertine-200 border border-travertine-300/40 shadow-2xl overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={activeData.image}
                  alt={activeData.name}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-[1s]"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              <div className="absolute inset-0 border border-white/20 pointer-events-none m-4" />
              <div className="absolute bottom-6 right-6 bg-travertine-50/95 backdrop-blur-md px-5 py-3 border border-travertine-300/60 shadow-xl flex items-center gap-3">
                <ActiveIcon className="w-4 h-4 text-olive-800 stroke-[1.5]" />
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-olive-800 font-bold block">
                    {language === 'IT' ? 'Centro di Ascoli Piceno' : 'Ascoli Piceno Centre'}
                  </span>
                  <span className="font-serif text-xs italic text-charcoal-950">
                    {language === 'IT' ? 'Prenotazione tramite la scuola' : 'Reservation support through the school'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
