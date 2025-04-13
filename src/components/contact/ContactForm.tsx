
import React, { FormEvent, useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
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
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
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
  );
};

export default ContactForm;
