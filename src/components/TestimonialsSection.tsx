import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, Play, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  country: string;
  rating: number;
}

export default function TestimonialsSection() {
  const { language, t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const testimonialsEN: Testimonial[] = [
    {
      id: 1,
      quote: "My two weeks at Accademia Italiana were arguably the best travel experience of my life. The teachers possess an absolute mastery of linguistics, the location has zero commercial noise, and the entire atmosphere is designed to soothe the creative spirit.",
      author: "David Vance",
      role: "Novelist & Scholar",
      country: "United Kingdom",
      rating: 5
    },
    {
      id: 2,
      quote: "Most language schools feel institutional or crowded. Accademia feels like a private writer's residency. I learned more in ten days here than in months of virtual classes.",
      author: "Marielle Laurent",
      role: "Interior Architect",
      country: "France",
      rating: 5
    },
    {
      id: 3,
      quote: "The combination of high-end conversational classes and immersive local gastronomy is pure genius. You learn grammar not to pass an arbitrary test, but to argue about olive oil and Passerina wine notes with local legends.",
      author: "Jonathan Miller",
      role: "Remote Creative Director",
      country: "Canada",
      rating: 5
    }
  ];

  const testimonialsIT: Testimonial[] = [
    {
      id: 1,
      quote: "Le mie due settimane all'Accademia Italiana sono state senza dubbio la migliore esperienza di viaggio della mia vita. Gli insegnanti possiedono un'assoluta padronanza della linguistica, la sede ha zero inquinamento acustico commerciale e l'intera atmosfera è progettata per lenire lo spirito creativo.",
      author: "David Vance",
      role: "Romanziere e Studioso",
      country: "Regno Unito",
      rating: 5
    },
    {
      id: 2,
      quote: "La maggior parte delle scuole di lingua sembrano normali uffici o aule universitarie affollate. L'Accademia sembra una residenza per scrittori privata e lussuosa. Ho imparato di più in dieci giorni qui che in mesi di lezioni virtuali.",
      author: "Marielle Laurent",
      role: "Architetto d'Interni",
      country: "Francia",
      rating: 5
    },
    {
      id: 3,
      quote: "La combinazione di lezioni di conversazione di alto livello e gastronomia locale immersiva è pura genialità. Impari la grammatica non per superare un test arbitrario, ma per discutere di olio d'oliva e note di vino Passerina con le leggende locali.",
      author: "Jonathan Miller",
      role: "Direttore Creativo Remoto",
      country: "Canada",
      rating: 5
    }
  ];

  const testimonials = language === 'IT' ? testimonialsIT : testimonialsEN;

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-32 md:py-44 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Badges: Trustpilot / Google Reviews Style */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-travertine-200 pb-16 mb-24">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
            <span className="text-[10px] tracking-[0.25em] font-bold text-terracotta-600 uppercase">
              {t('testimonials.excellent_reviews')}
            </span>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-olive-800 text-olive-800 stroke-none" />
              <Star className="w-4 h-4 fill-olive-800 text-olive-800 stroke-none" />
              <Star className="w-4 h-4 fill-olive-800 text-olive-800 stroke-none" />
              <Star className="w-4 h-4 fill-olive-800 text-olive-800 stroke-none" />
              <Star className="w-4 h-4 fill-olive-800 text-olive-800 stroke-none" />
              <span className="font-serif text-xl text-charcoal-950 font-light ml-2">4.9 / 5.0</span>
            </div>
            <p className="text-xs text-charcoal-800 font-light">
              {t('testimonials.based_on')}
            </p>
          </div>

          <div className="flex items-center gap-8 divide-x divide-travertine-200">
            <div className="flex flex-col items-center px-6">
              <span className="text-xs font-sans font-extrabold text-charcoal-900 tracking-wider uppercase">Google</span>
              <div className="flex items-center gap-1 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500 stroke-none" />
                ))}
              </div>
              <span className="text-[9px] text-charcoal-800 uppercase tracking-[0.18em] mt-2">
                {t('testimonials.google_rating')}
              </span>
            </div>

            <div className="flex flex-col items-center px-6 pl-12">
              <span className="text-xs font-sans font-bold text-olive-800 tracking-wider uppercase">
                {language === 'IT' ? 'Note Alumni' : 'Student Notes'}
              </span>
              <div className="flex items-center gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-3 h-3 bg-[#00b67a] inline-block" />
                ))}
              </div>
              <span className="text-[9px] text-charcoal-800 uppercase tracking-[0.18em] mt-2">
                {t('testimonials.trustpilot_status')}
              </span>
            </div>
          </div>
        </div>

        {/* Large Editorial Quote & Video Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Big slider (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="relative">
              <Quote className="absolute -top-12 -left-8 text-terracotta-500/10 w-24 h-24 stroke-[0.5]" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  className="space-y-8"
                >
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-extralight italic text-charcoal-950 leading-relaxed">
                    "{activeTestimonial.quote}"
                  </p>
 
                  <div className="flex items-center gap-1 pt-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-olive-800 text-olive-800 stroke-none" />
                    ))}
                  </div>

                  <div>
                    <h4 className="font-serif text-lg lg:text-xl font-light text-charcoal-950">
                      {activeTestimonial.author}
                    </h4>
                    <span className="block text-[11px] text-charcoal-800 font-light font-sans tracking-wide mt-1">
                      {activeTestimonial.role} - <span className="font-medium text-charcoal-950">{activeTestimonial.country}</span>
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation slider controls */}
            <div className="flex items-center gap-4 pt-6">
              <button
                onClick={handlePrev}
                className="border border-charcoal-950/15 hover:border-charcoal-950 p-3.5 text-charcoal-800 hover:text-charcoal-950 transition-all duration-300 rounded-none bg-travertine-50 hover:bg-travertine-100 cursor-pointer"
                aria-label="Previous quote"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.25]" />
              </button>
              <span className="text-[10px] font-mono text-charcoal-800/80 tracking-widest">
                0{activeIdx + 1} / 0{testimonials.length}
              </span>
              <button
                onClick={handleNext}
                className="border border-charcoal-950/15 hover:border-charcoal-950 p-3.5 text-charcoal-800 hover:text-charcoal-950 transition-all duration-300 rounded-none bg-travertine-50 hover:bg-travertine-100 cursor-pointer"
                aria-label="Next quote"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.25]" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Video Testimonial player (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] bg-travertine-200 border border-travertine-300/40 shadow-2xl overflow-hidden group">
              {!isVideoPlaying ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                    alt="Alumni Video Testimonial Preview"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-[1s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-charcoal-950/10 transition-colors duration-500" />
                  
                  {/* Outer circle layout */}
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-travertine-50/95 backdrop-blur-md flex items-center justify-center text-olive-800 shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer border border-travertine-300/50"
                    aria-label="Play video"
                  >
                    <Play className="w-5 h-5 fill-olive-800 stroke-none translate-x-0.5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-travertine-50 flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] tracking-[0.25em] font-mono uppercase text-terracotta-200">
                        {t('testimonials.video_diary')}
                      </span>
                      <span className="font-serif text-sm italic">
                        {t('testimonials.video_quote')}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono bg-olive-900/90 backdrop-blur-sm px-2.5 py-1.5 border border-olive-700/50">
                      2:14 Min
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-charcoal-950 flex flex-col items-center justify-center p-8 text-center text-travertine-100 space-y-4">
                  <span className="text-[10px] font-mono text-terracotta-500 tracking-widest uppercase font-bold">
                    {t('testimonials.story_label')}
                  </span>
                  <p className="font-serif text-lg italic max-w-xs leading-relaxed">
                    {t('testimonials.story_text')}
                  </p>
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="border border-travertine-100/30 hover:border-travertine-100 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold bg-travertine-100/10 hover:bg-travertine-100/20 transition-all duration-300 rounded-none cursor-pointer"
                  >
                    {t('testimonials.close_video')}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
