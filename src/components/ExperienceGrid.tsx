import React from 'react';
import { motion } from 'motion/react';

interface ExperienceItem {
  tag: string;
  title: string;
  italianTitle: string;
  description: string;
  image: string;
  spanClass: string;
}

export default function ExperienceGrid() {
  const experiences: ExperienceItem[] = [
    {
      tag: '01 / RITO QUOTIDIANO',
      title: 'Coffee & Words',
      italianTitle: 'Caffè e Parole',
      description: 'Your morning starts at historic Caffè Meletti. Over an espresso or macchiato, your private tutor guides you through the organic syntax of conversation, turning Italian into a native reflex.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      spanClass: 'md:col-span-7',
    },
    {
      tag: '02 / PATRIMONIO',
      title: 'Stone of Time',
      italianTitle: 'I Sassi del Tempo',
      description: 'Our sanctuary is housed inside a carefully restored 16th-century palazzo. Study grammar under vaulted ceilings covered with subtle frescoes, surrounded by walls carved of travertine stone.',
      image: 'https://images.unsplash.com/photo-1543051975-d15f3f219156?auto=format&fit=crop&w=800&q=80',
      spanClass: 'md:col-span-5',
    },
    {
      tag: '03 / IL CONVIVIO',
      title: 'Vineyards & Hills',
      italianTitle: 'Vigneti e Colli',
      description: 'Ascoli Piceno produces legendary wines. Spend your golden afternoons walking through family-owned organic vineyards, tasting crispy Passerina and Pecorino while debating poetry with the winemakers.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      spanClass: 'md:col-span-5',
    },
    {
      tag: '04 / DIMORA',
      title: 'Historic Soggiorno',
      italianTitle: 'Dimore Storiche',
      description: 'Retire to elegant, minimalist apartments integrated directly into the old stone center. Wooden beams, linen sheets, and sun-flooded balconies make you a true resident of Ascoli Piceno.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      spanClass: 'md:col-span-7',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              La Dolce Vita, Educated
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 leading-tight">
              An immersive boutique canvas.
            </h2>
          </div>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-md leading-relaxed">
            Every day is a curated sequence of cultural highlights, combining linguistic rigor with luxurious, slow-paced Italian lifestyle practices.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
              className={`${exp.spanClass} group flex flex-col justify-between space-y-6 bg-travertine-100 p-6 md:p-8 border border-travertine-200/60 hover:border-travertine-300 transition-all duration-500`}
            >
              {/* Image Container with precise aspect ratios */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-travertine-200">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal-950/5 group-hover:bg-charcoal-950/0 transition-colors duration-500" />
              </div>

              {/* Text metadata */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-olive-700">
                    {exp.tag}
                  </span>
                  <span className="font-serif text-xs italic text-terracotta-600">
                    {exp.italianTitle}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal-950 font-normal transition-colors duration-300 group-hover:text-olive-800">
                    {exp.title}
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
