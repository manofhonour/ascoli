import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, Wine, Laptop, ArrowRight } from 'lucide-react';
import { Program } from '../types';

interface ProgramsProps {
  onInquireClick: () => void;
}

export default function Programs({ onInquireClick }: ProgramsProps) {
  const [selectedWeeks, setSelectedWeeks] = useState<number>(2); // Default to 2 weeks

  const programs: Program[] = [
    {
      id: 'humanist',
      name: 'The Humanist',
      italianName: 'L’Umanista',
      tagline: 'Literature, Architecture & Renaissance Heritage',
      description: 'Designed for deep thinkers, writers, and history lovers. Study Italian through classic cinema, regional poetry, and the stunning architecture of Marche.',
      details: [
        '15 Hours/week of dedicated 1:1 classical tutoring',
        'Private guided architectural walks through medieval Ascoli',
        'Weekly curated Italian vintage film screenings & debates',
        'All course materials and customized vintage notebooks',
        'Private library & study salon access inside the Palazzo',
      ],
      durationOptions: [
        { weeks: 1, price: 1250 },
        { weeks: 2, price: 2300 },
        { weeks: 4, price: 4200 },
      ],
      idealFor: 'Historians, writers, and cultural purists.',
    },
    {
      id: 'convivio',
      name: 'The Banquet',
      italianName: 'Il Convivio',
      tagline: 'Gastronomy, Wine Craft & Olio d’Oliva',
      description: 'For culinary enthusiasts and wine connoisseurs. Connect language learning with local slow-food practices, organic vineyards, and age-old culinary secrets.',
      details: [
        '12 Hours/week of conversational food-centric tutoring',
        '3 Private culinary masterclasses with regional chefs',
        'Sommelier-led tasting of Passerina and Pecorino wines',
        'Olive groves tour with extra virgin olive oil tasting session',
        'Access to our secret culinary guide and osteria discounts',
      ],
      durationOptions: [
        { weeks: 1, price: 1450 },
        { weeks: 2, price: 2700 },
        { weeks: 4, price: 4900 },
      ],
      idealFor: 'Slow food advocates, culinary minds, and couples.',
    },
    {
      id: 'artisan',
      name: 'The Artisan',
      italianName: 'L’Artigiano',
      tagline: 'Flexible Remote-Work & Conversational Fluency',
      description: 'Crafted for modern professionals and digital creatives. Balance fluent linguistic training with your remote working schedule using our premium workspaces.',
      details: [
        '10 Hours/week of highly flexible conversational sessions',
        'Dedicated ergonomic workspace in our historic 16th-century salon',
        'High-speed fiber connectivity & quiet video call pods',
        'Weekly networking aperitivo with local entrepreneurs',
        'Conscious digital detox guide and slow living checklist',
      ],
      durationOptions: [
        { weeks: 1, price: 1150 },
        { weeks: 2, price: 2100 },
        { weeks: 4, price: 3800 },
      ],
      idealFor: 'Professionals, remote executives, and solo travellers.',
    },
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase">
            Bespoke Curations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 leading-tight max-w-2xl">
            Choose your linguistic path.
          </h2>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-md leading-relaxed">
            No generalized lectures. Select an immersive direction that reflects your interests and professional lifestyle.
          </p>

          {/* Dynamic Week Toggle Control */}
          <div className="inline-flex items-center gap-1.5 bg-travertine-100 p-1.5 border border-travertine-300 mt-8">
            {[1, 2, 4].map((wk) => (
              <button
                key={wk}
                onClick={() => setSelectedWeeks(wk)}
                className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none ${
                  selectedWeeks === wk
                    ? 'bg-charcoal-950 text-travertine-50 shadow-sm'
                    : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-travertine-200/50'
                }`}
              >
                {wk} {wk === 1 ? 'Week' : 'Weeks'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Price Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {programs.map((prog, idx) => {
            const currentOption = prog.durationOptions.find((o) => o.weeks === selectedWeeks) || prog.durationOptions[0];
            
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                className="flex flex-col justify-between bg-travertine-50 border border-travertine-300/80 p-8 md:p-10 hover:shadow-2xl transition-all duration-500 relative group overflow-hidden"
              >
                {/* Visual badge top right */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-travertine-100 rounded-bl-[100%] flex items-start justify-end p-4 transition-colors group-hover:bg-olive-100/50">
                  {prog.id === 'humanist' && <Calendar className="w-5 h-5 text-olive-800/80" />}
                  {prog.id === 'convivio' && <Wine className="w-5 h-5 text-terracotta-600/80" />}
                  {prog.id === 'artisan' && <Laptop className="w-5 h-5 text-charcoal-800/70" />}
                </div>

                {/* Card Title Header */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-serif italic text-xs text-terracotta-600">
                      {prog.italianName}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal-950 font-normal group-hover:text-olive-800 transition-colors">
                      {prog.name}
                    </h3>
                    <p className="text-[11px] font-mono tracking-wider text-olive-700 uppercase font-bold">
                      {prog.tagline}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed pt-2 border-t border-travertine-200/50">
                    {prog.description}
                  </p>
                </div>

                {/* Core checklist items */}
                <div className="my-8 space-y-3.5">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-charcoal-950 block mb-2 opacity-60">
                    What is included:
                  </span>
                  {prog.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3 text-xs text-charcoal-800">
                      <Check className="w-3.5 h-3.5 text-olive-800 mt-0.5 shrink-0 stroke-[2.5]" />
                      <span className="font-light">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Dynamic Price & Button Bottom */}
                <div className="pt-6 border-t border-travertine-200/80 mt-auto space-y-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="block text-[9px] tracking-wider uppercase text-charcoal-800 font-bold opacity-60">
                        Tuition Cost ({selectedWeeks} {selectedWeeks === 1 ? 'Week' : 'Weeks'})
                      </span>
                      <span className="font-serif text-3xl text-charcoal-950 font-light mt-1 block">
                        €{currentOption.price}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-olive-800 font-semibold italic bg-olive-50 px-2 py-1 border border-olive-200/50">
                      {prog.idealFor}
                    </span>
                  </div>

                  <button
                    onClick={onInquireClick}
                    className="w-full bg-travertine-100 hover:bg-charcoal-950 hover:text-travertine-50 border border-charcoal-950 text-charcoal-950 py-3.5 text-xs tracking-[0.18em] font-bold uppercase transition-all duration-500 flex items-center justify-center gap-2 rounded-none"
                  >
                    Select & Inquire
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Private Custom Consulting Callout */}
        <div className="mt-16 bg-olive-900 text-travertine-100 p-8 md:p-12 border border-olive-800 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="absolute inset-0 bg-[radial-gradient(#FAF2F0_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
          <div className="space-y-3 relative z-10 max-w-xl">
            <span className="text-[10px] tracking-widest uppercase font-bold text-terracotta-100 bg-terracotta-700/60 px-2.5 py-1 inline-block">
              Tailored Curations
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light leading-snug">
              Seeking a custom length or corporate team retreat?
            </h3>
            <p className="text-xs md:text-sm text-olive-100 font-light leading-relaxed">
              Our linguistic concierge can tailor customized calendars, combine programs, or design dedicated team experiences with private chefs and custom travel itineraries.
            </p>
          </div>

          <button
            onClick={onInquireClick}
            className="bg-travertine-100 hover:bg-terracotta-500 text-charcoal-950 hover:text-travertine-50 px-8 py-4 text-xs tracking-[0.18em] font-bold uppercase transition-all duration-500 shrink-0 self-start md:self-center relative z-10 rounded-none shadow-md"
          >
            Design Custom Calendar
          </button>
        </div>

      </div>
    </section>
  );
}
