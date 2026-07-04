import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Layers, Image as ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'architecture' | 'gastronomy' | 'daily'>('all');

  const photos = [
    {
      id: 'piazza',
      category: 'architecture',
      title: 'Piazza del Popolo at Golden Hour',
      location: 'Ascoli Piceno',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'espresso',
      category: 'gastronomy',
      title: 'Espresso & Anisetta Meletti',
      location: 'Caffè Meletti',
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'library',
      category: 'architecture',
      title: 'The Palazzo Sgariglia Reading Room',
      location: 'Accademia Library',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'vineyard',
      category: 'gastronomy',
      title: 'Pecorino Grape Harvest',
      location: 'Offida Vineyards',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'alleys',
      category: 'architecture',
      title: 'Quiet Medieval Rue',
      location: 'Ascoli Old Center',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'stroll',
      category: 'daily',
      title: 'The Grand evening Passeggiata',
      location: 'Piazza del Popolo',
      image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'olives',
      category: 'gastronomy',
      title: 'Handcrafted Olive all’Ascolana',
      location: 'Secret Courtyard',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'study',
      category: 'daily',
      title: 'Balcony Dialogue Hours',
      location: 'Palazzo Suite',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter((p) => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      {/* Editorial Header */}
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            The Travertine Archive
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Cinematic moments, <br />
            <span className="italic text-terracotta-600">frozen in light.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Take a silent, visual journey through the sun-bleached plazas, vintage coffee bars, quiet reading rooms, and vineyard hills of our boutique language sanctuary.
          </p>
        </div>
      </section>

      {/* Filter Tabs and Mosaic Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        {/* Category Controls */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 border-b border-travertine-200 pb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none ${
              filter === 'all'
                ? 'bg-charcoal-950 text-travertine-50 shadow-md'
                : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-travertine-100'
            }`}
          >
            All Archive
          </button>
          <button
            onClick={() => setFilter('architecture')}
            className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none ${
              filter === 'architecture'
                ? 'bg-charcoal-950 text-travertine-50 shadow-md'
                : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-travertine-100'
            }`}
          >
            Architecture & Stone
          </button>
          <button
            onClick={() => setFilter('gastronomy')}
            className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none ${
              filter === 'gastronomy'
                ? 'bg-charcoal-950 text-travertine-50 shadow-md'
                : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-travertine-100'
            }`}
          >
            Gastronomy & Wine
          </button>
          <button
            onClick={() => setFilter('daily')}
            className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none ${
              filter === 'daily'
                ? 'bg-charcoal-950 text-travertine-50 shadow-md'
                : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-travertine-100'
            }`}
          >
            Daily Lifepractices
          </button>
        </div>

        {/* Mosaic Column layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
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
                  <h3 className="font-serif text-base text-charcoal-950 font-normal">
                    {photo.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>
    </motion.div>
  );
}
