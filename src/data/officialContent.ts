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
import refresherPhoto from '../assets/photos/refresher-course.jpeg';
import picsAscoliPiazzaDay from '../assets/photos/pics-ascoli-piazza-day.jpg';
import picsAscoliStreet from '../assets/photos/pics-ascoli-street.jpg';
import picsBedBreakfast from '../assets/photos/pics-bed-breakfast.jpg';
import picsCommunicativeLesson from '../assets/photos/pics-communicative-lesson.jpg';
import picsCulturalClassroom from '../assets/photos/pics-cultural-classroom.jpg';
import picsCultureCertificates from '../assets/photos/pics-culture-certificates.jpg';
import picsCultureFans from '../assets/photos/pics-culture-fans.jpg';
import picsGalleryInterior from '../assets/photos/pics-gallery-interior.jpg';
import picsHotel from '../assets/photos/pics-hotel.jpg';
import picsMarcheWalk from '../assets/photos/pics-marche-walk.jpg';
import picsOliveAscolana from '../assets/photos/pics-olive-ascolana.jpg';
import picsPastaWorkshop from '../assets/photos/pics-pasta-workshop.jpg';
import picsQuintanaDrummers from '../assets/photos/pics-quintana-drummers.jpg';
import picsRollingHills from '../assets/photos/pics-rolling-hills.jpg';
import picsSocialTable from '../assets/photos/pics-social-table.jpg';
import picsSpecialTopics from '../assets/photos/pics-special-topics.jpg';
import picsStandardGroup from '../assets/photos/pics-standard-group.jpg';
import picsWineTasting from '../assets/photos/pics-wine-tasting.jpg';

const extraPhotoModules = import.meta.glob<string>('../assets/photos/extras/*.jpg', {
  eager: true,
  import: 'default',
});

function extraPhoto(fileName: string) {
  const image = extraPhotoModules[`../assets/photos/extras/${fileName}`];

  if (!image) {
    throw new Error(`Missing gallery photo: ${fileName}`);
  }

  return image;
}

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
  hoursIT: 'Lunedì-venerdì: 10:00-13:00 e 16:00-19:00',
  founded: '1997',
  director: 'Dr. Antonella Valentini',
};

export const images = {
  ascoli: picsAscoliPiazzaDay,
  piazzaWide: extraPhoto('extra-piazza-del-popolo-wide.jpg'),
  ascoliArcades: extraPhoto('extra-ascoli-arcades.jpg'),
  ascoliView: extraPhoto('extra-ascoli-view.jpg'),
  bougainvillea: extraPhoto('extra-bougainvillea.jpg'),
  classroom: picsCulturalClassroom,
  conversation: picsCommunicativeLesson,
  cooking: picsOliveAscolana,
  wine: picsWineTasting,
  study: picsSpecialTopics,
  accommodation: picsBedBreakfast,
  piazza: picsAscoliPiazzaDay,
  cultureInterior: picsGalleryInterior,
  seminarRoom: extraPhoto('extra-accademia-seminar-room.jpg'),
  groupDiscussion: extraPhoto('extra-accademia-group-meeting.jpg'),
  cookingTable: extraPhoto('extra-accademia-cooking-table.jpg'),
  pastaHands: extraPhoto('extra-pasta-hands.jpg'),
  pastaGroupWorkshop: extraPhoto('extra-pasta-group-workshop.jpg'),
  studentBalcony: extraPhoto('extra-student-balcony.jpg'),
  studentBreakfast: extraPhoto('extra-student-breakfast.jpg'),
  hostFamily: extraPhoto('extra-student-breakfast.jpg'),
  palmGarden: extraPhoto('extra-palm-garden.jpg'),
  quintanaFlags: extraPhoto('extra-quintana-flags.jpg'),
  quintanaProcession: extraPhoto('extra-quintana-procession.jpg'),
  groupLesson: photo1,
  whiteboardLesson: picsSpecialTopics,
  studentGroup: picsCulturalClassroom,
  cookingWorkshop: picsPastaWorkshop,
  foodCulture: picsOliveAscolana,
  classroomCollage: picsCultureCertificates,
  smallGroup: picsStandardGroup,
  studyTable: photo8,
  studentPortrait: photo6,
  socialTable: picsSocialTable,
  teacherRefresher: refresherPhoto,
  ascoliStreet: picsAscoliStreet,
  rollingHills: picsRollingHills,
  marcheWalk: picsMarcheWalk,
  quintana: picsQuintanaDrummers,
  bnb: picsBedBreakfast,
  hotel: picsHotel,
  oliveAscolana: picsOliveAscolana,
  pastaWorkshop: picsPastaWorkshop,
  cultureFans: picsCultureFans,
  culturalClassroom: picsCulturalClassroom,
  cultureCertificates: picsCultureCertificates,
  standardGroup: picsStandardGroup,
};

