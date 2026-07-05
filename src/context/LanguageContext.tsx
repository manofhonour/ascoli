import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'IT';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.accommodation': 'Accommodation',
    'nav.ascoli': 'Ascoli Piceno',
    'nav.student-life': 'Student Life',
    'nav.culture': 'Italian Culture',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Method',
    'nav.faq': 'FAQ',
    'nav.blog': 'Notebook',
    'nav.contact': 'Contact',
    'nav.more': 'Experience',
    'nav.inquire': 'Inquire',
    'nav.book_consultation': 'Book Consultation',

    'hero.subtitle': 'Italian Language School Since 1997',
    'hero.title_part1': 'Live Italy.',
    'hero.title_part2': 'Speak Italian.',
    'hero.title_italic': 'Study in Ascoli.',
    'hero.desc':
      'Accademia Italiana offers Italian courses for international students in Ascoli Piceno, led by Dr. Antonella Valentini and supported by qualified teachers, small groups, and authentic cultural practice.',
    'hero.explore_courses': 'Explore Courses',
    'hero.book_consultation': 'Contact the School',
    'hero.salon_title': 'Address',
    'hero.salon_desc': 'Corso Vittorio Emanuele, 27 - 63100 Ascoli Piceno, Italia.',
    'hero.palazzo_class_title': 'Small Groups',
    'hero.palazzo_class_desc': 'Standard courses are designed for 3-6 students with a communicative method.',
    'hero.immersion_care_title': 'Culture Included',
    'hero.immersion_care_desc': 'Cooking, wine, art, history, literature, exams, and custom courses can be added.',
    'hero.scroll_down': 'Explore',

    'trust.established_label': 'Since 1997',
    'trust.established_detail': 'Language services and Italian teaching',
    'trust.cohorts_label': '3-6 Students',
    'trust.cohorts_detail': 'Small standard-course groups',
    'trust.global_label': 'International Students',
    'trust.global_detail': 'Learners from many countries',
    'trust.sanctuaries_label': 'Ascoli Piceno',
    'trust.sanctuaries_detail': 'A historic city in Le Marche',
    'trust.staff_label': 'Qualified Teachers',
    'trust.staff_detail': 'Flexible, communicative instruction',

    'why.philosophy_sub': 'Our Method',
    'why.philosophy_title_part1': 'Precise teaching,',
    'why.philosophy_title_italic': 'real conversation',
    'why.philosophy_title_part2': ', and Italian culture.',
    'why.philosophy_desc':
      'The school combines professional language teaching with flexible course design, authentic materials, and the cultural life of Ascoli Piceno.',
    'why.focus_1_title': 'Qualified Teachers',
    'why.focus_1_desc':
      'The school is directed by Dr. Antonella Valentini and works with qualified teachers.',
    'why.focus_2_title': 'Flexible Formats',
    'why.focus_2_desc':
      'Students can choose standard, intensive, individual, extensive, teacher-refresher, online, and custom-made courses.',
    'why.focus_3_title': 'Communicative Method',
    'why.focus_3_desc':
      'Lessons are designed around communication, level placement, and practical use of Italian.',
    'why.focus_4_title': 'Welcoming Study Environment',
    'why.focus_4_desc':
      'Solo travelers, LGBTQ+ learners, and students with accessibility needs can contact the school in advance to discuss practical arrangements.',

    'courses.sub': 'Courses',
    'courses.title_part1': 'Italian courses',
    'courses.title_italic': 'for real goals.',
    'courses.desc': 'Small groups, individual lessons, teacher training, and custom study in Ascoli Piceno or online.',
    'courses.section_tag': 'Course Formats',
    'courses.section_title_part1': 'Choose the pace',
    'courses.section_title_italic': 'that fits your stay.',
    'courses.section_desc':
      'Course formats include standard, intensive, individual, extensive, teacher-refresher, and custom study.',
    'courses.explore_details': 'View details',
    'courses.curriculum_highlights': 'Course details',
    'courses.enquire_now': 'Enquire now',

    'beyond.section_tag': 'Culture Add-Ons',
    'beyond.section_title_part1': 'Practice Italian through',
    'beyond.section_title_italic': 'local culture.',
    'beyond.section_desc':
      'Cooking, wine, opera, olive oil, ceramics, painting, lace, literature, history, current affairs, business Italian, tourism, and exam preparation are available as course extensions.',

    'accommodation.sub': 'Accommodation',
    'accommodation.title_part1': 'Stay close to',
    'accommodation.title_italic': 'the school.',
    'accommodation.desc':
      'The school can help reserve host-family, B&B, and hotel accommodation in Ascoli Piceno without additional reservation cost.',
    'accommodation.location': 'Location',
    'accommodation.section_tag': 'Accommodation',
    'accommodation.section_title_part1': 'Simple options',
    'accommodation.section_title_italic': 'for your stay.',
    'accommodation.section_desc':
      'Choose a host family, B&B, or hotel in town, and contact the school in advance to discuss solo travel, LGBTQ+ considerations, or accessibility needs.',

    'ascoli.section_tag': 'Ascoli Piceno',
    'ascoli.section_title_part1': 'A historic city',
    'ascoli.section_title_italic': 'for immersion',
    'ascoli.section_title_part2': 'in Le Marche.',
    'ascoli.section_desc':
      'Ascoli Piceno combines history, art, food, festivals, mountains, rivers, and access to the wider Marche region.',
    'ascoli.image_tag': 'Ascoli Piceno',
    'ascoli.image_title': 'A historic city in Le Marche',
    'ascoli.image_desc':
      'A walkable city setting helps students use Italian in cafes, streets, markets, and cultural visits.',
    'ascoli.map_tag': 'City Route',
    'ascoli.map_title': 'A compact study setting',
    'ascoli.map_desc':
      'The school is based on Corso Vittorio Emanuele, close to the daily life of the historic centre.',
    'ascoli.gems_tag': 'City Highlights',
    'ascoli.gems_title': 'Places and traditions',
    'ascoli.purity_title': 'Why Ascoli works for language study',
    'ascoli.purity_desc':
      'The city is large enough for culture and services, yet calm enough for focused study and daily conversation.',

    'teachers.section_tag': 'Team and Services',
    'teachers.section_title_part1': 'Guided by',
    'teachers.section_title_italic': 'experienced language professionals.',
    'teachers.section_desc':
      'Accademia Italiana and Accademia Internazionale combine Italian teaching, language courses, translation, interpreting, exam preparation, tutoring, and Erasmus support.',

    'stories.section_tag': 'Student Pathways',
    'stories.section_title_part1': 'A course path for',
    'stories.section_title_italic': 'each learning need.',

    'gallery.sub': 'Ascoli Moments',
    'gallery.title_part1': 'Daily Italian life,',
    'gallery.title_italic': 'seen up close.',
    'gallery.section_tag': 'Gallery',
    'gallery.section_title_part1': 'Ascoli Piceno,',
    'gallery.section_title_italic': 'food, art, and study.',

    'testimonials.excellent_reviews': 'Director Quote',
    'testimonials.based_on': 'Accademia Internazionale',
    'testimonials.google_rating': 'Method',
    'testimonials.trustpilot_status': 'School Services',
    'testimonials.video_diary': 'Accademia',
    'testimonials.video_quote': '"Open up to the world"',
    'testimonials.story_label': 'Director Quote',
    'testimonials.story_text': '"Come to the Accademia and discover that learning languages can be easy and enjoyable."',
    'testimonials.close_video': 'Close',

    'faq.sub': 'FAQ',
    'faq.title': 'Planning Details',
    'faq.desc': 'Practical answers for study, travel, tuition, and accommodation in Ascoli Piceno.',
    'faq.search': 'Search FAQs',
    'faq.no_match': 'No matching questions found. Try terms like "course", "Rome", or "accommodation".',
    'faq.section_tag': 'Questions',
    'faq.section_title': 'Planning details, clearly answered.',
    'faq.section_desc': 'A practical guide to levels, travel, tuition, accommodation, and the pace of study in Ascoli Piceno.',

    'cta.limited': 'Standard groups: 3-6 students',
    'cta.title_part1': 'Begin Your',
    'cta.title_italic': 'Italian Course.',
    'cta.desc':
      'Contact the school in Ascoli Piceno to discuss your level, dates, course format, accommodation, and cultural interests.',
    'cta.begin': 'Send an Inquiry',
    'cta.whatsapp': 'WhatsApp the School',
    'cta.booking_note': 'For booking conditions, contact the school office directly.',

    'form.sub': 'Inquiry',
    'form.title': 'Begin Your Inquiry',
    'form.desc': 'Tell the school your preferred dates, course format, Italian level, accommodation needs, and any practical support you would like to discuss.',
    'form.field_first_name': 'First Name',
    'form.field_last_name': 'Last Name',
    'form.field_email': 'Email Address',
    'form.field_phone': 'Phone Number',
    'form.field_course': 'Preferred Course Format',
    'form.field_course_placeholder': 'Select a course',
    'form.field_duration': 'Desired Duration',
    'form.field_duration_placeholder': 'Select duration',
    'form.field_language_level': 'Current Italian Language Level',
    'form.field_language_level_placeholder': 'Select your level',
    'form.field_language_level_absolute': 'Absolute beginner',
    'form.field_language_level_elementary': 'Elementary',
    'form.field_language_level_intermediate': 'Intermediate',
    'form.field_language_level_advanced': 'Advanced',
    'form.field_interest': 'Tell us about your goals',
    'form.field_interest_placeholder': 'Example: I would like a standard course in September, host-family accommodation, and information about accessibility or arrival support.',
    'form.submit': 'Submit Inquiry',
    'form.success_title': 'Grazie',
    'form.success_desc': 'Your inquiry has been noted. Please also contact the school directly for booking confirmation.',
    'form.success_cta': 'Review Courses',
    'form.inquire_title': 'Inquire',
  },
  IT: {
    'nav.home': 'Home',
    'nav.about': 'Chi Siamo',
    'nav.courses': 'Corsi',
    'nav.accommodation': 'Alloggi',
    'nav.ascoli': 'Ascoli Piceno',
    'nav.student-life': 'Vita Studentesca',
    'nav.culture': 'Cultura Italiana',
    'nav.gallery': 'Galleria',
    'nav.testimonials': 'Metodo',
    'nav.faq': 'FAQ',
    'nav.blog': 'Notebook',
    'nav.contact': 'Contatti',
    'nav.more': 'Esperienze',
    'nav.inquire': 'Richiedi Info',
    'nav.book_consultation': 'Contatta la Scuola',

    'hero.subtitle': 'Scuola di italiano dal 1997',
    'hero.title_part1': 'Live Italy.',
    'hero.title_part2': 'Speak Italian.',
    'hero.title_italic': 'Studia ad Ascoli.',
    'hero.desc':
      'Accademia Italiana offre corsi di italiano per studenti internazionali ad Ascoli Piceno, con la direzione della Dr. Antonella Valentini, docenti qualificati, piccoli gruppi e pratica culturale autentica.',
    'hero.explore_courses': 'Esplora i Corsi',
    'hero.book_consultation': 'Contatta la Scuola',
    'hero.salon_title': 'Indirizzo',
    'hero.salon_desc': 'Corso Vittorio Emanuele, 27 - 63100 Ascoli Piceno, Italia.',
    'hero.palazzo_class_title': 'Piccoli gruppi',
    'hero.palazzo_class_desc': 'I corsi standard sono pensati per 3-6 studenti con metodo comunicativo.',
    'hero.immersion_care_title': 'Cultura inclusa',
    'hero.immersion_care_desc': 'Cucina, vino, arte, storia, letteratura, esami e corsi su misura.',
    'hero.scroll_down': 'Esplora',

    'trust.established_label': 'Dal 1997',
    'trust.established_detail': 'Servizi linguistici e corsi di italiano',
    'trust.cohorts_label': '3-6 studenti',
    'trust.cohorts_detail': 'Piccoli gruppi nei corsi standard',
    'trust.global_label': 'Studenti internazionali',
    'trust.global_detail': 'Allievi da molti paesi',
    'trust.sanctuaries_label': 'Ascoli Piceno',
    'trust.sanctuaries_detail': 'Citta storica nelle Marche',
    'trust.staff_label': 'Docenti qualificati',
    'trust.staff_detail': 'Metodo flessibile e comunicativo',

    'why.philosophy_sub': 'Il Metodo',
    'why.philosophy_title_part1': 'Didattica precisa,',
    'why.philosophy_title_italic': 'conversazione reale',
    'why.philosophy_title_part2': ' e cultura italiana.',
    'why.philosophy_desc':
      'La scuola unisce insegnamento professionale, corsi flessibili, materiali autentici e vita culturale di Ascoli Piceno.',
    'why.focus_1_title': 'Docenti qualificati',
    'why.focus_1_desc':
      'La scuola e diretta dalla Dr. Antonella Valentini e lavora con docenti qualificati.',
    'why.focus_2_title': 'Formati flessibili',
    'why.focus_2_desc':
      'Corsi standard, intensivi, individuali, estensivi, aggiornamento docenti, online e su misura.',
    'why.focus_3_title': 'Metodo comunicativo',
    'why.focus_3_desc':
      'Le lezioni sono costruite su comunicazione, livello dello studente e uso pratico della lingua.',
    'why.focus_4_title': 'Ambiente accogliente',
    'why.focus_4_desc':
      'Chi viaggia da solo, studenti LGBTQ+ e studenti con esigenze di accessibilita possono contattare la scuola in anticipo.',

    'courses.sub': 'Corsi',
    'courses.title_part1': 'Corsi di italiano',
    'courses.title_italic': 'per obiettivi reali.',
    'courses.desc': 'Piccoli gruppi, lezioni individuali, formazione docenti e corsi su misura ad Ascoli Piceno o online.',
    'courses.section_tag': 'Formati dei corsi',
    'courses.section_title_part1': 'Scegli il ritmo',
    'courses.section_title_italic': 'adatto al tuo soggiorno.',
    'courses.section_desc':
      'I formati includono corsi standard, intensivi, individuali, estensivi, aggiornamento docenti e su misura.',
    'courses.explore_details': 'Vedi dettagli',
    'courses.curriculum_highlights': 'Dettagli del corso',
    'courses.enquire_now': 'Richiedi informazioni',

    'beyond.section_tag': 'Cultura',
    'beyond.section_title_part1': 'Pratica italiano con',
    'beyond.section_title_italic': 'la cultura locale.',
    'beyond.section_desc':
      'Cucina, vino, opera, olio, ceramica, pittura, tombolo, letteratura, storia, attualita, business, turismo ed esami.',

    'accommodation.sub': 'Alloggi',
    'accommodation.title_part1': 'Alloggia vicino',
    'accommodation.title_italic': 'alla scuola.',
    'accommodation.desc':
      'La scuola puo aiutare a prenotare famiglia ospitante, B&B e hotel ad Ascoli Piceno senza costo di prenotazione aggiuntivo.',
    'accommodation.location': 'Posizione',
    'accommodation.section_tag': 'Alloggi',
    'accommodation.section_title_part1': 'Soluzioni semplici',
    'accommodation.section_title_italic': 'per il soggiorno.',
    'accommodation.section_desc':
      'Scegli famiglia ospitante, B&B o hotel e contatta la scuola in anticipo per esigenze personali o di accessibilita.',

    'ascoli.section_tag': 'Ascoli Piceno',
    'ascoli.section_title_part1': 'Una citta storica',
    'ascoli.section_title_italic': 'per immersione',
    'ascoli.section_title_part2': 'nelle Marche.',
    'ascoli.section_desc':
      'Ascoli Piceno unisce storia, arte, cucina, feste, montagne, fiumi e collegamenti con le Marche.',
    'ascoli.image_tag': 'Ascoli Piceno',
    'ascoli.image_title': 'Una citta storica nelle Marche',
    'ascoli.image_desc': 'Un contesto a misura d uomo aiuta a usare l italiano in caffe, strade, mercati e visite culturali.',
    'ascoli.map_tag': 'Percorso cittadino',
    'ascoli.map_title': 'Un contesto compatto per studiare',
    'ascoli.map_desc': 'La scuola si trova in Corso Vittorio Emanuele, vicino alla vita del centro storico.',
    'ascoli.gems_tag': 'Luoghi principali',
    'ascoli.gems_title': 'Luoghi e tradizioni',
    'ascoli.purity_title': 'Perche Ascoli funziona per lo studio',
    'ascoli.purity_desc': 'La citta offre cultura e servizi, ma resta abbastanza calma per studio e conversazione quotidiana.',

    'teachers.section_tag': 'Team e servizi',
    'teachers.section_title_part1': 'Guidati da',
    'teachers.section_title_italic': 'professionisti delle lingue.',
    'teachers.section_desc':
      'Accademia Italiana e Accademia Internazionale uniscono insegnamento, traduzione, interpretariato, esami, tutoraggio e supporto Erasmus.',

    'stories.section_tag': 'Percorsi studenti',
    'stories.section_title_part1': 'Un percorso per',
    'stories.section_title_italic': 'ogni esigenza.',

    'gallery.sub': 'Momenti di Ascoli',
    'gallery.title_part1': 'Vita italiana quotidiana,',
    'gallery.title_italic': 'vista da vicino.',
    'gallery.section_tag': 'Galleria',
    'gallery.section_title_part1': 'Ascoli Piceno,',
    'gallery.section_title_italic': 'cibo, arte e studio.',

    'testimonials.excellent_reviews': 'Citazione della direttrice',
    'testimonials.based_on': 'Accademia Internazionale',
    'testimonials.google_rating': 'Metodo',
    'testimonials.trustpilot_status': 'Servizi della scuola',
    'testimonials.video_diary': 'Accademia',
    'testimonials.video_quote': '"Open up to the world"',
    'testimonials.story_label': 'Citazione della direttrice',
    'testimonials.story_text': '"Venite all Accademia e scoprirete che imparare le lingue puo essere facile e divertente."',
    'testimonials.close_video': 'Chiudi',

    'faq.sub': 'FAQ',
    'faq.title': 'Dettagli pratici',
    'faq.desc': 'Risposte pratiche per studio, viaggio, quote e alloggio ad Ascoli Piceno.',
    'faq.search': 'Cerca nelle FAQ',
    'faq.no_match': 'Nessuna domanda trovata. Prova parole come "corso", "Roma" o "alloggio".',
    'faq.section_tag': 'Domande',
    'faq.section_title': 'Dettagli pratici, risposte chiare.',
    'faq.section_desc': 'Guida pratica a livelli, viaggio, quote, alloggio e ritmo di studio ad Ascoli Piceno.',

    'cta.limited': 'Gruppi standard: 3-6 studenti',
    'cta.title_part1': 'Inizia il tuo',
    'cta.title_italic': 'corso di italiano.',
    'cta.desc':
      'Contatta la scuola ad Ascoli Piceno per parlare di livello, date, formato del corso, alloggio e interessi culturali.',
    'cta.begin': 'Invia richiesta',
    'cta.whatsapp': 'WhatsApp scuola',
    'cta.booking_note': 'Per condizioni di prenotazione, contatta direttamente la segreteria.',

    'form.sub': 'Richiesta',
    'form.title': 'Inizia la richiesta',
    'form.desc': 'Indica date, corso, livello di italiano, alloggio desiderato ed eventuali esigenze pratiche.',
    'form.field_first_name': 'Nome',
    'form.field_last_name': 'Cognome',
    'form.field_email': 'Email',
    'form.field_phone': 'Telefono',
    'form.field_course': 'Formato del corso',
    'form.field_course_placeholder': 'Seleziona un corso',
    'form.field_duration': 'Durata',
    'form.field_duration_placeholder': 'Seleziona durata',
    'form.field_language_level': 'Livello attuale',
    'form.field_language_level_placeholder': 'Seleziona livello',
    'form.field_language_level_absolute': 'Principiante assoluto',
    'form.field_language_level_elementary': 'Elementare',
    'form.field_language_level_intermediate': 'Intermedio',
    'form.field_language_level_advanced': 'Avanzato',
    'form.field_interest': 'Parlaci dei tuoi obiettivi',
    'form.field_interest_placeholder': 'Esempio: corso standard a settembre, alloggio in famiglia e informazioni su accessibilita o arrivo.',
    'form.submit': 'Invia richiesta',
    'form.success_title': 'Grazie',
    'form.success_desc': 'La richiesta e stata annotata. Contatta anche la scuola per conferma della prenotazione.',
    'form.success_cta': 'Rivedi i corsi',
    'form.inquire_title': 'Richiedi info',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    return translations[language][key] || translations.EN[key] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
