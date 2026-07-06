import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  span: string; // Tailwind grid span
}

export default function LifestyleGallery() {
  const { language, t } = useLanguage();

  const itemsEN: GalleryItem[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80",
      caption: "Quiet stone alleys of Ascoli whispering legends of medieval painters.",
      span: "md:col-span-4 h-[280px]"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80",
      caption: "Sourcing morning figs and bitter orange leaves from the market.",
      span: "md:col-span-4 h-[380px] md:mt-[-40px]"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1444858291040-58fe7cbac97d?auto=format&fit=crop&w=600&q=80",
      caption: "Our favorite elder, Sergio, walking his daily travertine promenade.",
      span: "md:col-span-4 h-[280px]"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
      caption: "Ink and heavy paper. We love writing letters by hand here.",
      span: "md:col-span-3 h-[320px]"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
      caption: "Afternoon olive oil tasting session at a 400-year-old press.",
      span: "md:col-span-5 h-[320px]"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
      caption: "Rolling out pasta. Soft yellow flour and quiet kitchen gossip.",
      span: "md:col-span-4 h-[320px]"
    }
  ];

  const itemsIT: GalleryItem[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80",
      caption: "I vicoli di pietra silenti di Ascoli che sussurrano leggende di pittori medievali.",
      span: "md:col-span-4 h-[280px]"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80",
      caption: "Acquistare fichi freschi e foglie d'arancio amaro al mercato mattutino.",
      span: "md:col-span-4 h-[380px] md:mt-[-40px]"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1444858291040-58fe7cbac97d?auto=format&fit=crop&w=600&q=80",
      caption: "Il nostro anziano preferito, Sergio, che fa la sua passeggiata quotidiana nel travertino.",
      span: "md:col-span-4 h-[280px]"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
      caption: "Inchiostro e carta pesante. Qui amiamo scrivere lettere a mano.",
      span: "md:col-span-3 h-[320px]"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
      caption: "Pomeriggio di degustazione di olio d'oliva in un frantoio di 400 anni.",
      span: "md:col-span-5 h-[320px]"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
      caption: "Stendere la pasta. Farina gialla soffice e chiacchiere silenziose in cucina.",
      span: "md:col-span-4 h-[320px]"
    }
  ];

  const items = language === 'IT' ? itemsIT : itemsEN;

  return (
    <section id="gallery" className="py-32 md:py-44 bg-travertine-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase block">
              {t('gallery.section_tag')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal-950 leading-tight">
              {t('gallery.section_title_part1')} <span className="italic text-olive-800">{t('gallery.section_title_italic')}</span>
            </h2>
          </div>
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-charcoal-950 hover:text-terracotta-600 transition-colors py-2 border-b border-charcoal-950/20 hover:border-terracotta-500"
          >
            <Instagram className="w-4 h-4 stroke-[1.25]" />
            <span>@AccademiaAscoli</span>
          </a>
        </div>

        {/* Masonry Styled Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden group border border-travertine-300 shadow-md ${item.span}`}
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-charcoal-950/75 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between text-travertine-100 text-[10px] tracking-wider font-mono uppercase">
                  <span>Instagram Journal</span>
                  <Instagram className="w-3.5 h-3.5" />
                </div>

                <p className="font-serif italic text-sm text-travertine-50 leading-relaxed">
                  "{item.caption}"
                </p>

                <div className="flex items-center gap-4 text-travertine-200 text-xs">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" />
                    <span>142</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>8</span>
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
