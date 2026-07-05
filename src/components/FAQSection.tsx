import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/officialContent';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = language === 'IT'
    ? [
        {
          question: 'Serve conoscere gia l italiano?',
          answer:
            'No. I corsi possono essere organizzati per diversi livelli, dai principianti agli studenti avanzati. La scuola puo consigliare il formato piu adatto prima dell iscrizione.',
          category: 'Livelli',
        },
        {
          question: 'Quanto sono grandi i gruppi standard?',
          answer:
            'Il corso standard prevede piccoli gruppi di 3-6 studenti. Sono disponibili anche lezioni individuali e corsi su misura.',
          category: 'Corsi',
        },
        {
          question: 'Quali sono i principali prezzi dei corsi?',
          answer:
            'Per il 2024/2025, il corso standard costa EUR 220 a settimana, il corso intensivo parte da EUR 370 per una settimana e le lezioni individuali costano EUR 30 all ora, con pacchetti disponibili.',
          category: 'Prezzi',
        },
        {
          question: 'La scuola puo aiutare con l alloggio?',
          answer:
            'Si. La scuola puo aiutare a prenotare famiglia ospitante, B&B o hotel ad Ascoli Piceno senza costo di prenotazione aggiuntivo. I prezzi della famiglia ospitante sono indicati; B&B e hotel sono su richiesta.',
          category: 'Alloggi',
        },
        {
          question: 'La scuola accoglie chi viaggia da solo, studenti LGBTQ+ e persone con esigenze di accessibilita?',
          answer:
            'Si. Chi viaggia da solo, studenti LGBTQ+ e studenti con disabilita o esigenze di accessibilita possono contattare la scuola in anticipo per discutere gli aspetti pratici prima dell arrivo.',
          category: 'Supporto studenti',
        },
        {
          question: 'Come si raggiunge Ascoli Piceno?',
          answer:
            'Le opzioni includono collegamenti in treno via San Benedetto del Tronto, bus o auto da Roma in circa 2,5 ore e aeroporti di Ancona-Falconara e Pescara.',
          category: 'Viaggio',
        },
        {
          question: 'Come posso contattare la scuola?',
          answer: `Scrivi a ${contactInfo.email}, chiama ${contactInfo.phone} o usa WhatsApp ${contactInfo.whatsapp}. Orari: ${contactInfo.hoursIT}.`,
          category: 'Contatti',
        },
      ]
    : [
        {
          question: 'Do I need prior knowledge of Italian?',
          answer:
            'No. Courses can be planned for different levels, from beginners to advanced students. The school can advise on the right format before enrolment.',
          category: 'Levels',
        },
        {
          question: 'How large are the standard groups?',
          answer:
            'The standard course is listed for small groups of 3-6 students. Individual lessons and custom courses are also available.',
          category: 'Courses',
        },
        {
          question: 'What are the main course prices?',
          answer:
            'For 2024/2025, the standard course is EUR 220 per week, the intensive course starts from EUR 370 for one week, and individual lessons are EUR 30 per hour, with package prices available.',
          category: 'Pricing',
        },
        {
          question: 'Can the school help with accommodation?',
          answer:
            'Yes. The school can help reserve host-family, B&B, or hotel accommodation in Ascoli Piceno without additional reservation cost. Host-family prices are listed; B&B and hotel prices are on request.',
          category: 'Accommodation',
        },
        {
          question: 'Is the school welcoming for solo travelers, LGBTQ+ learners, and students with accessibility needs?',
          answer:
            'Yes. Students traveling alone, LGBTQ+ learners, and students with disabilities or accessibility needs are welcome to contact the school in advance so practical details can be discussed before arrival.',
          category: 'Student Support',
        },
        {
          question: 'How can I reach Ascoli Piceno?',
          answer:
            'Travel options include train connections via San Benedetto del Tronto, bus or car from Rome in about 2.5 hours, and access from Ancona-Falconara and Pescara airports.',
          category: 'Travel',
        },
        {
          question: 'How do I contact the school?',
          answer: `Write to ${contactInfo.email}, call ${contactInfo.phone}, or use WhatsApp ${contactInfo.whatsapp}. Office hours are ${contactInfo.hours}.`,
          category: 'Contact',
        },
      ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section id="faq" className="py-32 md:py-44 bg-travertine-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase">
            {t('faq.section_tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal-950 leading-tight">
            {t('faq.section_title')}
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-charcoal-800 font-light max-w-md leading-relaxed">
            {t('faq.section_desc')}
          </p>

          <div className="w-full max-w-md relative mt-8">
            <input
              type="text"
              placeholder={t('faq.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-travertine-50 border border-travertine-300/60 px-5 py-4 pl-12 text-xs text-charcoal-950 placeholder-charcoal-800/40 focus:outline-none focus:border-olive-700 rounded-none transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-charcoal-800/50 stroke-[1.25]" />
          </div>
        </div>

        <div className="border-t border-travertine-300/80 divide-y divide-travertine-300/80">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-8 space-y-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 font-serif text-lg md:text-xl lg:text-2xl font-light text-charcoal-950 group cursor-pointer"
                  >
                    <span className="group-hover:text-olive-800 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <span className="bg-travertine-50 p-2 border border-travertine-300/40 text-olive-800 shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[1.25]" /> : <Plus className="w-3.5 h-3.5 stroke-[1.25]" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-1 text-xs md:text-sm text-charcoal-800 font-light leading-relaxed max-w-3xl pr-8">
                          <span className="block text-[9px] tracking-widest uppercase font-bold text-terracotta-600 mb-2">
                            {faq.category}
                          </span>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="py-16 text-center text-xs text-charcoal-800 font-light">{t('faq.no_match')}</div>
          )}
        </div>
      </div>
    </section>
  );
}
