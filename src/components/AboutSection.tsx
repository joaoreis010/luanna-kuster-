import React from 'react';
import { FadeIn } from './FadeIn';

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-36 bg-brand-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 order-1">
            <FadeIn direction="up" delay={0.3}>
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:max-w-none">
                <img 
                  src="https://lh3.googleusercontent.com/d/1117Eg9mzBZpXs2lS3D64nD2vfaR4-ur6" 
                  alt="Realce de Olhar - Luanna Kuster" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent pointer-events-none" />
              </div>
            </FadeIn>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 space-y-10">
            {/* Label */}
            <FadeIn direction="up">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent block">
                Propósito & Missão
              </span>
            </FadeIn>

            {/* Heading */}
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight tracking-tight text-brand-ink">
                Cuidar de pessoas e realçar a essência que já existe em cada mulher.
              </h2>
            </FadeIn>

            {/* Main Content paragraphs */}
            <div className="space-y-6 text-zinc-500 font-light leading-relaxed text-base md:text-lg">
              <FadeIn direction="up" delay={0.4}>
                <p>
                  Desde sempre, carreguei comigo o desejo de trabalhar na área da estética, mesmo tendo iniciado minha trajetória profissional em outro caminho. Com o tempo, entendi que meu propósito estava em cuidar de pessoas, realçar a beleza natural e, principalmente, transformar a forma como cada cliente se enxerga.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <p>
                  <span className="bg-brand-accent/20 px-1 rounded-sm">Hoje, atuando na estética, encontrei muito mais do que uma profissão — encontrei uma missão.</span> Através do meu trabalho, tenho a oportunidade de elevar a autoestima, devolver a confiança e proporcionar momentos de cuidado e valorização.
                </p>
              </FadeIn>
            </div>

            {/* Impact Highlight Paragraph */}
            <FadeIn direction="up" delay={0.8}>
              <div className="relative pt-8 border-t border-brand-accent/20">
                <p className="text-brand-ink text-xl md:text-2xl font-serif italic font-light leading-snug tracking-tight">
                  "Cada atendimento é único e feito com dedicação, carinho e o compromisso de mostrar que toda mulher já é linda, só precisa se reconhecer assim."
                </p>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn direction="up" delay={1.0} className="pt-4">
              <a 
                href="https://wa.me/5531971602539" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-4 text-brand-ink hover:text-brand-accent transition-colors group"
              >
                <span className="text-xs uppercase tracking-widest font-bold">Conheça meu método</span>
                <div className="w-10 h-[1px] bg-brand-ink group-hover:w-16 group-hover:bg-brand-accent transition-all duration-500" />
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
      
      {/* Decorative subtle element - Apple style */}
      <div className="mt-32 opacity-10">
        <div className="max-w-7xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-brand-ink to-transparent" />
      </div>
    </section>
  );
};
