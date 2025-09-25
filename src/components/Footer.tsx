import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Impact Stories', href: '#impact' },
    { name: 'SDG Alignment', href: '#sdg' },
  ];

  const programs = [
    { name: 'Teenage Mother Support', href: '#programs' },
    { name: 'Socio-Economic Empowerment', href: '#programs' },
    { name: 'Mental Health Support', href: '#programs' },
    { name: 'Community Mobilization', href: '#programs' },
  ];

  const getInvolved = [
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Donate', href: '#donate' },
    { name: 'Partner With Us', href: '#volunteer' },
    { name: 'Careers', href: '#volunteer' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Footprints of Hope</h3>
                <p className="text-sm text-primary-foreground/80">Foundation</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Empowering Kenya's girls, youth, and women with resources, education, 
              and support for resilient futures since 2019.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">Busia County, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">info@foh-foundation.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">+254 XXX XXX XXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Involved</h4>
            <ul className="space-y-3 mb-8">
              {getInvolved.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Get our newsletter for program updates and impact stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                />
                <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/80">
              © 2024 Footprints of Hope Foundation. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80 hidden sm:block">Follow us:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donate CTA Banner */}
      <div className="bg-warmth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join us Today in Obtaining Diamonds from the Rough
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Your support helps transform lives and communities. Every donation makes a lasting impact.
            </p>
            <Button size="lg" className="bg-white text-warmth hover:bg-white/90">
              Donate Now
              <Heart className="ml-2 w-5 h-5" fill="currentColor" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;