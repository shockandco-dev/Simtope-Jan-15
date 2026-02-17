
import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from './Hero';
import { Services } from './Services';
import { Features } from './Features';
import { Process } from './Process';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-0">
      <Hero onConnect={() => { // Scroll to contact form
        const el = document.getElementById('contact-form');
        if (el) {
          const offset = 100;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        } else {
          // Fallback for navigation if the element is not on the same page
          window.location.href = '/contact';
        }
      }} />
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
        <Services />
      </div>
      <Features />
      <Process />
      <Contact />
    </div>
  );
};
