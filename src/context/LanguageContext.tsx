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
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Stories',
    'nav.faq': 'FAQ',
    'nav.blog': 'Notebook',
    'nav.contact': 'Contact',
    'nav.more': 'Experience',
    'nav.inquire': 'Inquire',
    'nav.book_consultation': 'Book Consultation',

    // Hero
    'hero.subtitle': 'A Private Language Sanctuary',
    'hero.title_part1': 'Immerse in',
    'hero.title_part2': 'the language.',
    'hero.title_italic': 'Live the lifestyle.',
    'hero.desc': 'Boutique Italian courses in Ascoli Piceno, designed for thoughtful learners who want language, culture, and daily life to meet naturally.',
    'hero.explore_courses': 'Explore Courses',
    'hero.book_consultation': 'Book Consultation',
    'hero.salon_title': 'The Salon Setting',
    'hero.salon_desc': '"Italian espresso, vintage leather notebooks, open grammar monographs, and rosemary sprigs overlooking the quiet stone alleyway."',
    'hero.palazzo_class_title': 'Palazzo Class',
    'hero.palazzo_class_desc': '"We sit inside high-ceilinged medieval salons, feeling the cool breeze of Marche hills."',
    'hero.immersion_care_title': 'Immersion Care',
    'hero.immersion_care_desc': 'Maximum 6 mature students per room. No mass schooling.',
    'hero.scroll_down': 'Explore',

    // TrustBar
    'trust.established_label': 'Established 1997',
    'trust.established_detail': 'A long tradition of teaching craft',
    'trust.cohorts_label': 'Curated Cohorts',
    'trust.cohorts_detail': 'Strictly limited to 6 students',
    'trust.global_label': 'International Fellowship',
    'trust.global_detail': 'A thoughtful community of adult learners',
    'trust.sanctuaries_label': 'Untouched Sanctuaries',
    'trust.sanctuaries_detail': 'No mass commercial tourism',
    'trust.staff_label': 'Scholarly Staff',
    'trust.staff_detail': 'Experienced teachers and cultural guides',

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
    'courses.desc': 'Choose a course that matches your pace, profession, and travel rhythm. Small groups, precise placement, and personal attention.',
    'courses.section_tag': 'Signature Courses',
    'courses.section_title_part1': 'Italian study shaped',
    'courses.section_title_italic': 'around real life.',
    'courses.section_desc': 'Choose a course format that fits your goals, schedule, and preferred pace. Every pathway keeps classes small and culturally grounded.',
    'courses.explore_details': 'View details',
    'courses.curriculum_highlights': 'Course highlights',
    'courses.enquire_now': 'Enquire now',

    // Beyond Classroom
    'beyond.section_tag': 'Beyond the Classroom',
    'beyond.section_title_part1': 'Practice Italian through',
    'beyond.section_title_italic': 'local rituals.',
    'beyond.section_desc': 'Cooking, walking seminars, vineyard visits, and festivals turn vocabulary into lived experience.',

    // Accommodation Section
    'accommodation.sub': 'Residenze d\'Elite',
    'accommodation.title_part1': 'Refined spaces to',
    'accommodation.title_italic': 'unwind.',
    'accommodation.desc': 'Where you stay shapes the rhythm of your study. We arrange comfortable local residences with the calm and character of Marche.',
    'accommodation.location': 'Residence Location',
    'accommodation.section_tag': 'Residences',
    'accommodation.section_title_part1': 'Stay close to',
    'accommodation.section_title_italic': 'the life of the town.',
    'accommodation.section_desc': 'Choose a host family, private apartment, or shared historic residence, each selected for comfort, location, and daily language practice.',

    // Ascoli Piceno
    'ascoli.section_tag': 'Ascoli Piceno',
    'ascoli.section_title_part1': 'A quieter Italy,',
    'ascoli.section_title_italic': 'built in travertine',
    'ascoli.section_title_part2': 'and conversation.',
    'ascoli.section_desc': 'Ascoli Piceno gives students a rare setting: a refined historic city with real daily life, walkable streets, and patient local conversation.',
    'ascoli.image_tag': 'Piazza del Popolo',
    'ascoli.image_title': 'The travertine heart of the city',
    'ascoli.image_desc': 'Classes often continue through the piazza, cafes, markets, and shaded streets where Italian becomes practical and memorable.',
    'ascoli.map_tag': 'Walking Classroom',
    'ascoli.map_title': 'A compact city made for immersion',
    'ascoli.map_desc': 'From the palazzo to Piazza del Popolo, the daily route becomes a vocabulary map of architecture, food, greetings, and local customs.',
    'ascoli.gems_tag': 'Local Landmarks',
    'ascoli.gems_title': 'Places students return to',
    'ascoli.purity_title': 'A genuine study setting',
    'ascoli.purity_desc': 'Ascoli is calm enough for focus and lively enough for daily exchange. That balance is what makes the immersion work.',

    // Teachers
    'teachers.section_tag': 'Faculty',
    'teachers.section_title_part1': 'Guided by teachers with',
    'teachers.section_title_italic': 'cultural depth.',
    'teachers.section_desc': 'Our instructors connect grammar, conversation, literature, cinema, food, and local history with patient, precise teaching.',

    // Student Stories
    'stories.section_tag': 'Student Stories',
    'stories.section_title_part1': 'Language journeys from',
    'stories.section_title_italic': 'the Ascoli cohort.',

    // Lifestyle Gallery
    'gallery.sub': 'Momenti di Ascoli',
    'gallery.title_part1': 'The Italian lifestyle,',
    'gallery.title_italic': 'unfiltered.',
    'gallery.section_tag': 'Moments of Ascoli',
    'gallery.section_title_part1': 'Daily life,',
    'gallery.section_title_italic': 'seen up close.',

    // Testimonials
    'testimonials.excellent_reviews': 'Excellent Reviews',
    'testimonials.based_on': 'Reflections from recent students and returning guests',
    'testimonials.google_rating': 'Alumni Rating',
    'testimonials.trustpilot_status': 'Cohort Feedback',
    'testimonials.video_diary': 'Video Diary',
    'testimonials.video_quote': '"Learning inside the historic Palazzo"',
    'testimonials.story_label': 'Alumni Story',
    'testimonials.story_text': '"I woke early, ordered espresso with confidence, and discussed literature in Italian by the end of the week."',
    'testimonials.close_video': 'Close Story',

    // FAQ
    'faq.sub': 'Domande Frequenti',
    'faq.title': 'Curiosities & Details.',
    'faq.desc': 'Everything you need to plan your slow linguistic journey into Ascoli Piceno.',
    'faq.search': 'Search FAQs (e.g. age, Rome, beginner...)',
    'faq.no_match': 'No matching questions found. Try search terms like "age", "beginner", or "Rome".',
    'faq.section_tag': 'Questions',
    'faq.section_title': 'Planning details, clearly answered.',
    'faq.section_desc': 'A practical guide to levels, travel, tuition, accommodation, and the pace of study in Ascoli Piceno.',

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
    'nav.gallery': 'Galleria',
    'nav.testimonials': 'Storie',
    'nav.faq': 'FAQ',
    'nav.blog': 'Notebook',
    'nav.contact': 'Contatti',
    'nav.more': 'Esperienze',
    'nav.inquire': 'Richiedi Info',
    'nav.book_consultation': 'Prenota Consulenza',

    // Hero
    'hero.subtitle': 'Un Santuario Linguistico Privato',
    'hero.title_part1': 'Immergiti nella',
    'hero.title_part2': 'lingua.',
    'hero.title_italic': 'Vivi lo stile di vita.',
    'hero.desc': 'Corsi boutique di italiano ad Ascoli Piceno, pensati per chi desidera unire lingua, cultura e vita quotidiana in modo naturale.',
    'hero.explore_courses': 'Esplora i Corsi',
    'hero.book_consultation': 'Prenota Consulenza',
    'hero.salon_title': 'L’Ambiente del Salone',
    'hero.salon_desc': '"Espresso italiano, taccuini in pelle vintage, monografie di grammatica aperte e rametti di rosmarino con vista sul tranquillo vicolo di pietra."',
    'hero.palazzo_class_title': 'Classe nel Palazzo',
    'hero.palazzo_class_desc': '"Ci sediamo all’interno di saloni medievali dai soffitti alti, sentendo la fresca brezza delle colline marchigiane."',
    'hero.immersion_care_title': 'Cura dell’Immersione',
    'hero.immersion_care_desc': 'Massimo 6 studenti maturi per classe. Nessuna scolarizzazione di massa.',
    'hero.scroll_down': 'Esplora',

    // TrustBar
    'trust.established_label': 'Fondata nel 1997',
    'trust.established_detail': 'Una lunga tradizione di cura didattica',
    'trust.cohorts_label': 'Coorti Selezionate',
    'trust.cohorts_detail': 'Rigorosamente limitate a 6 studenti',
    'trust.global_label': 'Comunità Internazionale',
    'trust.global_detail': 'Studenti adulti e curiosi da molti paesi',
    'trust.sanctuaries_label': 'Santuari Incontaminati',
    'trust.sanctuaries_detail': 'Nessun turismo di massa commerciale',
    'trust.staff_label': 'Personale Accademico',
    'trust.staff_detail': 'Docenti esperti e guide culturali',

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
    'courses.desc': 'Scegli un formato che rispetta il tuo ritmo, i tuoi obiettivi e il tuo viaggio. Gruppi piccoli, livello preciso e attenzione personale.',
    'courses.section_tag': 'Corsi principali',
    'courses.section_title_part1': 'Uno studio dell’italiano',
    'courses.section_title_italic': 'legato alla vita reale.',
    'courses.section_desc': 'Scegli il formato più adatto ai tuoi obiettivi, al tuo calendario e al tuo ritmo. Ogni percorso resta piccolo, curato e radicato nella cultura locale.',
    'courses.explore_details': 'Vedi dettagli',
    'courses.curriculum_highlights': 'Punti del corso',
    'courses.enquire_now': 'Richiedi informazioni',

    // Beyond Classroom
    'beyond.section_tag': 'Oltre l’aula',
    'beyond.section_title_part1': 'Pratica l’italiano attraverso',
    'beyond.section_title_italic': 'rituali locali.',
    'beyond.section_desc': 'Cucina, passeggiate didattiche, vigne e feste trasformano il vocabolario in esperienza vissuta.',

    // Accommodation Section
    'accommodation.sub': 'Residenze d\'Elite',
    'accommodation.title_part1': 'Spazi raffinati per',
    'accommodation.title_italic': 'rilassarsi.',
    'accommodation.desc': 'La tua dimora influenza il ritmo dello studio. Selezioniamo residenze locali confortevoli, calme e coerenti con il carattere delle Marche.',
    'accommodation.location': 'Posizione dell\'Alloggio',
    'accommodation.section_tag': 'Residenze',
    'accommodation.section_title_part1': 'Abita vicino',
    'accommodation.section_title_italic': 'alla vita della città.',
    'accommodation.section_desc': 'Scegli famiglia ospitante, appartamento privato o residenza condivisa, sempre con attenzione a comfort, posizione e pratica quotidiana della lingua.',

    // Ascoli Piceno
    'ascoli.section_tag': 'Ascoli Piceno',
    'ascoli.section_title_part1': 'Un’Italia più quieta,',
    'ascoli.section_title_italic': 'costruita in travertino',
    'ascoli.section_title_part2': 'e conversazione.',
    'ascoli.section_desc': 'Ascoli Piceno offre agli studenti un contesto raro: una città storica raffinata, con vita quotidiana autentica, strade percorribili a piedi e conversazioni pazienti.',
    'ascoli.image_tag': 'Piazza del Popolo',
    'ascoli.image_title': 'Il cuore in travertino della città',
    'ascoli.image_desc': 'Le lezioni continuano spesso in piazza, nei caffè, nei mercati e nelle vie ombreggiate, dove l’italiano diventa pratico e memorabile.',
    'ascoli.map_tag': 'Aula in cammino',
    'ascoli.map_title': 'Una città compatta per l’immersione',
    'ascoli.map_desc': 'Dal palazzo a Piazza del Popolo, il percorso quotidiano diventa una mappa di lessico, architettura, cibo, saluti e usanze locali.',
    'ascoli.gems_tag': 'Luoghi locali',
    'ascoli.gems_title': 'Posti dove tornare',
    'ascoli.purity_title': 'Un contesto di studio autentico',
    'ascoli.purity_desc': 'Ascoli è abbastanza calma per concentrarsi e abbastanza viva per praticare ogni giorno. Questo equilibrio rende efficace l’immersione.',

    // Teachers
    'teachers.section_tag': 'Docenti',
    'teachers.section_title_part1': 'Guidati da docenti con',
    'teachers.section_title_italic': 'profondità culturale.',
    'teachers.section_desc': 'I nostri insegnanti collegano grammatica, conversazione, letteratura, cinema, cucina e storia locale con precisione e pazienza.',

    // Student Stories
    'stories.section_tag': 'Storie degli studenti',
    'stories.section_title_part1': 'Percorsi linguistici',
    'stories.section_title_italic': 'dalla coorte di Ascoli.',

    // Lifestyle Gallery
    'gallery.sub': 'Momenti di Ascoli',
    'gallery.title_part1': 'Lo stile di vita italiano,',
    'gallery.title_italic': 'senza filtri.',
    'gallery.section_tag': 'Momenti di Ascoli',
    'gallery.section_title_part1': 'La vita quotidiana,',
    'gallery.section_title_italic': 'vista da vicino.',

    // Testimonials
    'testimonials.excellent_reviews': 'Recensioni Eccellenti',
    'testimonials.based_on': 'Riflessioni di studenti recenti e ospiti che ritornano',
    'testimonials.google_rating': 'Valutazione Alumni',
    'testimonials.trustpilot_status': 'Feedback della Coorte',
    'testimonials.video_diary': 'Video Diario',
    'testimonials.video_quote': '"Imparare all\'interno dello storico Palazzo"',
    'testimonials.story_label': 'Storia Alumni',
    'testimonials.story_text': '"Mi alzavo presto, ordinavo l’espresso con sicurezza e alla fine della settimana discutevo di letteratura in italiano."',
    'testimonials.close_video': 'Chiudi Storia',

    // FAQ
    'faq.sub': 'Domande Frequenti',
    'faq.title': 'Curiosità e Dettagli.',
    'faq.desc': 'Tutto ciò di cui hai bisogno per pianificare il tuo lento viaggio linguistico ad Ascoli Piceno.',
    'faq.search': 'Cerca nelle FAQ (es. età, Roma, principiante...)',
    'faq.no_match': 'Nessuna domanda corrispondente trovata. Prova termini come "età", "principiante" o "Roma".',
    'faq.section_tag': 'Domande',
    'faq.section_title': 'Dettagli pratici, risposte chiare.',
    'faq.section_desc': 'Una guida pratica su livelli, viaggio, quote, alloggio e ritmo dello studio ad Ascoli Piceno.',

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
