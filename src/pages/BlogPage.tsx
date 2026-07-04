import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
}

export default function BlogPage() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'rituale',
      title: 'The Ritual of the Italian Morning: espresso, paper, and silent rules',
      excerpt: 'At Caffè Meletti, a morning coffee is not a quick caffeine fix. It is a slow, elegant sequence of greetings, specific cup temperatures, and unspoken local codes.',
      category: 'Lifestyle',
      date: 'June 28, 2026',
      author: 'Francesca Moretti',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      content: [
        'To walk into Caffè Meletti on a misty autumn morning is to enter a theater of manners. The travertine floor clicks softly underfoot. The air is thick with roasted coffee beans and a faint hint of Meletti’s signature anisetta liqueur.',
        'Here, ordering coffee requires understanding a few local codes. A "caffè" is always an espresso. A cappuccino after 11:00 AM is usually avoided because locals prefer milk only in the morning.',
        'Sit on the heritage green velvet chairs. Greet the barista with a calm, polite "Buongiorno". Take your time. Watch the light play on the travertine arches outside. In Ascoli, morning coffee is a daily meditation and the best time to practice direct conversational phrases.',
      ],
    },
    {
      id: 'secret',
      title: 'Why Ascoli remains the last authentic secret of Marche',
      excerpt: 'While Florence and Venice deal with overcrowding, the travertine city of Ascoli Piceno maintains its quiet Renaissance rhythm, welcoming visitors with genuine local warmth.',
      category: 'Travel Guides',
      date: 'May 14, 2026',
      author: 'Matteo Rossini',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1562011107-da2e2955e1e0?auto=format&fit=crop&w=900&q=80',
      content: [
        'Marche is often described as "Italy in one province" because it gathers Apennine ridges, medieval hill towns, and quiet Adriatic beaches into one region. Yet its historic centerpiece, Ascoli Piceno, is still largely overlooked by mass tourism.',
        'This has kept the city’s heart beautifully intact. When you buy fresh pecorino at the old market, the vendor does not treat you as a transaction, but as a guest. Residents speak with a slow, clear accent that gives language learners a generous training ground.',
        'Walking across Piazza del Popolo at midnight, surrounded by families strolling arm in arm, you understand that this is not a postcard or an artificial tourist village. This is real Italian life, persisting inside beautiful stone arches.',
      ],
    },
    {
      id: 'gestures',
      title: 'The Silent Grammar: Decoding Italian hand choreography',
      excerpt: 'Over 50% of direct Italian communication happens without words. Understanding the exact meanings of hand gestures is the key to local belonging.',
      category: 'Linguistics',
      date: 'April 02, 2026',
      author: 'Stefano Bertoni',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      content: [
        'Linguists have cataloged over 250 distinct hand gestures used daily by native Italian speakers. These gestures are not random dramatic waving; they form a precise, structured, and sophisticated non-verbal grammar.',
        'The famous "fingertips-bunched-together" gesture (mano a borsa) can indicate curiosity, doubt, or mild frustration depending on how fast you wave your wrist. A finger twisting into your cheek indicates culinary delight, while a swift sweep under the chin declares complete disinterest.',
        'At Accademia Italiana, our weekly cinesics seminar teaches you how to balance these non-verbal accents. When paired with fluent, quiet syntax, these physical elements allow you to blend in effortlessly at the evening promenade.',
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
          // Main Blog Grid View
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-24"
          >
            {/* Editorial Header */}
            <section className="relative py-24 md:py-32 bg-travertine-100 overflow-hidden border-b border-travertine-200">
              <div className="absolute inset-0 bg-[radial-gradient(#CE6A4E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
              <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
                <span className="text-xs font-bold tracking-[0.25em] text-terracotta-600 uppercase block">
                  The Travertine Notebook
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal-950 leading-tight">
                  Letters on language, <br />
                  <span className="italic text-olive-800">slow travel and heritage.</span>
                </h1>
                <p className="text-sm md:text-base text-charcoal-800 font-light max-w-2xl mx-auto leading-relaxed">
                  Deep, literary reflections curated by our instructors and guest writers, charting the quiet aesthetics of life inside Marche.
                </p>
              </div>
            </section>

            {/* Articles List */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-travertine-100 border border-travertine-200/60 p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-6">
                      <div className="aspect-[16/10] bg-travertine-200 overflow-hidden relative shadow-sm">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
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
                        <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-travertine-200/50 mt-6">
                      <button
                        onClick={() => setSelectedPostId(post.id)}
                        className="text-xs font-bold tracking-widest uppercase text-terracotta-600 hover:text-terracotta-750 flex items-center gap-2 cursor-pointer"
                      >
                        Read Notebook Entry
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        ) : (
          // Detailed Article Reader View
          <motion.article
            key="blog-post"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="py-20 max-w-4xl mx-auto px-6 space-y-8"
          >
            {/* Go back button row */}
            <div className="flex items-center justify-between border-b border-travertine-200 pb-4">
              <button
                onClick={() => setSelectedPostId(null)}
                className="text-xs font-bold tracking-widest uppercase text-charcoal-800 hover:text-charcoal-950 flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Archive
              </button>
              <div className="flex items-center gap-1.5 text-xs text-olive-800">
                <Share2 className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-widest text-[10px]">Share Entry</span>
              </div>
            </div>

            {selectedPost && (
              <div className="space-y-8">
                {/* Meta details */}
                <div className="space-y-3">
                  <span className="bg-olive-100 text-olive-800 text-[9px] tracking-widest font-mono font-bold uppercase px-3.5 py-1 inline-block border border-olive-200">
                    {selectedPost.category}
                  </span>
                  <h1 className="font-serif text-3xl md:text-5xl text-charcoal-950 font-light leading-tight">
                    {selectedPost.title}
                  </h1>
                  
                  <div className="flex items-center gap-6 pt-2 text-xs text-charcoal-850 font-light">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-olive-800" />
                      <span>Written by <span className="font-semibold text-charcoal-950">{selectedPost.author}</span></span>
                    </div>
                    <span>-</span>
                    <span>{selectedPost.date}</span>
                    <span>-</span>
                    <span className="font-mono text-[10px] bg-travertine-200 px-2.5 py-1 font-semibold">{selectedPost.readTime}</span>
                  </div>
                </div>

                {/* Big Photo */}
                <div className="aspect-[16/9] bg-travertine-200 overflow-hidden shadow-xl">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Story Body */}
                <div className="font-serif text-base md:text-lg text-charcoal-900 leading-relaxed font-light space-y-6 pt-4">
                  {selectedPost.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Author card sign-off */}
                <div className="bg-travertine-100 border border-travertine-200 p-6 flex items-start gap-4 mt-12">
                  <div className="w-12 h-12 rounded-full bg-travertine-300 flex items-center justify-center shrink-0 border border-travertine-400">
                    <User className="w-5 h-5 text-olive-800" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-semibold text-charcoal-950">About {selectedPost.author}</h4>
                    <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                      A member of the Accademia Italiana teaching circle, writing from Ascoli Piceno about language, culture, and daily life in Marche.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.article>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
