import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';

export default function TestimonialsPage() {
  const reviews = [
    {
      id: 'professional',
      name: 'Julian Vance',
      role: 'Luxury Hospitality Creative Director',
      cohort: 'L’Artigiano (Remote Retreat)',
      quote: 'Accademia is not a school; it is an intellectual sanctuary. As a creative lead, I could balance global campaign launches with 1:1 linguistic coaching under original Renaissance frescoes. An elite, restorative experience.',
      rating: 5,
    },
    {
      id: 'retiree',
      name: 'Beatrice & Thomas Lindqvist',
      role: 'Retired Architects',
      cohort: 'L’Umanista (The Humanist)',
      quote: 'We spent two weeks deciphering travertine marble inscriptions and walking ancient rue with Matteo. The residents of Ascoli welcomed us with natural, unforced grace. This is the authentic Italy we have sought for thirty years.',
      rating: 5,
    },
    {
      id: 'solo',
      name: 'Aris Thorne',
      role: 'Writer & Substack Essayist',
      cohort: 'Custom 5-week Sabbatical',
      quote: 'As a solo trans traveler, finding genuine hospitality matters. Accademia is an exquisitely warm, inclusive, and safe space. The team arranged everything from beautiful library desk spots to private local dinners. Truly unforgettable.',
      rating: 5,
    },
    {
      id: 'student',
      name: 'Clara Dupont',
      role: 'Sorbonne Classical Literature Student',
      cohort: 'L’Umanista (The Humanist)',
      quote: 'Diving deep into Italo Calvino’s playful metaphors with Dr. Moretti changed how I read European fiction. Our lessons inside Caffè Meletti felt like entering a mid-century Italian cinema masterpiece.',
      rating: 5,
    },
    {
      id: 'culinary',
      name: 'Marco & Liam',
      role: 'Restaurateurs & Food Historians',
      cohort: 'Il Convivio (The Banquet)',
      quote: 'Learning how to stuff Olives all’Ascolana inside Nonna Luisa’s secret garden, paired with sommelier-guided tasting of Pecorino, was a masterpiece. We learned the vocabulary of slow-food directly from the producers.',
      rating: 5,
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
      {/* Editorial Header */}
      <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
        <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            Student Reflections
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
            Stories from the <br />
            <span className="italic text-olive-800">Ascoli cohort.</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
            Read reflections from professionals, writers, and curious travelers who found confidence through slow Italian immersion.
          </p>
        </div>
      </section>

      {/* Testimonials Masonry / Column Block */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-travertine-100 border border-travertine-200/80 p-8 hover:shadow-2xl transition-all duration-500 space-y-6 relative group">
              <Quote className="absolute top-6 right-6 text-terracotta-500/10 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              
              {/* Star Rating row */}
              <div className="flex gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" />
                ))}
              </div>

              {/* Core Quote Narrative */}
              <p className="font-serif text-sm md:text-base text-charcoal-950 font-light italic leading-relaxed">
                "{rev.quote}"
              </p>

              {/* User Bio Bottom Row */}
              <div className="pt-4 border-t border-travertine-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-travertine-300 flex items-center justify-center text-olive-800 shrink-0 border border-travertine-400">
                  <User className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-charcoal-950 font-semibold">{rev.name}</h4>
                  <p className="text-[10px] text-charcoal-800 font-light leading-relaxed mt-0.5">
                    {rev.role} - <span className="font-semibold text-olive-800">{rev.cohort}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
