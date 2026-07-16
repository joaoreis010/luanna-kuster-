import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Onde Estamos', href: '#localizacao' },
    { name: 'Minhas Clientes', href: '#clientes' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isMobileMenuOpen
          ? 'h-screen bg-brand-paper flex flex-col'
          : isScrolled 
            ? 'py-4 bg-brand-paper/80 backdrop-blur-xl border-b border-brand-ink/5 shadow-sm' 
            : 'py-8 bg-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between w-full ${isMobileMenuOpen ? 'h-24 shrink-0' : ''}`}>
        {/* Logo */}
        <a href="#home" className="relative z-50 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="flex flex-col">
            <span className={`text-xl font-serif tracking-tighter transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-brand-ink' : 'text-white'}`}>
              Luanna <span className="italic font-light opacity-80">Kuster</span>
            </span>
            <span className={`text-[8px] uppercase tracking-[0.4em] font-bold transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-brand-accent' : 'text-brand-nude'}`}>
              Estética Premium
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold smooth-nav-link transition-colors duration-500 ${
                isScrolled ? 'text-brand-ink' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5531971602539"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-500 ${
              isScrolled 
                ? 'bg-brand-ink text-white hover:bg-brand-accent shadow-lg' 
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-brand-ink'
            }`}
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden relative z-50 p-2 transition-colors duration-500 ${
            isScrolled || isMobileMenuOpen ? 'text-brand-ink' : 'text-white'
          }`}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1 w-full flex flex-col items-center justify-center bg-brand-paper pb-20 z-40"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-brand-ink hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-8">
                <a 
                  href="https://www.instagram.com/luannakuster_estetica?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 bg-brand-ink text-white rounded-full hover:bg-brand-accent transition-colors"
                  aria-label="Instagram de Luanna Kuster"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://wa.me/5531971602539" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 bg-brand-ink text-white rounded-full hover:bg-brand-accent transition-colors"
                  aria-label="Falar no WhatsApp"
                >
                  <Phone size={20} />
                </a>
              </div>
              <a 
                href="https://wa.me/5531971602539"
                target="_blank" 
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-12 py-5 bg-brand-ink text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold shadow-2xl hover:bg-brand-accent transition-all duration-500"
              >
                Agendar Atendimento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
