import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, images } from '../data/officialContent';

interface FinalCTAProps {
  onInquireClick: () => void;
}

export default function FinalCTA({ onInquireClick }: FinalCTAProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-travertine-100 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 overflow-hidden border border-travertine-300 bg-travertine-50 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={images.ascoli}
              alt="Piazza del Popolo in Ascoli Piceno"
              className="h-[360px] w-full object-cover grayscale-[12%] lg:h-full"
              style={{ objectPosition: '50% 50%' }}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7">
            <div className="flex min-h-[480px] flex-col justify-center p-7 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="max-w-2xl space-y-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
                  {t('cta.limited')}
                </p>

                <h2 className="font-serif text-4xl font-normal leading-tight text-charcoal-950 md:text-6xl">
                  {t('cta.title_part1')}{' '}
                  <span className="inline-block pb-1 italic leading-[1.12] text-olive-800">
                    {t('cta.title_italic')}
                  </span>
                </h2>

                <p className="max-w-xl text-sm font-light leading-relaxed text-charcoal-800 md:text-base">
                  {t('cta.desc')}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={onInquireClick}
                    className="inline-flex items-center justify-center gap-2 border border-olive-800 bg-olive-800 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-travertine-50 transition-all duration-300 hover:bg-olive-900"
                  >
                    <span>{t('cta.begin')}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={contactInfo.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-charcoal-950/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal-950 transition-all duration-300 hover:border-charcoal-950"
                  >
                    <PhoneCall className="h-3.5 w-3.5 stroke-[1.5]" />
                    <span>{t('cta.whatsapp')}</span>
                  </a>
                </div>

                <p className="text-xs font-light text-charcoal-800">{t('cta.booking_note')}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
