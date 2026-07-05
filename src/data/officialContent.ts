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
  ascoli:
    'https://images.unsplash.com/photo-1562011107-da2e2955e1e0?auto=format&fit=crop&w=1600&q=80',
  classroom:
    'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
  conversation:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
  cooking:
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
  wine:
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
  study:
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
  accommodation:
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80',
  piazza:
    'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80',
};

export const officialCourses = [
  {
    id: 'standard',
    name: 'Standard Italian Course',
    italianName: 'Corso Standard',
    duration: '1+ weeks',
    hoursPerWeek: '20 hours/week',
    price: 'EUR 220/week',
    image: images.classroom,
    description:
      'Small-group Italian course in Ascoli Piceno with 20 hours per week and groups of 3-6 students.',
    highlights: ['3-6 students per group', '20 lessons per week', 'Communicative method', 'Authentic teaching materials'],
  },
  {
    id: 'intensive',
    name: 'Intensive Italian Course',
    italianName: 'Corso Intensivo',
    duration: '1+ weeks',
    hoursPerWeek: '25 hours/week',
    price: 'From EUR 370/week',
    image: images.conversation,
    description:
      'Intensive course with 20 group hours and 5 individual hours each week.',
    highlights: ['20 group hours plus 5 individual hours', '1 week EUR 370', '2 weeks EUR 700', 'Additional weeks EUR 330'],
  },
  {
    id: 'individual',
    name: 'Individual Lessons',
    italianName: 'Lezioni Individuali',
    duration: 'Flexible',
    hoursPerWeek: 'By appointment',
    price: 'EUR 30/hour',
    image: images.study,
    description:
      'One-to-one lessons available by appointment, with hourly and package pricing.',
    highlights: ['1 hour EUR 30', '20 hours EUR 550', '30 hours EUR 780', '50 hours EUR 1200'],
  },
  {
    id: 'extensive',
    name: 'Extensive Course',
    italianName: 'Corso Estensivo',
    duration: 'Ongoing',
    hoursPerWeek: '4-6 hours/week',
    price: 'EUR 10-14/hour',
    image: images.piazza,
    description:
      'Extensive course for groups of 3-6 students, with 4-6 hours per week and one or two weekly meetings.',
    highlights: ['3-6 students per group', '4-6 hours per week', '1-2 meetings each week', 'EUR 10-14 per hour'],
  },
  {
    id: 'teacher-refresher',
    name: 'Refresher Course for Teachers',
    italianName: 'Aggiornamento Docenti',
    duration: '1-2 weeks',
    hoursPerWeek: '30 hours/week',
    price: 'From EUR 430',
    image: images.classroom,
    description:
      'Refresher course for teachers with 30 hours per week and one- or two-week formats.',
    highlights: ['30 hours per week', 'Language and culture focus', 'Available as one or two weeks', 'Designed for teachers'],
  },
  {
    id: 'custom',
    name: 'Custom-Made Course',
    italianName: 'Corso Su Misura',
    duration: 'Custom',
    hoursPerWeek: 'Custom',
    price: 'Quote on request',
    image: images.cooking,
    description:
      'Custom-made Italian course available in Ascoli Piceno or online, with pricing prepared on request.',
    highlights: ['Personal schedule', 'Special-interest vocabulary', 'In-person or online', 'Quote on request'],
  },
];

export const culturalOfferings = [
  {
    title: 'Italian Cooking',
    italianTitle: 'Cucina Italiana',
    tagline: 'Regional food as language practice',
    description:
      'Italian culture courses include cooking and local food traditions, with Ascoli Piceno known for Olive all Ascolana.',
    image: images.cooking,
  },
  {
    title: 'Wine Tasting',
    italianTitle: 'Degustazione di Vini',
    tagline: 'A three-hour lesson in local wine culture',
    description:
      'The wine-tasting lesson combines theory and practice with white, red, and rose wines, grape varieties, production methods, and local gastronomy.',
    image: images.wine,
  },
  {
    title: 'Arts and Handcrafts',
    italianTitle: 'Arti e Tradizioni',
    tagline: 'Opera, ceramics, painting, lace and olive oil',
    description:
      'Add-on culture options include opera, olive oil, ceramics, painting, and tombolo pillow lace, depending on dates and availability.',
    image: images.study,
  },
  {
    title: 'Special Italian Topics',
    italianTitle: 'Temi Specialistici',
    tagline: 'Business, tourism, history and exams',
    description:
      'Students can add current affairs, business Italian, tourism and hotel management, university entrance preparation, CILS, I.T., history, art history, literature, and Italy today.',
    image: images.piazza,
  },
];

