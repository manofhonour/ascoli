import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'IT';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.accommodation': 'Accommodation',
    'nav.ascoli': 'Ascoli Piceno',
    'nav.student-life': 'Student Life',
    'nav.culture': 'Italian Culture',
    'nav.gallery': 'Gallery Archive',
    'nav.testimonials': 'Journals',
    'nav.faq': 'FAQ',
    'nav.blog': 'Notebook Blog',
    'nav.contact': 'Contact Liaison',
    'nav.more': 'More Experience',
    'nav.inquire': 'Inquire',
    'nav.book_consultation': 'Book Consultation',

    // Hero
    'hero.subtitle': 'A Private Language Sanctuary',
    'hero.title_part1': 'Immerse in',
    'hero.title_part2': 'the language.',
    'hero.title_italic': 'Live the lifestyle.',
    'hero.desc': 'Accademia Italiana is a boutique language haven situated in the pristine, warm-toned travertine architecture of Ascoli Piceno. We craft high-end linguistic residencies for curious minds, writers, and executives seeking the true, unhurried rhythm of Marche.',
    'hero.explore_courses': 'Explore Courses',
    'hero.book_consultation': 'Book Consultation',
    'hero.salon_title': 'The Salon Setting',
    'hero.salon_desc': '"Italian espresso, vintage leather notebooks, open grammar monographs, and rosemary sprigs overlooking the quiet stone alleyway."',
    'hero.palazzo_class_title': 'Palazzo Class',
    'hero.palazzo_class_desc': '"We sit inside high-ceilinged medieval salons, feeling the cool breeze of Marche hills."',
    'hero.immersion_care_title': 'Immersion Care',
    'hero.immersion_care_desc': 'Maximum 6 mature students per room. No mass schooling.',
    'hero.scroll_down': 'Scroll Down',

    // TrustBar
    'trust.established_label': 'Established 1997',
    'trust.established_detail': 'Three decades of pedagogical craft',
    'trust.cohorts_label': 'Curated Cohorts',
    'trust.cohorts_detail': 'Strictly limited to 6 students',
    'trust.global_label': 'Global Fellowship',
    'trust.global_detail': 'Alumni from 40+ nations',
    'trust.sanctuaries_label': 'Untouched Sanctuaries',
    'trust.sanctuaries_detail': 'No mass commercial tourism',
    'trust.staff_label': 'Scholarly Staff',
    'trust.staff_detail': 'Universitari PhD-certified minds',

    // WhyAccademia
    'why.philosophy_sub': 'La Nostra Filosofia',
    'why.philosophy_title_part1': 'An education carved in',
    'why.philosophy_title_italic': 'travertine stone',
    'why.philosophy_title_part2': ', lived in conversation.',
    'why.philosophy_desc': 'We reject rigid computer displays, sterile worksheets, and corporate mass schooling. At Accademia Italiana, we treat language learning as a luxurious, restorative act of slow cultural integration.',
    'why.focus_1_title': 'The Travertine Sanctuary',
    'why.focus_1_desc': 'Our historic 16th-century Palazzo is built from the same warm, golden travertine stone that defines Ascoli Piceno, providing an air of timeless, scholarly tranquility.',
    'why.focus_2_title': 'Immersive Resonance',
    'why.focus_2_desc': 'Classrooms extend organically into Caffè Meletti, quiet library arches, and courtyard steps. Learn complex grammar to serve genuine, warm interactions with local life.',
    'why.focus_3_title': 'Slow Italian Lifestyle',
    'why.focus_3_desc': "Nestled between Marche's rolling vineyard hills and the blue Adriatic, Ascoli Piceno remains pristine and untouched by global tourism. A portal to authentic living.",
    'why.focus_4_title': 'Linguistic Concierge',
    'why.focus_4_desc': 'We sculpt bespoke, private educational pathways that respect your natural cognitive pace, specific creative fields, and professional sabbatical calendars.',

    // Courses Section
    'courses.sub': 'I Nostri Corsi',
    'courses.title_part1': 'Curated linguistic paths',
    'courses.title_italic': 'for curious minds.',
    'courses.desc': 'Choose an educational format that matches your life rhythm, professional career, or slow-travel schedule. No mass lectures, always personalized.',

    // Accommodation Section
    'accommodation.sub': 'Residenze d\'Elite',
    'accommodation.title_part1': 'Refined spaces to',
    'accommodation.title_italic': 'unwind.',
    'accommodation.desc': 'Where you lay your head is central to your creative journey. We curate premium local residencies that echo the historical charm and tranquil rhythm of Marche.',
    'accommodation.location': 'Residence Location',

    // Lifestyle Gallery
    'gallery.sub': 'Momenti di Ascoli',
    'gallery.title_part1': 'The Italian lifestyle,',
    'gallery.title_italic': 'unfiltered.',

    // Testimonials
    'testimonials.excellent_reviews': 'Excellent Reviews',
    'testimonials.based_on': 'Based on 248 verified reviews on Google Education & Trustpilot',
    'testimonials.google_rating': '5.0 Star Rating',
    'testimonials.trustpilot_status': 'Excellent Status',
    'testimonials.video_diary': 'Video Diary',
    'testimonials.video_quote': '"Learning inside the historic Palazzo"',
    'testimonials.mock_video_feed': 'Mock Video Feed',
    'testimonials.mock_video_text': '"I woke up, drank espresso, debated literature, and lived the Italian dream. Thank you, Accademia!"',
    'testimonials.close_video': 'Close Video Feed',

    // FAQ
    'faq.sub': 'Domande Frequenti',
    'faq.title': 'Curiosities & Details.',
    'faq.desc': 'Everything you need to plan your slow linguistic journey into Ascoli Piceno.',
    'faq.search': 'Search FAQs (e.g. age, Rome, beginner...)',
    'faq.no_match': 'No matching questions found. Try search terms like "age", "beginner", or "Rome".',

    // Final CTA
    'cta.limited': 'Limited to 6 Students per Cohort',
    'cta.title_part1': 'Book Your',
    'cta.title_italic': 'Italian Journey.',
    'cta.desc': 'Wander through medieval plazas, converse with master craftspeople, and find your true Italian voice. Your stone seat at Caffè Meletti awaits.',
    'cta.begin': 'Begin Your Application',
    'cta.whatsapp': 'WhatsApp Admissions',
    'cta.refundable': 'All registrations are fully refundable up to 30 days prior to departure.',

    // Inquiry Form
    'form.sub': 'Inizia il Tuo Viaggio',
    'form.title': 'Begin Your Inquiry',
    'form.desc': 'We respond within 24 business hours. Let\'s sketch your personalized Italian educational residency together.',
    'form.field_first_name': 'First Name',
    'form.field_last_name': 'Last Name',
    'form.field_email': 'Email Address',
    'form.field_phone': 'Phone Number',
    'form.field_course': 'Preferred Course Format',
    'form.field_course_placeholder': 'Select a pathway...',
    'form.field_duration': 'Desired Duration',
    'form.field_duration_placeholder': 'Select duration...',
    'form.field_language_level': 'Current Italian Language Level',
    'form.field_language_level_placeholder': 'Select your level...',
    'form.field_language_level_absolute': 'Absolute Beginner (No prior study)',
    'form.field_language_level_elementary': 'Elementary (Basic greetings & phrases)',
    'form.field_language_level_intermediate': 'Intermediate (Can converse simply)',
    'form.field_language_level_advanced': 'Advanced (Seeking literary refinement)',
    'form.field_interest': 'Tell us about your background & goals',
    'form.field_interest_placeholder': 'E.g., "I am an architectural writer seeking a sabbatical..."',
    'form.submit': 'Submit Inquiry',
    'form.success_title': 'Grazie!',
    'form.success_desc': 'Your inquiry has been logged in our Palazzo registers. Francesca and our admissions office will review your goals and schedule a WhatsApp briefing with you shortly.',
    'form.success_cta': 'Review Our Curriculum',
    'form.inquire_title': 'Inquire'
  },
  IT: {
    // Nav
    'nav.home': 'Inizio',
    'nav.about': 'Chi Siamo',
    'nav.courses': 'Corsi',
    'nav.accommodation': 'Alloggi',
    'nav.ascoli': 'Ascoli Piceno',
    'nav.student-life': 'Vita Studentesca',
    'nav.culture': 'Cultura Italiana',
    'nav.gallery': 'Archivio Galleria',
    'nav.testimonials': 'Diari e Storie',
    'nav.faq': 'FAQ',
    'nav.blog': 'Notebook Blog',
    'nav.contact': 'Contatti',
    'nav.more': 'Altre Esperienze',
    'nav.inquire': 'Richiedi Info',
    'nav.book_consultation': 'Prenota Consulenza',

    // Hero
    'hero.subtitle': 'Un Santuario Linguistico Privato',
    'hero.title_part1': 'Immergiti nella',
    'hero.title_part2': 'lingua.',
    'hero.title_italic': 'Vivi lo stile di vita.',
    'hero.desc': 'L’Accademia Italiana è un rifugio linguistico di classe situato nella splendida architettura in travertino dai toni caldi di Ascoli Piceno. Creiamo residenze linguistiche esclusive per menti curiose, scrittori e dirigenti che cercano il ritmo autentico e rilassato delle Marche.',
    'hero.explore_courses': 'Esplora i Corsi',
    'hero.book_consultation': 'Prenota Consulenza',
    'hero.salon_title': 'L’Ambiente del Salone',
    'hero.salon_desc': '"Espresso italiano, taccuini in pelle vintage, monografie di grammatica aperte e rametti di rosmarino con vista sul tranquillo vicolo di pietra."',
    'hero.palazzo_class_title': 'Classe nel Palazzo',
    'hero.palazzo_class_desc': '"Ci sediamo all’interno di saloni medievali dai soffitti alti, sentendo la fresca brezza delle colline marchigiane."',
    'hero.immersion_care_title': 'Cura dell’Immersione',
    'hero.immersion_care_desc': 'Massimo 6 studenti maturi per classe. Nessuna scolarizzazione di massa.',
    'hero.scroll_down': 'Scorri in Basso',

    // TrustBar
    'trust.established_label': 'Fondata nel 1997',
    'trust.established_detail': 'Tre decenni di artigianato pedagogico',
    'trust.cohorts_label': 'Coorti Selezionate',
    'trust.cohorts_detail': 'Rigorosamente limitate a 6 studenti',
    'trust.global_label': 'Comunità Globale',
    'trust.global_detail': 'Alunni da oltre 40 nazioni',
    'trust.sanctuaries_label': 'Santuari Incontaminati',
    'trust.sanctuaries_detail': 'Nessun turismo di massa commerciale',
    'trust.staff_label': 'Personale Accademico',
    'trust.staff_detail': 'Menti certificate PhD universitarie',

    // WhyAccademia
    'why.philosophy_sub': 'La Nostra Filosofia',
    'why.philosophy_title_part1': 'Un’istruzione scolpita nel',
    'why.philosophy_title_italic': 'travertino',
    'why.philosophy_title_part2': ', vissuta nella conversazione.',
    'why.philosophy_desc': 'Rifiutiamo schermi rigidi di computer, fogli di lavoro sterili e scolarizzazione aziendale di massa. All’Accademia Italiana trattiamo l’apprendimento linguistico come un atto lussuoso e rigenerante di lenta integrazione culturale.',
    'why.focus_1_title': 'Il Santuario di Travertino',
    'why.focus_1_desc': 'Il nostro storico Palazzo del XVI secolo è costruito con la stessa pietra di travertino calda e dorata che definisce Ascoli Piceno, regalando un’aria di intramontabile tranquillità accademica.',
    'why.focus_2_title': 'Risonanza Immersiva',
    'why.focus_2_desc': 'Le aule si estendono organicamente nel Caffè Meletti, nei silenziosi archi della biblioteca e sui gradini del cortile. Impara la grammatica complessa per favorire interazioni autentiche e calde con la vita locale.',
    'why.focus_3_title': 'Lento Stile di Vita Italiano',
    'why.focus_3_desc': "Immersa tra le dolci colline di vigneti delle Marche e l’azzurro dell’Adriatico, Ascoli Piceno rimane incontaminata e intatta dal turismo globale. Un portale per vivere l’autenticità.",
    'why.focus_4_title': 'Portineria Linguistica',
    'why.focus_4_desc': 'Scolpiamo percorsi educativi privati e personalizzati che rispettano il tuo ritmo cognitivo naturale, i campi creativi specifici e i calendari di vacanza-studio professionali.',

    // Courses Section
    'courses.sub': 'I Nostri Corsi',
    'courses.title_part1': 'Percorsi linguistici curati',
    'courses.title_italic': 'per menti curiose.',
    'courses.desc': 'Scegli un formato educativo che corrisponda al tuo ritmo di vita, alla tua carriera professionale o al tuo programma di viaggio lento. Nessuna lezione di massa, sempre personalizzato.',

    // Accommodation Section
    'accommodation.sub': 'Residenze d\'Elite',
    'accommodation.title_part1': 'Spazi raffinati per',
    'accommodation.title_italic': 'rilassarsi.',
    'accommodation.desc': 'La dimora in cui riposi è centrale per il tuo viaggio creativo. Selezioniamo prestigiose residenze locali che riflettono il fascino storico e il ritmo tranquillo delle Marche.',
    'accommodation.location': 'Posizione dell\'Alloggio',

    // Lifestyle Gallery
    'gallery.sub': 'Momenti di Ascoli',
    'gallery.title_part1': 'Lo stile di vita italiano,',
    'gallery.title_italic': 'senza filtri.',

    // Testimonials
    'testimonials.excellent_reviews': 'Recensioni Eccellenti',
    'testimonials.based_on': 'Basato su 248 recensioni verificate su Google Education & Trustpilot',
    'testimonials.google_rating': 'Valutazione 5.0 Stelle',
    'testimonials.trustpilot_status': 'Stato Eccellente',
    'testimonials.video_diary': 'Video Diario',
    'testimonials.video_quote': '"Imparare all\'interno dello storico Palazzo"',
    'testimonials.mock_video_feed': 'Feed Video Simulato',
    'testimonials.mock_video_text': '"Mi sono svegliato, ho bevuto un espresso, discusso di letteratura e vissuto il sogno italiano. Grazie, Accademia!"',
    'testimonials.close_video': 'Chiudi Feed Video',

    // FAQ
    'faq.sub': 'Domande Frequenti',
    'faq.title': 'Curiosità e Dettagli.',
    'faq.desc': 'Tutto ciò di cui hai bisogno per pianificare il tuo lento viaggio linguistico ad Ascoli Piceno.',
    'faq.search': 'Cerca nelle FAQ (es. età, Roma, principiante...)',
    'faq.no_match': 'Nessuna domanda corrispondente trovata. Prova termini come "età", "principiante" o "Roma".',

    // Final CTA
    'cta.limited': 'Limitato a 6 Studenti per Coorte',
    'cta.title_part1': 'Prenota il Tuo',
    'cta.title_italic': 'Viaggio Italiano.',
    'cta.desc': 'Passeggia per le piazze medievali, conversa con maestri artigiani e trova la tua vera voce italiana. Il tuo posto di pietra al Caffè Meletti ti aspetta.',
    'cta.begin': 'Inizia la Tua Candidatura',
    'cta.whatsapp': 'WhatsApp Ammissioni',
    'cta.refundable': 'Tutte le registrazioni sono completamente rimborsabili fino a 30 giorni prima della partenza.',

    // Inquiry Form
    'form.sub': 'Inizia il Tuo Viaggio',
    'form.title': 'Inizia la Tua Richiesta',
    'form.desc': 'Rispondiamo entro 24 ore lavorative. Disegniamo insieme la tua residenza educativa italiana personalizzata.',
    'form.field_first_name': 'Nome',
    'form.field_last_name': 'Cognome',
    'form.field_email': 'Indirizzo Email',
    'form.field_phone': 'Numero di Telefono',
    'form.field_course': 'Formato del Corso Preferito',
    'form.field_course_placeholder': 'Seleziona un percorso...',
    'form.field_duration': 'Durata Desiderata',
    'form.field_duration_placeholder': 'Seleziona la durata...',
    'form.field_language_level': 'Livello di Lingua Italiana Attuale',
    'form.field_language_level_placeholder': 'Seleziona il tuo livello...',
    'form.field_language_level_absolute': 'Principiante Assoluto (Nessuno studio precedente)',
    'form.field_language_level_elementary': 'Elementare (Saluti e frasi di base)',
    'form.field_language_level_intermediate': 'Intermedio (Conversazione semplice)',
    'form.field_language_level_advanced': 'Avanzato (In cerca di raffinatezza letteraria)',
    'form.field_interest': 'Parlaci del tuo background e dei tuoi obiettivi',
    'form.field_interest_placeholder': 'Es., "Sono uno scrittore di architettura in cerca di un anno sabbatico..."',
    'form.submit': 'Invia Richiesta',
    'form.success_title': 'Grazie!',
    'form.success_desc': 'La tua richiesta è stata registrata nei registri del nostro Palazzo. Francesca e il nostro ufficio ammissioni esamineranno i tuoi obiettivi e organizzeranno presto un colloquio informativo via WhatsApp.',
    'form.success_cta': 'Esamina il Nostro Programma',
    'form.inquire_title': 'Richiedi Info'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    return translations[language][key] || translations['EN'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
