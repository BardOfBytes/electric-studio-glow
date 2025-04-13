
import React from 'react';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-cyber-neon tracking-wider">ELECTRO</span>
              <span className="text-white">STUDIO</span>
            </h3>
            <p className="text-white/60 max-w-xs">
              Creating immersive digital experiences at the intersection of design and technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <nav className="space-y-2">
              <a href="#home" className="text-white/60 hover:text-cyber-neon block transition-colors">Home</a>
              <a href="#work" className="text-white/60 hover:text-cyber-neon block transition-colors">Work</a>
              <a href="#about" className="text-white/60 hover:text-cyber-neon block transition-colors">About</a>
              <a href="#contact" className="text-white/60 hover:text-cyber-neon block transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Github size={20} />} />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ElectroStudio. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 text-sm hover:text-cyber-neon transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 text-sm hover:text-cyber-neon transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white/70 hover:bg-cyber-neon/20 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;
