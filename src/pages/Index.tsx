
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Initialize smooth scrolling and parallax effects
  useEffect(() => {
    // Register scroll event for detecting scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Get all elements that should have parallax effect
      document.querySelectorAll('.parallax').forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + scrollPosition;
        const elementHeight = element.getBoundingClientRect().height;
        
        // Calculate distance from element to viewport
        if (scrollPosition + viewportHeight > elementTop && 
            scrollPosition < elementTop + elementHeight) {
          const distance = (scrollPosition + viewportHeight - elementTop) / 5;
          
          // Apply parallax effect
          (element as HTMLElement).style.setProperty('--parallax-y', `${distance}px`);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
