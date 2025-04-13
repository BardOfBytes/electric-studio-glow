
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  contact: string;
}

const ContactCard = ({ icon: Icon, iconColor, iconBgColor, title, contact }: ContactCardProps) => {
  return (
    <div className="glass-card p-6 rounded-lg hover:border-cyber-neon/30 transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div className={`${iconBgColor} p-3 rounded-full`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div>
          <h3 className="text-white/70 text-sm font-medium uppercase tracking-wider">{title}</h3>
          <p className="text-white font-medium">{contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
