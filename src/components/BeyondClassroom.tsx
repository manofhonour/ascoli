import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { culturalOfferings } from '../data/officialContent';

function renderWithTomboloItalic(text: string) {
  return text.split(/(Tombolo)/g).map((part, index) =>
    part === 'Tombolo' ? (
      <em key={`${part}-${index}`} className="font-serif italic normal-case">
        {part}
      </em>
    ) : (
      part
    ),
  );
}

export default function BeyondClassroom() {
  const { language, t } = useLanguage();
  const heroExperience = culturalOfferings[0];
  const supportingImages = culturalOfferings.slice(1, 3);

  return (
    <section id="beyond-classroom" className="bg-travertine-50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-16 max-w-[760px] space-y-5">
          <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-terracotta-600">
            {t('beyond.section_tag')}
          </span>
          <h2 className="font-serif text-4xl font-normal leading-tight text-charcoal-950 md:text-5xl lg:text-6xl">
            {t('beyond.section_title_part1')}{' '}
            <span className="inline-block pb-1 italic leading-[1.12] text-olive-800">
              {t('beyond.section_title_italic')}
            </span>
          </h2>
          <p className="max-w-xl text-sm font-light leading-relaxed text-charcoal-800 md:text-base">
            {t('beyond.section_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/5] overflow-hidden border border-travertine-300 bg-travertine-100 shadow-[0_18px_50px_rgba(43,41,38,0.10)]">
              <img
                src={heroExperience.image}
                alt={language === 'IT' ? heroExperience.italianTitle : heroExperience.title}
                className="h-full w-full object-cover grayscale-[18%] transition duration-700 hover:grayscale-0"
                style={{ objectPosition: heroExperience.imagePosition }}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="mt-4 max-w-sm text-xs font-light leading-relaxed text-charcoal-800">
              {language === 'IT'
                ? 'La lingua entra nei gesti semplici: cucinare, ordinare, ascoltare, chiedere, tornare.'
                : 'The language enters through simple rituals: cooking, ordering, listening, asking, returning.'}
            </figcaption>
          </motion.figure>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 border-l border-t border-travertine-300 bg-travertine-50 sm:grid-cols-2">
              {culturalOfferings.map((exp, index) => {
                const title = language === 'IT' ? exp.italianTitle : exp.title;
                const tagline = language === 'IT' ? exp.taglineIT : exp.tagline;
                const description = language === 'IT' ? exp.descriptionIT : exp.description;
                return (
                  <motion.article
                    key={exp.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.65, delay: index * 0.05, ease: [0.19, 1, 0.22, 1] }}
                    className="min-h-[250px] border-b border-r border-travertine-300 p-6 md:p-8"
                  >
                    <div className="flex h-full flex-col justify-between gap-8">
                      <div className="space-y-3">
                        <span className="font-serif text-sm italic text-terracotta-600">{exp.italianTitle}</span>
                        <h3 className="font-serif text-2xl font-normal leading-tight text-charcoal-950 md:text-3xl">
                          {title}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-olive-800">
                          {renderWithTomboloItalic(tagline)}
                        </p>
                        <p className="text-sm font-light leading-relaxed text-charcoal-800">
                          {renderWithTomboloItalic(description)}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {supportingImages.map((item) => (
                <div key={item.title} className="aspect-[5/3] overflow-hidden border border-travertine-300 bg-travertine-100">
                  <img
                    src={item.image}
                    alt={language === 'IT' ? item.italianTitle : item.title}
                    className="h-full w-full object-cover grayscale-[12%]"
                    style={{ objectPosition: item.imagePosition }}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
