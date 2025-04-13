
import React, { useRef, useEffect, FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would submit the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
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
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      
      if (formRef.current) {
        observer.unobserve(formRef.current);
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
          className="text-3xl md:text-4xl font-bold mb-16 text-center opacity-0 translate-y-10 transition-all duration-700"
        >
          <span className="text-white">GET IN</span>
          <span className="text-cyber-neon ml-3">TOUCH</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8 md:mt-8">
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-cyber-neon" />
                <div>
                  <h3 className="text-white font-medium">Email Us</h3>
                  <p className="text-white/70">hello@electrostudio.com</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-cyber-blue" />
                <div>
                  <h3 className="text-white font-medium">Call Us</h3>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-white/80 leading-relaxed">
                Ready to bring your digital vision to life? Let's collaborate and create something extraordinary together. 
                Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
              </p>
            </div>
          </div>
          
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-lg space-y-6 opacity-0 translate-y-10 transition-all duration-700 delay-200"
          >
            <div>
              <label htmlFor="name" className="text-white/80 block mb-2 text-sm">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-white/80 block mb-2 text-sm">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="text-white/80 block mb-2 text-sm">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[120px]"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-cyber-neon hover:bg-cyber-neon/80 text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
