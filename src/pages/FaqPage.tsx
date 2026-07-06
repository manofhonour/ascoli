import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, Heart } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FaqPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const faqs: FaqItem[] = [
    {
      id: 'visa',
      category: 'Admissions & Visas',
      question: 'Do I need a student visa to study in Ascoli Piceno?',
      answer: 'For citizens of the United States, United Kingdom, Canada, Australia, and New Zealand, a tourist stay (Schengen) allows you to reside and study with us for up to 90 days without a formal visa. For stays longer than 12 weeks, our team provides full custom supporting documents and letters of admission to facilitate your long-term study visa application at your local Italian Consulate.',
    },
    {
      id: 'levels',
      category: 'Academic Details',
      question: 'What if I am an absolute beginner? Will I feel left out?',
      answer: 'Not at all. In fact, many of our guests begin with absolute zero Italian. Because we limit class size to a maximum of 6 (and emphasize private 1:1 sessions), we can accommodate absolute novices without pressure. We teach you immediate survival phrases for Caffè Meletti on your first morning so you can practice instantly.',
    },
    {
      id: 'inclusive',
      category: 'Social Environment',
      question: 'Is the academy LGBTQ+ friendly, and welcoming to solo travelers?',
      answer: 'Yes, absolutely. Accademia Italiana is built on the values of safety, openness, and sincere community care. We are a proud LGBTQ+ welcoming space. Whether you are traveling solo, with a partner, or seeking a quiet transitional sabbatical, our small communal dinners, group walks, and friendly guides ensure you are integrated with natural warmth from day one.',
    },
    {
      id: 'lodging',
      category: 'Lodging & Stays',
      question: 'What is included in my private historic residence?',
      answer: 'Every private apartment (inside Palazzo Sgariglia or nearby nobles estates) includes high-speed fiber Wi-Fi, premium French linen sheets, fluffly bath towels, a fully stocked gourmet kitchen (oil, coffee, water, regional wine), and a spacious writing desk. Bi-weekly professional housekeeping and fresh linens are fully included in your stay.',
    },
    {
      id: 'cancel',
      category: 'Policies & Booking',
      question: 'What is your refund and cancellation policy?',
      answer: 'We understand that travel parameters shift. Because we pre-book noble historic apartments, we require a 30% deposit to secure your stay. Stays can be fully rescheduled or cancelled with a full refund up to 45 days prior to your arrival date. Cancellations inside 45 days can be rolled forward into any future season within 18 months.',
    },
  ];

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      {/* Editorial Header */}
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#384232_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive-800 uppercase block">
            Domande Frequenti
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Answering your <br />
            <span className="italic text-terracotta-600">travel concerns.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about preparing for your Italian chapter, from local visa parameters to structural apartment details and safety guidelines.
          </p>
        </div>
      </section>

      {/* Accordions List Section */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-6">
          {faqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-travertine-100 border border-travertine-200 hover:border-travertine-300 transition-all duration-300 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-2">
                    <span className="text-[9px] tracking-wider uppercase font-bold text-olive-800 block">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl text-charcoal-950 font-normal leading-snug">
                      {faq.question}
                    </h3>
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

        {/* Safety & Welcoming Callout */}
        <div className="mt-16 bg-olive-50 border border-olive-200/80 p-8 flex flex-col md:flex-row gap-6 items-start">
          <Heart className="w-8 h-8 text-olive-800 shrink-0 stroke-[1.25]" />
          <div className="space-y-2">
            <h4 className="font-serif text-base text-charcoal-950 font-semibold">
              Looking for a custom consultation or special requirements?
            </h4>
            <p className="text-xs text-olive-900 leading-relaxed font-light">
              We specialize in accommodating custom timelines, corporate sabbaticals, specific accessibility requirements, or food allergies. Reach out directly to our concierge team at <span className="font-medium text-charcoal-950">concierge@accademia-ascoli.it</span>.
            </p>
          </div>
        </div>

      </section>
    </motion.div>
  );
}
