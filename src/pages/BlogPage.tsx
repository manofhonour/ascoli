import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { ascoliHighlights, contactInfo, culturalOfferings, images, officialCourses } from '../data/officialContent';
import { useLanguage } from '../context/LanguageContext';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  imagePosition: string;
  content: string[];
}

export default function BlogPage() {
  const { language } = useLanguage();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'courses',
      title:
        language === 'IT'
          ? 'Scegliere il corso di italiano adatto ad Ascoli Piceno'
          : 'Choosing the right Italian course in Ascoli Piceno',
      excerpt:
        language === 'IT'
          ? 'Una guida essenziale a corsi standard, intensivi, individuali, estensivi, aggiornamento docenti e percorsi su misura.'
          : 'A concise guide to standard, intensive, individual, extensive, teacher-refresher, and custom-made course formats.',
      category: language === 'IT' ? 'Corsi' : 'Courses',
      date: language === 'IT' ? 'Aggiornato 2026' : 'Updated 2026',
      author: 'Accademia Italiana',
      readTime: language === 'IT' ? '4 min lettura' : '4 min read',
      image: officialCourses[0].image,
      imagePosition: officialCourses[0].imagePosition,
      content:
        language === 'IT'
          ? [
              'Accademia Italiana offre formati di corso flessibili per studenti con obiettivi e calendari diversi.',
              'Il corso standard e in piccolo gruppo, mentre lo studio intensivo aggiunge ore individuali. Chi ha bisogno di un calendario personalizzato puo scegliere lezioni individuali o corsi su misura.',
              'La scelta giusta dipende da livello, date, ritmo e dall interesse per moduli culturali o preparazione agli esami.',
            ]
          : [
              'Accademia Italiana offers flexible course formats for students with different goals and schedules.',
              'The standard course is a small-group format, while intensive study adds individual hours. Students who need a tailored schedule can choose individual or custom-made lessons.',
              'The right choice depends on level, dates, pace, and whether the student wants cultural add-ons or exam preparation.',
            ],
    },
    {
      id: 'culture',
      title:
        language === 'IT'
          ? 'Moduli culturali: cucina, vino, arte, storia ed esami'
          : 'Culture add-ons: food, wine, art, history, and exams',
      excerpt:
        language === 'IT'
          ? 'Temi culturali e specialistici possono ampliare lo studio dell italiano.'
          : 'Cultural and specialist topics can extend Italian language study.',
      category: language === 'IT' ? 'Cultura' : 'Culture',
      date: language === 'IT' ? 'Aggiornato 2026' : 'Updated 2026',
      author: 'Accademia Italiana',
      readTime: language === 'IT' ? '3 min lettura' : '3 min read',
      image: culturalOfferings[0].image,
      imagePosition: culturalOfferings[0].imagePosition,
      content:
        language === 'IT'
          ? [
              'L apprendimento dell italiano diventa piu forte quando il vocabolario e collegato a contesti vissuti.',
              'I moduli includono cucina, degustazione vini, opera, olio d oliva, ceramica, pittura, tombolo, italiano per il business, turismo, preparazione universitaria, certificazioni, storia, storia dell arte, letteratura e Italia oggi.',
              'La disponibilita dipende da date, livello e formato del corso.',
            ]
          : [
              'Italian learning becomes stronger when vocabulary is connected with lived contexts.',
              'Add-ons include cooking, wine tasting, opera, olive oil, ceramics, painting, tombolo lace, business Italian, tourism, university preparation, certification preparation, history, art history, literature, and Italy today.',
              'Availability depends on dates, level, and course format.',
            ],
    },
    {
      id: 'ascoli',
      title:
        language === 'IT'
          ? 'Perche Ascoli Piceno funziona come contesto linguistico'
          : 'Why Ascoli Piceno works as a language setting',
      excerpt:
        language === 'IT'
          ? 'Ascoli offre storia, cultura, cucina locale, festival e accesso alle Marche.'
          : 'Ascoli offers history, culture, local food, festivals, and access to the Marche region.',
      category: 'Ascoli',
      date: language === 'IT' ? 'Aggiornato 2026' : 'Updated 2026',
      author: 'Accademia Italiana',
      readTime: language === 'IT' ? '4 min lettura' : '4 min read',
      image: images.ascoli,
      imagePosition: '50% 50%',
      content:
        language === 'IT'
          ? [
              'Ascoli Piceno offre agli studenti un contesto storico e compatto per usare l italiano ogni giorno.',
              `${ascoliHighlights[0].titleIT}, tradizioni gastronomiche locali, eventi come la Quintana e il paesaggio marchigiano sostengono l immersione culturale.`,
              `La scuola si trova in ${contactInfo.addressLine1}, vicino alla vita del centro storico.`,
            ]
          : [
              'Ascoli Piceno gives students a compact, historic setting for daily Italian use.',
              `${ascoliHighlights[0].title}, local food traditions, events such as the Quintana, and the wider Marche landscape all support cultural immersion.`,
              `The school is located at ${contactInfo.addressLine1}, close to the life of the historic centre.`,
            ],
    },
  ];

  const selectedPost = posts.find((p) => p.id === selectedPostId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-travertine-50 min-h-screen"
    >
      <AnimatePresence mode="wait">
        {!selectedPostId ? (
          <motion.div key="blog-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">
            <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
              <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
              <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
                <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
                  {language === 'IT' ? 'Note' : 'Notebook'}
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
                  {language === 'IT' ? 'Note su corsi,' : 'Notes on courses,'} <br />
                  <span className="italic text-olive-800">
                    {language === 'IT' ? 'cultura e Ascoli.' : 'culture and Ascoli.'}
                  </span>
                </h1>
                <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
                  {language === 'IT'
                    ? 'Brevi note istituzionali su corsi, cultura e contesto di Ascoli Piceno.'
                    : 'Short institutional notes on courses, culture, and the Ascoli Piceno setting.'}
                </p>
              </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {posts.map((post) => (
                  <div key={post.id} className="bg-travertine-100 border border-travertine-200/60 p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-6">
                      <div className="aspect-[16/10] bg-travertine-200 overflow-hidden relative shadow-sm">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                          style={{ objectPosition: post.imagePosition }}
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-4 left-4 bg-charcoal-950/80 backdrop-blur-sm px-3.5 py-1.5 text-[9px] tracking-widest font-mono font-bold text-travertine-100 uppercase">
                          {post.category}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-4 text-[10px] text-olive-800 font-semibold tracking-wider uppercase">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span>-</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl text-charcoal-950 font-normal leading-snug group-hover:text-olive-800 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-charcoal-800 font-light leading-relaxed">{post.excerpt}</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-travertine-200/50 mt-6">
                      <button onClick={() => setSelectedPostId(post.id)} className="text-xs font-bold tracking-widest uppercase text-terracotta-600 hover:text-terracotta-700 flex items-center gap-2 cursor-pointer">
                        {language === 'IT' ? 'Leggi nota' : 'Read Note'}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.article
            key="blog-post"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="py-20 max-w-4xl mx-auto px-6 space-y-8"
          >
            <div className="flex items-center justify-between border-b border-travertine-200 pb-4">
              <button onClick={() => setSelectedPostId(null)} className="text-xs font-bold tracking-widest uppercase text-charcoal-800 hover:text-charcoal-950 flex items-center gap-2 cursor-pointer">
                <ArrowLeft className="w-3.5 h-3.5" />
                {language === 'IT' ? 'Torna alle note' : 'Back to Notes'}
              </button>
              <div className="flex items-center gap-1.5 text-xs text-olive-800">
                <Share2 className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-widest text-[10px]">
                  {language === 'IT' ? 'Nota scuola' : 'School Note'}
                </span>
              </div>
            </div>

            {selectedPost && (
              <div className="space-y-8">
                <div className="space-y-3">
                  <span className="bg-olive-100 text-olive-800 text-[9px] tracking-widest font-mono font-bold uppercase px-3.5 py-1 inline-block border border-olive-200">
                    {selectedPost.category}
                  </span>
                  <h1 className="font-serif text-3xl md:text-5xl text-charcoal-950 font-light leading-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-charcoal-800 font-light">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-olive-800" />
                      <span>
                        {language === 'IT' ? 'Di ' : 'By '}
                        <span className="font-semibold text-charcoal-950">{selectedPost.author}</span>
                      </span>
                    </div>
                    <span>-</span>
                    <span>{selectedPost.date}</span>
                    <span>-</span>
                    <span className="font-mono text-[10px] bg-travertine-200 px-2.5 py-1 font-semibold">{selectedPost.readTime}</span>
                  </div>
                </div>

                <div className="aspect-[16/9] bg-travertine-200 overflow-hidden shadow-xl">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: selectedPost.imagePosition }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="font-serif text-base md:text-lg text-charcoal-900 leading-relaxed font-light space-y-6 pt-4">
                  {selectedPost.content.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