export const photoGallery = [
  { id: 'group-lesson-book', category: 'study', title: 'Small-Group Lesson', titleIT: 'Lezione in piccolo gruppo', location: 'Accademia classroom', locationIT: 'Aula dell\'Accademia', image: photo1, imagePosition: '50% 44%', featured: true, aspect: 'wide' },
  { id: 'cooking-class-table', category: 'culture', title: 'Cooking Lesson', titleIT: 'Lezione di cucina', location: 'Cultural activity', locationIT: 'Attività culturale', image: photo2, imagePosition: '50% 48%', aspect: 'portrait' },
  { id: 'communicative-lesson', category: 'study', title: 'Communicative Lesson', titleIT: 'Lezione comunicativa', location: 'Classroom practice', locationIT: 'Pratica in aula', image: photo3, imagePosition: '52% 48%' },
  { id: 'special-topic-board', category: 'study', title: 'Teacher-Led Practice', titleIT: 'Pratica guidata', location: 'Italian lesson', locationIT: 'Lezione di italiano', image: photo4, imagePosition: '50% 50%' },
  { id: 'pasta-workshop', category: 'culture', title: 'Fresh Pasta Workshop', titleIT: 'Laboratorio di pasta fresca', location: 'Italian cooking', locationIT: 'Cucina italiana', image: photo5, imagePosition: '50% 58%', aspect: 'portrait' },
  { id: 'teacher-student-portrait', category: 'study', title: 'Students and Teachers', titleIT: 'Studenti e docenti', location: 'Accademia classroom', locationIT: 'Aula dell\'Accademia', image: photo6, imagePosition: '50% 48%' },
  { id: 'standard-group', category: 'study', title: 'Standard Course Group', titleIT: 'Gruppo del corso standard', location: 'Small course group', locationIT: 'Piccolo gruppo', image: photo7, imagePosition: '50% 46%' },
  { id: 'teacher-refresher-gallery', category: 'study', title: 'Teacher Refresher Course', titleIT: 'Aggiornamento docenti', location: 'Teacher training', locationIT: 'Formazione docenti', image: refresherPhoto, imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'round-table-lesson', category: 'study', title: 'Round-Table Lesson', titleIT: 'Lezione intorno al tavolo', location: 'Accademia classroom', locationIT: 'Aula dell\'Accademia', image: photo8, imagePosition: '50% 46%', aspect: 'wide' },
  { id: 'whiteboard-smiles', category: 'study', title: 'Whiteboard Practice', titleIT: 'Pratica alla lavagna', location: 'Italian lesson', locationIT: 'Lezione di italiano', image: photo9, imagePosition: '50% 48%' },
  { id: 'ascoli-piazza-night', category: 'ascoli', title: 'Piazza del Popolo by Night', titleIT: 'Piazza del Popolo di sera', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: photo10, imagePosition: '50% 50%', featured: true, aspect: 'wide' },
  { id: 'historic-gallery', category: 'ascoli', title: 'Historic Gallery', titleIT: 'Galleria storica', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: photo11, imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'local-cafe', category: 'ascoli', title: 'Local Cafe Atmosphere', titleIT: 'Atmosfera di caffè', location: 'Town-centre life', locationIT: 'Vita del centro', image: photo12, imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'teacher-at-board', category: 'study', title: 'A Moment in Class', titleIT: 'Un momento in classe', location: 'Accademia classroom', locationIT: 'Aula dell\'Accademia', image: photo13, imagePosition: '50% 48%' },
  { id: 'group-lesson-table', category: 'study', title: 'Shared Lesson Table', titleIT: 'Tavolo di lezione condiviso', location: 'Small course group', locationIT: 'Piccolo gruppo', image: photo14, imagePosition: '50% 45%' },
  { id: 'student-social-table', category: 'study', title: 'Student Table', titleIT: 'Tavolo degli studenti', location: 'Accademia classroom', locationIT: 'Aula dell\'Accademia', image: photo15, imagePosition: '50% 48%' },
  { id: 'classroom-collage', category: 'study', title: 'Classroom Moments', titleIT: 'Momenti in aula', location: 'Accademia classroom', locationIT: 'Aula dell\'Accademia', image: photo16, imagePosition: '50% 48%' },
  { id: 'ascoli-piazza-day', category: 'ascoli', title: 'Piazza del Popolo by Day', titleIT: 'Piazza del Popolo di giorno', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: picsAscoliPiazzaDay, imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'ascoli-street', category: 'ascoli', title: 'Historic Streets', titleIT: 'Strade storiche', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: picsAscoliStreet, imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'bed-and-breakfast', category: 'ascoli', title: 'Bed and Breakfast Stay', titleIT: 'Soggiorno in B&B', location: 'Town-centre accommodation', locationIT: 'Alloggio in centro', image: picsBedBreakfast, imagePosition: '50% 50%' },
  { id: 'cultural-classroom', category: 'study', title: 'International Classroom', titleIT: 'Aula internazionale', location: 'Small course group', locationIT: 'Piccolo gruppo', image: picsCulturalClassroom, imagePosition: '50% 48%' },
  { id: 'culture-certificates', category: 'culture', title: 'Cultural Course Certificates', titleIT: 'Certificati del corso culturale', location: 'Accademia event', locationIT: 'Evento dell\'Accademia', image: picsCultureCertificates, imagePosition: '50% 48%', aspect: 'wide' },
  { id: 'culture-fans', category: 'culture', title: 'Cultural Workshop', titleIT: 'Laboratorio culturale', location: 'Accademia event', locationIT: 'Evento dell\'Accademia', image: picsCultureFans, imagePosition: '50% 46%' },
  { id: 'hotel-entrance', category: 'ascoli', title: 'Hotel Option', titleIT: 'Soluzione in hotel', location: 'Town-centre accommodation', locationIT: 'Alloggio in centro', image: picsHotel, imagePosition: '50% 50%' },
  { id: 'marche-walk', category: 'ascoli', title: 'Nature Walks', titleIT: 'Passeggiate nella natura', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: picsMarcheWalk, imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'olive-ascolana', category: 'culture', title: "Olive all'Ascolana", titleIT: "Olive all'Ascolana", location: 'Local food culture', locationIT: 'Cultura gastronomica locale', image: picsOliveAscolana, imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'quintana-drummers', category: 'culture', title: 'La Quintana', titleIT: 'La Quintana', location: 'City traditions', locationIT: 'Tradizioni cittadine', image: picsQuintanaDrummers, imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'marche-hills', category: 'ascoli', title: 'Hills around Ascoli', titleIT: 'Colline intorno ad Ascoli', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: picsRollingHills, imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'wine-tasting', category: 'culture', title: 'Wine Tasting', titleIT: 'Degustazione di vini', location: 'Culture lesson', locationIT: 'Lezione di cultura', image: picsWineTasting, imagePosition: '50% 48%' },
  { id: 'accademia-seminar-room', category: 'study', title: 'Seminar Room', titleIT: 'Sala seminari', location: 'Accademia classroom', locationIT: 'Aula dell\'Accademia', image: extraPhoto('extra-accademia-seminar-room.jpg'), imagePosition: '50% 48%', aspect: 'wide' },
  { id: 'accademia-group-meeting', category: 'study', title: 'Group Discussion', titleIT: 'Discussione di gruppo', location: 'Accademia classroom', locationIT: 'Aula dell\'Accademia', image: extraPhoto('extra-accademia-group-meeting.jpg'), imagePosition: '50% 48%' },
  { id: 'accademia-cooking-table', category: 'culture', title: 'Cooking Table', titleIT: 'Tavolo di cucina', location: 'Italian cooking', locationIT: 'Cucina italiana', image: extraPhoto('extra-accademia-cooking-table.jpg'), imagePosition: '50% 48%' },
  { id: 'flamenco-performance', category: 'culture', title: 'Evening Performance', titleIT: 'Spettacolo serale', location: 'Cultural programme', locationIT: 'Programma culturale', image: extraPhoto('extra-flamenco-performance.jpg'), imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'student-breakfast', category: 'culture', title: 'Breakfast Together', titleIT: 'Colazione insieme', location: 'Student life', locationIT: 'Vita studentesca', image: extraPhoto('extra-student-breakfast.jpg'), imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'river-walk', category: 'ascoli', title: 'River Walk', titleIT: 'Passeggiata lungo il fiume', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-river-walk.jpg'), imagePosition: '50% 50%' },
  { id: 'quintana-children', category: 'culture', title: 'Young Flag Bearers', titleIT: 'Giovani sbandieratori', location: 'La Quintana', locationIT: 'La Quintana', image: extraPhoto('extra-quintana-children.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'quintana-costume-detail', category: 'culture', title: 'Quintana Costume Detail', titleIT: 'Dettaglio di costume della Quintana', location: 'La Quintana', locationIT: 'La Quintana', image: extraPhoto('extra-quintana-costume-detail.jpg'), imagePosition: '50% 50%' },
  { id: 'quintana-procession', category: 'culture', title: 'Historic Procession', titleIT: 'Corteo storico', location: 'La Quintana', locationIT: 'La Quintana', image: extraPhoto('extra-quintana-procession.jpg'), imagePosition: '50% 50%' },
  { id: 'quintana-street', category: 'culture', title: 'Quintana in the Streets', titleIT: 'La Quintana nelle strade', location: 'City traditions', locationIT: 'Tradizioni cittadine', image: extraPhoto('extra-quintana-street.jpg'), imagePosition: '50% 50%' },
  { id: 'quintana-arch', category: 'culture', title: 'Procession under the Arch', titleIT: 'Corteo sotto l\'arco', location: 'City traditions', locationIT: 'Tradizioni cittadine', image: extraPhoto('extra-quintana-arch.jpg'), imagePosition: '50% 50%' },
  { id: 'ascoli-arcades', category: 'ascoli', title: 'Ascoli Arcades', titleIT: 'Portici di Ascoli', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-ascoli-arcades.jpg'), imagePosition: '50% 50%' },
  { id: 'piazza-del-popolo-wide', category: 'ascoli', title: 'Piazza del Popolo', titleIT: 'Piazza del Popolo', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-piazza-del-popolo-wide.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'bougainvillea', category: 'ascoli', title: 'Colour in the Historic Centre', titleIT: 'Colore nel centro storico', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-bougainvillea.jpg'), imagePosition: '50% 50%' },
  { id: 'student-balcony', category: 'culture', title: 'A Small Arrival Moment', titleIT: 'Un piccolo momento di arrivo', location: 'Student life', locationIT: 'Vita studentesca', image: extraPhoto('extra-student-balcony.jpg'), imagePosition: '50% 48%', aspect: 'portrait' },
  { id: 'pasta-hands', category: 'culture', title: 'Pasta by Hand', titleIT: 'Pasta fatta a mano', location: 'Italian cooking', locationIT: 'Cucina italiana', image: extraPhoto('extra-pasta-hands.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'pasta-group-workshop', category: 'culture', title: 'Cooking Workshop Group', titleIT: 'Gruppo del laboratorio di cucina', location: 'Italian cooking', locationIT: 'Cucina italiana', image: extraPhoto('extra-pasta-group-workshop.jpg'), imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'waterfall-swim', category: 'ascoli', title: 'Clear Water Nearby', titleIT: 'Acque limpide nei dintorni', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-waterfall-swim.jpg'), imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'river-waterfall', category: 'ascoli', title: 'River Falls', titleIT: 'Cascate sul fiume', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-river-waterfall.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'nature-guide', category: 'ascoli', title: 'Guided Nature Walk', titleIT: 'Passeggiata guidata nella natura', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-nature-guide.jpg'), imagePosition: '50% 46%' },
  { id: 'student-walk-selfie', category: 'ascoli', title: 'Students on a Walk', titleIT: 'Studenti in passeggiata', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-student-walk-selfie.jpg'), imagePosition: '50% 48%' },
  { id: 'river-pool', category: 'ascoli', title: 'River Pool', titleIT: 'Piscina naturale', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-river-pool.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'clear-water-cascade', category: 'ascoli', title: 'Clear-Water Cascade', titleIT: 'Cascata di acqua limpida', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-clear-water-cascade.jpg'), imagePosition: '50% 50%' },
  { id: 'church-facade', category: 'ascoli', title: 'Church Facade', titleIT: 'Facciata di una chiesa', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-church-facade.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'stone-courtyard', category: 'ascoli', title: 'Stone Courtyard', titleIT: 'Cortile in pietra', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-stone-courtyard.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'olive-tree', category: 'ascoli', title: 'Olive Trees', titleIT: 'Ulivi', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-olive-tree.jpg'), imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'statue-square', category: 'ascoli', title: 'City Square', titleIT: 'Piazza cittadina', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-statue-square.jpg'), imagePosition: '50% 50%' },
  { id: 'church-interior', category: 'ascoli', title: 'Church Interior', titleIT: 'Interno di una chiesa', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-church-interior.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'palm-garden', category: 'ascoli', title: 'Garden Walk', titleIT: 'Passeggiata in giardino', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-palm-garden.jpg'), imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'ascoli-view', category: 'ascoli', title: 'View over Ascoli', titleIT: 'Vista su Ascoli', location: 'Ascoli Piceno', locationIT: 'Ascoli Piceno', image: extraPhoto('extra-ascoli-view.jpg'), imagePosition: '50% 50%', aspect: 'portrait' },
  { id: 'sunset-olive-tree', category: 'ascoli', title: 'Olive Tree at Sunset', titleIT: 'Ulivo al tramonto', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-sunset-olive-tree.jpg'), imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'river-guide', category: 'ascoli', title: 'Guide by the River', titleIT: 'Guida lungo il fiume', location: 'In the region Le Marche', locationIT: 'Nelle Marche', image: extraPhoto('extra-river-guide.jpg'), imagePosition: '50% 50%', aspect: 'wide' },
  { id: 'quintana-costumes', category: 'culture', title: 'Quintana Costumes', titleIT: 'Costumi della Quintana', location: 'La Quintana', locationIT: 'La Quintana', image: extraPhoto('extra-quintana-costumes.jpg'), imagePosition: '50% 50%' },
  { id: 'quintana-flags', category: 'culture', title: 'Flags in the Piazza', titleIT: 'Bandiere in piazza', location: 'La Quintana', locationIT: 'La Quintana', image: extraPhoto('extra-quintana-flags.jpg'), imagePosition: '50% 50%' },
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
    image: images.standardGroup,
    imagePosition: '50% 46%',
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
    imagePosition: '52% 48%',
    description:
      'Intensive course with 20 group hours and 5 individual hours each week.',
    descriptionIT:
      'Corso intensivo con 20 ore di gruppo e 5 ore individuali ogni settimana.',
    highlights: ['20 group hours plus 5 individual hours', '1 week EUR 370', '2 weeks EUR 700', 'Additional weeks EUR 330'],
    highlightsIT: ['20 ore di gruppo più 5 ore individuali', '1 settimana EUR 370', '2 settimane EUR 700', 'Settimane aggiuntive EUR 330'],
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
    image: images.seminarRoom,
    imagePosition: '50% 50%',
    description:
      'Extensive course for groups of 3-6 students, with 4-6 hours per week and one or two weekly meetings.',
    descriptionIT:
      'Corso estensivo per gruppi di 3-6 studenti, con 4-6 ore a settimana e uno o due incontri settimanali.',
    highlights: ['3-6 students per group', '4-6 hours per week', '1-2 meetings each week', 'EUR 10-14 per hour'],
    highlightsIT: ['3-6 studenti per gruppo', '4-6 ore a settimana', '1-2 incontri ogni settimana', 'EUR 10-14 all\'ora'],
  },
  {
    id: 'individual',
    name: 'Individual Lessons',
    italianName: 'Lezioni individuali',
    duration: 'Flexible',
    durationIT: 'Flessibile',
    hoursPerWeek: 'By appointment',
    hoursPerWeekIT: 'Su appuntamento',
    price: 'EUR 30/hour',
    priceIT: 'EUR 30/ora',
    image: images.whiteboardLesson,
    imagePosition: '50% 50%',
    description:
      'One-to-one lessons available by appointment, with hourly and package pricing.',
    descriptionIT:
      'Lezioni individuali su appuntamento, con tariffa oraria e pacchetti disponibili.',
    highlights: ['1 hour EUR 30', '20 hours EUR 550', '30 hours EUR 780', '50 hours EUR 1200'],
    highlightsIT: ['1 ora EUR 30', '20 ore EUR 550', '30 ore EUR 780', '50 ore EUR 1200'],
  },
  {
    id: 'teacher-refresher',
    name: 'Refresher Course for Teachers',
    italianName: 'Aggiornamento docenti',
    duration: '1-2 weeks',
    durationIT: '1-2 settimane',
    hoursPerWeek: '30 hours/week',
    hoursPerWeekIT: '30 ore/settimana',
    price: 'From EUR 430',
    priceIT: 'Da EUR 430',
    image: images.teacherRefresher,
    imagePosition: '50% 50%',
    description:
      'Refresher course for teachers with 30 hours per week and one- or two-week formats.',
    descriptionIT:
      'Corso di aggiornamento per docenti con 30 ore a settimana e formule di una o due settimane.',
    highlights: ['30 hours per week', 'Language and culture focus', 'Available as one or two weeks', 'Designed for teachers'],
    highlightsIT: ['30 ore a settimana', 'Focus su lingua e cultura', 'Disponibile per una o due settimane', 'Pensato per docenti'],
  },
  {
    id: 'tailor-made',
    name: 'Tailor-Made Course',
    italianName: 'Corso su misura',
    duration: 'Tailor-made',
    durationIT: 'Su misura',
    hoursPerWeek: 'Tailor-made',
    hoursPerWeekIT: 'Su misura',
    price: 'Quote on request',
    priceIT: 'Preventivo su richiesta',
    image: images.studyTable,
    imagePosition: '50% 46%',
    description:
      'Tailor-made Italian study in Ascoli Piceno or online, prepared around level, dates, and personal goals.',
    descriptionIT:
      'Corso di italiano su misura disponibile ad Ascoli Piceno o online, con preventivo su richiesta.',
    highlights: ['Personal schedule', 'Special-interest vocabulary', 'In-person or online', 'Quote on request'],
    highlightsIT: ['Calendario personalizzato', 'Lessico per interessi specifici', 'In presenza o online', 'Preventivo su richiesta'],
  },
];

export const culturalOfferings = [
  {
    title: 'Italian Cooking',
    italianTitle: 'Cucina italiana',
    tagline: 'Regional food as language practice',
    taglineIT: 'Cibo regionale come pratica linguistica',
    description:
      "Cooking sessions connect Italian vocabulary with regional food traditions, including Ascoli Piceno and Olive all'Ascolana (stuffed meat, fried olives).",
    descriptionIT:
      "I corsi di cultura italiana includono cucina e tradizioni gastronomiche locali; Ascoli Piceno è nota per le Olive all'Ascolana, olive ripiene di carne e fritte.",
    image: images.pastaHands,
    imagePosition: '50% 52%',
  },
  {
    title: 'Wine Tasting',
    italianTitle: 'Degustazione di vini',
    tagline: 'A three-hour lesson in local wine culture',
    taglineIT: 'Una lezione di tre ore sulla cultura del vino',
    description:
      'The wine-tasting lesson combines theory and practice with white, red, and rosé wines, grape varieties, production methods, and local gastronomy.',
    descriptionIT:
      'La degustazione unisce teoria e pratica con vini bianchi, rossi e rosati, vitigni, metodi di produzione e gastronomia locale.',
    image: images.wine,
    imagePosition: '50% 50%',
  },
  {
    title: 'Arts and Handcrafts',
    italianTitle: 'Arti e tradizioni',
    tagline: 'Opera, ceramics, painting, Tombolo and olive oil',
    taglineIT: 'Opera, ceramica, pittura, merletto a tombolo e olio',
    description:
      'Add-on culture options include opera, olive oil, ceramics, painting, and Tombolo pillow lace.',
    descriptionIT:
      'Le opzioni culturali includono opera, olio, ceramica, pittura e merletto a tombolo.',
    image: images.cultureFans,
    imagePosition: '50% 46%',
  },
  {
    title: 'Special Italian Topics',
    italianTitle: 'Temi specialistici',
    tagline: 'Business, tourism, history and culture',
    taglineIT: 'Business, turismo, storia e cultura',
    description:
      'Students can add business Italian, tourism and hotel management, university entrance preparation, history, art history, literature, and "Italy today".',
    descriptionIT:
      'Gli studenti possono aggiungere italiano commerciale, turismo e gestione alberghiera, preparazione universitaria, storia, storia dell\'arte, letteratura e "Italia oggi".',
    image: images.cultureInterior,
    imagePosition: '50% 50%',
  },
];

export const services = [
  {
    title: 'FOREIGN LANGUAGE COURSES',
    titleIT: 'Corsi di lingue straniere',
    description: 'Foreign language courses alongside Italian learning pathways, with flexible formats for adults.',
    descriptionIT: 'Corsi di lingue straniere insieme a percorsi di italiano, con formati flessibili per adulti.',
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
    description: 'Preparation support includes language exams and Italian certification pathways.',
    descriptionIT: 'Il supporto include esami linguistici e percorsi di certificazione di italiano.',
  },
  {
    title: 'School tutoring and Erasmus support',
    titleIT: 'Tutoraggio scolastico e supporto Erasmus',
    description: 'The wider Accademia Internazionale offer includes school support and services for Erasmus students.',
    descriptionIT: 'L\'offerta di Accademia Internazionale include supporto scolastico e servizi per studenti Erasmus.',
  },
];

export const accommodationOptions = [
  {
    id: 'host-family',
    name: 'Host Family',
    italianName: 'Famiglia ospitante',
    tagline: 'Stay with a host family',
    taglineIT: 'Soggiorno in famiglia ospitante',
    image: images.hostFamily,
    imagePosition: '50% 52%',
    description:
      'Students may stay with a local host family. The school can help reserve this option without additional reservation cost.',
    descriptionIT:
      'Gli studenti possono soggiornare presso una famiglia ospitante. La scuola può aiutare a prenotare questa opzione senza costi di prenotazione aggiuntivi.',
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
    image: images.bnb,
    imagePosition: '50% 50%',
    description:
      'B&B accommodation in the town centre can be requested through the school, with pricing on request.',
    descriptionIT:
      'Il B&B in centro può essere richiesto tramite la scuola, con prezzi su richiesta.',
    features: ['Town-centre options', 'Prices on request', 'Reservation support through the school'],
    featuresIT: ['Soluzioni in centro', 'Prezzi su richiesta', 'Supporto alla prenotazione tramite la scuola'],
  },
  {
    id: 'hotel',
    name: 'Hotel',
    italianName: 'Hotel',
    tagline: 'Hotel stay in town',
    taglineIT: 'Soggiorno in hotel in città',
    image: images.hotel,
    imagePosition: '50% 50%',
    description:
      'Hotel accommodation in the town centre can be arranged on request for students who prefer a more conventional stay.',
    descriptionIT:
      'L\'alloggio in hotel in centro può essere organizzato su richiesta per studenti che preferiscono una soluzione più tradizionale.',
    features: ['Central Ascoli Piceno', 'Prices on request', 'Reservation support through the school'],
    featuresIT: ['Centro di Ascoli Piceno', 'Prezzi su richiesta', 'Supporto alla prenotazione tramite la scuola'],
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
      'Il cuore in travertino di Ascoli Piceno è uno dei luoghi simbolo della città.',
  },
  {
    title: 'History, art and theatre',
    titleIT: 'Storia, arte e teatro',
    type: 'Culture',
    typeIT: 'Cultura',
    description:
      'Ascoli offers historic streets, Roman traces, museums, churches, and two theatres.',
    descriptionIT:
      'Ascoli offre strade storiche, tracce romane, musei, chiese e due teatri.',
  },
  {
    title: "La Quintana and Sant'Emidio",
    titleIT: "La Quintana e Sant'Emidio",
    type: 'Events',
    typeIT: 'Eventi',
    description:
      "The city calendar includes the Quintana in July and August and the Feast of Sant'Emidio on August 5.",
    descriptionIT:
      "Il calendario cittadino include la Quintana a luglio e agosto e la festa di Sant'Emidio il 5 agosto.",
  },
  {
    title: 'Coast and mountains in the region Le Marche',
    titleIT: 'Le Marche tra costa e montagne',
    type: 'Region',
    typeIT: 'Regione',
    description:
      'In the region Le Marche, Apennine landscapes, Adriatic beaches, rolling hills, vineyards, olive groves, and local dishes sit close together.',
    descriptionIT:
      'Le Marche uniscono paesaggi appenninici, spiagge adriatiche, borghi, vigneti, uliveti e cucina locale.',
  },
];

export const inclusiveSupport = [
  {
    title: 'Solo Travelers',
    titleIT: 'Chi viaggia da solo',
    description:
      'Students travelling independently can discuss course rhythm, accommodation preferences, and arrival details before booking.',
    descriptionIT:
      'Gli studenti che viaggiano da soli possono parlare di ritmo del corso, preferenze di alloggio e dettagli di arrivo prima della prenotazione.',
  },
  {
    title: 'LGBTQ+ Community',
    titleIT: 'Comunità LGBTQ+',
    description:
      'LGBTQ+ learners are welcome to contact the school with any personal considerations before their arrival.',
    descriptionIT:
      'Le persone LGBTQ+ sono benvenute e possono contattare la scuola prima dell\'arrivo per eventuali esigenze personali.',
  },
  {
    title: 'Accessibility Needs',
    titleIT: 'Esigenze di accessibilità',
    description:
      'Students with disabilities or accessibility needs should contact the school in advance so practical arrangements can be discussed.',
    descriptionIT:
      'Gli studenti con disabilità o esigenze di accessibilità possono contattare la scuola in anticipo per discutere gli aspetti pratici.',
  },
];

export const directorQuote =
  'Come to the Accademia and discover that learning languages can be easy and enjoyable.';

export const directorQuoteIT =
  'Venite all\'Accademia e scoprirete che imparare le lingue può essere facile e divertente.';
