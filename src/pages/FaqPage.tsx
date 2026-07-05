import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Heart } from 'lucide-react';
import { contactInfo } from '../data/officialContent';
import { useLanguage } from '../context/LanguageContext';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FaqPage() {
  const { language } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<string | null>('courses');

  const faqs: FaqItem[] =
    language === 'IT'
      ? [
          {
            id: 'courses',
            category: 'Corsi',
            question: 'Quali corsi di italiano offre la scuola?',
            answer:
              'L offerta include corsi standard, intensivi, lezioni individuali, corsi estensivi, aggiornamento per docenti e corsi su misura ad Ascoli Piceno o online.',
          },
          {
            id: 'prices',
            category: 'Prezzi',
            question: 'Quali sono i prezzi 2024/2025?',
            answer:
              'I prezzi indicati includono corso standard a EUR 220 a settimana, lezioni individuali a EUR 30 l ora, 20 ore individuali a EUR 550 e corsi intensivi da EUR 370 per una settimana. Contatta la scuola per disponibilita aggiornata.',
          },
          {
            id: 'accommodation',
            category: 'Alloggi',
            question: 'Quali alloggi puo prenotare la scuola?',
            answer:
              'La scuola puo aiutare a prenotare famiglia ospitante, B&B e hotel ad Ascoli Piceno. I prezzi settimanali della famiglia ospitante sono indicati, mentre B&B e hotel sono su richiesta.',
          },
          {
            id: 'inclusive-support',
            category: 'Supporto studenti',
            question: 'Chi viaggia da solo, studenti LGBTQ+ e studenti con esigenze di accessibilita sono benvenuti?',
            answer:
              'Si. Chi viaggia da solo, studenti LGBTQ+ e studenti con disabilita o esigenze di accessibilita possono contattare la scuola in anticipo per discutere corso, alloggio, arrivo e dettagli pratici.',
          },
          {
            id: 'travel',
            category: 'Viaggio',
            question: 'Come si raggiunge Ascoli Piceno?',
            answer:
              'Gli studenti possono arrivare in treno via San Benedetto del Tronto, in autobus o auto da Roma in circa 2,5 ore, oppure tramite gli aeroporti di Ancona-Falconara e Pescara. Gli orari vanno controllati prima del viaggio.',
          },
          {
            id: 'culture',
            category: 'Cultura',
            question: 'Quali corsi culturali o moduli aggiuntivi sono disponibili?',
            answer:
              'I moduli includono cucina italiana, degustazione vini, opera, olio d oliva, ceramica, pittura, tombolo, attualita, italiano per il business, turismo e hotel management, preparazione universitaria, esami di certificazione, storia, storia dell arte, letteratura e Italia oggi.',
          },
          {
            id: 'contact',
            category: 'Contatti',
            question: 'Quali sono i contatti?',
            answer: `${contactInfo.schoolName} si trova in ${contactInfo.addressLine1}, ${contactInfo.cityLine}. Email ${contactInfo.email}, telefono ${contactInfo.phone}, WhatsApp ${contactInfo.whatsapp}. Orari segreteria: ${contactInfo.hoursIT}.`,
          },
        ]
      : [
          {
            id: 'courses',
            category: 'Courses',
            question: 'Which Italian courses does the school offer?',
            answer:
              'The course offer includes standard courses, intensive courses, individual lessons, extensive courses, refresher courses for teachers, and custom-made courses in Ascoli Piceno or online.',
          },
          {
            id: 'prices',
            category: 'Pricing',
            question: 'What are the 2024/2025 prices?',
            answer:
              'Prices include standard courses at EUR 220 per week, individual lessons at EUR 30 per hour, 20 individual hours at EUR 550, and intensive courses from EUR 370 for one week. Contact the school for current availability.',
          },
          {
            id: 'accommodation',
            category: 'Accommodation',
            question: 'What accommodation can the school help reserve?',
            answer:
              'The school can help reserve host-family accommodation, B&B, and hotel options in Ascoli Piceno. Host-family weekly prices are listed, while B&B and hotel prices are on request.',
          },
          {
            id: 'inclusive-support',
            category: 'Student Support',
            question: 'Are solo travelers, LGBTQ+ learners, and students with accessibility needs welcome?',
            answer:
              'Yes. Students traveling alone, LGBTQ+ learners, and students with disabilities or accessibility needs are welcome to contact the school in advance so course, accommodation, arrival, and practical details can be discussed.',
          },
          {
            id: 'travel',
            category: 'Travel',
            question: 'How do students reach Ascoli Piceno?',
            answer:
              'Students can travel by train via San Benedetto del Tronto, by bus or car from Rome in about 2.5 hours, or through Ancona-Falconara and Pescara airports. Timetables should be checked before travel.',
          },
          {
            id: 'culture',
            category: 'Culture',
            question: 'Which culture courses or add-ons are available?',
            answer:
              'Add-ons include Italian cooking, wine tasting, opera, olive oil, ceramics, painting, tombolo lace, current affairs, business Italian, tourism and hotel management, university entrance preparation, certification exam preparation, history, art history, literature, and Italy today.',
          },
          {
            id: 'contact',
            category: 'Contact',
            question: 'What are the contact details?',
            answer: `${contactInfo.schoolName} is at ${contactInfo.addressLine1}, ${contactInfo.cityLine}. Email ${contactInfo.email}, phone ${contactInfo.phone}, WhatsApp ${contactInfo.whatsapp}. Office hours are ${contactInfo.hours}.`,
          },
        ];

  const toggleFaq = (id: string) => setActiveFaq(activeFaq === id ? null : id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Domande Frequenti
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            {language === 'IT' ? 'Risposte pratiche' : 'Practical answers'} <br />
            <span className="italic text-terracotta-600">
              {language === 'IT' ? 'per pianificare il corso.' : 'for planning your course.'}
            </span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            {language === 'IT'
              ? 'Dettagli su corsi, alloggio, viaggio, cultura e contatti per Accademia Italiana ad Ascoli Piceno.'
              : 'Course, accommodation, travel, culture, and contact details for Accademia Italiana in Ascoli Piceno.'}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-6">
          {faqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div key={faq.id} className="bg-travertine-100 border border-travertine-200 hover:border-travertine-300 transition-all duration-300 shadow-sm overflow-hidden">
                <button onClick={() => toggleFaq(faq.id)} className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer">
                  <div className="space-y-2">
                    <span className="text-[9px] tracking-wider uppercase font-bold text-olive-800 block">{faq.category}</span>
                    <h3 className="font-serif text-lg md:text-xl text-charcoal-950 font-normal leading-snug">{faq.question}</h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-travertine-200 flex items-center justify-center shrink-0 text-charcoal-950 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4 stroke-[1.5]" /> : <Plus className="w-4 h-4 stroke-[1.5]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="border-t border-travertine-200/60 bg-travertine-50/50"
                    >
                      <p className="p-6 md:p-8 text-xs md:text-sm text-charcoal-800 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-olive-50 border border-olive-200/80 p-8 flex flex-col md:flex-row gap-6 items-start">
          <Heart className="w-8 h-8 text-olive-800 shrink-0 stroke-[1.25]" />
          <div className="space-y-2">
            <h4 className="font-serif text-base text-charcoal-950 font-semibold">
              {language === 'IT' ? 'Vuoi una conferma finale?' : 'Need a final confirmation?'}
            </h4>
            <p className="text-xs text-olive-900 leading-relaxed font-light">
              {language === 'IT' ? 'Contatta direttamente la scuola a ' : 'Contact the school directly at '}
              <span className="font-medium text-charcoal-950">{contactInfo.email}</span>
              {language === 'IT' ? ' oppure WhatsApp ' : ' or WhatsApp '}
              <span className="font-medium text-charcoal-950">{contactInfo.whatsapp}</span>.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
