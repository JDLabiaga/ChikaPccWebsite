"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Vision & Mission', href: '/vision-mission' },
    { name: 'Objectives', href: '/objectives' },
    { name: 'About PCC', href: '/history' },
    { name: 'Activities & Events', href: '/events' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }, // Added Contact Link
  ];

  const courseData = [
    { dept: "Information Technology", code: "SOICT", links: ["BS in Information Technology"] },
    { dept: "Criminal Justice", code: "SOCJ", links: ["BS in Criminology"] },
    { dept: "Teacher Education", code: "SOTE", links: ["Bachelor of Elementary Education", "Bachelor of Secondary Education"] },
    { dept: "Business Education", code: "SOBM", links: ["BS in Business Administration"] },
    { dept: "Hospitality Management", code: "SOHM", links: ["BS in Hospitality Management"] },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
        
        {/* LOGO */}
        <Link href="/" className="font-black text-blue-700 text-2xl tracking-tighter mr-4">
          PCC
        </Link>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-600 transition-all"
            >
              {link.name}
            </Link>
          ))}

          {/* INTERACTIVE COURSES DROPDOWN */}
          <div 
            className="relative group py-4"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-blue-600">
              COURSES <span className="text-[8px]">▼</span>
            </button>

            {/* THE MEGA MENU PANEL */}
            <div className={`absolute top-full -left-48 w-[600px] bg-white shadow-2xl rounded-3xl border border-slate-100 p-8 grid grid-cols-2 gap-8 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
              {courseData.map((item) => (
                <div key={item.code} className="space-y-2">
                  <h4 className="text-blue-600 text-[11px] border-b border-blue-50 pb-1">{item.dept}</h4>
                  <ul className="space-y-1">
                    {item.links.map(course => (
                      <li key={course}>
                        <Link 
                          href="/departments" 
                          className="text-slate-600 hover:text-blue-500 normal-case font-bold text-sm block"
                        >
                          {course}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ENROLL BUTTON */}
        <Link href="/enrollment">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest hover:shadow-lg transition-all active:scale-95">
            ENROLL NOW
          </button>
        </Link>
      </div>
    </nav>
  );
}