import React from 'react';
import { Camera, Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { images } from '../data/officialContent';

interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  span: string;
}

export default function LifestyleGallery() {
  const { t } = useLanguage();

  const items: GalleryItem[] = [
    {
      id: 1,
      url: images.ascoli,
      caption: 'Piazza del Popolo and the travertine centre of Ascoli Piceno.',
      span: 'md:col-span-4 h-[280px]',
    },
    {
      id: 2,
      url: images.cooking,
      caption: 'Italian cooking and regional food vocabulary as part of cultural learning.',
      span: 'md:col-span-4 h-[380px] md:mt-[-40px]',
    },
    {
      id: 3,
      url: images.wine,
      caption: 'Wine tasting can connect language practice with local gastronomy.',
      span: 'md:col-span-4 h-[280px]',
    },
    {
      id: 4,
      url: images.study,
      caption: 'Quiet study time supports grammar, reading, and personal writing.',
      span: 'md:col-span-3 h-[320px]',
    },
    {
      id: 5,
      url: images.piazza,
      caption: 'Conversation grows naturally in cafes, streets, and cultural visits.',
      span: 'md:col-span-5 h-[320px]',
    },
    {
      id: 6,
      url: images.classroom,
      caption: 'Small-group and individual lessons keep the pace personal.',
      span: 'md:col-span-4 h-[320px]',
    },
  ];

  return (
    <section id="gallery" className="py-32 md:py-44 bg-travertine-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase block">
              {t('gallery.section_tag')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal-950 leading-tight">
              {t('gallery.section_title_part1')}{' '}
              <span className="italic text-olive-800">{t('gallery.section_title_italic')}</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-charcoal-950 py-2 border-b border-charcoal-950/20">
            <Camera className="w-4 h-4 stroke-[1.25]" />
            <span>Accademia Visual Notes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {items.map((item) => (
            <div key={item.id} className={`relative overflow-hidden group border border-travertine-300 shadow-md ${item.span}`}>
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-charcoal-950/75 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between text-travertine-100 text-[10px] tracking-wider font-mono uppercase">
                  <span>Study in Ascoli</span>
                  <Camera className="w-3.5 h-3.5" />
                </div>

                <p className="font-serif italic text-sm text-travertine-50 leading-relaxed">"{item.caption}"</p>

                <div className="flex items-center gap-4 text-travertine-200 text-xs">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Culture</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Italian</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
