import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Key, Share2, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AccommodationType {
  id: string;
  name: string;
  italianName: string;
  image: string;
  icon: any;
  tagline: string;
  desc: string;
  features: string[];
}

export default function AccommodationSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("host");

  const typesEN: AccommodationType[] = [
    {
      id: "host",
      name: "Host Family Immersion",
      italianName: "Famiglia Ospitante",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
      icon: Home,
      tagline: "Unparalleled linguistic hospitality",
      desc: "Live with carefully selected Ascoli families who treat you as an honored guest. Share home-cooked regional dinners, practice daily conversational nuances, and enjoy authentic domestic Italian life.",
      features: [
        "Private sunlit room with private or shared bathroom",
        "Includes fresh daily breakfast and home-cooked family dinners",
        "Deep cultural connection and native conversational practice",
        "Located in quiet, safe neighborhoods within walking distance",
        "Linen, laundry services, and high-speed Wi-Fi included"
      ]
    },
    {
      id: "private",
      name: "Boutique Private Apartments",
      italianName: "Appartamento Privato",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
      icon: Key,
      tagline: "Charming independent travertine living",
      desc: "For those seeking complete autonomy. Fully furnished historic apartments featuring high timber ceilings, marble fireplaces, modern kitchens, and direct views of quiet medieval arches and church towers.",
      features: [
        "Fully private studio or 1-bedroom flat in the historic heart",
        "Modern fully-equipped kitchen with classic Italian coffee makers",
        "Ergonomic work desk setup perfect for remote executives",
        "Complete freedom and independence of lifestyle",
        "Weekly professional housekeeping and linen exchange"
      ]
    },
    {
      id: "shared",
      name: "Shared Historic Residences",
      italianName: "Appartamento Condiviso",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      icon: Share2,
      tagline: "Connect with like-minded international peers",
      desc: "Share an elegant multi-room classic Palazzo apartment with other mature students of the Accademia. Balance your privacy with a collaborative communal lounge, exchanging cultural insights over Passerina wine.",
      features: [
        "Private double-bedroom with shared spacious bath & kitchen",
        "Grand shared living salons inside 16th-century structures",
        "Foster deep bonds and practice Italian with housemates",
        "Equipped with modern appliances and central heating",
        "Located steps away from the Palazzo school building"
      ]
    }
  ];

  const typesIT: AccommodationType[] = [
    {
      id: "host",
      name: "Immersione in Famiglia Ospitante",
      italianName: "Famiglia Ospitante",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
      icon: Home,
      tagline: "Ospitalità linguistica senza eguali",
      desc: "Vivi con famiglie di Ascoli accuratamente selezionate che ti tratteranno come un ospite d'onore. Condividi cene casalinghe regionali, pratica le sfumature della conversazione quotidiana e goditi l'autentica vita domestica italiana.",
      features: [
        "Camera privata luminosa con bagno privato o condiviso",
        "Include colazione fresca quotidiana e cene di famiglia preparate in casa",
        "Profonda connessione culturale e pratica della conversazione con madrelingua",
        "Situato in quartieri tranquilli e sicuri a pochi passi dalla scuola",
        "Lenzuola, servizio lavanderia e Wi-Fi ad alta velocità inclusi"
      ]
    },
    {
      id: "private",
      name: "Appartamenti Privati di Pregio",
      italianName: "Appartamento Privato",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
      icon: Key,
      tagline: "Affascinante soggiorno indipendente nel travertino",
      desc: "Per chi cerca la completa autonomia. Appartamenti storici completamente arredati caratterizzati da alti soffitti in legno, caminetti in marmo, cucine moderne e vista diretta su tranquilli archi medievali e torri campanarie.",
      features: [
        "Monolocale o bilocale completamente privato nel cuore storico",
        "Cucina moderna completamente attrezzata con caffettiere classiche italiane",
        "Scrivania ergonomica perfetta per dirigenti o nomadi digitali",
        "Completa libertà e indipendenza di stile di vita",
        "Pulizia professionale settimanale e cambio della biancheria"
      ]
    },
    {
      id: "shared",
      name: "Residenze Storiche Condivise",
      italianName: "Appartamento Condiviso",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      icon: Share2,
      tagline: "Connettiti con colleghi internazionali con le tue stesse passioni",
      desc: "Condividi un elegante appartamento classico in un palazzo storico con altri studenti maturi dell'Accademia. Equilibra la tua privacy con un salone comune collaborativo, scambiando approfondimenti culturali sorseggiando vino Passerina.",
      features: [
        "Camera matrimoniale privata con bagno e cucina ampi e condivisi",
        "Grandi saloni in comune all'interno di strutture del XVI secolo",
        "Crea legami profondi e pratica l'italiano con i tuoi coinquilini",
        "Dotato di elettrodomestici moderni e riscaldamento centralizzato",
        "Situato a pochi passi dall'edificio scolastico (Palazzo)"
      ]
    }
  ];

  const types = language === 'IT' ? typesIT : typesEN;
  const activeData = types.find((t) => t.id === activeTab) || types[0];

  return (
    <section id="accommodation" className="py-32 md:py-44 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-24 space-y-6">
          <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase block">
            {t('accommodation.section_tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal-950 leading-tight">
            {t('accommodation.section_title_part1')} <span className="italic text-olive-800">{t('accommodation.section_title_italic')}</span>
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-charcoal-800 font-light max-w-xl leading-relaxed">
            {t('accommodation.section_desc')}
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Switcher Tabs and detailed text (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex flex-col border border-travertine-200/80 divide-y divide-travertine-200/80 bg-travertine-100/50">
              {types.map((type) => {
                const isSelected = activeTab === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(type.id)}
                    className={`w-full text-left p-6 flex items-center justify-between transition-all duration-500 rounded-none cursor-pointer ${
                      isSelected 
                        ? "bg-olive-900 text-travertine-50" 
                        : "text-charcoal-900 hover:bg-travertine-200/50"
                    }`}
                  >
                    <div className="space-y-1">
                      <span className={`block text-[9px] font-mono uppercase tracking-widest ${
                        isSelected ? "text-terracotta-200" : "text-terracotta-600"
                      }`}>
                        {type.italianName}
                      </span>
                      <span className="block font-serif text-lg lg:text-xl font-light">
                        {type.name}
                      </span>
                    </div>
                    <type.icon className={`w-4 h-4 stroke-[1.25] ${
                      isSelected ? "text-terracotta-400" : "text-olive-700"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Detailed text of selected */}
            <div className="space-y-6 pt-4">
              <span className="text-[10px] font-bold tracking-[0.25em] text-olive-800 uppercase block">
                {activeData.tagline}
              </span>
              <p className="text-xs md:text-sm text-charcoal-800 font-light leading-relaxed">
                {activeData.desc}
              </p>
              
              <ul className="space-y-3 pt-2">
                {activeData.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-charcoal-950 font-light leading-relaxed">
                    <Check className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5 stroke-[1.5]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Large Lifestyle Photograph (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] bg-travertine-200 border border-travertine-300/40 shadow-2xl overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={activeData.image}
                  alt={activeData.name}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-[1s]"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Decorative inner borders */}
              <div className="absolute inset-0 border border-white/20 pointer-events-none m-4" />
              
              <div className="absolute bottom-6 right-6 bg-travertine-50/95 backdrop-blur-md px-5 py-3 border border-travertine-300/60 shadow-xl">
                <span className="text-[9px] font-mono uppercase tracking-widest text-olive-800 font-bold block">
                  {language === 'IT' ? 'Ubicazione Residenza' : 'Residence Location'}
                </span>
                <span className="font-serif text-xs italic text-charcoal-950">
                  {language === 'IT' ? 'Centro Storico di Ascoli Piceno' : 'Ascoli Piceno Historic Core'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