export const services = [
  {
    title: 'Italian courses for foreigners',
    description: 'Standard, intensive, individual, extensive, teacher-refresher, and custom Italian courses.',
  },
  {
    title: 'Translation and interpreting',
    description: 'Accademia Internazionale offers language services alongside teaching.',
  },
  {
    title: 'Exam preparation and certifications',
    description: 'Preparation support includes language exams and Italian certification pathways such as CILS and I.T.',
  },
  {
    title: 'School tutoring and Erasmus support',
    description: 'The wider Accademia Internazionale offer includes school support and services for Erasmus students.',
  },
];

export const accommodationOptions = [
  {
    id: 'host-family',
    name: 'Host Family',
    italianName: 'Famiglia Ospitante',
    tagline: 'Stay with a host family',
    image: images.accommodation,
    description:
      'Students may stay with a local host family. The school can help reserve this option without additional reservation cost.',
    features: [
      'Single room with breakfast: EUR 170/week',
      'Single room with half board: EUR 230/week',
      'Single room with full board: EUR 280/week',
      'Double room per student with breakfast: EUR 125/week',
      'Double room per student with half board: EUR 185/week',
      'Double room per student with full board: EUR 235/week',
    ],
  },
  {
    id: 'bnb',
    name: 'Bed and Breakfast',
    italianName: 'B&B',
    tagline: 'Town-centre accommodation',
    image: images.piazza,
    description:
      'B&B accommodation in the town centre can be requested through the school, with pricing on request.',
    features: ['Town-centre options', 'Prices on request', 'Reservation support through the school'],
  },
  {
    id: 'hotel',
    name: 'Hotel',
    italianName: 'Hotel',
    tagline: 'Hotel stay in town',
    image: images.study,
    description:
      'Hotel accommodation in the town centre can be arranged on request for students who prefer a more conventional stay.',
    features: ['Central Ascoli Piceno', 'Prices on request', 'Reservation support through the school'],
  },
];

export const ascoliHighlights = [
  {
    title: 'Piazza del Popolo',
    type: 'Historic centre',
    description:
      'The travertine heart of Ascoli Piceno and one of the city landmarks.',
  },
  {
    title: 'History, art and theatre',
    type: 'Culture',
    description:
      'Ascoli offers historic streets, Roman traces, museums, churches, and Teatro Ventidio Basso.',
  },
  {
    title: 'La Quintana and Sant Emidio',
    type: 'Events',
    description:
      'The city calendar includes the Quintana in July and August and the Feast of Sant Emidio on August 5.',
  },
  {
    title: 'Marche between coast and mountains',
    type: 'Region',
    description:
      'The Marche region connects Apennine landscapes, Adriatic beaches, hill towns, vineyards, olive groves, and local dishes.',
  },
];

export const inclusiveSupport = [
  {
    title: 'Solo Travelers',
    description:
      'Students traveling independently can discuss course rhythm, accommodation preferences, and arrival details before booking.',
  },
  {
    title: 'LGBTQ+ Community',
    description:
      'LGBTQ+ learners are welcome to contact the school with any personal considerations before arrival.',
  },
  {
    title: 'Accessibility Needs',
    description:
      'Students with disabilities or accessibility needs should contact the school in advance so practical arrangements can be discussed.',
  },
];

export const directorQuote =
  'Come to the Accademia and discover that learning languages can be easy and enjoyable.';
