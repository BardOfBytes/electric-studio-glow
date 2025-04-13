
import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-cyber-dark/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl md:text-2xl">
          <span className="text-cyber-neon tracking-wider">ELECTRO</span>
          <span className="text-white">STUDIO</span>
        </a>
        
        {isMobile ? (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="flex gap-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-cyber-dark/95 z-40 pt-20">
          <nav className="flex flex-col items-center gap-8 p-8">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="#work" onClick={() => setIsMenuOpen(false)}>Work</NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string, 
  children: React.ReactNode,
  onClick?: () => void
}) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-white/80 hover:text-cyber-neon transition-colors duration-300 text-sm uppercase tracking-widest font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-neon group-hover:w-full transition-all duration-300" />
    </a>
  );
};

export default Navbar;
