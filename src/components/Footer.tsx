'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/LuisMelladoDiaz',
      icon: <FaGithub className="w-6 h-6" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mellado-diaz-luis/',
      icon: <FaLinkedin className="w-6 h-6" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/luinki2003/',
      icon: <FaInstagram className="w-6 h-6" />
    }
  ];

  return (
    <footer className="w-full bg-game-secondary border-t border-game-accent py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Contact Info */}
          <div className="text-center">
            <p className="text-game-text">Contact me</p>
            <a href="mailto:contact@luismellado.com" className="text-white hover:text-game-text transition-colors">
              melladodiazluis@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-game-text transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Luis Mellado. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 