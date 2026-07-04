import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Briefcase, GraduationCap, Globe2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pathways = [
  {
    icon: BookOpen,
    title: 'First-time Italian learner',
    focus: 'Standard or individual lessons',
    need: 'Build a foundation in pronunciation, basic grammar, listening, and everyday conversation.',
    fit: 'Placement and small-group learning help beginners start without pressure.',
  },
  {
    icon: Globe2,
    title: 'Culture-focused traveller',
    focus: 'Standard course plus add-ons',
    need: 'Connect Italian study with Ascoli, food, wine, art, history, literature, and the Marche region.',
    fit: 'Culture options can be added according to dates and availability.',
  },
  {
    icon: Briefcase,
    title: 'Professional learner',
    focus: 'Individual or custom-made course',
    need: 'Work on business Italian, sector vocabulary, tourism, hotel management, or professional communication.',
    fit: 'A custom course can be prepared around goals, schedule, and level.',
  },
  {
    icon: GraduationCap,
    title: 'Teacher or exam candidate',
    focus: 'Refresher and exam preparation',
    need: 'Prepare for CILS, I.T., university entrance, or refresh Italian teaching practice.',
    fit: 'The school lists teacher-refresher courses and certification preparation among its services.',
  },
];

export default function StudentStories() {
  const { t } = useLanguage();
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
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
                    {story.focus}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-charcoal-950 font-light">{story.title}</h3>
                  <p className="text-sm text-charcoal-900 leading-relaxed font-light">{story.need}</p>
                </div>

                <div className="bg-travertine-100 p-4 border-l-2 border-olive-700/60">
                  <span className="text-[10px] font-mono font-bold text-terracotta-600 uppercase block mb-1">
                    Best fit
                  </span>
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed">{story.fit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
