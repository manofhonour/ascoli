import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyAccademia() {
  const { t } = useLanguage();

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
    <section id="why-accademia" className="py-32 md:py-44 bg-travertine-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Big Editorial Statement (asymmetric) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
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
          </div>

          {/* Right Column: 4 Premium Minimalistic Narrative Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {blocks.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="space-y-4 group"
              >
                <div className="flex items-center justify-between border-b border-travertine-200 pb-3">
                  <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-olive-800">
                    FOCUS {idx + 1}
                  </span>
                  <span className="font-serif italic text-xs text-terracotta-500 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl md:text-2xl font-light text-charcoal-950 group-hover:text-olive-800 transition-colors duration-300">
                  {block.title}
                </h3>
                
                <p className="text-xs lg:text-sm text-charcoal-800 font-light leading-relaxed">
                  {block.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
