
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import ContactCard from './ContactCard';

const ContactInfo = () => {
  return (
    <div>
      <div className="glass-card p-8 rounded-lg mb-8">
        <div className="flex flex-col space-y-8">
          {/* Email Card */}
          <ContactCard 
            icon={Mail}
            iconColor="text-cyber-purple-light"
            iconBgColor="bg-cyber-purple/20"
            title="Email Us"
            contact="hello@electrostudio.com"
          />
          
          {/* Phone Card */}
          <ContactCard 
            icon={Phone}
            iconColor="text-cyber-blue-light"
            iconBgColor="bg-cyber-blue/20"
            title="Call Us"
            contact="+1 (555) 123-4567"
          />
        </div>
      </div>
      
      {/* Data-Driven Section */}
      <div className="p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-3">DATA-DRIVEN</h3>
        <p className="text-white/80 leading-relaxed">
          Analytics and user insights guide our decision-making process at every step.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
