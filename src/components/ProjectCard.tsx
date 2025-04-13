
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  url,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden glass-card rounded-lg transition-all duration-500 opacity-0 translate-y-10",
        "hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]",
        index % 2 === 0 ? "md:ml-0" : "md:ml-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold tracking-wider">{title}</h3>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        
        <p className="text-white/70 text-sm mb-4 max-w-md">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-white/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
