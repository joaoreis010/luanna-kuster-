import React from 'react';
import { FadeIn } from './FadeIn';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export const MapSection = ({ standalone = true }: { standalone?: boolean }) => {
  const address = "Rua Algemiro Mapa, 81, Vila José Lopes, Itabirito - MG";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=17&ie=UTF8&iwloc=A&output=embed`;

  const content = (
    <div className={`${standalone ? 'max-w-7xl mx-auto px-6' : ''} relative z-10`}>
      <div className={`grid ${standalone ? 'lg:grid-cols-12' : 'grid-cols-1'} gap-12 lg:gap-24 items-center`}>
        {/* Info Side */}
        <div className={standalone ? 'lg:col-span-5' : ''}>
          <FadeIn direction="right">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-8 block">
              Localização & Visita
            </span>
            <h2 className={`${standalone ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'} font-serif font-light text-brand-ink mb-12 leading-tight`}>
              Venha conhecer o nosso <span className="italic">Espaço</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-paper flex items-center justify-center shadow-sm group-hover:bg-brand-accent transition-colors duration-500">
                  <MapPin className="text-brand-accent group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-brand-ink font-serif text-xl mb-2">Endereço Profissional</h4>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-paper flex items-center justify-center shadow-sm group-hover:bg-brand-accent transition-colors duration-500">
                  <Clock className="text-brand-accent group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-brand-ink font-serif text-xl mb-2">Atendimento</h4>
                  <p className="text-zinc-500 font-light leading-relaxed text-sm">
                    Exclusivamente com hora marcada.<br />
                    Agende previamente seu horário.
                  </p>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-brand-ink text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-all duration-500 group shadow-xl"
                >
                  <Navigation size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Como Chegar
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Map Side */}
        <div className={standalone ? 'lg:col-span-7' : ''}>
          <FadeIn direction="left" delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-accent/5 rounded-[4rem] blur-3xl opacity-50" />
              <div className={`relative ${standalone ? 'aspect-[4/3]' : 'aspect-video'} rounded-[3.5rem] overflow-hidden shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)] border-[12px] border-white ring-1 ring-brand-ink/5`}>
                <iframe 
                  src={mapUrl}
                  className="w-full h-full grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Profissional Luanna Kuster"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );

  if (!standalone) return content;

  return (
    <section id="localizacao" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[200px] font-serif font-black whitespace-nowrap tracking-tighter">
          ITABIRITO MG
        </span>
      </div>
      {content}
    </section>
  );
};
