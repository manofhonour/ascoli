import photo1 from '../assets/photos/accademia-01.jpg';
import photo2 from '../assets/photos/accademia-02.jpg';
import photo3 from '../assets/photos/accademia-03.jpg';
import photo4 from '../assets/photos/accademia-04.jpg';
import photo5 from '../assets/photos/accademia-05.jpg';
import photo6 from '../assets/photos/accademia-06.jpg';
import photo7 from '../assets/photos/accademia-07.jpg';
import photo8 from '../assets/photos/accademia-08.jpg';
import photo9 from '../assets/photos/accademia-09.jpg';
import photo10 from '../assets/photos/accademia-10.jpg';
import photo11 from '../assets/photos/accademia-11.jpg';
import photo12 from '../assets/photos/accademia-12.jpg';
import photo13 from '../assets/photos/accademia-13.jpg';
import photo14 from '../assets/photos/accademia-14.jpg';
import photo15 from '../assets/photos/accademia-15.jpg';
import photo16 from '../assets/photos/accademia-16.jpg';

export const contactInfo = {
  schoolName: 'Accademia Italiana',
  networkName: 'Accademia Internazionale',
  addressLine1: 'Corso Vittorio Emanuele, 27',
  cityLine: '63100 Ascoli Piceno (AP), Italia',
  phone: '+39 0736 257735',
  whatsapp: '+39 375 555 9344',
  whatsappHref: 'https://wa.me/393755559344',
  email: 'info@accademia-italiana.com',
  internationalEmail: 'info@accademiainternazionale.it',
  hours: 'Monday to Friday: 10:00-13:00 and 16:00-19:00',
  hoursIT: 'Lunedi-venerdi: 10:00-13:00 e 16:00-19:00',
  founded: '1997',
  director: 'Dr. Antonella Valentini',
};

export const images = {
  ascoli: photo10,
  classroom: photo14,
  conversation: photo3,
  cooking: photo5,
  wine: photo12,
  study: photo9,
  accommodation: photo11,
  piazza: photo10,
  cultureInterior: photo11,
  groupLesson: photo1,
  whiteboardLesson: photo4,
  studentGroup: photo14,
  cookingWorkshop: photo2,
  foodCulture: photo13,
  classroomCollage: photo16,
  smallGroup: photo8,
  studentPortrait: photo6,
  socialTable: photo15,
};

export const photoGallery = [
  { id: 'group-lesson-book', category: 'study', title: 'Small-Group Lesson', titleIT: 'Lezione in piccolo gruppo', location: 'Accademia classroom', locationIT: 'Aula Accademia', image: photo1, imagePosition: '50% 44%' },
  { id: 'cooking-table', category: 'culture', title: 'Cooking Workshop', titleIT: 'Laboratorio di cucina', location: 'Culture course', locationIT: 'Corso di cultura', image: photo2, imagePosition: '50% 50%' },
  { id: 'conversation-class', category: 'study', title: 'Conversation Practice', titleIT: 'Pratica di conversazione', location: 'Classroom activity', locationIT: 'Attivita in aula', image: photo3, imagePosition: '50% 46%' },
  { id: 'whiteboard-lesson', category: 'study', title: 'Italian Lesson', titleIT: 'Lezione di italiano', location: 'Accademia classroom', locationIT: 'Aula Accademia', image: photo4, imagePosition: '54% 48%' },
  { id: 'pasta-workshop', category: 'culture', title: 'Fresh Pasta Workshop', titleIT: 'Laboratorio di pasta fresca', location: 'Italian cooking', locationIT: 'Cucina italiana', image: photo5, imagePosition: '50% 56%' },
  { id: 'student-moment', category: 'study', title: 'Student Moment', titleIT: 'Momento in aula', location: 'Accademia classroom', locationIT: 'Aula Accademia', image: photo6, imagePosition: '50% 50%' },
  { id: 'table-lesson', category: 'study', title: 'Group Study Table', titleIT: 'Studio di gruppo', location: 'Small course group', locationIT: 'Piccolo gruppo', image: photo7, imagePosition: '52% 50%' },
  { id: 'course-discussion', category: 'study', title: 'Course Discussion', titleIT: 'Discussione in corso', location: 'Classroom activity', locationIT: 'Attivita in aula', image: photo8, imagePosition: '55% 52%' },
  { id: 'teacher-board', category: 'study', title: 'Teacher-Led Practice', titleIT: 'Pratica guidata', location: 'Italian lesson', locationIT: 'Lezione di italiano', image: photo9, imagePosition: '47% 48%' },
  { id: 'ascoli-piazza', category: 'ascoli', title: 'Piazza del Popolo', titleIT: 'Piazza del Popolo', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: photo10, imagePosition: '50% 50%' },
  { id: 'heritage-interior', category: 'ascoli', title: 'Historic Interior', titleIT: 'Interno storico', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: photo11, imagePosition: '50% 50%' },
  { id: 'local-cafe', category: 'ascoli', title: 'Local Cafe Atmosphere', titleIT: 'Atmosfera di caffe', location: 'Town-centre life', locationIT: 'Vita del centro', image: photo12, imagePosition: '50% 50%' },
  { id: 'food-culture', category: 'culture', title: 'Food and Culture', titleIT: 'Cibo e cultura', location: 'Culture add-on', locationIT: 'Modulo culturale', image: photo13, imagePosition: '45% 48%' },
  { id: 'student-group', category: 'study', title: 'International Group', titleIT: 'Gruppo internazionale', location: 'Accademia classroom', locationIT: 'Aula Accademia', image: photo14, imagePosition: '52% 48%' },
  { id: 'social-table', category: 'culture', title: 'Social Italian Practice', titleIT: 'Pratica sociale di italiano', location: 'Cafe setting', locationIT: 'Caffe e conversazione', image: photo15, imagePosition: '50% 48%' },
  { id: 'course-collage', category: 'study', title: 'Accademia Course Moments', titleIT: 'Momenti dei corsi Accademia', location: 'School photo collage', locationIT: 'Foto della scuola', image: photo16, imagePosition: '50% 50%' },
];

