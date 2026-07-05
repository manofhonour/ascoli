import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, Euro, Compass, Award, Star } from 'lucide-react';
import { officialCourses, culturalOfferings } from '../data/officialContent';
import { useLanguage } from '../context/LanguageContext';

export default function CoursesPage() {
  const { language } = useLanguage();
  const [activeCourseId, setActiveCourseId] = useState(officialCourses[0].id);
  const activeCourse = officialCourses.find((course) => course.id === activeCourseId) || officialCourses[0];
  const activeName = language === 'IT' ? activeCourse.italianName : activeCourse.name;
  const activeDescription = language === 'IT' ? activeCourse.descriptionIT : activeCourse.description;
  const activeDuration = language === 'IT' ? activeCourse.durationIT : activeCourse.duration;
  const activeHours = language === 'IT' ? activeCourse.hoursPerWeekIT : activeCourse.hoursPerWeek;
  const activePrice = language === 'IT' ? activeCourse.priceIT : activeCourse.price;
  const activeHighlights = language === 'IT' ? activeCourse.highlightsIT : activeCourse.highlights;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            {language === 'IT' ? 'Offerta corsi' : 'Course Offer'}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            {language === 'IT' ? 'Corsi di italiano pensati' : 'Italian courses shaped'} <br />
            <span className="italic text-olive-800">
              {language === 'IT' ? 'per livello e obiettivi.' : 'around level and purpose.'}
            </span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            {language === 'IT'
              ? 'La scuola offre corsi standard, intensivi, individuali, estensivi, aggiornamento docenti e corsi su misura ad Ascoli Piceno o online.'
              : 'The school offers standard, intensive, individual, extensive, teacher-refresher, and custom-made course formats in Ascoli Piceno or online.'}
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mb-16">
          {officialCourses.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveCourseId(course.id)}
              className={`w-full sm:w-auto px-6 py-4 text-xs tracking-[0.14em] font-semibold uppercase transition-all duration-300 border rounded-none ${
                activeCourseId === course.id
                  ? 'bg-charcoal-950 text-travertine-50 border-charcoal-950 shadow-md'
                  : 'bg-travertine-100 text-charcoal-800 border-travertine-300 hover:text-charcoal-950 hover:bg-travertine-200/50'
              }`}
            >
              {language === 'IT' ? course.italianName : course.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-serif italic text-base text-terracotta-600">{activeCourse.italianName}</span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950">{activeName}</h2>
              <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">{activeDescription}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-travertine-200">
              <div className="space-y-2">
                <Calendar className="w-5 h-5 text-olive-800" />
                <h4 className="font-serif text-sm text-charcoal-950">{language === 'IT' ? 'Durata' : 'Duration'}</h4>
                <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">{activeDuration}</p>
              </div>
              <div className="space-y-2">
                <Compass className="w-5 h-5 text-olive-800" />
                <h4 className="font-serif text-sm text-charcoal-950">{language === 'IT' ? 'Ritmo settimanale' : 'Weekly Rhythm'}</h4>
                <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">{activeHours}</p>
              </div>
              <div className="space-y-2">
                <Euro className="w-5 h-5 text-olive-800" />
                <h4 className="font-serif text-sm text-charcoal-950">{language === 'IT' ? 'Prezzo' : 'Price'}</h4>
                <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">{activePrice}</p>
              </div>
            </div>

            <div className="aspect-[16/10] bg-travertine-200 overflow-hidden shadow-lg relative">
              <img
                src={activeCourse.image}
                alt={activeName}
                className="w-full h-full object-cover"
                style={{ objectPosition: activeCourse.imagePosition }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-6 bg-travertine-100 border border-travertine-200 p-8 md:p-10 shadow-xl space-y-6">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-terracotta-600 fill-terracotta-600" />
              <span className="text-[10px] tracking-widest uppercase font-bold text-charcoal-950">
                {language === 'IT' ? 'Dettagli del corso' : 'Course Details'}
              </span>
            </div>

            <h3 className="font-serif text-xl md:text-2xl text-charcoal-950 font-normal border-b border-travertine-300 pb-4">
              {language === 'IT' ? 'Dettagli per questo formato' : 'Details for this format'}
            </h3>

            <div className="space-y-4 pt-2">
              {activeHighlights.map((detail) => (
                <div key={detail} className="flex gap-3 items-start border-b border-travertine-200/50 pb-4 last:border-0 last:pb-0">
                  <Check className="w-4 h-4 text-olive-800 mt-0.5 shrink-0 stroke-[2]" />
                  <p className="text-xs text-charcoal-800 font-light leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-olive-50 p-4 border border-olive-200 mt-6">
              <p className="text-[11px] text-olive-900 font-light leading-relaxed">
                {language === 'IT'
                  ? 'Contatta la segreteria per date aggiornate, livello, disponibilita e condizioni di prenotazione.'
                  : 'Contact the school office for current dates, level placement, availability, and booking conditions.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-travertine-100 border-t border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              {language === 'IT' ? 'Opzioni aggiuntive' : 'Add-On Options'}
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-charcoal-950">
              {language === 'IT' ? 'Cultura e temi speciali.' : 'Culture and special topics.'}
            </h2>
            <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
              {language === 'IT'
                ? 'I moduli culturali e specialistici possono accompagnare lo studio standard o intensivo in base a date e obiettivi.'
                : 'Cultural and specialist add-ons can be paired with standard or intensive study depending on dates and goals.'}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalOfferings.map((item) => (
              <div key={item.title} className="bg-travertine-50 border border-travertine-200 p-6 space-y-2">
                <Award className="w-4 h-4 text-terracotta-600" />
                <h4 className="font-serif text-base text-charcoal-950 font-semibold">
                  {language === 'IT' ? item.italianTitle : item.title}
                </h4>
                <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">
                  {language === 'IT' ? item.descriptionIT : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
