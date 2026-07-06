import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/officialContent';

export default function TrustBar() {
  const { language, t } = useLanguage();

  const trustItems = [
    { value: t('trust.established_label'), detail: t('trust.established_detail') },
    { value: t('trust.cohorts_label'), detail: t('trust.cohorts_detail') },
    { value: language === 'IT' ? 'Internazionali' : 'International', detail: t('trust.global_detail') },
    { value: t('trust.sanctuaries_label'), detail: t('trust.sanctuaries_detail') },
    { value: t('trust.staff_label'), detail: t('trust.staff_detail') },
  ];

  return (
    <section className="bg-travertine-50 border-y border-travertine-200/70 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-4 max-w-[340px] sm:max-w-none border-l border-terracotta-500 pl-5 py-1">
            <span className="block text-[10px] font-bold tracking-[0.28em] text-terracotta-600 uppercase">
              {language === 'IT' ? 'In sintesi' : 'At a glance'}
            </span>
            <p className="font-serif text-2xl md:text-3xl text-charcoal-950 font-light leading-tight mt-3">
              {language === 'IT'
                ? 'Una scuola concreta, centrale e riconoscibile.'
                : 'A small school with a real local life around it.'}
            </p>
            <p className="text-xs text-charcoal-800 font-light leading-relaxed mt-4 max-w-sm">
              {language === 'IT'
                ? `${contactInfo.schoolName} combina piccoli gruppi, docenti qualificati e vita quotidiana ad Ascoli Piceno.`
                : `${contactInfo.schoolName} combines small groups, qualified teachers, and daily life in Ascoli Piceno.`}
            </p>
          </div>

          <div className="lg:col-span-8 max-w-[340px] sm:max-w-none grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 border-t border-l border-travertine-200/90">
            {trustItems.map((item) => (
              <div key={item.value} className="min-h-[140px] min-w-0 border-r border-b border-travertine-200/90 p-5 md:p-6 flex flex-col justify-between bg-travertine-50/70">
                <span className="block min-w-0 font-serif text-2xl md:text-[1.65rem] xl:text-[1.55rem] text-olive-800 font-light leading-[1.05]">
                  {item.value}
                </span>
                <span className="block text-[11px] text-charcoal-800 font-light leading-snug">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
