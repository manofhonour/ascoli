import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface Teacher {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  specialty: string;
}

export default function Teachers() {
  const { language, t } = useLanguage();

  const teachersEN: Teacher[] = [
    {
      name: "Dr. Laura Belvisi",
      role: "Founder & Academic Director",
      credentials: "Ph.D. in Applied Linguistics, Università di Bologna",
      bio: "Laura has dedicated nearly three decades to language acquisition research. Her pedagogical design emphasizes conversational neuroscience, creating classes that feel natural and authentic rather than mechanical.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=500&q=80",
      specialty: "Phonology & Cognitive Fluency"
    },
    {
      name: "Vittorio Salvi",
      role: "Senior Professor of Classics",
      credentials: "Laurea Magistrale in Renaissance Philosophy, Università di Siena",
      bio: "An Ascoli native whose family has lived in the medieval quarter for centuries. Vittorio connects complex Italian grammatical subjunctive concepts with Dante's poetry, Calvino's prose, and classical history.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=500&q=80",
      specialty: "Literature, Art & History"
    },
    {
      name: "Rossana Agostini",
      role: "Linguistic & Gastronomy Lead",
      credentials: "Degree in Italian Philology, Università di Padova",
      bio: "Rossana blends her passion for comparative literature with traditional gastronomy. She leads our food-centric classes, translating her academic love for regional dialects into practical culinary masterclasses.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80",
      specialty: "Philology & Culinary Heritage"
    },
    {
      name: "Elena Marini",
      role: "Tutor & Media Coordinator",
      credentials: "Degree in Modern Cinema, Università degli Studi di Roma",
      bio: "Elena crafts language learning material utilizing classic and modern Italian cinema. Her classes analyze Neorealist screenplays, helping advanced students capture subtle conversational humor and idioms.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&h=500&q=80",
      specialty: "Italian Cinema & Idioms"
    }
  ];

  const teachersIT: Teacher[] = [
    {
      name: "Dr. Laura Belvisi",
      role: "Fondatrice e Direttrice Accademica",
      credentials: "Ph.D. in Applied Linguistics, Università di Bologna",
      bio: "Laura ha dedicato quasi tre decenni alla ricerca sull'acquisizione del linguaggio. Il suo design pedagogico enfatizza la neuroscienza conversazionale, creando lezioni che sembrano naturali e autentiche anziché meccaniche.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=500&q=80",
      specialty: "Fonologia e Fluidità Cognitiva"
    },
    {
      name: "Vittorio Salvi",
      role: "Professore Senior di Lettere Classiche",
      credentials: "Laurea Magistrale in Renaissance Philosophy, Università di Siena",
      bio: "Nativo di Ascoli, la cui famiglia vive nel quartiere medievale da secoli. Vittorio collega i complessi concetti del congiuntivo italiano con la poesia di Dante, la prosa di Calvino e la storia classica.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=500&q=80",
      specialty: "Letteratura, Arte e Storia"
    },
    {
      name: "Rossana Agostini",
      role: "Responsabile Linguistico e Gastronomico",
      credentials: "Degree in Italian Philology, Università di Padova",
      bio: "Rossana unisce la sua passione per la letteratura comparata alla gastronomia tradizionale. Conduce le nostre lezioni incentrate sul cibo, traducendo il suo amore accademico per i dialetti regionali in masterclass culinarie pratiche.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80",
      specialty: "Filologia e Patrimonio Culinario"
    },
    {
      name: "Elena Marini",
      role: "Tutor e Coordinatrice Media",
      credentials: "Degree in Modern Cinema, Università degli Studi di Roma",
      bio: "Elena crea materiale didattico linguistico utilizzando il cinema italiano classico e moderno. Le sue lezioni analizzano le sceneggiature del Neorealismo, aiutando gli studenti avanzati a cogliere l'umorismo conversazionale sottile e i modi di dire.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&h=500&q=80",
      specialty: "Cinema Italiano e Idiomi"
    }
  ];

  const teachers = language === 'IT' ? teachersIT : teachersEN;

  return (
    <section id="teachers" className="py-24 md:py-32 bg-travertine-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Title */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
            {t('teachers.section_tag')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-charcoal-950 leading-tight">
            {t('teachers.section_title_part1')} <span className="italic text-olive-800">{t('teachers.section_title_italic')}</span>
          </h2>
          <p className="text-sm md:text-base text-charcoal-800 font-light max-w-xl">
            {t('teachers.section_desc')}
          </p>
        </div>

        {/* 4-Column Portrait Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group space-y-4 flex flex-col"
            >
              {/* Image Container with high class frame */}
              <div className="relative aspect-[4/5] bg-travertine-200 overflow-hidden border border-travertine-300 shadow-lg">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro hover icon overlay */}
                <div className="absolute inset-0 bg-charcoal-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Absolute tag */}
                <div className="absolute bottom-4 left-4 bg-travertine-50/95 backdrop-blur-sm px-3 py-1.5 border-l border-terracotta-500">
                  <span className="block text-[8px] tracking-widest font-mono uppercase text-olive-800 font-bold">
                    {language === 'IT' ? 'Specializzazione' : 'Specialty Focus'}
                  </span>
                  <span className="block text-[10px] font-medium text-charcoal-950 mt-0.5">
                    {teacher.specialty}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="space-y-2 flex-grow flex flex-col">
                <div className="space-y-0.5">
                  <h3 className="font-serif text-xl font-normal text-charcoal-950">
                    {teacher.name}
                  </h3>
                  <span className="block text-[10px] tracking-wider uppercase font-semibold text-terracotta-600">
                    {teacher.role}
                  </span>
                  <span className="block text-[9px] font-mono font-bold text-olive-700 uppercase">
                    {teacher.credentials}
                  </span>
                </div>
                
                <p className="text-xs text-charcoal-800 font-light leading-relaxed pt-2 border-t border-travertine-200 flex-grow">
                  {teacher.bio}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
