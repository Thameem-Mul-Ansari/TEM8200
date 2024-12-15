import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Copyright 
} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "text-blue-600 hover:bg-blue-50" },
    { icon: Twitter, href: "#", color: "text-sky-400 hover:bg-sky-50" },
    { icon: Instagram, href: "#", color: "text-pink-500 hover:bg-pink-50" },
    { icon: Linkedin, href: "#", color: "text-blue-700 hover:bg-blue-50" },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and Brief Description */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              EduPlay Hub
            </h2>
            <p className="text-gray-600 max-w-md">
              Transforming education through innovative, engaging learning experiences.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, color }) => (
              <a 
                key={href} 
                href={href} 
                className={`
                  ${color} p-2 rounded-full transition-all duration-300 
                  hover:scale-110 hover:shadow-md
                `}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          
        </div>
      </div>
    </footer>
  );
}

export default Footer;