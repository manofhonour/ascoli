import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Story {
  name: string;
  country: string;
  journey: string;
  quote: string;
  image: string;
  before: string;
  after: string;
}

export default function StudentStories() {
  const { language, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const storiesEN: Story[] = [
    {
      name: "Claire Vance",
      country: "United States",
      journey: "Creative Novelist & Poet",
      quote: "At Accademia Italiana, language ceased to be a mechanical catalog of verb conjugations. I began to sense the golden light hitting Piazza del Popolo, and my prose bloomed. I came for a brief course and found a lifetime's inspiration.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80",
      before: "Conjugating stiff verb tables inside high-walled classrooms.",
      after: "Expressing lyrical dialogue, nuances of art history, and local humors."
    },
    {
      name: "Dr. Hiroshi Tanaka",
      country: "Japan",
      journey: "Retired Surgeon & Classical Pianist",
      quote: "My weeks in Ascoli Piceno were a majestic second act of life. The small cohort size allowed me to build confidence. My tutors patiently sat with me at Caffè Meletti to discuss cinematic themes over morning espresso.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
      before: "Muted hesitancy, struggling with phonetic vowel timing.",
      after: "Debating neorealistic cinema, ordering olives, and trading jokes with artisans."
    },
    {
      name: "Marc Dumont",
      country: "France",
      journey: "Landscape Architect",
      quote: "I wanted to study architecture through a living medium. The school guided me through the golden travertine facades of Marche. I learned specialized masonry and construction vocabulary while sketching Renaissance doors.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      before: "Abstract textbook dictionary terms without material context.",
      after: "Confidently describing travertine quarrying, structural arches, and gardens."
    },
    {
      name: "Sarah Al-Jamil",
      country: "Saudi Arabia",
      journey: "Graphic Designer",
      quote: "As a designer, the pure typographic environment and lack of commercial clutter in Ascoli was a sanctuary. The professors adjusted their lessons around my specific creative vocabulary and research on Renaissance printing.",
      image: "https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&w=400&h=400&q=80",
      before: "Basic tourist pleasantries with zero conversational continuity.",
      after: "Negotiating with local print makers and debating typeface design over wine."
    }
  ];

  const storiesIT: Story[] = [
    {
      name: "Claire Vance",
      country: "Stati Uniti",
      journey: "Scrittrice Creativa e Poetessa",
      quote: "Alla scuola Accademia Italiana, la lingua ha smesso di essere un catalogo meccanico di coniugazioni verbali. Ho iniziato a percepire la luce dorata che colpisce Piazza del Popolo, e la mia prosa è fiorita. Sono venuta per un breve corso e ho trovato l'ispirazione per una vita.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80",
      before: "Coniugazione di tabelle verbali rigide all'interno di aule dalle pareti alte.",
      after: "Esprimere dialoghi lirici, sfumature di storia dell'arte e umorismo locale."
    },
    {
      name: "Dr. Hiroshi Tanaka",
      country: "Giappone",
      journey: "Chirurgo in Pensione e Pianista Classico",
      quote: "Le mie settimane ad Ascoli Piceno sono state un maestoso secondo atto della vita. Le dimensioni ridotte del gruppo mi hanno permesso di acquisire fiducia. I miei insegnanti si sedevano pazientemente con me al Caffè Meletti per discutere di temi cinematografici davanti all'espresso del mattino.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
      before: "Silenziosa esitazione, difficoltà con i tempi delle vocali fonetiche.",
      after: "Discutere di cinema neorealista, ordinare olive e scambiare battute con gli artigiani."
    },
    {
      name: "Marc Dumont",
      country: "Francia",
      journey: "Architetto del Paesaggio",
      quote: "Volevo studiare l'architettura attraverso un mezzo vivente. La scuola mi ha guidato attraverso le facciate in travertino dorato delle Marche. Ho imparato un vocabolario specialistico di muratura e costruzione mentre disegnavo porte rinascimentali.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      before: "Termini astratti del dizionario dei libri di testo senza contesto materiale.",
      after: "Descrivere con sicurezza l'estrazione del travertino, gli archi strutturali e i giardini."
    },
    {
      name: "Sarah Al-Jamil",
      country: "Arabia Saudita",
      journey: "Graphic Designer",
      quote: "Come designer, l'ambiente tipografico puro e la mancanza di disordine commerciale ad Ascoli è stato un santuario. I professori hanno adattato le lezioni al mio vocabolario creativo specifico e alle mie ricerche sulla stampa rinascimentale.",
      image: "https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&w=400&h=400&q=80",
      before: "Semplici convenevoli turistici con zero continuità di conversazione.",
      after: "Negoziare con gli stampatori locali e discutere di design dei caratteri tipografici davanti al vino."
    }
  ];

  const stories = language === 'IT' ? storiesIT : storiesEN;

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="student-stories" className="py-24 md:py-32 bg-travertine-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with Slider Navigation buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
              {t('stories.section_tag')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 leading-tight">
              {t('stories.section_title_part1')} <span className="italic text-olive-800">{t('stories.section_title_italic')}</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="border border-charcoal-950/20 hover:border-charcoal-950 p-3 text-charcoal-800 hover:text-charcoal-950 transition-colors bg-travertine-50 rounded-none cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="border border-charcoal-950/20 hover:border-charcoal-950 p-3 text-charcoal-800 hover:text-charcoal-950 transition-colors bg-travertine-50 rounded-none cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[480px] lg:w-[600px] shrink-0 snap-start bg-travertine-50 border border-travertine-300 p-6 md:p-8 space-y-6 flex flex-col justify-between"
            >
              {/* Top Quote Icon */}
              <div className="flex items-start justify-between">
                <Quote className="w-10 h-10 text-terracotta-500/20 stroke-[1.25]" />
                <div className="text-[10px] font-mono tracking-widest text-olive-800 bg-olive-50 px-2 py-0.5 border border-olive-200 uppercase font-semibold">
                  {story.journey}
                </div>
              </div>

              {/* Central Quote text */}
              <p className="font-serif text-sm md:text-lg italic text-charcoal-900 leading-relaxed font-light">
                "{story.quote}"
              </p>

              {/* Before and After Metrics Box */}
              <div className="bg-travertine-100 p-4 border-l-2 border-olive-700/60 space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-mono font-bold text-terracotta-600 uppercase w-12 pt-0.5 shrink-0">{language === 'IT' ? 'Prima:' : 'Before:'}</span>
                  <p className="text-xs text-charcoal-800 font-light">{story.before}</p>
                </div>
                <div className="flex items-start gap-2 border-t border-travertine-200/50 pt-2">
                  <span className="text-[10px] font-mono font-bold text-olive-700 uppercase w-12 pt-0.5 shrink-0">{language === 'IT' ? 'Dopo:' : 'After:'}</span>
                  <p className="text-xs text-charcoal-950 font-medium">{story.after}</p>
                </div>
              </div>

              {/* Footer Author Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-travertine-200/50">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-travertine-300">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover grayscale brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal-950 font-normal">
                    {story.name}
                  </h4>
                  <span className="block text-[10px] tracking-wider text-charcoal-800 font-sans uppercase">
                    {story.country}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
