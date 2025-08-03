
'use client';

import Link from 'next/link';
import { useState } from 'react';
import LoginButton from './LoginButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/commands', label: 'Commands' },
    { href: '/about', label: 'About' },
    { href: '/support', label: 'Support' }
  ];

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
              <i className="ri-robot-2-fill text-white text-xl"></i>
            </div>
            <span className="font-['Pacifico'] text-2xl text-white">Chill Pill Bot</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-purple-300 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <LoginButton />
            <Link
              href="https://discord.com/oauth2/authorize?client_id=1398200565808369745&permissions=1719636185841655&integration_type=0&scope=bot"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-semibold whitespace-nowrap cursor-pointer"
            >
              <i className="ri-add-circle-fill mr-2"></i>
              Invite Bot
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white hover:text-purple-300 py-2 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-2">
              <LoginButton />
            </div>
            <Link
              href="https://discord.com/oauth2/authorize?client_id=1398200565808369745&permissions=1719636185841655&integration_type=0&scope=bot"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-semibold mt-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-add-circle-fill mr-2"></i>
              Invite Bot
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
