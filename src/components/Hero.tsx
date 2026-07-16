import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-end md:items-center justify-center overflow-hidden bg-brand-ink pb-16 pt-32 md:py-48">
      {/* Immersive Background Image - Inspired by Netflix/Tesla */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1nHE9mATWP4_A-xmZDvGwMu3MoaGh0tuO" 
            alt="Luanna Kuster" 
            className="h-full w-full object-cover object-[center_25%] md:object-[75%_40%] scale-105"
          />
          {/* Advanced Gradient Overlay for Netflix/Tesla feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/60 via-transparent to-transparent opacity-50" />
        </motion.div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <FadeIn direction="up" delay={0.4}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] tracking-tighter text-white mb-6 md:mb-12">
              Luanna <br /> 
              <span className="italic text-brand-nude/80">Kuster</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="text-zinc-300 text-sm md:text-base font-light leading-relaxed mb-10 md:mb-16 max-w-xl">
              <p className="font-serif italic text-brand-nude text-lg md:text-xl mb-3">
                Realçando sua beleza natural.
              </p>
              <p className="opacity-80">
                Atendimento personalizado com o <br />
                compromisso de revelar a sofisticação <br />
                e confiança que já existem em você.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a
                href="https://wa.me/5531971602539"
                target="_blank"
                rel="noreferrer"
                className="group bg-white text-brand-ink px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-4"
              >
                Agendar Atendimento
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="https://wa.me/5531971602539"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-colors flex items-center gap-4 group px-2"
              >
                <span>Falar no WhatsApp</span>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-brand-accent transition-all duration-500" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative ambient light */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-accent/10 blur-[150px] -z-10 rounded-full" />
    </section>
  );
};
