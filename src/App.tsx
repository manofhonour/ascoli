import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';

// Immersive Core Sections for Home Page
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyAccademia from './components/WhyAccademia';
import Courses from './components/Courses';
import BeyondClassroom from './components/BeyondClassroom';
import WhyAscoliPiceno from './components/WhyAscoliPiceno';
import Teachers from './components/Teachers';
import StudentStories from './components/StudentStories';
import AccommodationSection from './components/AccommodationSection';
import LifestyleGallery from './components/LifestyleGallery';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import InquiryForm from './components/InquiryForm';

// Individual Tailor-Made Pages
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AccommodationPage from './pages/AccommodationPage';
import StudentLifePage from './pages/StudentLifePage';
import AscoliPage from './pages/AscoliPage';
import CulturePage from './pages/CulturePage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

  const scrollToInquire = () => {
    // If we're not on Home page or Contact page, switch to contact page tab!
    if (currentTab !== 'home' && currentTab !== 'contact') {
      setCurrentTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentTab === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById('inquire');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
  };

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-terracotta-100 selection:text-terracotta-700 bg-travertine-50">
      <Header
        currentTab={currentTab}
        onTabChange={handleTabChange}
        onInquireClick={scrollToInquire}
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentTab === 'home' && (
            <div key="home">
              <Hero onInquireClick={scrollToInquire} />
              <TrustBar />
              <WhyAccademia />
              <Courses />
              <BeyondClassroom />
              <WhyAscoliPiceno />
              <Teachers />
              <StudentStories />
              <AccommodationSection />
              <LifestyleGallery />
              <TestimonialsSection />
              <FAQSection />
              <FinalCTA onInquireClick={scrollToInquire} />
              <InquiryForm />
            </div>
          )}

          {currentTab === 'about' && <AboutPage key="about" />}
          {currentTab === 'courses' && <CoursesPage key="courses" />}
          {currentTab === 'accommodation' && <AccommodationPage key="accommodation" />}
          {currentTab === 'student-life' && <StudentLifePage key="student-life" />}
          {currentTab === 'ascoli' && <AscoliPage key="ascoli" />}
          {currentTab === 'culture' && <CulturePage key="culture" />}
          {currentTab === 'gallery' && <GalleryPage key="gallery" />}
          {currentTab === 'testimonials' && <TestimonialsPage key="testimonials" />}
          {currentTab === 'faq' && <FaqPage key="faq" />}
          {currentTab === 'blog' && <BlogPage key="blog" />}
          {currentTab === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      <Footer onTabChange={handleTabChange} />
    </div>
  );
}
