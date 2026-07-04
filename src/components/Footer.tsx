import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-charcoal-950 text-travertine-100 py-16 md:py-20 border-t border-travertine-300/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-travertine-200/10">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <span className="font-serif text-xl tracking-[0.18em] uppercase block text-travertine-50">
              Accademia Italiana
            </span>
            <p className="text-xs text-travertine-300 font-light leading-relaxed max-w-sm font-sans">
              {language === 'IT' 
                ? "Un istituto linguistico di lusso su misura situato ad Ascoli Piceno, nelle Marche. Celebriamo l'autentico patrimonio italiano attraverso l'apprendimento consapevole della lingua e il vivere lento."
                : "A bespoke, luxury-tier linguistic institute located in Ascoli Piceno, Marche. We celebrate authentic Italian heritage through mindful language learning and slow living."}
            </p>
            <div className="text-[10px] font-mono tracking-widest uppercase text-olive-200">
              Ascoli Piceno - Marche - Italia
            </div>
          </div>

          {/* Directory (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-terracotta-100 opacity-60">
              {language === 'IT' ? 'Indice' : 'Directory'}
            </h4>
            <ul className="space-y-2.5 text-xs text-travertine-300 font-light font-sans">
              <li>
                <button onClick={() => { onTabChange('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'La Scuola' : 'The School'}
                </button>
              </li>
              <li>
                <button onClick={() => { onTabChange('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'La Nostra Filosofia' : 'Our Philosophy'}
                </button>
              </li>
              <li>
                <button onClick={() => { onTabChange('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'Corsi' : 'Courses'}
                </button>
              </li>
              <li>
                <button onClick={() => { onTabChange('accommodation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'Residenze' : 'Residences'}
                </button>
              </li>
              <li>
                <button onClick={() => { onTabChange('ascoli'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  Ascoli Piceno
                </button>
              </li>
            </ul>
          </div>

          {/* Experience & Journals (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-terracotta-100 opacity-60">
              {language === 'IT' ? 'Escursioni e Media' : 'Excursions & Media'}
            </h4>
            <ul className="space-y-2.5 text-xs text-travertine-300 font-light font-sans">
              <li>
                <button onClick={() => { onTabChange('student-life'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'Vita Studentesca' : 'Student Life'}
                </button>
              </li>
              <li>
                <button onClick={() => { onTabChange('culture'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'Cultura Italiana' : 'Italian Culture'}
                </button>
              </li>
              <li>
                <button onClick={() => { onTabChange('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'Archivio Galleria' : 'Gallery Archive'}
                </button>
              </li>
              <li>
                <button onClick={() => { onTabChange('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'Diario Blog' : 'Notebook Blog'}
                </button>
              </li>
              <li>
                <button onClick={() => { onTabChange('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
                  {language === 'IT' ? 'Contatto Ammissioni' : 'Contact Liaison'}
                </button>
              </li>
            </ul>
          </div>

          {/* Quote (3 cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-[10px] tracking-widest uppercase font-bold text-terracotta-100 opacity-60">
                {language === 'IT' ? 'Filosofia' : 'Philosophy'}
              </h4>
              <p className="font-serif italic text-sm text-travertine-300 leading-relaxed font-light">
                "Un'altra lingua è una diversa visione della vita."
              </p>
              <span className="block text-[9px] tracking-wider uppercase text-olive-200 font-medium font-mono">
                - Federico Fellini
              </span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-travertine-300/55 gap-4 font-sans font-light">
          <div>
            {language === 'IT' 
              ? '© 2026 Accademia Italiana. Tutti i diritti riservati.' 
              : '© 2026 Accademia Italiana. All rights reserved.'}
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => { onTabChange('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-travertine-50 transition-colors cursor-pointer">
              {language === 'IT' ? 'Termini e FAQ' : 'Terms & FAQ'}
            </button>
            <a href="#" className="hover:text-travertine-50 transition-colors">
              {language === 'IT' ? 'Informativa sulla Privacy' : 'Privacy Charter'}
            </a>
            <a href="#" className="hover:text-travertine-50 transition-colors">
              {language === 'IT' ? 'Impegno di Slow Travel' : 'Slow Travel Pledge'}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
