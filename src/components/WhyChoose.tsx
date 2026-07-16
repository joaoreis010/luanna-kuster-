import React, { useState } from 'react';
import { Sparkles, Heart, Shield, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';

export const WhyChoose = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const reasons = [
    {
      icon: <Heart size={32} />,
      title: "Atendimento personalizado",
      description: "Cada atendimento é único, respeitando sua individualidade e realçando sua beleza natural de forma exclusiva."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Produtos de qualidade",
      description: "Utilizamos apenas as melhores marcas e tecnologias do mercado para garantir resultados impecáveis e seguros."
    },
    {
      icon: <Shield size={32} />,
      title: "Ambiente acolhedor",
      description: "Um espaço projetado para proporcionar momentos de relaxamento, cuidado e valorização da sua autoestima."
    },
    {
      icon: <Award size={32} />,
      title: "Resultados naturais",
      description: "Nossa missão é realçar sua essência, entregando resultados elegantes que preservam sua naturalidade."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <FadeIn direction="up">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-6 block">
              Excelência & Cuidado
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-brand-ink mb-6">
              Por que nos escolher
            </h2>
          </FadeIn>
          <div className="w-12 h-[1px] bg-brand-accent/50" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => {
            const isActive = activeCard === i;
            return (
              <FadeIn key={reason.title} delay={i * 0.1} direction="up" className="h-full">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCard(isActive ? null : i)}
                  className={`p-10 rounded-[2.5rem] border border-brand-ink/5 h-full group transition-colors duration-500 cursor-pointer shadow-sm hover:shadow-xl ${
                    isActive ? 'bg-brand-ink' : 'bg-brand-paper hover:bg-brand-ink'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-colors duration-500 shadow-sm ${
                    isActive ? 'bg-brand-accent/20' : 'bg-white group-hover:bg-brand-accent/20'
                  }`}>
                    <span className={`transition-colors duration-500 ${
                      isActive ? 'text-brand-accent' : 'text-brand-accent group-hover:text-brand-nude'
                    }`}>
                      {reason.icon}
                    </span>
                  </div>
                  <h3 className={`text-xl font-serif mb-6 transition-colors duration-500 ${
                    isActive ? 'text-white' : 'text-brand-ink group-hover:text-white'
                  }`}>
                    {reason.title}
                  </h3>
                  <p className={`text-sm font-light leading-relaxed transition-colors duration-500 ${
                    isActive ? 'text-zinc-300' : 'text-zinc-500 group-hover:text-zinc-300'
                  }`}>
                    {reason.description}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
