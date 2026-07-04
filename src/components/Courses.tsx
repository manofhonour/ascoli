import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { officialCourses } from '../data/officialContent';

export default function Courses() {
  const { language, t } = useLanguage();

  return (
    <section id="courses" className="py-32 md:py-44 bg-travertine-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mb-24 space-y-6">
          <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase block">
            {t('courses.section_tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal-950 leading-tight">
            {t('courses.section_title_part1')}{' '}
            <span className="italic text-olive-800">{t('courses.section_title_italic')}</span>
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-charcoal-800 font-light max-w-xl leading-relaxed">
            {t('courses.section_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {officialCourses.map((course) => {
            const title = language === 'IT' ? course.italianName : course.name;
            const eyebrow = language === 'IT' ? course.name : course.italianName;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="group relative bg-travertine-50 border border-travertine-300/75 min-h-[460px] md:h-[500px] overflow-hidden flex flex-col justify-end p-6 sm:p-8 cursor-pointer"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={course.image}
                    alt={title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/45 to-transparent opacity-90 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 space-y-4 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="space-y-1">
                    <span className="font-serif italic text-xs text-terracotta-100/80 block">
                      {eyebrow}
                    </span>
                    <h3 className="font-serif text-2xl text-travertine-50 font-normal leading-tight">
                      {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-olive-100 pt-1">
                      <span>{course.duration}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                      <span>{course.hoursPerWeek}</span>
                    </div>
                    <span className="inline-block text-[10px] tracking-widest uppercase bg-travertine-50/15 border border-travertine-50/25 text-travertine-50 px-2.5 py-1">
                      {course.price}
                    </span>
                  </div>

                  <p className="text-xs text-travertine-100 font-light leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-terracotta-100 group-hover:text-terracotta-500 transition-colors pt-2">
                    <span>{t('courses.explore_details')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-olive-900/95 p-8 hidden md:flex flex-col justify-between z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out border-t-4 border-terracotta-600">
                  <div className="space-y-6">
                    <div>
                      <span className="font-serif italic text-xs text-terracotta-100/80 block">
                        {eyebrow}
                      </span>
                      <h4 className="font-serif text-2xl text-travertine-50 font-normal">{title}</h4>
                      <p className="text-[10px] font-mono tracking-wider text-olive-200 uppercase mt-1">
                        {course.price} - {course.hoursPerWeek}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] tracking-widest uppercase text-travertine-300 font-bold block border-b border-travertine-300/20 pb-1.5">
                        {t('courses.curriculum_highlights')}
                      </span>
                      <ul className="space-y-2">
                        {course.highlights.map((detail) => (
                          <li key={detail} className="flex items-start gap-2.5 text-xs text-travertine-100 font-light">
                            <span className="w-1 h-1 rounded-full bg-terracotta-500 mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-travertine-50 border-t border-travertine-300/10 pt-4">
                    <span>{t('courses.enquire_now')}</span>
                    <ArrowRight className="w-4 h-4 text-terracotta-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
