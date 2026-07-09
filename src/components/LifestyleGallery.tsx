import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { images } from '../data/officialContent';

interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  captionIT: string;
  span: string;
  position: string;
}

export default function LifestyleGallery() {
  const { language, t } = useLanguage();

  const items: GalleryItem[] = [
    {
      id: 1,
      url: images.foodCulture,
      caption: 'Food, conversation, and small rituals make the language easier to remember.',
      captionIT: 'Cibo, conversazione e piccoli rituali rendono la lingua piu facile da ricordare.',
      span: 'md:col-span-7',
      position: '50% 50%',
    },
    {
      id: 2,
      url: images.cookingWorkshop,
      caption: 'Cooking and regional food vocabulary make language practice more physical and memorable.',
      captionIT: 'Cucina e lessico gastronomico rendono la pratica piu concreta e memorabile.',
      span: 'md:col-span-5 md:mt-16',
      position: '50% 50%',
    },
    {
      id: 3,
      url: images.studentGroup,
      caption: 'International learners bring different stories into the same small classroom.',
      captionIT: 'Studenti internazionali portano storie diverse nella stessa piccola aula.',
      span: 'md:col-span-5',
      position: '52% 48%',
    },
    {
      id: 4,
      url: images.ascoliStreet,
      caption: 'Historic rooms, quiet streets, and local rituals give the language a setting.',
      captionIT: 'Sale storiche, strade tranquille e rituali locali danno un contesto alla lingua.',
      span: 'md:col-span-7 md:mt-[-40px]',
      position: '50% 50%',
    },
  ];

  return (
    <section id="gallery" className="overflow-hidden bg-travertine-100 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-16 max-w-3xl space-y-5">
          <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-terracotta-600">
            {t('gallery.section_tag')}
          </span>
          <h2 className="font-serif text-4xl font-normal leading-tight text-charcoal-950 md:text-5xl lg:text-6xl">
            {t('gallery.section_title_part1')}{' '}
            <span className="inline-block pb-1 italic leading-[1.12] text-olive-800">
              {t('gallery.section_title_italic')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          {items.map((item) => (
            <figure key={item.id} className={`${item.span} space-y-4`}>
              <div className="aspect-[4/3] overflow-hidden border border-travertine-300 bg-travertine-200 shadow-[0_18px_46px_rgba(43,41,38,0.10)]">
                <img
                  src={item.url}
                  alt={language === 'IT' ? item.captionIT : item.caption}
                  className="h-full w-full object-cover grayscale-[8%] transition duration-700 hover:grayscale-0"
                  style={{ objectPosition: item.position }}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <figcaption className="max-w-md text-sm font-light leading-relaxed text-charcoal-800">
                {language === 'IT' ? item.captionIT : item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
