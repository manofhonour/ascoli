import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();

  const trustItems = [
    { label: t("trust.established_label"), detail: t("trust.established_detail") },
    { label: t("trust.cohorts_label"), detail: t("trust.cohorts_detail") },
    { label: t("trust.global_label"), detail: t("trust.global_detail") },
    { label: t("trust.sanctuaries_label"), detail: t("trust.sanctuaries_detail") },
    { label: t("trust.staff_label"), detail: t("trust.staff_detail") }
  ];

  return (
    <section className="bg-travertine-50 border-y border-travertine-200/60 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-4 items-start divide-y md:divide-y-0 md:divide-x divide-travertine-200/80">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center md:items-start text-center md:text-left space-y-1.5 px-4 first:pl-0 last:pr-0 ${
                index > 1 ? 'pt-8 md:pt-0' : 'first:pt-0 pt-8 md:pt-0'
              }`}
            >
              <span className="block font-sans text-[10px] font-bold tracking-[0.22em] text-terracotta-600 uppercase">
                {item.label}
              </span>
              <span className="block font-serif text-sm italic text-charcoal-800 leading-normal">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
