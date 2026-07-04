import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import accademiaLogo from '../assets/accademia-logo.png';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onInquireClick: () => void;
}

export default function Header({ currentTab, onTabChange, onInquireClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language: lang, setLanguage, t } = useLanguage();
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const mainNav = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.courses'), id: 'courses' },
    { label: t('nav.accommodation'), id: 'accommodation' },
    { label: t('nav.ascoli'), id: 'ascoli' },
  ];

  const secondaryNav = [
    { label: t('nav.student-life'), id: 'student-life' },
    { label: t('nav.culture'), id: 'culture' },
    { label: t('nav.gallery'), id: 'gallery' },
    { label: t('nav.testimonials'), id: 'testimonials' },
    { label: t('nav.faq'), id: 'faq' },
    { label: t('nav.blog'), id: 'blog' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-travertine-50/90 backdrop-blur-md border-b border-travertine-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 xl:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => {
            onTabChange('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 text-left cursor-pointer min-w-0"
        >
          <img
            src={accademiaLogo}
            alt="Accademia Italiana logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain shrink-0"
          />
          <span className="flex flex-col min-w-0">
            <span className="font-serif text-sm sm:text-lg md:text-xl tracking-[0.1em] sm:tracking-[0.14em] text-charcoal-950 font-medium uppercase transition-colors duration-300 group-hover:text-olive-800 truncate">
              Accademia Italiana
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.12em] sm:tracking-[0.2em] font-sans text-olive-700 uppercase font-medium truncate">
              Ascoli Piceno - dal 1997
            </span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {mainNav.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative text-xs tracking-[0.12em] uppercase font-semibold py-2 transition-colors duration-300 cursor-pointer ${
                currentTab === item.id ? 'text-olive-800' : 'text-charcoal-800 hover:text-charcoal-950'
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <motion.span
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-terracotta-500"
                />
              )}
            </button>
          ))}

          {/* More Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="flex items-center gap-1.5 text-xs tracking-[0.12em] uppercase font-semibold text-charcoal-800 hover:text-charcoal-950 py-2 cursor-pointer"
            >
              {t('nav.more')}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showMoreMenu ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showMoreMenu && (
                <>
                  {/* Backdrop closer */}
                  <div className="fixed inset-0 z-30" onClick={() => setShowMoreMenu(false)} />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-travertine-50 border border-travertine-200 shadow-xl p-4 z-40 space-y-1.5"
                  >
                    {secondaryNav.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onTabChange(item.id);
                          setShowMoreMenu(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-3 py-2 text-xs tracking-wider uppercase font-semibold transition-colors rounded-none cursor-pointer ${
                          currentTab === item.id ? 'bg-travertine-200 text-olive-800' : 'text-charcoal-800 hover:bg-travertine-100 hover:text-charcoal-950'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Call to Actions */}
        <div className="hidden xl:flex items-center gap-5">
          <button 
            onClick={() => setLanguage(lang === 'EN' ? 'IT' : 'EN')}
            className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] text-charcoal-800 hover:text-terracotta-600 transition-colors duration-300 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>{lang}</span>
          </button>
          
          <button
            onClick={onInquireClick}
            className="border border-charcoal-950/70 hover:border-charcoal-950 px-6 py-2.5 text-xs tracking-[0.15em] font-semibold uppercase text-charcoal-950 hover:bg-charcoal-950 hover:text-travertine-50 transition-all duration-500 rounded-none shadow-sm cursor-pointer"
          >
            {t('nav.inquire')}
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex xl:hidden items-center gap-4">
          <button 
            onClick={() => setLanguage(lang === 'EN' ? 'IT' : 'EN')}
            className="text-xs font-bold tracking-[0.1em] text-charcoal-800 mr-2 cursor-pointer"
          >
            {lang}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-charcoal-950 hover:text-olive-800 transition-colors p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (combining all 12 items for full transparency) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-16 md:top-20 left-0 w-full bg-travertine-50 border-b border-travertine-200/80 shadow-lg xl:hidden z-40 overflow-y-auto max-h-[80vh]"
          >
            <div className="px-8 py-10 flex flex-col gap-5">
              {/* Combine main and secondary */}
              {[...mainNav, ...secondaryNav].map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  key={item.id}
                  onClick={() => {
                    setIsOpen(false);
                    onTabChange(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left text-xs tracking-[0.15em] uppercase font-bold border-b border-travertine-200/40 pb-2 transition-colors cursor-pointer ${
                    currentTab === item.id ? 'text-olive-800' : 'text-charcoal-800 hover:text-terracotta-600'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsOpen(false);
                  onInquireClick();
                }}
                className="w-full mt-4 border border-charcoal-950 px-6 py-3.5 text-xs tracking-[0.15em] font-semibold uppercase text-charcoal-950 hover:bg-charcoal-950 hover:text-travertine-50 transition-all duration-300 rounded-none text-center cursor-pointer"
              >
                {t('nav.inquire')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
