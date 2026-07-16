import React from 'react';
import { Instagram, Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-ink text-white pt-32 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-brand-accent/5 blur-[150px] -z-0 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-serif tracking-tighter mb-1">
                Luanna <span className="italic font-light opacity-80">Kuster</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent">
                Estética Premium
              </span>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm mb-10">
              Transformando a forma como cada mulher se enxerga através de um olhar humanizado e técnicas de alta performance.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/luannakuster_estetica?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all duration-500 group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/5531971602539" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all duration-500 group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-10">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-400 hover:text-white transition-colors group">
                <Phone size={18} className="text-brand-accent mt-1 shrink-0" />
                <span className="font-light">(31) 97160-2539</span>
              </li>
              <li className="flex items-start gap-4 text-zinc-400 hover:text-white transition-colors group">
                <MapPin size={18} className="text-brand-accent mt-1 shrink-0" />
                <span className="font-light">Itabirito, Minas Gerais</span>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div className="lg:col-span-5">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-10">Localização</h4>
            <div className="text-zinc-400 font-light leading-relaxed grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-white font-medium mb-2">Nosso Espaço</p>
                <p className="mb-1 leading-relaxed">
                  Rua Algemiro Mapa, 81<br />
                  Bairro Vila José Lopes<br />
                  Itabirito — MG
                </p>
              </div>
              <div>
                <p className="text-white font-medium mb-2">Atendimento</p>
                <p className="leading-relaxed">
                  Exclusivamente com hora marcada.<br />
                  Não possuímos horários fixos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">
            &copy; {new Date().getFullYear()} Luanna Kuster Estética. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent hover:text-white transition-colors group"
          >
            Voltar ao topo
            <div className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center group-hover:bg-brand-accent transition-all duration-500">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
