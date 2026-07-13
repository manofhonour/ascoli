import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, directorQuote, directorQuoteIT, images } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

export default function WhyAccademia() {
  const { language, t } = useLanguage();

  const blocks = [
    {
      title: t("why.focus_1_title"),
      description: t("why.focus_1_desc")
    },
    {
      title: t("why.focus_2_title"),
      description: t("why.focus_2_desc")
    },
    {
      title: t("why.focus_3_title"),
      description: t("why.focus_3_desc")
    },
    {
      title: t("why.focus_4_title"),
      description: t("why.focus_4_desc")
    }
  ];

  return (
    <section id="why-accademia" className="py-28 md:py-40 bg-travertine-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5 max-w-[360px] sm:max-w-none space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase block">
                {t("why.philosophy_sub")}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal-950 leading-[1.1] tracking-tight">
                {t("why.philosophy_title_part1")} <span className="italic text-olive-800">{t("why.philosophy_title_italic")}</span>{t("why.philosophy_title_part2")}
              </h2>
            </div>
            <p className="text-xs md:text-sm lg:text-base text-charcoal-800 font-light leading-relaxed max-w-md pt-4 border-t border-travertine-200/60">
              {t("why.philosophy_desc")}
            </p>

            <div className="bg-travertine-100 border border-travertine-300/80 p-6 max-w-md space-y-5 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={accademiaLogo} alt="Accademia Italiana logo" className="h-14 w-14 object-contain" />
                <div>
                  <span className="block text-[10px] tracking-[0.22em] uppercase font-bold text-olive-800">
                    {language === 'IT' ? 'Direzione didattica' : 'Academic direction'}
                  </span>
                  <span className="block font-serif text-xl text-charcoal-950">
                    {contactInfo.director}
                  </span>
                </div>
              </div>
              <p className="font-serif text-lg italic text-charcoal-950 leading-snug">
                "{language === 'IT' ? directorQuoteIT : directorQuote}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 max-w-[340px] sm:max-w-none space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="relative aspect-[16/10] md:aspect-[16/9] bg-travertine-200 overflow-hidden border border-travertine-300/80 shadow-xl"
            >
              <img
                src={images.communicativeRoundtable}
                alt="Adult learners in a group discussion at Accademia Italiana"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-102 transition-all duration-[1.2s]"
                style={{ objectPosition: '50% 42%' }}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-travertine-50 max-w-md">
                <span className="block text-[10px] tracking-[0.22em] uppercase font-bold text-terracotta-100">
                  {language === 'IT' ? 'Metodo comunicativo' : 'Communicative method'}
                </span>
                <span className="block font-serif text-2xl md:text-3xl font-light mt-2">
                  {language === 'IT'
                    ? 'Lezioni con materiale autentico e ritmo personale.'
                    : 'Lessons with authentic material and personal rhythm.'}
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-travertine-200/90">
              {blocks.map((block, idx) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.19, 1, 0.22, 1] }}
                  className="min-h-[210px] border-r border-b border-travertine-200/90 bg-travertine-50 p-6 md:p-8 flex flex-col justify-end group"
                >
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-light text-charcoal-950 group-hover:text-olive-800 transition-colors duration-300">
                      {block.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-charcoal-800 font-light leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
