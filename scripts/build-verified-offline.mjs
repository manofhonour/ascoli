import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const downloadDir = path.join(root, 'download');
const assetDir = path.join(root, 'src', 'assets');
const photoDir = path.join(assetDir, 'photos');

fs.mkdirSync(downloadDir, { recursive: true });

const mimeByExt = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function dataUri(relativePath) {
  const absolutePath = path.join(root, relativePath);
  const ext = path.extname(absolutePath).toLowerCase();
  const mime = mimeByExt[ext];
  if (!mime) throw new Error(`Unsupported asset type: ${relativePath}`);
  return `data:${mime};base64,${fs.readFileSync(absolutePath).toString('base64')}`;
}

const logo = dataUri(path.join('src', 'assets', 'accademia-logo.png'));
const photos = {
  hero: dataUri(path.join('src', 'assets', 'photos', 'accademia-01.jpg')),
  standard: dataUri(path.join('src', 'assets', 'photos', 'accademia-14.jpg')),
  conversation: dataUri(path.join('src', 'assets', 'photos', 'accademia-03.jpg')),
  board: dataUri(path.join('src', 'assets', 'photos', 'accademia-09.jpg')),
  ascoli: dataUri(path.join('src', 'assets', 'photos', 'accademia-10.jpg')),
  cooking: dataUri(path.join('src', 'assets', 'photos', 'accademia-05.jpg')),
  culture: dataUri(path.join('src', 'assets', 'photos', 'accademia-11.jpg')),
  cafe: dataUri(path.join('src', 'assets', 'photos', 'accademia-12.jpg')),
  social: dataUri(path.join('src', 'assets', 'photos', 'accademia-15.jpg')),
};

const stats = [
  ['Since 1997', 'Language services and Italian teaching'],
  ['3-6 students', 'Small standard-course groups'],
  ['Ascoli Piceno', 'Historic centre in Le Marche'],
  ['Qualified teachers', 'Flexible, communicative instruction'],
];

const courses = [
  ['Standard Italian Course', 'Corso Standard', '20 hours/week', 'EUR 220/week', 'Small-group Italian course in Ascoli Piceno with 20 hours per week and groups of 3-6 students.', photos.standard],
  ['Intensive Italian Course', 'Corso Intensivo', '25 hours/week', 'From EUR 370/week', 'Intensive course with 20 group hours and 5 individual hours each week.', photos.conversation],
  ['Individual Lessons', 'Lezioni Individuali', 'By appointment', 'EUR 30/hour', 'One-to-one lessons available by appointment, with hourly and package pricing.', photos.board],
  ['Extensive Course', 'Corso Estensivo', '4-6 hours/week', 'EUR 10-14/hour', 'Groups of 3-6 students, with one or two weekly meetings.', photos.conversation],
  ['Refresher Course for Teachers', 'Aggiornamento Docenti', '30 hours/week', 'From EUR 430', 'A one- or two-week refresher format for teachers, focused on language and culture.', photos.board],
  ['Custom-Made Course', 'Corso Su Misura', 'Custom', 'Quote on request', 'Custom Italian study in Ascoli Piceno or online, prepared around level, dates, and goals.', photos.standard],
];

