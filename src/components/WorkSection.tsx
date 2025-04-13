
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Neon Horizon",
    description: "An immersive WebGL experience for a luxury car brand featuring interactive 3D models and dynamic lighting.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["WebGL", "3D Modeling", "Animation"],
    url: "#"
  },
  {
    title: "Quantum Interface",
    description: "A revolutionary dashboard interface for a fintech startup with real-time data visualization and user interaction.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["UI/UX", "React", "Data Viz"],
    url: "#"
  },
  {
    title: "Digital Twin",
    description: "A digital twin application for industrial equipment monitoring with AR capabilities and predictive analytics.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["AR", "IoT", "Machine Learning"],
    url: "#"
  },
  {
    title: "Cyber Symphony",
    description: "An interactive audio-visual experience that transforms music into stunning generative art and animations.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    tags: ["Audio Reactive", "Creative Coding", "Three.js"],
    url: "#"
  }
];

const WorkSection = () => {
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

  // Parallax effect for section
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY;
        const sectionPosition = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        
        if (scrollPosition > sectionPosition - window.innerHeight && 
            scrollPosition < sectionPosition + sectionHeight) {
          const parallaxValue = (scrollPosition - (sectionPosition - window.innerHeight)) * 0.1;
          sectionRef.current.style.setProperty('--parallax-y', `-${parallaxValue}px`);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-cyber-dark to-cyber-dark/95 parallax"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-16 text-center opacity-0 translate-y-10 transition-all duration-700"
        >
          <span className="text-white">FEATURED</span>
          <span className="text-cyber-neon ml-3">PROJECTS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
