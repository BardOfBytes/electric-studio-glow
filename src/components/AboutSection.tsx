
import React, { useRef, useEffect } from 'react';
import { Code, Database, Layout, Lightbulb, Zap } from 'lucide-react';

const philosophyItems = [
  {
    icon: <Zap className="h-10 w-10 text-cyber-neon" />,
    title: "Innovation",
    description: "We push boundaries with cutting-edge technologies and forward-thinking approaches."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-cyber-blue" />,
    title: "Creativity",
    description: "Bold ideas and unique solutions form the foundation of our creative process."
  },
  {
    icon: <Layout className="h-10 w-10 text-cyber-purple-light" />,
    title: "Design Excellence",
    description: "Pixel-perfect designs that balance aesthetics with usability and performance."
  },
  {
    icon: <Code className="h-10 w-10 text-cyber-blue-light" />,
    title: "Technical Mastery",
    description: "We pride ourselves on clean code and innovative technical implementations."
  },
  {
    icon: <Database className="h-10 w-10 text-cyber-purple" />,
    title: "Data-Driven",
    description: "Analytics and user insights guide our decision-making process at every step."
  }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY;
        const sectionPosition = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        
        if (scrollPosition > sectionPosition - window.innerHeight && 
            scrollPosition < sectionPosition + sectionHeight) {
          const parallaxValue = (scrollPosition - (sectionPosition - window.innerHeight)) * 0.05;
          sectionRef.current.style.setProperty('--parallax-y', `${parallaxValue}px`);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="py-24 bg-cyber-dark parallax"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-16 text-center opacity-0 translate-y-10 transition-all duration-700"
        >
          <span className="text-white">STUDIO</span>
          <span className="text-cyber-neon ml-3">PHILOSOPHY</span>
        </h2>
        
        <div 
          ref={contentRef}
          className="opacity-0 translate-y-10 transition-all duration-700 delay-200"
        >
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <p className="text-white/80 text-lg leading-relaxed">
              We blend art and technology to create digital experiences that captivate, engage, and inspire. 
              Our approach is built on deep technical expertise, bold creative vision, and a relentless 
              pursuit of innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophyItems.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
