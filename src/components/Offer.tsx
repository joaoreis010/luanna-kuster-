import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Offer = ({ standalone = true }: { standalone?: boolean }) => {
  const content = (
    <FadeIn direction="up">
      <div className={`relative rounded-[3rem] overflow-hidden bg-brand-ink ${standalone ? 'p-12 md:p-24' : 'p-8 md:p-12'} flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl`}>
        {/* Ambient background light */}
        <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-brand-accent/10 blur-[120px] rounded-full -z-0" />
        
        <div className="relative z-10 flex-1">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Gift className="text-brand-accent" size={14} />
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-nude">
              Oportunidade Exclusiva
            </span>
          </div>
          
          <h2 className={`${standalone ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl'} font-serif font-light text-white mb-6 leading-tight`}>
            Sua primeira avaliação <br />
            <span className="italic text-brand-accent">personalizada.</span>
          </h2>
          
          <p className={`text-white/60 ${standalone ? 'text-lg' : 'text-base'} font-light leading-relaxed mb-8 max-w-xl`}>
            Queremos entender suas necessidades e planejar o melhor protocolo para realçar sua beleza. Agende sua primeira avaliação e receba um cuidado especializado desde o primeiro minuto.
          </p>
          
          <a
            href="https://wa.me/5531971602539"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-4 bg-brand-accent text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-brand-ink transition-all duration-500 shadow-xl"
          >
            Agendar atendimento
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className={`relative z-10 w-full ${standalone ? 'md:w-1/3' : 'md:w-1/4'} aspect-square rounded-[2rem] overflow-hidden rotate-3 shadow-2xl`}>
          <img 
            src="https://lh3.googleusercontent.com/d/1nHE9mATWP4_A-xmZDvGwMu3MoaGh0tuO" 
            alt="Luanna Kuster" 
            className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
          />
        </div>
      </div>
    </FadeIn>
  );

  if (!standalone) return content;

  return (
    <section className="py-24 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-6">
        {content}
      </div>
    </section>
  );
};
