import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ServiceItemProps {
  name: string;
  headline: string;
  description: string;
  benefits?: string[];
  idealFor?: string;
  differentiators?: string[];
  result?: string;
  videoUrl?: string;
  imageUrl?: string;
  reverse?: boolean;
  beforeAfterImages?: { before: string; after: string };
  showCTA?: boolean;
  children?: React.ReactNode;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ 
  name, 
  headline, 
  description, 
  benefits, 
  idealFor, 
  differentiators, 
  result, 
  videoUrl, 
  imageUrl, 
  reverse = false,
  beforeAfterImages,
  showCTA = true,
  children
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <FadeIn 
        direction={reverse ? "left" : "right"} 
        className={`order-2 ${reverse ? 'lg:order-2' : 'lg:order-1'} h-full flex flex-col justify-center`}
      >
        <div className="space-y-8">
          <div className="space-y-6">
            {(benefits && benefits.length > 0 || idealFor) && (
              <div className="grid sm:grid-cols-2 gap-8">
                {benefits && benefits.length > 0 && (
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-4 flex items-center gap-2">
                      Principais Benefícios
                    </h4>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 font-light">
                          <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-brand-accent" />
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {idealFor && (
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-4 flex items-center gap-2">
                      Ideal para
                    </h4>
                    <p className="text-sm text-zinc-600 font-light leading-relaxed">
                      {idealFor}
                    </p>
                  </div>
                )}
              </div>
            )}

            {(differentiators && differentiators.length > 0 || result) && (
              <div className="grid sm:grid-cols-2 gap-8 border-t border-black/5 pt-6">
                {differentiators && differentiators.length > 0 && (
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-4 flex items-center gap-2">
                      Diferenciais
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {differentiators.map((d, i) => (
                        <span key={i} className="text-[11px] font-medium text-brand-ink bg-brand-accent/20 px-2 py-0.5 rounded-sm">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {result && (
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-4 flex items-center gap-2">
                      Resultado esperado
                    </h4>
                    <p className="text-sm text-zinc-600 font-light leading-relaxed italic">
                      "{result}"
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className={`pt-6 ${(benefits || idealFor || differentiators || result) ? 'border-t border-black/5' : ''}`}>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-3 flex items-center gap-2">
                Descrição
              </h4>
              <p className="text-zinc-500 text-base font-light leading-relaxed">
                {description}
              </p>
            </div>

            {children && (
              <div className="pt-4">
                {children}
              </div>
            )}

            {showCTA && (
              <div className="pt-4">
                <a 
                  href="https://wa.me/5531971602539" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 bg-brand-ink text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-all shadow-xl hover:scale-105 active:scale-95 group"
                >
                  Agendar Atendimento
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </div>
      </FadeIn>

      <FadeIn 
        direction={reverse ? "right" : "left"} 
        className={`order-1 ${reverse ? 'lg:order-1' : 'lg:order-2'} lg:sticky lg:top-32`}
      >
        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-4 block">
            {name}
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-light text-brand-ink leading-tight">
            {headline}
          </h3>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-brand-accent/5 rounded-[3rem] blur-2xl group-hover:bg-brand-accent/10 transition-colors pointer-events-none" />
          <div className={`relative ${beforeAfterImages ? 'aspect-[4/3]' : 'aspect-[4/5] md:aspect-[3/4]'} rounded-[2.5rem] overflow-hidden shadow-2xl premium-card p-2 bg-white`}>
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-100">
              {beforeAfterImages ? (
                <BeforeAfterSlider 
                  beforeImage={beforeAfterImages.before}
                  afterImage={beforeAfterImages.after}
                  category={name}
                  title="Resultado do Tratamento"
                  description="Deslize para ver a transformação."
                  showDetails={false}
                />
              ) : videoUrl ? (
                <div className="relative w-full h-full overflow-hidden">
                  {imageUrl && (
                    <img 
                      src={imageUrl} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                  )}
                  <iframe
                    src={videoUrl}
                    className="absolute top-1/2 left-1/2 w-[300%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover z-10 opacity-0 transition-opacity duration-1000"
                    allow="autoplay; encrypted-media"
                    onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                  <div className="absolute inset-0 bg-brand-ink/10 mix-blend-overlay z-20 pointer-events-none" />
                </div>
              ) : (
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-brand-ink/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