const culture = [
  ['Italian Cooking', 'Regional food as language practice', 'Cooking and local food traditions can extend language learning, with Ascoli Piceno known for Olive all Ascolana.', photos.cooking],
  ['Wine Tasting', 'Local wine culture', 'A three-hour lesson can combine white, red, and rose wines, grape varieties, production methods, and local gastronomy.', photos.cafe],
  ['Arts and Handcrafts', 'Opera, ceramics, painting, lace and olive oil', 'Culture options may include opera, olive oil, ceramics, painting, and tombolo pillow lace depending on dates.', photos.culture],
  ['Special Italian Topics', 'Business, tourism, history and exams', 'Students can add current affairs, business Italian, tourism, CILS, history, art history, literature, and Italy today.', photos.board],
];

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Accademia Italiana - Offline Preview</title>
  <style>
    :root {
      --paper: #f8f5ee;
      --travertine: #efe6d8;
      --ink: #161512;
      --muted: #5d5a51;
      --olive: #334229;
      --olive-soft: #dfe5d4;
      --terracotta: #c85f43;
      --line: #d7c7b2;
      --white: #fffaf3;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: auto; }
    body {
      margin: 0;
      color: var(--ink);
      background: var(--paper);
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.55;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(90deg, rgba(215,199,178,.28) 1px, transparent 1px),
        linear-gradient(180deg, rgba(215,199,178,.22) 1px, transparent 1px);
      background-size: 96px 96px;
      opacity: .55;
    }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }
    .serif { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.01em; }
    .italic { font-style: italic; color: var(--olive); }
    .label { color: var(--terracotta); font-size: 11px; letter-spacing: .28em; text-transform: uppercase; font-weight: 700; }
    .wrap { width: min(1150px, calc(100% - 40px)); margin: 0 auto; position: relative; z-index: 1; }
    header {
      position: sticky;
      top: 0;
      z-index: 20;
      background: rgba(248,245,238,.95);
      border-bottom: 1px solid rgba(215,199,178,.75);
      backdrop-filter: blur(12px);
    }
    .nav { height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 22px; }
    .brand { display: flex; align-items: center; gap: 14px; min-width: 260px; }
    .brand img { width: 50px; height: 50px; object-fit: contain; }
    .brand-title { display: block; font-family: Georgia, 'Times New Roman', serif; font-size: 20px; letter-spacing: .16em; text-transform: uppercase; line-height: 1; }
    .brand-sub { display: block; color: var(--olive); font-size: 9px; letter-spacing: .18em; text-transform: uppercase; margin-top: 6px; }
    .links { display: flex; align-items: center; gap: 22px; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; font-weight: 700; }
    .links a { padding: 28px 0 24px; border-bottom: 2px solid transparent; }
    .links a:hover { color: var(--terracotta); border-bottom-color: var(--terracotta); }
    .button {
      border: 1px solid var(--ink);
      padding: 12px 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: .18em;
      font-weight: 700;
      background: transparent;
    }
    .button.dark { background: var(--olive); border-color: var(--olive); color: var(--white); }
    .hero { padding: 74px 0 86px; min-height: 780px; display: grid; align-items: center; }
    .hero-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 60px; align-items: center; }
    .hero h1 { font-size: clamp(62px, 8vw, 112px); line-height: .98; margin: 26px 0 28px; }
    .hero p { max-width: 520px; color: var(--muted); font-size: 17px; }
    .hero-card { display: inline-flex; align-items: center; gap: 12px; padding: 11px 16px; border: 1px solid var(--line); background: rgba(255,250,243,.8); box-shadow: 0 12px 30px rgba(42,36,25,.08); }
    .hero-card img { width: 42px; height: 42px; object-fit: contain; }
    .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 34px; }
    .hero-photos { position: relative; min-height: 560px; }
    .photo-main { position: absolute; top: 0; right: 0; width: 86%; height: 420px; overflow: hidden; border: 1px solid var(--line); box-shadow: 0 24px 70px rgba(42,36,25,.16); background: var(--travertine); }
    .photo-main img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 44%; }
    .photo-small { position: absolute; left: 0; bottom: 92px; width: 47%; height: 240px; overflow: hidden; border: 1px solid var(--line); box-shadow: 0 20px 50px rgba(42,36,25,.16); }
    .photo-small img { width: 100%; height: 100%; object-fit: cover; }
    .director { position: absolute; right: 34px; bottom: 0; width: 310px; background: #1f2c1d; color: var(--white); padding: 26px; box-shadow: 0 24px 70px rgba(42,36,25,.18); }
    .director img { width: 46px; height: 46px; object-fit: contain; background: var(--white); padding: 5px; float: left; margin-right: 13px; }
    .director strong { display: block; font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: #dbe8cc; }
    section { padding: 98px 0; position: relative; z-index: 1; }
    section[id] { scroll-margin-top: 104px; }
    .section-head { max-width: 780px; margin-bottom: 54px; }
    h2 { font-size: clamp(42px, 5.6vw, 72px); line-height: 1.08; margin: 16px 0 18px; }
    h3 { margin: 0; }
    .stats { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--line); background: rgba(255,250,243,.55); }
    .stat { padding: 28px; border-right: 1px solid var(--line); min-height: 150px; }
    .stat:last-child { border-right: 0; }
    .stat strong { font-family: Georgia, 'Times New Roman', serif; display: block; font-size: 28px; line-height: 1.1; font-weight: 400; }
    .stat span { display: block; margin-top: 16px; color: var(--muted); font-size: 13px; }
    .split { display: grid; grid-template-columns: .95fr 1.05fr; gap: 54px; align-items: center; }
    .image-frame { overflow: hidden; border: 1px solid var(--line); box-shadow: 0 22px 60px rgba(42,36,25,.13); background: var(--travertine); }
    .image-frame img { width: 100%; height: 100%; object-fit: cover; }
    .image-wide { aspect-ratio: 16 / 10; }
    .image-tall { aspect-ratio: 4 / 5; }
    .method-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
    .method { min-height: 220px; padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: rgba(255,250,243,.48); }
    .method span { color: var(--terracotta); font-family: Georgia, 'Times New Roman', serif; font-style: italic; }
    .method h3 { font-family: Georgia, 'Times New Roman', serif; font-size: 25px; font-weight: 400; margin: 48px 0 12px; }
    .method p { color: var(--muted); font-size: 14px; margin: 0; }
    .courses { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
    .course { background: rgba(255,250,243,.72); border: 1px solid var(--line); box-shadow: 0 18px 48px rgba(42,36,25,.08); overflow: hidden; }
    .course img { width: 100%; height: 210px; object-fit: cover; }
    .course-body { padding: 28px; }
    .course em { display: block; color: var(--terracotta); font-family: Georgia, 'Times New Roman', serif; margin-bottom: 10px; }
    .course h3 { font-family: Georgia, 'Times New Roman', serif; font-size: 30px; font-weight: 400; line-height: 1.15; margin-bottom: 18px; }
    .course p { color: var(--muted); font-size: 14px; min-height: 68px; }
    .course-meta { display: grid; grid-template-columns: 1fr; gap: 8px; padding-top: 18px; margin-top: 18px; border-top: 1px solid var(--line); color: var(--ink); font-size: 13px; }
    .culture-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
    .culture-card { display: grid; grid-template-columns: 220px 1fr; border: 1px solid var(--line); background: rgba(255,250,243,.72); min-height: 230px; overflow: hidden; }
    .culture-card img { width: 100%; height: 100%; object-fit: cover; }
    .culture-card div { padding: 28px; }
    .culture-card h3 { font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: 400; margin-bottom: 10px; }
    .culture-card strong { color: var(--olive); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
    .culture-card p { color: var(--muted); font-size: 14px; }
    .accommodation { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .option { padding: 30px; border: 1px solid var(--line); background: rgba(255,250,243,.7); }
    .option h3 { font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: 400; }
    .option ul { padding-left: 18px; color: var(--muted); font-size: 14px; }
    .gallery { display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 26px; align-items: start; }
    .gallery img { width: 100%; height: 300px; object-fit: cover; border: 1px solid var(--line); box-shadow: 0 16px 42px rgba(42,36,25,.11); }
    .gallery img:nth-child(2) { height: 390px; }
    .contact { background: #1f2c1d; color: var(--white); padding: 78px 0; }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
    .contact h2 { color: var(--white); }
    .contact p, .contact li { color: #e3dccd; }
    .contact-card { background: rgba(255,250,243,.08); border: 1px solid rgba(255,250,243,.2); padding: 28px; }
    .contact-card a { color: var(--white); text-decoration: underline; text-underline-offset: 4px; }
    footer { position: relative; z-index: 1; padding: 28px 0; border-top: 1px solid var(--line); color: var(--muted); font-size: 12px; }
    @media (max-width: 980px) {
      .nav { height: auto; padding: 16px 0; align-items: flex-start; flex-direction: column; }
      .links { flex-wrap: wrap; gap: 14px 20px; }
      .links a { padding: 0; border: 0; }
      .hero { min-height: 0; padding-top: 42px; }
      .hero-grid, .split, .contact-grid { grid-template-columns: 1fr; }
      .hero-photos { min-height: 610px; }
      .photo-main { width: 100%; height: 360px; }
      .photo-small { width: 58%; bottom: 130px; }
      .director { right: 0; bottom: 0; }
      .stats, .method-grid, .courses, .accommodation, .culture-grid, .gallery { grid-template-columns: 1fr 1fr; }
      .stat:nth-child(2), .method:nth-child(2n), .stat:last-child { border-right: 0; }
    }
    @media (max-width: 640px) {
      body { overflow-x: hidden; }
      .wrap { width: min(100% - 28px, 1150px); }
      .hero-grid, .hero-grid > *, .split, .contact-grid { min-width: 0; }
      .brand-title { font-size: 16px; }
      .links {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        width: 100%;
        gap: 12px 16px;
        font-size: 10px;
        letter-spacing: .1em;
      }
      .links a { overflow-wrap: anywhere; }
      .hero h1 { font-size: clamp(44px, 14vw, 56px); }
      .hero p { font-size: 15px; max-width: 100%; overflow-wrap: anywhere; }
      .hero-card { max-width: 100%; align-items: flex-start; }
      .hero-card .label { letter-spacing: .14em; font-size: 9px; overflow-wrap: anywhere; }
      .hero-actions { flex-direction: column; }
      .button { width: 100%; }
      .hero-photos { min-height: auto; display: grid; gap: 14px; }
      .photo-main, .photo-small, .director { position: static; width: 100%; height: auto; }
      .photo-main { aspect-ratio: 4 / 3; }
      .photo-small { aspect-ratio: 16 / 10; }
      .director { width: 100%; }
      section { padding: 70px 0; }
      .stats, .method-grid, .courses, .accommodation, .culture-grid, .gallery { grid-template-columns: 1fr; }
      .stat, .method { border-right: 0; }
      .culture-card { grid-template-columns: 1fr; }
      .culture-card img { height: 260px; }
      .gallery img, .gallery img:nth-child(2) { height: 270px; }
    }
  </style>
</head>
<body>
  <header>
    <div class="wrap nav">
      <a class="brand" href="#top" aria-label="Accademia Italiana home">
        <img src="${logo}" alt="Accademia Italiana logo">
        <span><span class="brand-title">Accademia Italiana</span><span class="brand-sub">Ascoli Piceno - Dal 1997</span></span>
      </a>
      <nav class="links" aria-label="Page sections">
        <a href="#courses">Courses</a>
        <a href="#culture">Culture</a>
        <a href="#ascoli">Ascoli Piceno</a>
        <a href="#accommodation">Accommodation</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <div class="hero-card">
            <img src="${logo}" alt="">
            <div><span class="label">Italian language school since 1997</span><br><small>Corso Vittorio Emanuele, 27, Ascoli Piceno</small></div>
          </div>
          <h1 class="serif">Live Italy.<br>Speak Italian.<br><span class="italic">Study in Ascoli.</span></h1>
          <p>Accademia Italiana offers Italian courses for international students in Ascoli Piceno, led by Dr. Antonella Valentini and supported by qualified teachers, small groups, and authentic cultural practice.</p>
          <div class="hero-actions">
            <a class="button dark" href="#courses">Explore courses</a>
            <a class="button" href="#contact">Contact the school</a>
          </div>
        </div>
        <div class="hero-photos">
          <div class="photo-main"><img src="${photos.hero}" alt="Accademia Italiana students in a small group lesson"></div>
          <div class="photo-small"><img src="${photos.ascoli}" alt="Piazza del Popolo in Ascoli Piceno"></div>
          <div class="director">
            <img src="${logo}" alt="">
            <strong>Direction</strong>
            <span class="serif">Dr. Antonella Valentini</span>
            <p style="clear:both; padding-top:22px; margin:0;">info@accademia-italiana.com</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <span class="label">At a glance</span>
          <h2 class="serif">A grounded, central, and recognisable school.</h2>
          <p>Accademia Italiana combines small groups, qualified teachers, and daily life in Ascoli Piceno.</p>
        </div>
        <div class="stats">
          ${stats.map(([title, text]) => `<div class="stat"><strong>${title}</strong><span>${text}</span></div>`).join('')}
        </div>
      </div>
    </section>

    <section>
      <div class="wrap split">
        <div>
          <span class="label">Our method</span>
          <h2 class="serif">Precise teaching, <span class="italic">real conversation</span>, and Italian culture.</h2>
          <p>The school combines professional language teaching with flexible course design, authentic materials, and the cultural life of Ascoli Piceno. Solo travelers, LGBTQ+ learners, and students with accessibility needs can contact the school in advance to discuss practical arrangements.</p>
        </div>
        <div class="image-frame image-wide"><img src="${photos.board}" alt="Teacher-led Italian lesson at Accademia Italiana"></div>
      </div>
      <div class="wrap" style="margin-top:44px;">
        <div class="method-grid">
          <div class="method"><span>01</span><h3>Qualified Teachers</h3><p>Directed by Dr. Antonella Valentini and supported by qualified teachers.</p></div>
          <div class="method"><span>02</span><h3>Flexible Formats</h3><p>Standard, intensive, individual, extensive, teacher-refresher, online, and custom courses.</p></div>
          <div class="method"><span>03</span><h3>Communicative Method</h3><p>Lessons are built around communication, level placement, and practical use of Italian.</p></div>
          <div class="method"><span>04</span><h3>Welcoming Study</h3><p>Practical support can be discussed before arrival.</p></div>
        </div>
      </div>
    </section>

    <section id="courses">
      <div class="wrap">
        <div class="section-head">
          <span class="label">Course formats</span>
          <h2 class="serif">Choose the pace <span class="italic">that fits your stay.</span></h2>
          <p>Course formats include standard, intensive, individual, extensive, teacher-refresher, and custom study.</p>
        </div>
        <div class="courses">
          ${courses.map(([title, italian, hours, price, description, image]) => `            <article class="course">
              <img src="${image}" alt="${title}">
              <div class="course-body">
                <em>${italian}</em>
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="course-meta"><span>${hours}</span><span>${price}</span></div>
              </div>
            </article>`).join('\n')}
        </div>
      </div>
    </section>

    <section id="culture">
      <div class="wrap">
        <div class="section-head">
          <span class="label">Culture add-ons</span>
          <h2 class="serif">Practice Italian through <span class="italic">local culture.</span></h2>
          <p>Culture options can accompany standard or intensive study depending on dates, level, and goals.</p>
        </div>
        <div class="culture-grid">
          ${culture.map(([title, tag, desc, image]) => `            <article class="culture-card">
              <img src="${image}" alt="${title}">
              <div><strong>${tag}</strong><h3>${title}</h3><p>${desc}</p></div>
            </article>`).join('\n')}
        </div>
      </div>
    </section>

    <section id="ascoli">
      <div class="wrap split">
        <div class="image-frame image-wide"><img src="${photos.ascoli}" alt="Piazza del Popolo in Ascoli Piceno"></div>
        <div>
          <span class="label">Ascoli Piceno</span>
          <h2 class="serif">A historic city <span class="italic">for immersion</span> in Le Marche.</h2>
          <p>Ascoli Piceno combines history, art, food, festivals, mountains, rivers, and access to the wider Marche region. The walkable city setting helps students use Italian in cafes, streets, markets, and cultural visits.</p>
          <p><strong>Highlights:</strong> Piazza del Popolo, Teatro Ventidio Basso, La Quintana, local food traditions, and the Marche region between coast and mountains.</p>
        </div>
      </div>
    </section>

    <section id="accommodation">
      <div class="wrap">
        <div class="section-head">
          <span class="label">Accommodation</span>
          <h2 class="serif">Simple options <span class="italic">for your stay.</span></h2>
          <p>Choose a host family, B&B, or hotel in town, and contact the school in advance to discuss solo travel, LGBTQ+ considerations, or accessibility needs.</p>
        </div>
        <div class="accommodation">
          <article class="option"><h3>Host Family</h3><p>Students may stay with a local host family. The school can help reserve this option without additional reservation cost.</p><ul><li>Single room with breakfast: EUR 170/week</li><li>Single room with half board: EUR 230/week</li><li>Single room with full board: EUR 280/week</li></ul></article>
          <article class="option"><h3>Bed and Breakfast</h3><p>B&B accommodation in the town centre can be requested through the school, with pricing on request.</p><ul><li>Town-centre options</li><li>Prices on request</li><li>Reservation support through the school</li></ul></article>
          <article class="option"><h3>Hotel</h3><p>Hotel accommodation in the town centre can be arranged on request for students who prefer a more conventional stay.</p><ul><li>Central Ascoli Piceno</li><li>Prices on request</li><li>Reservation support through the school</li></ul></article>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <span class="label">Gallery</span>
          <h2 class="serif">Ascoli Piceno, <span class="italic">food, art, and study.</span></h2>
        </div>
        <div class="gallery">
          <img src="${photos.ascoli}" alt="Ascoli Piceno">
          <img src="${photos.cooking}" alt="Italian cooking workshop">
          <img src="${photos.social}" alt="Social Italian practice">
          <img src="${photos.board}" alt="Italian lesson">
          <img src="${photos.culture}" alt="Historic interior in Ascoli Piceno">
          <img src="${photos.hero}" alt="Small-group lesson">
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="wrap contact-grid">
        <div>
          <span class="label">Contact</span>
          <h2 class="serif">Begin your <span class="italic" style="color:#dbe8cc;">Italian course.</span></h2>
          <p>Contact the school in Ascoli Piceno to discuss level, dates, course format, accommodation, and cultural interests.</p>
        </div>
        <div class="contact-card">
          <p><strong>Accademia Italiana</strong><br>Corso Vittorio Emanuele, 27<br>63100 Ascoli Piceno (AP), Italia</p>
          <p>Phone: +39 0736 257735<br>WhatsApp: +39 375 555 9344</p>
          <p>Email: <a href="mailto:info@accademia-italiana.com">info@accademia-italiana.com</a><br>International: <a href="mailto:info@accademiainternazionale.it">info@accademiainternazionale.it</a></p>
          <p>Office hours: Monday to Friday, 10:00-13:00 and 16:00-19:00.</p>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="wrap">Offline verified HTML preview. All images and styles are embedded in this file.</div>
  </footer>
</body>
</html>`;

const output = path.join(downloadDir, 'accademia-italiana-offline.html');
fs.writeFileSync(output, html, 'utf8');
console.log(`Wrote ${output}`);
console.log(`Embedded photos from ${photoDir}`);
