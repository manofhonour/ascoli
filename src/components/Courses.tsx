import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Course {
  id: string;
  name: string;
  italianName: string;
  image: string;
  duration: string;
  hoursPerWeek: string;
  description: string;
  hoverDetails: string[];
}

export default function Courses() {
  const { language, t } = useLanguage();

  const coursesEN: Course[] = [
    {
      id: "intensive",
      name: "Intensive Course",
      italianName: "Corso Intensivo",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
      duration: "1 - 48 Weeks",
      hoursPerWeek: "20 Hours/week",
      description: "Our signature language pathway combining intensive grammatical structure in the mornings with lively cultural debates and discussions in the afternoons.",
      hoverDetails: [
        "Maximum 6 students per classroom",
        "Morning grammar & structures (9:00 - 13:00)",
        "Daily afternoon excursions & speaking groups",
        "Weekly progress assessment with director",
        "Certificate of linguistic level upon completion"
      ]
    },
    {
      id: "semi-intensive",
      name: "Semi-Intensive Course",
      italianName: "Corso Semintensivo",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80",
      duration: "1 - 24 Weeks",
      hoursPerWeek: "12 Hours/week",
      description: "A gentler linguistic rhythm that focuses on high-frequency conversational fluency, leaving afternoons free to absorb Italy at your own leisure.",
      hoverDetails: [
        "Perfect for slow travelers & culture seekers",
        "Focus on listening comprehension & dialogue",
        "Morning sessions (9:00 - 11:30, Mon - Thu)",
        "Accompanied visits to local artisan shops",
        "Includes access to all cultural resources"
      ]
    },
    {
      id: "private",
      name: "Private Tuition",
      italianName: "Lezioni Private",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      duration: "Customizable",
      hoursPerWeek: "Flexible (10 - 30 Hrs)",
      description: "A fully customized linguistic itinerary tailored around your profession, creative fields, or private personal development goals.",
      hoverDetails: [
        "1-on-1 private instruction with senior staff",
        "Syllabus tailored to your exact vocabulary needs",
        "Flexible scheduling to fit your remote hours",
        "Option to study special topics (Art, History, Opera)",
        "In-depth writing & phonetics reviews"
      ]
    },
    {
      id: "fifty-plus",
      name: "Italian for 50+",
      italianName: "Il Corso d'Oro",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
      duration: "2 Weeks",
      hoursPerWeek: "15 Hours/week",
      description: "Specially designed for golden-age travelers. Blend standard language learning with high-end food, wine tasting, and relaxed historical walking tours.",
      hoverDetails: [
        "Shared with a peer cohort of mature travelers",
        "Daily culinary activities and wine tastings",
        "Guided historical walks through private gardens",
        "Includes a scenic weekend excursion to Marche coast",
        "Genteel and supportive teaching pace"
      ]
    },
    {
      id: "business",
      name: "Business Italian",
      italianName: "Italiano per gli Affari",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      duration: "1 - 4 Weeks",
      hoursPerWeek: "25 Hours/week",
      description: "An intensive, high-level vocabulary dive designed for corporate executives, diplomat services, lawyers, and design industry leaders.",
      hoverDetails: [
        "Focus on negotiation, syntax, and business culture",
        "Drafting luxury marketing & technical documentation",
        "Mock Italian boardroom presentations",
        "Individual analysis of sector-specific jargon",
        "Includes networking dinners with local business owners"
      ]
    },
    {
      id: "online",
      name: "Online Preparation",
      italianName: "L'Accademia Online",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      duration: "Continuous",
      hoursPerWeek: "Customizable",
      description: "Prepare for your Italian sojourn before departure, or maintain your fluency from home after leaving Ascoli Piceno.",
      hoverDetails: [
        "Interactive virtual boardrooms via high-speed feeds",
        "Direct continuity with your same in-person tutors",
        "Online grammar modules & conversation homework",
        "Access to digital media and streaming libraries",
        "Flexible hour packages that never expire"
      ]
    }
  ];

  const coursesIT: Course[] = [
    {
      id: "intensive",
      name: "Corso Intensivo",
      italianName: "Intensive Course",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
      duration: "1 - 48 Settimane",
      hoursPerWeek: "20 Ore/settimana",
      description: "Il nostro percorso linguistico distintivo che combina lo studio intensivo della grammatica al mattino con vivaci dibattiti e discussioni culturali nel pomeriggio.",
      hoverDetails: [
        "Massimo 6 studenti per classe",
        "Grammatica e strutture al mattino (9:00 - 13:00)",
        "Escursioni pomeridiane giornaliere e gruppi di conversazione",
        "Valutazione dei progressi settimanale con il direttore",
        "Certificato di livello linguistico al completamento"
      ]
    },
    {
      id: "semi-intensive",
      name: "Corso Semintensivo",
      italianName: "Semi-Intensive Course",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80",
      duration: "1 - 24 Settimane",
      hoursPerWeek: "12 Ore/settimana",
      description: "Un ritmo linguistico più dolce focalizzato sulla fluidità della conversazione quotidiana, lasciando i pomeriggi liberi per scoprire l'Italia in totale relax.",
      hoverDetails: [
        "Perfetto per viaggiatori lenti e amanti della cultura",
        "Focalizzazione sulla comprensione orale e sul dialogo",
        "Sessioni mattutine (9:00 - 11:30, lun - gio)",
        "Visite accompagnate a botteghe artigiane locali",
        "Include l'accesso a tutte le risorse culturali"
      ]
    },
    {
      id: "private",
      name: "Lezioni Private",
      italianName: "Private Tuition",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      duration: "Personalizzabile",
      hoursPerWeek: "Flessibile (10 - 30 Ore)",
      description: "Un itinerario linguistico completamente personalizzato, cucito intorno alla tua professione, ai tuoi campi d'interesse o ai tuoi obiettivi di crescita personale.",
      hoverDetails: [
        "Istruzione privata 1-a-1 con docenti senior",
        "Programma su misura per le tue esigenze di vocabolario",
        "Pianificazione flessibile in base al tuo lavoro da remoto",
        "Opzione per studiare argomenti speciali (Arte, Storia, Opera)",
        "Recensioni approfondite di scrittura e fonetica"
      ]
    },
    {
      id: "fifty-plus",
      name: "Il Corso d'Oro (50+)",
      italianName: "Italian for 50+",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
      duration: "2 Settimane",
      hoursPerWeek: "15 Ore/settimana",
      description: "Progettato appositamente per viaggiatori della terza età. Unisce l'apprendimento della lingua a degustazioni enogastronomiche di alto livello e passeggiate storiche.",
      hoverDetails: [
        "Condiviso con una coorte di viaggiatori maturi",
        "Attività culinarie giornaliere e degustazioni di vini",
        "Passeggiate storiche guidate in giardini privati",
        "Include una splendida escursione nel weekend sulla costa marchigiana",
        "Ritmo d'insegnamento cortese e accogliente"
      ]
    },
    {
      id: "business",
      name: "Italiano per gli Affari",
      italianName: "Business Italian",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      duration: "1 - 4 Settimane",
      hoursPerWeek: "25 Ore/settimana",
      description: "Un'immersione intensiva nel vocabolario commerciale di alto livello, progettata per dirigenti aziendali, diplomatici, avvocati e leader del design.",
      hoverDetails: [
        "Focus su negoziazione, sintassi e cultura aziendale",
        "Redazione di documentazione di marketing e tecnica per il lusso",
        "Presentazioni simulate in consigli di amministrazione italiani",
        "Analisi individuale del gergo specifico del settore",
        "Include cene di networking con imprenditori locali"
      ]
    },
    {
      id: "online",
      name: "Preparazione Online",
      italianName: "Online Preparation",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      duration: "Continuo",
      hoursPerWeek: "Personalizzabile",
      description: "Prepara il tuo soggiorno in Italia prima della partenza, o mantieni la tua fluidità da casa dopo aver lasciato Ascoli Piceno.",
      hoverDetails: [
        "Aule virtuali interattive con connessione veloce",
        "Continuità diretta con gli stessi tutor in presenza",
        "Moduli di grammatica online e compiti di conversazione",
        "Accesso a librerie digitali e streaming multimediali",
        "Pacchetti orari flessibili che non scadono mai"
      ]
    }
  ];

  const courses = language === 'IT' ? coursesIT : coursesEN;

  return (
    <section id="courses" className="py-32 md:py-44 bg-travertine-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24 space-y-6">
          <span className="text-[10px] font-bold tracking-[0.3em] text-terracotta-600 uppercase block">
            {t('courses.section_tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-charcoal-950 leading-tight">
            {t('courses.section_title_part1')} <span className="italic text-olive-800">{t('courses.section_title_italic')}</span>
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-charcoal-800 font-light max-w-xl leading-relaxed">
            {t('courses.section_desc')}
          </p>
        </div>

        {/* 3x2 Grid of Luxury Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative bg-travertine-50 border border-travertine-300/75 h-[480px] overflow-hidden flex flex-col justify-end p-8 cursor-pointer"
            >
              {/* Outer image background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s] ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Standard View Content */}
              <div className="relative z-10 space-y-4 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="space-y-1">
                  <span className="font-serif italic text-xs text-terracotta-100/80 block">
                    {course.italianName}
                  </span>
                  <h3 className="font-serif text-2xl text-travertine-50 font-normal leading-tight">
                    {course.name}
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-olive-100 pt-1">
                    <span>{course.duration}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                    <span>{course.hoursPerWeek}</span>
                  </div>
                </div>

                <p className="text-xs text-travertine-100 font-light leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-terracotta-100 group-hover:text-terracotta-500 transition-colors pt-2">
                  <span>{t('courses.explore_details')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Hover Overlay Reveal (Slide In) */}
              <div className="absolute inset-0 bg-olive-900/95 p-8 flex flex-col justify-between z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out border-t-4 border-terracotta-600">
                <div className="space-y-6">
                  <div>
                    <span className="font-serif italic text-xs text-terracotta-100/80 block">
                      {course.italianName}
                    </span>
                    <h4 className="font-serif text-2xl text-travertine-50 font-normal">
                      {course.name}
                    </h4>
                    <p className="text-[10px] font-mono tracking-wider text-olive-200 uppercase mt-1">
                      {course.hoursPerWeek}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest uppercase text-travertine-300 font-bold block border-b border-travertine-300/20 pb-1.5">
                      {t('courses.curriculum_highlights')}
                    </span>
                    <ul className="space-y-2">
                      {course.hoverDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-travertine-100 font-light">
                          <span className="w-1 h-1 rounded-full bg-terracotta-500 mt-1.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-travertine-50 border-t border-travertine-300/10 pt-4">
                  <span>{t('courses.enquire_now')}</span>
                  <ArrowRight className="w-4 h-4 text-terracotta-500" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
