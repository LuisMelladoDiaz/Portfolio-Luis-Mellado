'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  const links = [
    { name: 'Career', path: '/quest-log' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-game-secondary border-b border-game-accent z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-game-text font-bold text-xl hover:text-game-accent transition-colors">
            Luis Mellado
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className={`text-white hover:text-game-text transition-colors ${
                    pathname === link.path ? 'text-game-text' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* XP Counter */}
          <div className="hidden md:block text-game-text">
            <span className="font-mono">XP: 1337</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
