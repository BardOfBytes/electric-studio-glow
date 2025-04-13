
import React, { useRef, useEffect } from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-cyber-dark to-cyber-dark/90"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold mb-16 text-center opacity-0 translate-y-10 transition-all duration-700"
        >
          <span className="text-white">GET IN</span>
          <span className="text-cyber-purple-light ml-3">TOUCH</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Contact Info */}
          <ContactInfo />
          
          {/* Right side - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
