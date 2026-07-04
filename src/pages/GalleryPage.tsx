import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera } from 'lucide-react';
import { images } from '../data/officialContent';

type Filter = 'all' | 'architecture' | 'gastronomy' | 'study';

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>('all');

  const photos = [
    { id: 'piazza', category: 'architecture', title: 'Piazza del Popolo', location: 'Ascoli Piceno', image: images.ascoli },
    { id: 'streets', category: 'architecture', title: 'Historic Centre', location: 'Ascoli Piceno', image: images.piazza },
    { id: 'cooking', category: 'gastronomy', title: 'Italian Cooking', location: 'Culture add-on', image: images.cooking },
    { id: 'wine', category: 'gastronomy', title: 'Wine Tasting', location: 'Culture add-on', image: images.wine },
    { id: 'lesson', category: 'study', title: 'Small-Group Study', location: 'Italian course', image: images.classroom },
    { id: 'individual', category: 'study', title: 'Individual Lessons', location: 'Custom study', image: images.conversation },
    { id: 'reading', category: 'study', title: 'Reading and Writing', location: 'Italian practice', image: images.study },
    { id: 'accommodation', category: 'study', title: 'Stay in Ascoli', location: 'Accommodation support', image: images.accommodation },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter((p) => p.category === filter);

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'gastronomy', label: 'Gastronomy' },
    { id: 'study', label: 'Study' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Gallery
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Ascoli, culture, <br />
            <span className="italic text-terracotta-600">and Italian study.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            A visual overview of the site concept: Ascoli Piceno, cultural add-ons, small courses, and accommodation support.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 mb-16 border-b border-travertine-200 pb-8">
          {filters.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none ${
                filter === item.id
                  ? 'bg-charcoal-950 text-travertine-50 shadow-md'
                  : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-travertine-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-travertine-100 border border-travertine-200 p-4 hover:shadow-2xl transition-all duration-500 space-y-4 group"
              >
                <div className="aspect-[4/3] bg-travertine-200 overflow-hidden relative shadow-sm">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-sm px-3 py-1.5 text-[9px] tracking-widest font-mono font-bold text-travertine-100 uppercase">
                    {photo.category}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-olive-800 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 stroke-[1.5]" />
                    {photo.location}
                  </span>
                  <h3 className="font-serif text-base text-charcoal-950 font-normal">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </motion.div>
  );
}
