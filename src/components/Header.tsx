import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import accademiaLogo from '../assets/accademia-logo.png';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onInquireClick: () => void;
}

interface NavItem {
  label: string;
  id: string;
}

export default function Header({ currentTab, onTabChange, onInquireClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const { language: lang, setLanguage, t } = useLanguage();

  const mainNav: NavItem[] = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.courses'), id: 'courses' },
    { label: t('nav.accommodation'), id: 'accommodation' },
    { label: t('nav.ascoli'), id: 'ascoli' },
  ];

  const secondaryNav: NavItem[] = [
    { label: t('nav.student-life'), id: 'student-life' },
    { label: t('nav.culture'), id: 'culture' },
    { label: t('nav.gallery'), id: 'gallery' },
    { label: t('nav.testimonials'), id: 'testimonials' },
    { label: t('nav.faq'), id: 'faq' },
    { label: t('nav.blog'), id: 'blog' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const visitTab = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
    setShowMoreMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchLanguage = () => {
    setLanguage(lang === 'EN' ? 'IT' : 'EN');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-travertine-200/80 bg-travertine-50/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:px-10 xl:px-12">
        <button
          onClick={() => visitTab('home')}
          className="group flex min-w-0 items-center gap-3 text-left"
          aria-label="Accademia Italiana home"
        >
          <img
            src={accademiaLogo}
            alt="Accademia Italiana logo"
            className="h-11 w-11 shrink-0 object-contain md:h-12 md:w-12"
          />
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-serif text-[0.92rem] font-normal uppercase tracking-[0.08em] text-charcoal-950 transition-colors duration-300 group-hover:text-olive-800 sm:text-xl sm:tracking-[0.12em]">
              Accademia Italiana
            </span>
            <span className="truncate text-[9px] font-medium uppercase tracking-[0.16em] text-olive-700 sm:text-[10px]">
              Ascoli Piceno - dal 1997
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <button
              key={item.id}
              onClick={() => visitTab(item.id)}
              className={`relative py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                currentTab === item.id ? 'text-olive-800' : 'text-charcoal-800 hover:text-charcoal-950'
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <motion.span
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 h-px w-full bg-terracotta-500"
                />
              )}
            </button>
          ))}

          <div className="relative">
            <button
              onClick={() => setShowMoreMenu((value) => !value)}
              className="flex items-center gap-1.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal-800 transition-colors duration-300 hover:text-charcoal-950"
              aria-expanded={showMoreMenu}
              aria-controls="desktop-more-menu"
            >
              {t('nav.more')}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${showMoreMenu ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showMoreMenu && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setShowMoreMenu(false)} />
                  <motion.div
                    id="desktop-more-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-full z-40 mt-3 w-64 border border-travertine-200 bg-travertine-50 p-3 shadow-[0_18px_50px_rgba(43,41,38,0.12)]"
                  >
                    {secondaryNav.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => visitTab(item.id)}
                        className={`w-full px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.11em] transition-colors ${
                          currentTab === item.id
                            ? 'bg-travertine-100 text-olive-800'
                            : 'text-charcoal-800 hover:bg-travertine-100 hover:text-charcoal-950'
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

        <div className="hidden items-center gap-4 xl:flex">
          <button
            onClick={switchLanguage}
            className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.09em] text-charcoal-800 transition-colors duration-300 hover:text-terracotta-600"
            aria-label={lang === 'EN' ? 'Switch to Italian' : 'Switch to English'}
          >
            <Globe className="h-3.5 w-3.5 stroke-[1.5]" />
            <span>{lang}</span>
          </button>

          <button
            onClick={onInquireClick}
            className="border border-charcoal-950/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal-950 shadow-sm transition-all duration-300 hover:border-charcoal-950 hover:bg-charcoal-950 hover:text-travertine-50"
          >
            {t('nav.inquire')}
          </button>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={switchLanguage}
            className="border border-travertine-300 px-3 py-2 text-xs font-bold tracking-[0.08em] text-charcoal-800"
            aria-label={lang === 'EN' ? 'Switch to Italian' : 'Switch to English'}
          >
            {lang}
          </button>
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="border border-charcoal-950/20 p-2.5 text-charcoal-950 transition-colors hover:text-olive-800"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5 stroke-[1.5]" /> : <Menu className="h-5 w-5 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
            className="absolute left-0 top-[72px] z-40 max-h-[calc(100dvh-72px)] w-full overflow-y-auto border-b border-travertine-200 bg-travertine-50 shadow-[0_20px_60px_rgba(43,41,38,0.14)] xl:hidden"
          >
            <div className="mx-auto grid max-w-3xl gap-8 px-5 py-7 sm:grid-cols-2 sm:px-8">
              <div>
                <h2 className="mb-4 font-serif text-2xl font-normal text-charcoal-950">
                  {lang === 'IT' ? 'La scuola' : 'The school'}
                </h2>
                <div className="grid gap-2">
                  {mainNav.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => visitTab(item.id)}
                      className={`border-b border-travertine-200 py-3 text-left text-sm ${
                        currentTab === item.id ? 'text-olive-800' : 'text-charcoal-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-2xl font-normal text-charcoal-950">
                  {lang === 'IT' ? 'Vivere Ascoli' : 'Living Ascoli'}
                </h2>
                <div className="grid gap-2">
                  {secondaryNav.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => visitTab(item.id)}
                      className={`border-b border-travertine-200 py-3 text-left text-sm ${
                        currentTab === item.id ? 'text-olive-800' : 'text-charcoal-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onInquireClick();
                }}
                className="bg-olive-800 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-travertine-50 sm:col-span-2"
              >
                {t('nav.inquire')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