export const officialCourses = [
  {
    id: 'standard',
    name: 'Standard Italian Course',
    italianName: 'Corso Standard',
    duration: '1+ weeks',
    durationIT: '1+ settimane',
    hoursPerWeek: '20 hours/week',
    hoursPerWeekIT: '20 ore/settimana',
    price: 'EUR 220/week',
    priceIT: 'EUR 220/settimana',
    image: images.studentGroup,
    imagePosition: '52% 48%',
    description:
      'Small-group Italian course in Ascoli Piceno with 20 hours per week and groups of 3-6 students.',
    descriptionIT:
      'Corso di italiano in piccolo gruppo ad Ascoli Piceno, con 20 ore a settimana e gruppi di 3-6 studenti.',
    highlights: ['3-6 students per group', '20 lessons per week', 'Communicative method', 'Authentic teaching materials'],
    highlightsIT: ['3-6 studenti per gruppo', '20 lezioni a settimana', 'Metodo comunicativo', 'Materiali didattici autentici'],
  },
  {
    id: 'intensive',
    name: 'Intensive Italian Course',
    italianName: 'Corso Intensivo',
    duration: '1+ weeks',
    durationIT: '1+ settimane',
    hoursPerWeek: '25 hours/week',
    hoursPerWeekIT: '25 ore/settimana',
    price: 'From EUR 370/week',
    priceIT: 'Da EUR 370/settimana',
    image: images.conversation,
    imagePosition: '50% 46%',
    description:
      'Intensive course with 20 group hours and 5 individual hours each week.',
    descriptionIT:
      'Corso intensivo con 20 ore di gruppo e 5 ore individuali ogni settimana.',
    highlights: ['20 group hours plus 5 individual hours', '1 week EUR 370', '2 weeks EUR 700', 'Additional weeks EUR 330'],
    highlightsIT: ['20 ore di gruppo piu 5 ore individuali', '1 settimana EUR 370', '2 settimane EUR 700', 'Settimane aggiuntive EUR 330'],
  },
  {
    id: 'individual',
    name: 'Individual Lessons',
    italianName: 'Lezioni Individuali',
    duration: 'Flexible',
    durationIT: 'Flessibile',
    hoursPerWeek: 'By appointment',
    hoursPerWeekIT: 'Su appuntamento',
    price: 'EUR 30/hour',
    priceIT: 'EUR 30/ora',
    image: images.study,
    imagePosition: '47% 48%',
    description:
      'One-to-one lessons available by appointment, with hourly and package pricing.',
    descriptionIT:
      'Lezioni individuali su appuntamento, con tariffa oraria e pacchetti disponibili.',
    highlights: ['1 hour EUR 30', '20 hours EUR 550', '30 hours EUR 780', '50 hours EUR 1200'],
    highlightsIT: ['1 ora EUR 30', '20 ore EUR 550', '30 ore EUR 780', '50 ore EUR 1200'],
  },
  {
    id: 'extensive',
    name: 'Extensive Course',
    italianName: 'Corso Estensivo',
    duration: 'Ongoing',
    durationIT: 'Continuativo',
    hoursPerWeek: '4-6 hours/week',
    hoursPerWeekIT: '4-6 ore/settimana',
    price: 'EUR 10-14/hour',
    priceIT: 'EUR 10-14/ora',
    image: images.smallGroup,
    imagePosition: '55% 52%',
    description:
      'Extensive course for groups of 3-6 students, with 4-6 hours per week and one or two weekly meetings.',
    descriptionIT:
      'Corso estensivo per gruppi di 3-6 studenti, con 4-6 ore a settimana e uno o due incontri settimanali.',
    highlights: ['3-6 students per group', '4-6 hours per week', '1-2 meetings each week', 'EUR 10-14 per hour'],
    highlightsIT: ['3-6 studenti per gruppo', '4-6 ore a settimana', '1-2 incontri ogni settimana', 'EUR 10-14 all ora'],
  },
  {
    id: 'teacher-refresher',
    name: 'Refresher Course for Teachers',
    italianName: 'Aggiornamento Docenti',
    duration: '1-2 weeks',
    durationIT: '1-2 settimane',
    hoursPerWeek: '30 hours/week',
    hoursPerWeekIT: '30 ore/settimana',
    price: 'From EUR 430',
    priceIT: 'Da EUR 430',
    image: images.whiteboardLesson,
    imagePosition: '54% 48%',
    description:
      'Refresher course for teachers with 30 hours per week and one- or two-week formats.',
    descriptionIT:
      'Corso di aggiornamento per docenti con 30 ore a settimana e formule di una o due settimane.',
    highlights: ['30 hours per week', 'Language and culture focus', 'Available as one or two weeks', 'Designed for teachers'],
    highlightsIT: ['30 ore a settimana', 'Focus su lingua e cultura', 'Disponibile per una o due settimane', 'Pensato per docenti'],
  },
  {
    id: 'custom',
    name: 'Custom-Made Course',
    italianName: 'Corso Su Misura',
    duration: 'Custom',
    durationIT: 'Su misura',
    hoursPerWeek: 'Custom',
    hoursPerWeekIT: 'Su misura',
    price: 'Quote on request',
    priceIT: 'Preventivo su richiesta',
    image: images.foodCulture,
    imagePosition: '45% 48%',
    description:
      'Custom-made Italian course available in Ascoli Piceno or online, with pricing prepared on request.',
    descriptionIT:
      'Corso di italiano su misura disponibile ad Ascoli Piceno o online, con preventivo su richiesta.',
    highlights: ['Personal schedule', 'Special-interest vocabulary', 'In-person or online', 'Quote on request'],
    highlightsIT: ['Calendario personalizzato', 'Lessico per interessi specifici', 'In presenza o online', 'Preventivo su richiesta'],
  },
];

