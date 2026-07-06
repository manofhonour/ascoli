import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, MapPin, Sparkles } from 'lucide-react';
import { DailyActivity } from '../types';

export default function DailySimulator() {
  const activities: DailyActivity[] = [
    {
      id: 'colazione',
      time: '08:30',
      title: 'Espresso & Idioms',
      italianTitle: 'Prima Colazione',
      description: 'Begin your morning inside Caffè Meletti on Piazza del Popolo. Sit on heritage green velvet seats, watch the town wake up, and go over conversational idioms with your instructor over freshly brewed caffe macchiato.',
      location: 'Caffè Meletti, Piazza del Popolo',
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
      highlight: 'Try an espresso with a drop of local Anisetta Meletti liqueur, a 150-year-old recipe.',
    },
    {
      id: 'vicoli',
      time: '10:30',
      title: 'The Wandering Classroom',
      italianTitle: 'Dialogo tra i Vicoli',
      description: 'Step outside into the medieval limestone labyrinth. Your lesson becomes a stroll. Stop to read Renaissance inscriptions carved into travertine doorframes, interview local shoemakers, and discuss history in real time.',
      location: 'Vicoli Storici (Medieval Alleys)',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      highlight: 'Understand the Marche dialect by talking with Maria, our favorite local cheese vendor.',
    },
    {
      id: 'pranzo',
      time: '13:00',
      title: 'The Convivial Banquet',
      italianTitle: 'Pranzo in Giardino',
      description: 'Gather in a private, sun-dappled courtyard. Dine on famous handmade "Olive all\'Ascolana" (crispy golden olives stuffed with seasoned roasted meats) paired with a crispy, cold glass of local Passerina wine.',
      location: 'Secret Courtyard, Palazzo Sgariglia',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
      highlight: 'Hosted by local chefs and guest authors speaking slow, musical Italian.',
    },
    {
      id: 'studio',
      time: '15:30',
      title: 'Private Study & Quietude',
      italianTitle: 'Studio e Riposo',
      description: 'Retire to our library or your high-ceilinged apartment balcony. Dedicate this quiet hour to personal writing, reviewing syntax, or simply dreaming under the soft Italian sky.',
      location: 'The School Library / Your Balcony',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
      highlight: 'Access our private library of Italian vintage cinema scripts and classic literature.',
    },
    {
      id: 'passeggiata',
      time: '18:00',
      title: 'The Evening Stroll',
      italianTitle: 'La Passeggiata',
      description: 'Join the grand, wordless choreography of the Italian evening. Locals walk arm-in-arm across the travertine marble floor of the main piazza. Greet residents, practice your accents, and feel the heartbeat of the community.',
      location: 'Piazza del Popolo',
      image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80',
      highlight: 'Observe the subtle rules of Italian body language and elegant, slow conversational transitions.',
    },
    {
      id: 'cena',
      time: '20:30',
      title: 'Cinema & Candlelight',
      italianTitle: 'Cena e Ritrovo',
      description: 'Conclude your day with an al fresco dinner at a hidden osteria, followed by outdoor retro cinema under the stars or a private violin recital inside a nearby Romanesque church.',
      location: 'Osteria dell’Arco / Piazza Ventidio Basso',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      highlight: 'Engage in an inclusive, lively debate about Fellini’s masterpieces with your peers.',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('colazione');
  const activeActivity = activities.find((a) => a.id === activeTab) || activities[0];

  return (
    <section id="ascoli" className="py-24 md:py-32 bg-travertine-100 border-y border-travertine-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Il Ritmo Giornaliero
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 leading-tight">
            A day in Ascoli Piceno.
          </h2>
          <p className="text-sm md:text-base text-charcoal-800 font-light leading-relaxed">
            Experience how we seamlessly integrate classical linguistic coaching with the refined, historic habits of Marche’s high society.
          </p>
        </div>

        {/* Interactive Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Timeline Selector (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-3 border-l-2 border-travertine-200/80 pl-4 md:pl-6">
            {activities.map((act) => {
              const isActive = act.id === activeTab;
              return (
                <button
                  key={act.id}
                  onClick={() => setActiveTab(act.id)}
                  className={`group relative text-left py-4 px-4 transition-all duration-300 flex items-center justify-between rounded-none border-b border-travertine-200/40 last:border-0 ${
                    isActive 
                      ? 'bg-travertine-200 text-charcoal-950 font-medium border-l-4 border-l-terracotta-500 pl-6' 
                      : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-travertine-100/65 pl-4'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs tracking-wider ${isActive ? 'text-terracotta-600 font-bold' : 'text-olive-700'}`}>
                        {act.time}
                      </span>
                      <span className="font-serif text-xs italic text-charcoal-800 opacity-85">
                        {act.italianTitle}
                      </span>
                    </div>
                    <span className="block font-serif text-base md:text-lg tracking-wide">
                      {act.title}
                    </span>
                  </div>
                  
                  <Clock className={`w-4 h-4 stroke-[1.25] transition-all ${isActive ? 'text-terracotta-500 rotate-12 scale-110' : 'text-charcoal-800/30 group-hover:text-charcoal-800'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Immersive Content Card (7 Columns) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeActivity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-travertine-50 border border-travertine-300 p-6 md:p-10 shadow-xl space-y-8 flex flex-col md:flex-row gap-8 items-start md:items-center relative"
              >
                {/* Visual Half */}
                <div className="w-full md:w-2/5 aspect-[4/5] bg-travertine-200 overflow-hidden shadow-md relative">
                  <img
                    src={activeActivity.image}
                    alt={activeActivity.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold font-mono text-travertine-100 tracking-widest uppercase">
                    {activeActivity.time}
                  </div>
                </div>

                {/* Narrative Half */}
                <div className="w-full md:w-3/5 space-y-6">
                  <div className="space-y-2">
                    <span className="font-serif italic text-sm text-terracotta-600">
                      {activeActivity.italianTitle}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal-950 font-light leading-snug">
                      {activeActivity.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-olive-800 font-medium">
                      <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
                      <span>{activeActivity.location}</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                    {activeActivity.description}
                  </p>

                  {/* Curated Highlight Tip Box */}
                  <div className="bg-olive-50 border border-olive-200 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-olive-800">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-[10px] tracking-wider uppercase font-bold">Local Experience</span>
                    </div>
                    <p className="text-[11px] text-olive-900 leading-relaxed font-sans font-light">
                      {activeActivity.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
