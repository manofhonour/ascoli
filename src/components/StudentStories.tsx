import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { images } from '../data/officialContent';

const stays = [
  {
    title: 'A cultural week in the region Le Marche',
    titleIT: 'Una settimana culturale nelle Marche',
    focus: 'Standard course plus local life',
    focusIT: 'Corso standard e vita locale',
    text: 'For travellers who want morning lessons, afternoons in Ascoli, and enough space to enjoy the city slowly.',
    textIT: 'Per chi desidera lezioni al mattino, pomeriggi ad Ascoli e tempo per vivere la citta con calma.',
    image: images.quintana,
    position: '50% 50%',
  },
  {
    title: 'A longer stay before a move',
    titleIT: 'Un soggiorno piu lungo prima di trasferirsi',
    focus: 'Conversation, practical Italian, routine',
    focusIT: 'Conversazione, italiano pratico, routine',
    text: 'Useful for adults relocating to Italy, buying a home, or testing the rhythm of everyday life before a bigger decision.',
    textIT: 'Utile per adulti che si trasferiscono in Italia, acquistano casa o vogliono capire il ritmo quotidiano.',
    image: images.ascoliStreet,
    position: '50% 50%',
  },
  {
    title: 'A focused professional course',
    titleIT: 'Un corso professionale mirato',
    focus: 'Individual or tailor-made lessons',
    focusIT: 'Lezioni individuali o su misura',
    text: 'For professionals and digital nomads who need flexible timing, sector vocabulary, or confidence in spoken Italian.',
    textIT: 'Per professionisti e nomadi digitali che cercano orari flessibili, lessico di settore o sicurezza nel parlato.',
    image: images.whiteboardLesson,
    position: '50% 50%',
  },
  {
    title: 'A supported arrival and staying',
    titleIT: 'Un arrivo e soggiorno con supporto',
    focus: 'Planning before travel',
    focusIT: 'Organizzazione prima del viaggio',
    text: 'Solo travellers, women travelling alone, LGBTQ+ visitors, older learners, and students with accessibility needs are welcomed in a respectful learning environment.',
    textIT: 'Chi viaggia da solo, donne sole, visitatori LGBTQ+, adulti e studenti con esigenze di accessibilita sono accolti in un ambiente rispettoso.',
    image: images.bnb,
    position: '50% 50%',
  },
];

export default function StudentStories() {
  const { language, t } = useLanguage();

  return (
    <section id="student-stories" className="overflow-hidden bg-travertine-100 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-16 max-w-3xl space-y-5">
          <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-terracotta-600">
            {t('stories.section_tag')}
          </span>
          <h2 className="font-serif text-4xl font-normal leading-tight text-charcoal-950 md:text-5xl lg:text-6xl">
            {t('stories.section_title_part1')}{' '}
            <span className="inline-block pb-1 italic leading-[1.12] text-olive-800">
              {t('stories.section_title_italic')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {stays.map((stay, index) => (
            <article
              key={stay.title}
              className={`grid grid-cols-1 overflow-hidden border border-travertine-300 bg-travertine-50 md:grid-cols-2 ${
                index === 1 || index === 2 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="min-h-[250px] overflow-hidden bg-travertine-200">
                <img
                  src={stay.image}
                  alt={language === 'IT' ? stay.titleIT : stay.title}
                  className="h-full w-full object-cover grayscale-[10%]"
                  style={{ objectPosition: stay.position }}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex min-h-[250px] flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-terracotta-600">
                    {language === 'IT' ? stay.focusIT : stay.focus}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-normal leading-tight text-charcoal-950">
                    {language === 'IT' ? stay.titleIT : stay.title}
                  </h3>
                </div>
                <p className="mt-8 text-sm font-light leading-relaxed text-charcoal-800">
                  {language === 'IT' ? stay.textIT : stay.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-l border-olive-700 bg-travertine-50 px-6 py-5 text-sm font-light leading-relaxed text-charcoal-800 md:max-w-3xl">
          {language === 'IT'
            ? 'L accoglienza e semplice e concreta: piccoli gruppi, comunicazione chiara prima dell arrivo e rispetto per il ritmo di ogni studente.'
            : "The welcome is simple and practical: small groups, clear communication before their arrival, and respect for each learner's rhythm."}
        </div>
      </div>
    </section>
  );
}
