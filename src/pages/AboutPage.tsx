import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Compass } from 'lucide-react';
import { contactInfo, images, services } from '../data/officialContent';
import accademiaLogo from '../assets/accademia-logo.png';

export default function AboutPage() {
  const pillars = [
    {
      icon: Compass,
      title: 'Language Services Since 1997',
      text: 'The official profile presents the Accademia as a language-services organisation active since 1997.',
    },
    {
      icon: ShieldCheck,
      title: 'Directed by Dr. Antonella Valentini',
      text: 'The school identifies Dr. Antonella Valentini as director and highlights long experience in language teaching.',
    },
    {
      icon: Heart,
      title: 'Tailor-Made Learning',
      text: 'Lessons can be customized by level, goals, dates, and interest area, including online or in-person formats.',
    },
    {
      icon: Sparkles,
      title: 'Italian Culture in Context',
      text: 'Language study can connect with Ascoli Piceno, food, wine, art, literature, history, and local traditions.',
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
        <div className="absolute inset-0 bg-[radial-gradient(#CBB49C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <img src={accademiaLogo} alt="Accademia Italiana logo" className="w-20 h-20 object-contain mx-auto" />
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Chi siamo
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Italian teaching and language services <br />
            <span className="italic text-olive-800">in Ascoli Piceno.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Accademia Italiana and Accademia Internazionale share a practical mission: teaching languages, supporting communication, and helping students experience Italian culture with care.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] tracking-widest uppercase font-bold text-olive-800 block">
            The School
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-charcoal-950 font-light leading-snug">
            A long-standing language centre led by {contactInfo.director}.
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            The official site describes an institution dedicated to language services since 1997, with Italian courses for foreigners, language services, teacher training, tutoring, exam preparation, and international support.
          </p>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            The Italian course offer is practical and flexible: small standard groups, intensive courses, individual lessons, extensive courses, teacher-refreshers, and custom-made study plans in Ascoli Piceno or online.
          </p>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] bg-travertine-200 overflow-hidden shadow-2xl relative">
            <img
              src={images.ascoli}
              alt="Historic travertine architecture in Ascoli Piceno"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-olive-900 text-travertine-50 p-6 max-w-xs shadow-xl hidden md:block">
            <span className="font-serif text-sm italic font-light block leading-relaxed">
              "Live Italy, Speak Italian."
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-travertine-100 border-y border-travertine-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase">
              Official Commitments
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-charcoal-950">
              What the school stands on.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-travertine-50 p-8 border border-travertine-200/60 space-y-4">
                  <Icon className="w-6 h-6 text-olive-800 stroke-[1.25]" />
                  <h3 className="font-serif text-lg text-charcoal-950">{pillar.title}</h3>
                  <p className="text-xs text-charcoal-800 leading-relaxed font-light">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 space-y-4 max-w-xl">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Services
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950">
            Accademia Italiana - Accademia Internazionale.
          </h2>
          <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
            The institution combines Italian teaching with a wider language-services offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="space-y-3 bg-travertine-100 p-6 border border-travertine-200/60 hover:shadow-xl transition-all duration-300">
              <h3 className="font-serif text-xl text-charcoal-950 font-normal">{service.title}</h3>
              <p className="text-xs text-charcoal-800 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
