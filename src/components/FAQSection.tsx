import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first

  const faqsEN: FAQ[] = [
    {
      question: "What is the average age profile of your students?",
      answer: "Accademia Italiana is a boutique sanctuary that deliberately caters to mature, inquisitive minds, creative professionals, and retirees. While we accept students of all ages (minimum 18), our average cohort age is 42, creating a highly sophisticated, serene, and warm peer-to-peer educational environment.",
      category: "Admissions"
    },
    {
      question: "Do I need any prior knowledge of Italian to attend?",
      answer: "Not at all. We support absolute beginners (A1 level) up to highly advanced fluent speakers (C2). Before your journey begins, you will take a comprehensive and friendly written and oral placement exam to map your exact linguistic coordinates and match you to a matching tiny group.",
      category: "Academics"
    },
    {
      question: "How long should I stay for optimal learning?",
      answer: "While we support weekly programs from 1 to 48 weeks, our research and alumni diaries show that a 2 to 4-week stay provides the optimal cognitive window. It allows your brain to settle into the regional rhythm, dissolve linguistic shyness, and establish lasting conversational bonds.",
      category: "Admissions"
    },
    {
      question: "What is included in the program tuition fee?",
      answer: "Our fees are fully transparent. Tuition includes all physical books, customized canvas school bags, writing notebooks, daily afternoon excursions (walking lessons, artisan visits, church entries), pass tickets, Passerina/Pecorino school wine tastings, and certified level certificates.",
      category: "Pricing"
    },
    {
      question: "How do I reach Ascoli Piceno from Rome or other airports?",
      answer: "Ascoli Piceno is highly accessible. The nearest international hub is Rome Fiumicino (FCO), from which a comfortable, high-speed, direct express bus travels through the scenic Apennine gorges straight to Ascoli in 2.5 hours. Alternatively, Ancona Falconara (AOI) airport is just 1 hour away by train.",
      category: "Travel"
    }
  ];

  const faqsIT: FAQ[] = [
    {
      question: "Qual è il profilo di età medio dei vostri studenti?",
      answer: "L'Accademia Italiana è un santuario boutique che si rivolge deliberatamente a menti mature e curiose, professionisti creativi e pensionati. Sebbene accettiamo studenti di tutte le età (minimo 18), l'età media del nostro gruppo è di 42 anni, creando un ambiente educativo tra pari altamente sofisticato, sereno e caloroso.",
      category: "Admissions"
    },
    {
      question: "Ho bisogno di una conoscenza preliminare dell'italiano per partecipare?",
      answer: "Assolutamente no. Supportiamo sia principianti assoluti (livello A1) sia parlanti fluenti avanzati (C2). Prima che il tuo viaggio inizi, farai un test di posizionamento scritto e orale completo e amichevole per mappare le tue esatte coordinate linguistiche e inserirti in un gruppo ottimale molto piccolo.",
      category: "Academics"
    },
    {
      question: "Quanto tempo dovrei rimanere per un apprendimento ottimale?",
      answer: "Sebbene supportiamo programmi settimanali da 1 a 48 settimane, le nostre ricerche e i diari degli ex alunni mostrano che un soggiorno da 2 a 4 settimane offre la finestra cognitiva ideale. Consente al cervello di ambientarsi nel ritmo regionale, sciogliere la timidezza linguistica e stabilire legami di conversazione duraturi.",
      category: "Admissions"
    },
    {
      question: "Cosa è incluso nella quota di iscrizione al programma?",
      answer: "Le nostre tariffe sono completamente trasparenti. La quota di iscrizione include tutti i libri fisici, borse personalizzate in tela dell'Accademia, taccuini per appunti, escursioni pomeridiane giornaliere (lezioni itineranti, visite ad artigiani, ingressi alle chiese), biglietti d'ingresso, degustazioni di vino Passerina/Pecorino della scuola e certificati di livello certificati.",
      category: "Pricing"
    },
    {
      question: "Come posso raggiungere Ascoli Piceno da Roma o da altri aeroporti?",
      answer: "Ascoli Piceno è molto accessibile. L'hub internazionale più vicino è Roma Fiumicino (FCO), da cui un comodo autobus espresso diretto ad alta velocità attraversa le panoramiche gole degli Appennini arrivando dritto ad Ascoli in 2,5 ore. In alternativa, l'aeroporto di Ancona Falconara (AOI) dista solo 1 ora di treno.",
      category: "Travel"
    }
  ];

  const faqs = language === 'IT' ? faqsIT : faqsEN;

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-32 md:py-44 bg-travertine-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
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
 
          {/* Interactive elegant Search Bar */}
          <div className="w-full max-w-md relative mt-8">
            <input
              type="text"
              placeholder={language === 'IT' ? 'Cerca nelle FAQ (es. età, Roma, principiante...)' : 'Search FAQs (e.g. age, Rome, beginner...)'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-travertine-50 border border-travertine-300/60 px-5 py-4 pl-12 text-xs text-charcoal-950 placeholder-charcoal-800/40 focus:outline-none focus:border-olive-700 rounded-none transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-charcoal-800/50 stroke-[1.25]" />
          </div>
        </div>
 
        {/* Minimal Accordion List */}
        <div className="border-t border-travertine-300/80 divide-y divide-travertine-300/80">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-8 space-y-4">
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
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-1 text-xs md:text-sm text-charcoal-800 font-light leading-relaxed max-w-3xl pr-8">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="py-16 text-center text-xs text-charcoal-800 font-light">
              {language === 'IT' 
                ? 'Nessuna domanda corrispondente trovata. Prova con termini come "età", "principiante" o "Roma".' 
                : 'No matching questions found. Try search terms like "age", "beginner", or "Rome".'}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