export const culturalOfferings = [
  {
    title: 'Italian Cooking',
    italianTitle: 'Cucina Italiana',
    tagline: 'Regional food as language practice',
    taglineIT: 'Cibo regionale come pratica linguistica',
    description:
      'Italian culture courses include cooking and local food traditions, with Ascoli Piceno known for Olive all Ascolana.',
    descriptionIT:
      'I corsi di cultura italiana includono cucina e tradizioni gastronomiche locali; Ascoli Piceno e nota per le Olive all Ascolana.',
    image: images.cooking,
    imagePosition: '50% 54%',
  },
  {
    title: 'Wine Tasting',
    italianTitle: 'Degustazione di Vini',
    tagline: 'A three-hour lesson in local wine culture',
    taglineIT: 'Una lezione di tre ore sulla cultura del vino',
    description:
      'The wine-tasting lesson combines theory and practice with white, red, and rose wines, grape varieties, production methods, and local gastronomy.',
    descriptionIT:
      'La degustazione unisce teoria e pratica con vini bianchi, rossi e rose, vitigni, metodi di produzione e gastronomia locale.',
    image: images.wine,
    imagePosition: '50% 50%',
  },
  {
    title: 'Arts and Handcrafts',
    italianTitle: 'Arti e Tradizioni',
    tagline: 'Opera, ceramics, painting, lace and olive oil',
    taglineIT: 'Opera, ceramica, pittura, tombolo e olio',
    description:
      'Add-on culture options include opera, olive oil, ceramics, painting, and tombolo pillow lace, depending on dates and availability.',
    descriptionIT:
      'Le opzioni culturali includono opera, olio, ceramica, pittura e tombolo, in base a date e disponibilita.',
    image: images.cultureInterior,
    imagePosition: '50% 50%',
  },
  {
    title: 'Special Italian Topics',
    italianTitle: 'Temi Specialistici',
    tagline: 'Business, tourism, history and exams',
    taglineIT: 'Business, turismo, storia ed esami',
    description:
      'Students can add current affairs, business Italian, tourism and hotel management, university entrance preparation, CILS, I.T., history, art history, literature, and Italy today.',
    descriptionIT:
      'Gli studenti possono aggiungere attualita, italiano commerciale, turismo e hotel management, preparazione universitaria, CILS, I.T., storia, storia dell arte, letteratura e Italia oggi.',
    image: images.classroomCollage,
    imagePosition: '50% 50%',
  },
];

