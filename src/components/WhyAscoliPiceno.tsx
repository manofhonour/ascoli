import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ascoliHighlights, contactInfo, images } from '../data/officialContent';

export default function WhyAscoliPiceno() {
  const { language, t } = useLanguage();

  const rhythms = language === 'IT'
    ? ['Lezione al mattino', 'Caffè in centro', 'Pranzo lento', 'Passeggiata nelle piazze']
    : ['Morning lesson', 'Coffee in the centre', 'A slow lunch', 'A walk through the piazzas'];

  return (
    <section id="why-ascoli" className="bg-travertine-100 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-16 max-w-3xl space-y-5">
          <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-terracotta-600">
            {t('ascoli.section_tag')}
          </span>
          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-charcoal-950 md:text-6xl">
            {t('ascoli.section_title_part1')}{' '}
            <span className="inline-block pb-1 italic leading-[1.12] text-olive-800">
              {t('ascoli.section_title_italic')}
            </span>{' '}
            {t('ascoli.section_title_part2')}
          </h2>
          <p className="max-w-2xl text-sm font-light leading-relaxed text-charcoal-800 md:text-base">
            {t('ascoli.section_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7"
          >
            <div className="aspect-[16/11] overflow-hidden border border-travertine-300 bg-travertine-200 shadow-[0_22px_60px_rgba(43,41,38,0.12)]">
              <img
                src={images.piazzaWide}
                alt="Piazza del Popolo in Ascoli Piceno"
                className="h-full w-full object-cover grayscale-[12%] transition duration-700 hover:grayscale-0"
                style={{ objectPosition: '50% 50%' }}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="mt-4 flex flex-col gap-2 text-xs font-light leading-relaxed text-charcoal-800 sm:flex-row sm:items-center sm:justify-between">
              <span>{t('ascoli.image_desc')}</span>
              <span className="inline-flex items-center gap-2 text-olive-800">
                <MapPin className="h-3.5 w-3.5 stroke-[1.5]" />
                {contactInfo.addressLine1}
              </span>
            </figcaption>
          </motion.figure>

          <div className="lg:col-span-5">
            <div className="border border-travertine-300 bg-travertine-50 p-6 md:p-8">
              <h3 className="font-serif text-3xl font-normal text-charcoal-950">
                {language === 'IT' ? 'Una città che aiuta a parlare.' : 'A city that helps you speak.'}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-charcoal-800">
                {t('ascoli.purity_desc')}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3">
                {rhythms.map((item) => (
                  <div key={item} className="border-t border-travertine-300 pt-3 font-serif text-xl text-olive-800">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5">
              {ascoliHighlights.map((gem) => (
                <article key={gem.title} className="border-b border-travertine-300 pb-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h4 className="font-serif text-xl font-normal text-charcoal-950">
                      {language === 'IT' ? gem.titleIT : gem.title}
                    </h4>
                    <span className="text-[11px] font-medium text-terracotta-600">
                      {language === 'IT' ? gem.typeIT : gem.type}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-light leading-relaxed text-charcoal-800">
                    {language === 'IT' ? gem.descriptionIT : gem.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <img
            src={images.ascoliArcades}
            alt={language === 'IT' ? 'Strada storica ad Ascoli Piceno' : 'Historic street in Ascoli Piceno'}
            className="h-[300px] w-full border border-travertine-300 object-cover grayscale-[10%]"
            style={{ objectPosition: '50% 50%' }}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <img
            src={images.rollingHills}
            alt={language === 'IT' ? 'Colline nella regione Le Marche vicino ad Ascoli Piceno' : 'Hills in the region Le Marche near Ascoli Piceno'}
            className="h-[300px] w-full border border-travertine-300 object-cover grayscale-[10%]"
            style={{ objectPosition: '50% 50%' }}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
