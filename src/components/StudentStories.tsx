import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Briefcase, GraduationCap, Globe2, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pathways = [
  {
    icon: BookOpen,
    title: 'First-time Italian learner',
    titleIT: 'Principiante di italiano',
    focus: 'Standard or individual lessons',
    focusIT: 'Corso standard o lezioni individuali',
    need: 'Build a foundation in pronunciation, basic grammar, listening, and everyday conversation.',
    needIT: 'Costruire una base di pronuncia, grammatica essenziale, ascolto e conversazione quotidiana.',
    fit: 'Placement and small-group learning help beginners start without pressure.',
    fitIT: 'Il livello iniziale e i piccoli gruppi aiutano a cominciare senza pressione.',
  },
  {
    icon: Globe2,
    title: 'Culture-focused traveller',
    titleIT: 'Viaggiatore interessato alla cultura',
    focus: 'Standard course plus add-ons',
    focusIT: 'Corso standard piu moduli culturali',
    need: 'Connect Italian study with Ascoli, food, wine, art, history, literature, and the Marche region.',
    needIT: 'Collegare lo studio dell italiano ad Ascoli, cucina, vino, arte, storia, letteratura e Marche.',
    fit: 'Culture options can be added according to dates and availability.',
    fitIT: 'Le opzioni culturali possono essere aggiunte in base a date e disponibilita.',
  },
  {
    icon: Briefcase,
    title: 'Professional learner',
    titleIT: 'Studente professionale',
    focus: 'Individual or custom-made course',
    focusIT: 'Lezioni individuali o corso su misura',
    need: 'Work on business Italian, sector vocabulary, tourism, hotel management, or professional communication.',
    needIT: 'Lavorare su italiano commerciale, lessico di settore, turismo, hotel management o comunicazione professionale.',
    fit: 'A custom course can be prepared around goals, schedule, and level.',
    fitIT: 'Un corso su misura puo essere preparato in base a obiettivi, calendario e livello.',
  },
  {
    icon: GraduationCap,
    title: 'Teacher or exam candidate',
    titleIT: 'Docente o candidato a esami',
    focus: 'Refresher and exam preparation',
    focusIT: 'Aggiornamento e preparazione esami',
    need: 'Prepare for CILS, I.T., university entrance, or refresh Italian teaching practice.',
    needIT: 'Prepararsi per CILS, I.T., ammissione universitaria o aggiornare la pratica didattica.',
    fit: 'Teacher-refresher courses and certification preparation are part of the course and service offer.',
    fitIT: 'Aggiornamento docenti e preparazione alle certificazioni fanno parte dell offerta.',
  },
  {
    icon: HeartHandshake,
    title: 'Solo or supported stay',
    titleIT: 'Soggiorno individuale o con supporto',
    focus: 'Welcoming planning',
    focusIT: 'Pianificazione accogliente',
    need: 'Traveling alone, joining as an LGBTQ+ learner, or bringing accessibility needs that should be discussed before arrival.',
    needIT: 'Viaggiare da soli, partecipare come studente LGBTQ+ o avere esigenze di accessibilita da discutere prima dell arrivo.',
    fit: 'Contact the school in advance to discuss accommodation, arrival details, and practical arrangements.',
    fitIT: 'Contatta la scuola in anticipo per parlare di alloggio, arrivo e aspetti pratici.',
  },
];

export default function StudentStories() {
  const { language, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="student-stories" className="py-24 md:py-32 bg-travertine-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-[340px] sm:max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              {t('stories.section_tag')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 leading-tight">
              {t('stories.section_title_part1')}{' '}
              <span className="italic text-olive-800">{t('stories.section_title_italic')}</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="border border-charcoal-950/20 hover:border-charcoal-950 p-3 text-charcoal-800 hover:text-charcoal-950 transition-colors bg-travertine-50 rounded-none cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="border border-charcoal-950/20 hover:border-charcoal-950 p-3 text-charcoal-800 hover:text-charcoal-950 transition-colors bg-travertine-50 rounded-none cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pathways.map((story) => {
            const Icon = story.icon;
            const title = language === 'IT' ? story.titleIT : story.title;
            const focus = language === 'IT' ? story.focusIT : story.focus;
            const need = language === 'IT' ? story.needIT : story.need;
            const fit = language === 'IT' ? story.fitIT : story.fit;
            return (
              <div
                key={story.title}
                className="w-[300px] sm:w-[480px] lg:w-[560px] shrink-0 snap-start bg-travertine-50 border border-travertine-300 p-6 md:p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 bg-olive-50 border border-olive-200 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-olive-800 stroke-[1.5]" />
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-olive-800 bg-olive-50 px-2 py-0.5 border border-olive-200 uppercase font-semibold max-w-[220px] text-right leading-relaxed">
                    {focus}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-charcoal-950 font-light">{title}</h3>
                  <p className="text-sm text-charcoal-900 leading-relaxed font-light">{need}</p>
                </div>

                <div className="bg-travertine-100 p-4 border-l-2 border-olive-700/60">
                  <span className="text-[10px] font-mono font-bold text-terracotta-600 uppercase block mb-1">
                    {language === 'IT' ? 'Scelta adatta' : 'Best fit'}
                  </span>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed">{fit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
