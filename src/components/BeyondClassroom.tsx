import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface Experience {
  title: string;
  subTitle: string;
  tagline: string;
  description: string;
  image: string;
  quote: string;
  author: string;
}

export default function BeyondClassroom() {
  const { language, t } = useLanguage();

  const experiencesEN: Experience[] = [
    {
      title: "The Culinary Masterclass",
      subTitle: "La Cucina Marchigiana",
      tagline: "Sourcing and rolling fresh hand-crafted pasta",
      description: "Our language immersion extends straight into our rustic culinary laboratory. Guided by nonna and local chefs, you learn the names of herbs, vegetables, and flour while preparing Olive all'Ascolana (stuffed fried olives) and hand-rolled tagliatelle. Here, grammar takes the shape of sensory creation.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      quote: "To know a country's language is to taste its food in its rawest, most sacred domestic setting.",
      author: "Chef Rossana"
    },
    {
      title: "The Travertine Promenade",
      subTitle: "Conversazioni in Piazza",
      tagline: "Walking lectures in Golden Travertine Plazas",
      description: "We dismiss static classrooms in favor of the fresh air of Piazza del Popolo. Walk through the bustling Piazza Arringo, talk with local cheese producers at the organic farmer's market, and negotiate prices in Italian. Every stroll is a vibrant oral lesson supported by real, encouraging smiles.",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
      quote: "The street is our true blackboard. Travertine stone echoes voices with unique clarity.",
      author: "Vittorio, Senior Tutor"
    },
    {
      title: "Sommelier-led Vineyard Tastings",
      subTitle: "L'Arte del Vino",
      tagline: "ExploringPasserina and Pecorino vintage notes",
      description: "Delve into the historic wine caves of Marche. Sample the crisp minerality of Passerina and Pecorino, and the deep, structured red of Rosso Piceno. Learn to describe color, scent, body, and heritage like a certified Italian sommelier, practicing complex adjectives over shared cheese boards.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      quote: "Wine is bottled poetry, and in Italy, poetry is spoken with elegant grammar.",
      author: "Edoardo, Master Sommelier"
    },
    {
      title: "Historical Whispers & Festivals",
      subTitle: "La Quintana & Musei",
      tagline: "Immersive access to historic jousts and art galleries",
      description: "Step into the medieval soul of Ascoli during the Quintana, a breathtaking 14th-century jousting festival where the entire city dresses in opulent Renaissance velvets. We tour hidden marble sculpture museums, attend intimate church chamber concerts, and learn the folklore behind the monuments.",
      image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80",
      quote: "We do not look at Italian history from behind glass. We walk inside it.",
      author: "Daria, Art Historian"
    }
  ];

  const experiencesIT: Experience[] = [
    {
      title: "Masterclass Culinaria",
      subTitle: "La Cucina Marchigiana",
      tagline: "Scegliere gli ingredienti e tirare la pasta fresca fatta a mano",
      description: "La nostra immersione linguistica si estende direttamente nel nostro laboratorio culinario rustico. Guidati da una nonna e da chef locali, imparerai i nomi di erbe, verdure e farine mentre prepari le Olive all'Ascolana e le tagliatelle fatte a mano. Qui, la grammatica prende la forma di una creazione sensoriale.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      quote: "Conoscere la lingua di un paese significa assaporare il suo cibo nel suo ambiente domestico più intimo e sacro.",
      author: "Chef Rossana"
    },
    {
      title: "La Passeggiata in Travertino",
      subTitle: "Conversazioni in Piazza",
      tagline: "Lezioni itineranti nelle piazze di travertino dorato",
      description: "Congediamo le aule statiche a favore dell'aria fresca di Piazza del Popolo. Cammina attraverso la vivace Piazza Arringo, parla con i produttori di formaggio locali al mercato biologico e negozia i prezzi in italiano. Ogni passeggiata è una vibrante lezione orale supportata da sorrisi reali e incoraggianti.",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
      quote: "La strada è la nostra vera lavagna. La pietra di travertino riecheggia le voci con una chiarezza unica.",
      author: "Vittorio, Tutor Senior"
    },
    {
      title: "Degustazioni in Vigna con Sommelier",
      subTitle: "L'Arte del Vino",
      tagline: "Esplorare le note d'annata di Passerina, Pecorino e Rosso Piceno",
      description: "Addentrati nelle storiche cantine marchigiane. Assapora la fresca mineralità di Passerina e Pecorino, e il rosso profondo e strutturato del Rosso Piceno. Impara a descrivere colore, profumo, corpo e provenienza come un sommelier italiano certificato, praticando aggettivi complessi davanti a taglieri di formaggi condivisi.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      quote: "Il vino è poesia in bottiglia, e in Italia la poesia si parla con un'elegante grammatica.",
      author: "Edoardo, Maestro Sommelier"
    },
    {
      title: "Sussurri Storici e Festival",
      subTitle: "La Quintana & Musei",
      tagline: "Accesso immersivo a giostre storiche e gallerie d'arte",
      description: "Entra nell'anima medievale di Ascoli durante la Quintana, una mozzafiato giostra del XIV secolo in cui l'intera città si veste con sontuosi velluti rinascimentali. Visitiamo musei di scultura in marmo nascosti, partecipiamo a concerti da camera intimi e impariamo il folklore dietro i monumenti.",
      image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80",
      quote: "Non guardiamo la storia italiana da dietro un vetro. Ci camminiamo dentro.",
      author: "Daria, Storica dell'Arte"
    }
  ];

  const experiences = language === 'IT' ? experiencesIT : experiencesEN;

  return (
    <section id="beyond-classroom" className="py-24 md:py-32 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            {t('beyond.section_tag')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-charcoal-950 leading-tight">
            {t('beyond.section_title_part1')} <span className="italic text-olive-800">{t('beyond.section_title_italic')}</span>
          </h2>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-xl">
            {t('beyond.section_desc')}
          </p>
        </div>

        {/* Alternating Narrative Sections */}
        <div className="space-y-24 md:space-y-36">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content Col */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-1">
                    <span className="font-serif italic text-xs text-terracotta-600">
                      {exp.subTitle}
                    </span>
                    <h3 className="font-serif text-3xl font-light text-charcoal-950">
                      {exp.title}
                    </h3>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-olive-700 font-bold">
                      {exp.tagline}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* High end editorial quote */}
                  <div className="border-l border-terracotta-500 pl-4 py-1 italic font-serif text-xs md:text-sm text-charcoal-900 bg-travertine-100/50">
                    "{exp.quote}"
                    <span className="block text-[9px] tracking-wider uppercase font-semibold text-olive-800 not-italic mt-1.5 font-sans">
                      — {exp.author}
                    </span>
                  </div>
                </div>

                {/* Photo Col */}
                <div className={`lg:col-span-7 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative aspect-[3/2] overflow-hidden bg-travertine-100 shadow-xl border border-travertine-300/40 group"
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-[1s] ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Minimal graphic frame decoration */}
                    <div className="absolute inset-0 border border-white/20 pointer-events-none m-3" />
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
