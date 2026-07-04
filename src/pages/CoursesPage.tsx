import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, Wine, Compass, Award, Star } from 'lucide-react';

export default function CoursesPage() {
  const [activeCourse, setActiveCourse] = useState<'humanist' | 'banquet' | 'artisan'>('humanist');

  const syllabus = {
    humanist: [
      { day: 'Monday', topic: 'The Syntax of Architecture: Reading Travertine doorframes', activity: 'Walk to Piazza del Popolo with Dr. Moretti' },
      { day: 'Tuesday', topic: 'Cinema & Light: Deciphering Fellini’s early metaphors', activity: 'Vintage screening at the palazzo cinema room' },
      { day: 'Wednesday', topic: 'The Musical Verse: Petrarca and the Marche poets', activity: 'Acoustic reading inside Romanesque chapel' },
      { day: 'Thursday', topic: 'Non-verbal elegance: The choreography of Italian hands', activity: 'Guided dialogue workshop with local craftspeople' },
      { day: 'Friday', topic: 'The Modern Dialogue: Modern Italian editorial style', activity: 'Writing essays in custom linen notebooks' },
    ],
    banquet: [
      { day: 'Monday', topic: 'Linguistic Roots of Taste: Regional olive vocabularies', activity: 'Market walk to select local spices and herbs' },
      { day: 'Tuesday', topic: 'The Sommelier’s Syntax: Passerina & Pecorino adjectives', activity: 'Sommelier-led organic tasting at Villa Sgariglia' },
      { day: 'Wednesday', topic: 'The Slow Kitchen: Cooking with verbal commands', activity: 'Private masterclass: Stuffed Olives all’Ascolana' },
      { day: 'Thursday', topic: 'Farming Vernacular: Organic harvest histories', activity: 'Visit to local bio groves and cold-press mill' },
      { day: 'Friday', topic: 'The Convivial Debate: Food as a socio-literary anchor', activity: 'Golden-hour dinner under secret stone arches' },
    ],
    artisan: [
      { day: 'Monday', topic: 'Flow & Focus: Minimalist Italian for professional contexts', activity: 'Morning coffee followed by quiet workspace hours' },
      { day: 'Tuesday', topic: 'The Art of Negotiation: Elegant business structures', activity: '1:1 syntax review tailored to your enterprise' },
      { day: 'Wednesday', topic: 'Marche’s Global Footprint: local artisans going worldwide', activity: 'Evening aperitivo with local footwear designers' },
      { day: 'Thursday', topic: 'The Modern Narrative: Creative writing for digital nomads', activity: 'Substack writing hour on your sunny balcony' },
      { day: 'Friday', topic: 'Digital Detox & Connection: Face-to-face linguistic mastery', activity: 'Scenic twilight walk to the castle viewpoints' },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      {/* Editorial Hero Header */}
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Bespoke Curations
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Curated linguistic curricula <br />
            <span className="italic text-olive-800">tailored to your mind.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Forget generic textbooks and language apps. Our boutique courses blend classical linguistic pedagogy with regional architecture, wine masterclasses, and slow travel.
          </p>
        </div>
      </section>

      {/* Interactive Selector Tabs Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCourse('humanist')}
            className={`w-full sm:w-auto px-6 sm:px-8 py-4 text-xs tracking-[0.16em] sm:tracking-[0.18em] font-semibold uppercase transition-all duration-300 border rounded-none ${
              activeCourse === 'humanist'
                ? 'bg-charcoal-950 text-travertine-50 border-charcoal-950 shadow-md'
                : 'bg-travertine-100 text-charcoal-800 border-travertine-300 hover:text-charcoal-950 hover:bg-travertine-200/50'
            }`}
          >
            L’Umanista (The Humanist)
          </button>
          <button
            onClick={() => setActiveCourse('banquet')}
            className={`w-full sm:w-auto px-6 sm:px-8 py-4 text-xs tracking-[0.16em] sm:tracking-[0.18em] font-semibold uppercase transition-all duration-300 border rounded-none ${
              activeCourse === 'banquet'
                ? 'bg-charcoal-950 text-travertine-50 border-charcoal-950 shadow-md'
                : 'bg-travertine-100 text-charcoal-800 border-travertine-300 hover:text-charcoal-950 hover:bg-travertine-200/50'
            }`}
          >
            Il Convivio (The Banquet)
          </button>
          <button
            onClick={() => setActiveCourse('artisan')}
            className={`w-full sm:w-auto px-6 sm:px-8 py-4 text-xs tracking-[0.16em] sm:tracking-[0.18em] font-semibold uppercase transition-all duration-300 border rounded-none ${
              activeCourse === 'artisan'
                ? 'bg-charcoal-950 text-travertine-50 border-charcoal-950 shadow-md'
                : 'bg-travertine-100 text-charcoal-800 border-travertine-300 hover:text-charcoal-950 hover:bg-travertine-200/50'
            }`}
          >
            L’Artigiano (The Artisan)
          </button>
        </div>

        {/* Selected Course Presentation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block (6 columns): Big Title, Visuals & Perks */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-serif italic text-base text-terracotta-600">
                {activeCourse === 'humanist' && 'Sintassi dell’Arte'}
                {activeCourse === 'banquet' && 'La Tavola Educata'}
                {activeCourse === 'artisan' && 'Lavoro e Silenzio'}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950">
                {activeCourse === 'humanist' && 'The Humanist Experience'}
                {activeCourse === 'banquet' && 'The Convivial Banquet'}
                {activeCourse === 'artisan' && 'The Artisan Remote Retreat'}
              </h2>
              <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                {activeCourse === 'humanist' && 'A comprehensive, deeply intellectual study of the language. Designed for writers, historians, poets, and creatives who want to express complex philosophical and artistic ideas in standard Italian.'}
                {activeCourse === 'banquet' && 'A sensory language study that merges linguistics with authentic Slow Food culture. Cook under centuries-old vaults, explore biodynamic Marche vineyards, and debate culinary literature in candlelit gardens.'}
                {activeCourse === 'artisan' && 'A perfect harmony for modern digital nomads, remote executives, and professionals. Balance structured, highly interactive conversational coaching with deep-focus remote hours inside our historic salon.'}
              </p>
            </div>

            {/* Icons row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-travertine-200">
              <div className="space-y-2">
                <Calendar className="w-5 h-5 text-olive-800" />
                <h4 className="font-serif text-sm text-charcoal-950">Flexible Stays</h4>
                <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">Choose from 1, 2, or 4 week customized residencies.</p>
              </div>
              <div className="space-y-2">
                <Compass className="w-5 h-5 text-olive-800" />
                <h4 className="font-serif text-sm text-charcoal-950">Curated Outings</h4>
                <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">Daily cultural excursions integrated into your program.</p>
              </div>
              <div className="space-y-2">
                <Award className="w-5 h-5 text-olive-800" />
                <h4 className="font-serif text-sm text-charcoal-950">Certificate</h4>
                <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">A clear certificate documenting your completed level and study focus.</p>
              </div>
            </div>

            {/* Absolute gorgeous image of coursework */}
            <div className="aspect-[16/10] bg-travertine-200 overflow-hidden shadow-lg relative">
              <img
                src={
                  activeCourse === 'humanist'
                    ? 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80'
                    : activeCourse === 'banquet'
                    ? 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80'
                    : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                }
                alt="Coursework environment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Block (6 columns): The Weekly Syllabus Timeline */}
          <div className="lg:col-span-6 bg-travertine-100 border border-travertine-200 p-8 md:p-10 shadow-xl space-y-6">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-terracotta-600 fill-terracotta-600" />
              <span className="text-[10px] tracking-widest uppercase font-bold text-charcoal-950">
                A Sample Week at the Palazzo
              </span>
            </div>
            
            <h3 className="font-serif text-xl md:text-2xl text-charcoal-950 font-normal border-b border-travertine-300 pb-4">
              Your Daily Conversational Calendar
            </h3>

            <div className="space-y-6 pt-2">
              {syllabus[activeCourse].map((dayPlan) => (
                <div key={dayPlan.day} className="flex gap-4 items-start border-b border-travertine-200/50 pb-4 last:border-0 last:pb-0">
                  <span className="font-mono text-xs tracking-wider font-semibold text-terracotta-600 w-24 shrink-0">
                    {dayPlan.day}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm text-charcoal-950 font-semibold">
                      {dayPlan.topic}
                    </h4>
                    <p className="text-xs text-charcoal-800 font-light italic flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-olive-700 rounded-full" />
                      {dayPlan.activity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote on customized adjustments */}
            <div className="bg-olive-50 p-4 border border-olive-200 mt-6 text-center">
              <p className="text-[11px] text-olive-900 font-light leading-relaxed">
                *Every syllabus is adjusted during your welcome evaluation to perfectly match your private interests, pace, and current language level.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing and Levels */}
      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              Flexible Placement
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-charcoal-950">
              Catering to all CEFR Levels (A1 - C2)
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              Whether you are completely new to the melodic vowels of Italian (A1) or a seasoned reader of Calvino looking to master subjunctive style (C2), our bespoke model matches you with an educator perfectly suited to your requirements.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Absolute Novice', 'Intermediate', 'Advanced Conversational', 'Professional', 'Creative Writing', 'Specialized Syntax'].map((lvl) => (
                <span key={lvl} className="bg-travertine-200 text-charcoal-950 text-[10px] tracking-wider uppercase font-semibold px-3.5 py-1.5 border border-travertine-300">
                  {lvl}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-travertine-50 border border-travertine-300 p-8 md:p-10 space-y-6 relative">
            <div className="absolute top-4 right-4 text-[9px] font-mono font-bold tracking-widest text-olive-800 uppercase bg-olive-100 px-2 py-1">
              Private Concierge Care
            </div>
            <h3 className="font-serif text-lg md:text-xl text-charcoal-950">
              The Admissions Blueprint
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start text-xs text-charcoal-800">
                <span className="w-5 h-5 bg-charcoal-950 text-travertine-50 flex items-center justify-center text-[10px] font-bold rounded-full shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-charcoal-950">Sojourn Consultation Call</h4>
                  <p className="font-light mt-0.5">We review your lifestyle interests, preferred timeline, and ideal accommodation layouts over a video conversation.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start text-xs text-charcoal-800">
                <span className="w-5 h-5 bg-charcoal-950 text-travertine-50 flex items-center justify-center text-[10px] font-bold rounded-full shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-charcoal-950">Bespoke Syllabus Generation</h4>
                  <p className="font-light mt-0.5">We assign your direct personal instructor, curate private regional activities, and finalize your local lodging options.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start text-xs text-charcoal-800">
                <span className="w-5 h-5 bg-charcoal-950 text-travertine-50 flex items-center justify-center text-[10px] font-bold rounded-full shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-charcoal-950">Immersion Arrival</h4>
                  <p className="font-light mt-0.5">Arrive in Ascoli Piceno. Step into your high-ceilinged palazzo residence and begin living the language with complete serenity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
