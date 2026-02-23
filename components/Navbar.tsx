'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { label: '¿Quiénes Somos?', href: '/quienes-somos', children: [
    { href: '/quienes-somos', label: 'Nuestra Historia' }
  ]},
  { href: '/servicios', label: 'Servicios' },
  { label: 'Seguros', href: '/convenios-2', children: [
    { href: '/convenios-2', label: 'Seguros Médicos' }
  ]},
  { href: '/expats-foreign-insurance', label: 'Expats' },
  { href: '/preguntas-frecuentes', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setActiveDropdown(null); }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-navy-500/95 backdrop-blur-sm py-4'}`}>
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold transition-colors ${scrolled ? 'text-brand-primary' : 'text-white'}`}>
          Kineo<span className="text-teal-medical">-UMF</span>
        </Link>
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" onMouseEnter={() => setActiveDropdown(link.label)} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? 'text-brand-primary hover:text-brand-accent' : 'text-white/90 hover:text-white'}`}>
                  {link.label} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-50">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-5 py-2.5 text-sm text-brand-primary hover:bg-brand-light hover:text-brand-accent transition-colors">{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === link.href ? (scrolled ? 'text-brand-accent font-semibold' : 'text-teal-medical font-semibold') : (scrolled ? 'text-brand-primary hover:text-brand-accent' : 'text-white/90 hover:text-white')}`}>
                {link.label}
              </Link>
            )
          )}
          <Link href="/contacto" className="ml-3 btn-primary text-sm px-5 py-2.5">Agendar cita</Link>
        </div>
        <button className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-brand-primary' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-4 py-2 text-xs font-bold text-brand-muted uppercase tracking-wider">{link.label}</p>
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block px-6 py-2 text-sm text-brand-primary hover:text-brand-accent">{child.label}</Link>
                  ))}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === link.href ? 'text-brand-accent bg-teal-medical/5' : 'text-brand-primary hover:text-brand-accent hover:bg-brand-light'}`}>{link.label}</Link>
              )
            )}
            <div className="pt-2">
              <Link href="/contacto" className="btn-primary w-full justify-center text-sm">Agendar cita</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
