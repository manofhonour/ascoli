import React from 'react';
import { motion } from 'motion/react';
import { Quote, User } from 'lucide-react';
import { contactInfo, directorQuote, services } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

export default function TestimonialsPage() {
  const notes = [
    {
      id: 'method',
      name: 'Communicative Method',
      role: 'Teaching principle',
      quote: 'The school highlights communication, flexibility, qualified teachers, and authentic teaching material.',
    },
    {
      id: 'courses',
      name: 'Italian Courses',
      role: 'Student pathway',
      quote: 'The course offer includes standard, intensive, extensive, individual, teacher-refresher, online, and custom-made formats.',
    },
    {
      id: 'services',
      name: 'Language Services',
      role: 'Accademia Internazionale',
      quote: 'The wider institution also presents translation, interpreting, exam preparation, tutoring, and Erasmus support.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <img src={accademiaLogo} alt="Accademia logo" className="w-20 h-20 mx-auto object-contain" />
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Method and Voice
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Official messages from <br />
            <span className="italic text-olive-800">the Accademia.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            This page avoids unverified student reviews and instead presents published institutional messages and service areas.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 bg-olive-900 text-travertine-50 border border-olive-800 p-8 space-y-6">
            <Quote className="w-10 h-10 text-terracotta-300/60" />
            <p className="font-serif text-2xl italic font-light leading-relaxed">"{directorQuote}"</p>
            <div>
              <h4 className="font-serif text-lg">{contactInfo.director}</h4>
              <p className="text-[10px] tracking-widest uppercase text-olive-200">Director</p>
            </div>
          </div>

          {notes.map((rev) => (
            <div key={rev.id} className="bg-travertine-100 border border-travertine-200/80 p-8 hover:shadow-2xl transition-all duration-500 space-y-6 relative group">
              <Quote className="absolute top-6 right-6 text-terracotta-500/10 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-serif text-sm md:text-base text-charcoal-950 font-light italic leading-relaxed">
                "{rev.quote}"
              </p>

              <div className="pt-4 border-t border-travertine-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-travertine-300 flex items-center justify-center text-olive-800 shrink-0 border border-travertine-400">
                  <User className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">{rev.name}</h4>
                  <p className="text-[10px] text-charcoal-800 font-light leading-relaxed mt-0.5">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <div key={service.title} className="bg-travertine-100 border border-travertine-200 p-6 space-y-2">
              <h3 className="font-serif text-base text-charcoal-950">{service.title}</h3>
              <p className="text-[11px] text-charcoal-800 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
