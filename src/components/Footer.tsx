import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const { language } = useLanguage();

  return (
    <footer className="bg-charcoal-950 text-travertine-100 py-16 md:py-20 border-t border-travertine-300/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-travertine-200/10">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <img src={accademiaLogo} alt="Accademia Italiana logo" className="w-14 h-14 object-contain bg-travertine-50 p-1.5" />
              <div>
                <span className="font-serif text-xl tracking-[0.14em] uppercase block text-travertine-50">
                  Accademia Italiana
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-olive-200">
                  Accademia Internazionale
                </span>
              </div>
            </div>
            <p className="text-xs text-travertine-300 font-light leading-relaxed max-w-sm font-sans">
              {language === 'IT'
                ? 'Scuola di italiano e centro di servizi linguistici ad Ascoli Piceno, attiva dal 1997.'
                : 'Italian language school and language-services centre in Ascoli Piceno, active since 1997.'}
            </p>
            <div className="text-[10px] font-mono tracking-widest uppercase text-olive-200 leading-relaxed">
              {contactInfo.addressLine1}
              <br />
              {contactInfo.cityLine}
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-terracotta-100 opacity-60">
              {language === 'IT' ? 'Indice' : 'Directory'}
            </h4>
            <ul className="space-y-2.5 text-xs text-travertine-300 font-light font-sans">
              {[
                ['home', language === 'IT' ? 'La scuola' : 'The School'],
                ['about', language === 'IT' ? 'Chi siamo' : 'About'],
                ['courses', language === 'IT' ? 'Corsi' : 'Courses'],
                ['accommodation', language === 'IT' ? 'Alloggi' : 'Accommodation'],
                ['ascoli', 'Ascoli Piceno'],
              ].map(([tab, label]) => (
                <li key={tab}>
                  <button onClick={() => { onTabChange(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-terracotta-100 opacity-60">
              {language === 'IT' ? 'Esperienze' : 'Experience'}
            </h4>
            <ul className="space-y-2.5 text-xs text-travertine-300 font-light font-sans">
              {[
                ['student-life', language === 'IT' ? 'Vita studentesca' : 'Student Life'],
                ['culture', language === 'IT' ? 'Cultura italiana' : 'Italian Culture'],
                ['gallery', language === 'IT' ? 'Galleria' : 'Gallery'],
                ['faq', 'FAQ'],
                ['contact', language === 'IT' ? 'Contatti' : 'Contact'],
              ].map(([tab, label]) => (
                <li key={tab}>
                  <button onClick={() => { onTabChange(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-terracotta-100 opacity-60">
              {language === 'IT' ? 'Contatti' : 'Contact'}
            </h4>
            <div className="text-xs text-travertine-300 font-light leading-relaxed space-y-2">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.internationalEmail}</p>
              <p>{contactInfo.phone}</p>
              <p>WhatsApp {contactInfo.whatsapp}</p>
              <p>{language === 'IT' ? contactInfo.hoursIT : contactInfo.hours}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-travertine-300/55 gap-4 font-sans font-light">
          <div>
            {language === 'IT'
              ? 'Copyright 2026 Accademia Italiana. Tutti i diritti riservati.'
              : 'Copyright 2026 Accademia Italiana. All rights reserved.'}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button onClick={() => { onTabChange('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
              FAQ
            </button>
            <button onClick={() => { onTabChange('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
              {language === 'IT' ? 'Contatta la scuola' : 'Contact the school'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