export const services = [
  {
    title: 'Italian courses for foreigners',
    titleIT: 'Corsi di italiano per stranieri',
    description: 'Standard, intensive, individual, extensive, teacher-refresher, and custom Italian courses.',
    descriptionIT: 'Corsi standard, intensivi, individuali, estensivi, aggiornamento docenti e corsi su misura.',
  },
  {
    title: 'Translation and interpreting',
    titleIT: 'Traduzione e interpretariato',
    description: 'Accademia Internazionale offers language services alongside teaching.',
    descriptionIT: 'Accademia Internazionale offre servizi linguistici insieme alla didattica.',
  },
  {
    title: 'Exam preparation and certifications',
    titleIT: 'Preparazione esami e certificazioni',
    description: 'Preparation support includes language exams and Italian certification pathways such as CILS and I.T.',
    descriptionIT: 'Il supporto include esami linguistici e certificazioni di italiano come CILS e I.T.',
  },
  {
    title: 'School tutoring and Erasmus support',
    titleIT: 'Tutoraggio scolastico e supporto Erasmus',
    description: 'The wider Accademia Internazionale offer includes school support and services for Erasmus students.',
    descriptionIT: 'L offerta di Accademia Internazionale include supporto scolastico e servizi per studenti Erasmus.',
  },
];

export const accommodationOptions = [
  {
    id: 'host-family',
    name: 'Host Family',
    italianName: 'Famiglia Ospitante',
    tagline: 'Stay with a host family',
    taglineIT: 'Soggiorno in famiglia ospitante',
    image: images.ascoli,
    imagePosition: '50% 50%',
    description:
      'Students may stay with a local host family. The school can help reserve this option without additional reservation cost.',
    descriptionIT:
      'Gli studenti possono soggiornare presso una famiglia ospitante. La scuola puo aiutare a prenotare questa opzione senza costi di prenotazione aggiuntivi.',
    features: [
      'Single room with breakfast: EUR 170/week',
      'Single room with half board: EUR 230/week',
      'Single room with full board: EUR 280/week',
      'Double room per student with breakfast: EUR 125/week',
      'Double room per student with half board: EUR 185/week',
      'Double room per student with full board: EUR 235/week',
    ],
    featuresIT: [
      'Camera singola con colazione: EUR 170/settimana',
      'Camera singola con mezza pensione: EUR 230/settimana',
      'Camera singola con pensione completa: EUR 280/settimana',
      'Camera doppia per studente con colazione: EUR 125/settimana',
      'Camera doppia per studente con mezza pensione: EUR 185/settimana',
      'Camera doppia per studente con pensione completa: EUR 235/settimana',
    ],
  },
  {
    id: 'bnb',
    name: 'Bed and Breakfast',
    italianName: 'B&B',
    tagline: 'Town-centre accommodation',
    taglineIT: 'Alloggio in centro',
    image: images.accommodation,
    imagePosition: '50% 50%',
    description:
      'B&B accommodation in the town centre can be requested through the school, with pricing on request.',
    descriptionIT:
      'Il B&B in centro puo essere richiesto tramite la scuola, con prezzi su richiesta.',
    features: ['Town-centre options', 'Prices on request', 'Reservation support through the school'],
    featuresIT: ['Soluzioni in centro', 'Prezzi su richiesta', 'Supporto alla prenotazione tramite la scuola'],
  },
  {
    id: 'hotel',
    name: 'Hotel',
    italianName: 'Hotel',
    tagline: 'Hotel stay in town',
    taglineIT: 'Soggiorno in hotel in citta',
    image: images.wine,
    imagePosition: '50% 50%',
    description:
      'Hotel accommodation in the town centre can be arranged on request for students who prefer a more conventional stay.',
    descriptionIT:
      'L alloggio in hotel in centro puo essere organizzato su richiesta per studenti che preferiscono una soluzione piu tradizionale.',
    features: ['Central Ascoli Piceno', 'Prices on request', 'Reservation support through the school'],
    featuresIT: ['Ascoli Piceno centrale', 'Prezzi su richiesta', 'Supporto alla prenotazione tramite la scuola'],
  },
];

