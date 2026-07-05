import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { officialCourses } from '../data/officialContent';

export default function Courses() {
  const { language, t } = useLanguage();
  const featuredCourse = officialCourses[0];
  const secondaryCourses = officialCourses.slice(1);

  const getCourseCopy = (course: (typeof officialCourses)[number]) => ({
    title: language === 'IT' ? course.italianName : course.name,
    eyebrow: language === 'IT' ? 'Formato del corso' : course.italianName,
    duration: language === 'IT' ? course.durationIT : course.duration,
    hoursPerWeek: language === 'IT' ? course.hoursPerWeekIT : course.hoursPerWeek,
    price: language === 'IT' ? course.priceIT : course.price,
    description: language === 'IT' ? course.descriptionIT : course.description,
    highlights: language === 'IT' ? course.highlightsIT : course.highlights,
  });

  const featured = getCourseCopy(featuredCourse);

  return (
    <section id="courses" className="py-32 md:py-44 bg-travertine-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-[340px] sm:max-w-3xl mb-24 space-y-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-[340px] sm:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7 bg-travertine-50 border border-travertine-300/80 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[560px]"
          >
            <div className="relative min-h-[320px] md:min-h-full overflow-hidden bg-travertine-200">
              <img
                src={featuredCourse.image}
                alt={featured.title}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-103 transition-all duration-[1.2s]"
                style={{ objectPosition: featuredCourse.imagePosition }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/22 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-7 md:p-9 flex flex-col justify-between gap-10">
              <div className="space-y-5">
                <div>
                  <span className="font-serif italic text-sm text-terracotta-600">{featured.eyebrow}</span>
                  <h3 className="font-serif text-4xl text-charcoal-950 font-light leading-tight mt-2">
                    {featured.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal-800 font-light leading-relaxed">
                  {featured.description}
                </p>
                <div className="grid grid-cols-1 gap-3 border-t border-travertine-300/80 pt-5">
                  {[featured.duration, featured.hoursPerWeek, featured.price].map((item) => (
                    <div key={item} className="flex items-center justify-between gap-4 text-xs border-b border-travertine-200 pb-3 last:border-b-0">
                      <span className="text-charcoal-800 font-light">{item}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-terracotta-600 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-olive-800">
                  {t('courses.curriculum_highlights')}
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {featured.highlights.map((detail) => (
                    <span key={detail} className="text-xs text-charcoal-800 font-light leading-relaxed">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 border-t border-l border-travertine-300/80 bg-travertine-50">
            {secondaryCourses.map((course, index) => {
              const copy = getCourseCopy(course);
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: [0.19, 1, 0.22, 1] }}
                  className="group grid grid-cols-[112px_1fr] sm:grid-cols-[144px_1fr] border-r border-b border-travertine-300/80 min-h-[132px] bg-travertine-50 hover:bg-travertine-100 transition-colors duration-300"
                >
                  <div className="relative overflow-hidden bg-travertine-200">
                    <img
                      src={course.image}
                      alt={copy.title}
                      className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      style={{ objectPosition: course.imagePosition }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between gap-4">
                    <div>
                      <span className="font-serif italic text-xs text-terracotta-600">{copy.eyebrow}</span>
                      <h3 className="font-serif text-xl text-charcoal-950 font-light leading-snug mt-1">
                        {copy.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-widest uppercase text-charcoal-800">
                      <span>{copy.hoursPerWeek}</span>
                      <span className="h-1 w-1 bg-terracotta-500" />
                      <span>{copy.price}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
