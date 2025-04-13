
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // This is a placeholder for the Three.js/WebGL animation
    // In a real implementation, we would initialize Three.js here
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    // Simple placeholder animation with particles
    const particles: { x: number; y: number; speed: number; size: number; color: string }[] = [];
    
    const createParticles = () => {
      const width = canvasRef.current?.width || 0;
      const height = canvasRef.current?.height || 0;
      
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          speed: 0.1 + Math.random() * 0.4,
          size: 1 + Math.random() * 3,
          color: i % 3 === 0 ? '#8B5CF6' : i % 3 === 1 ? '#1EAEDB' : '#6E59A5'
        });
      }
    };
    
    const animate = () => {
      if (!canvasRef.current) return;
      
      const width = canvasRef.current.width;
      const height = canvasRef.current.height;
      
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.y += particle.speed;
        
        if (particle.y > height) {
          particle.y = 0;
          particle.x = Math.random() * width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        particles.length = 0;
        createParticles();
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    createParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        heroRef.current.style.transform = `translateY(${scroll * 0.3}px)`;
        
        // Decrease opacity as user scrolls
        const opacity = 1 - (scroll / 600);
        heroRef.current.style.opacity = opacity > 0 ? opacity.toString() : '0';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* WebGL background Canvas (placeholder) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-dark/90 to-cyber-dark z-10"></div>
      
      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          <span className="text-white block">WE CREATE</span>
          <span className="text-gradient animate-glow block mt-2">DIGITAL EXPERIENCES</span>
        </h1>
        
        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl mb-8 animate-fade-in-slow">
          A cutting-edge studio specializing in immersive digital experiences, 
          interactive design, and next-generation web applications.
        </p>
        
        <Button 
          variant="outline"
          className="mt-6 border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 animate-fade-in-slower"
        >
          Explore Our Work
        </Button>
        
        <a
          href="#work"
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-cyber-neon transition-colors duration-300 animate-float"
        >
          <ArrowDownCircle className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