export const ascoliHighlights = [
  {
    title: 'Piazza del Popolo',
    titleIT: 'Piazza del Popolo',
    type: 'Historic centre',
    typeIT: 'Centro storico',
    description:
      'The travertine heart of Ascoli Piceno and one of the city landmarks.',
    descriptionIT:
      'Il cuore in travertino di Ascoli Piceno e uno dei luoghi simbolo della citta.',
  },
  {
    title: 'History, art and theatre',
    titleIT: 'Storia, arte e teatro',
    type: 'Culture',
    typeIT: 'Cultura',
    description:
      'Ascoli offers historic streets, Roman traces, museums, churches, and Teatro Ventidio Basso.',
    descriptionIT:
      'Ascoli offre strade storiche, tracce romane, musei, chiese e il Teatro Ventidio Basso.',
  },
  {
    title: 'La Quintana and Sant Emidio',
    titleIT: 'La Quintana e Sant Emidio',
    type: 'Events',
    typeIT: 'Eventi',
    description:
      'The city calendar includes the Quintana in July and August and the Feast of Sant Emidio on August 5.',
    descriptionIT:
      'Il calendario cittadino include la Quintana a luglio e agosto e la festa di Sant Emidio il 5 agosto.',
  },
  {
    title: 'Marche between coast and mountains',
    titleIT: 'Le Marche tra costa e montagne',
    type: 'Region',
    typeIT: 'Regione',
    description:
      'The Marche region connects Apennine landscapes, Adriatic beaches, hill towns, vineyards, olive groves, and local dishes.',
    descriptionIT:
      'Le Marche uniscono paesaggi appenninici, spiagge adriatiche, borghi, vigneti, uliveti e cucina locale.',
  },
];

export const inclusiveSupport = [
  {
    title: 'Solo Travelers',
    titleIT: 'Chi viaggia da solo',
    description:
      'Students traveling independently can discuss course rhythm, accommodation preferences, and arrival details before booking.',
    descriptionIT:
      'Gli studenti che viaggiano da soli possono parlare di ritmo del corso, preferenze di alloggio e dettagli di arrivo prima della prenotazione.',
  },
  {
    title: 'LGBTQ+ Community',
    titleIT: 'Comunita LGBTQ+',
    description:
      'LGBTQ+ learners are welcome to contact the school with any personal considerations before arrival.',
    descriptionIT:
      'Gli studenti LGBTQ+ sono invitati a contattare la scuola prima dell arrivo per eventuali esigenze personali.',
  },
  {
    title: 'Accessibility Needs',
    titleIT: 'Esigenze di accessibilita',
    description:
      'Students with disabilities or accessibility needs should contact the school in advance so practical arrangements can be discussed.',
    descriptionIT:
      'Gli studenti con disabilita o esigenze di accessibilita devono contattare la scuola in anticipo per discutere gli aspetti pratici.',
  },
];

export const directorQuote =
  'Come to the Accademia and discover that learning languages can be easy and enjoyable.';

export const directorQuoteIT =
  'Venite all Accademia e scoprirete che imparare le lingue puo essere facile e divertente.';
