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
  classroom: photo7,
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
};

export const photoGallery = [
  { id: 'group-lesson-book', category: 'study', title: 'Small-Group Lesson', location: 'Accademia classroom', image: photo1 },
  { id: 'cooking-table', category: 'culture', title: 'Cooking Workshop', location: 'Culture course', image: photo2 },
  { id: 'conversation-class', category: 'study', title: 'Conversation Practice', location: 'Classroom activity', image: photo3 },
  { id: 'whiteboard-lesson', category: 'study', title: 'Italian Lesson', location: 'Accademia classroom', image: photo4 },
  { id: 'pasta-workshop', category: 'culture', title: 'Fresh Pasta Workshop', location: 'Italian cooking', image: photo5 },
  { id: 'student-moment', category: 'study', title: 'Student Moment', location: 'Accademia classroom', image: photo6 },
  { id: 'table-lesson', category: 'study', title: 'Group Study Table', location: 'Small course group', image: photo7 },
  { id: 'course-discussion', category: 'study', title: 'Course Discussion', location: 'Classroom activity', image: photo8 },
  { id: 'teacher-board', category: 'study', title: 'Teacher-Led Practice', location: 'Italian lesson', image: photo9 },
  { id: 'ascoli-piazza', category: 'ascoli', title: 'Piazza del Popolo', location: 'Ascoli Piceno', image: photo10 },
  { id: 'heritage-interior', category: 'ascoli', title: 'Historic Interior', location: 'Ascoli Piceno', image: photo11 },
  { id: 'local-cafe', category: 'ascoli', title: 'Local Cafe Atmosphere', location: 'Town-centre life', image: photo12 },
  { id: 'food-culture', category: 'culture', title: 'Food and Culture', location: 'Culture add-on', image: photo13 },
  { id: 'student-group', category: 'study', title: 'International Group', location: 'Accademia classroom', image: photo14 },
  { id: 'social-table', category: 'culture', title: 'Social Italian Practice', location: 'Cafe setting', image: photo15 },
  { id: 'course-collage', category: 'study', title: 'Accademia Course Moments', location: 'School photo collage', image: photo16 },
];

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
    image: images.ascoli,
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
    image: images.accommodation,
    description:
      'B&B accommodation in the town centre can be requested through the school, with pricing on request.',
    features: ['Town-centre options', 'Prices on request', 'Reservation support through the school'],
  },
  {
    id: 'hotel',
    name: 'Hotel',
    italianName: 'Hotel',
    tagline: 'Hotel stay in town',
    image: images.cultureInterior,
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
