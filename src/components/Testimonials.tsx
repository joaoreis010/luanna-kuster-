import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Beatriz",
      role: "Maquiagem",
      text: "A Luanna é incrível! A pele blindada durou a festa inteira, mesmo com o calor. Me senti maravilhosa e muito bem cuidada.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Carla Silveira",
      role: "Tratamento de Estrias",
      text: "O tratamento mudou minha autoestima. A textura da minha pele está muito melhor e me sinto confiante novamente.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Fernanda Costa",
      role: "Design de Sobrancelhas",
      text: "Nunca tive minhas sobrancelhas tão bem desenhadas. O resultado é super natural e valorizou muito o meu olhar.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Decorative quote icon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-[0.03] text-brand-ink pointer-events-none">
            <Quote size={200} />
          </div>

          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1} direction="up">
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={12} className="fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-lg font-serif italic text-brand-ink/80 leading-relaxed mb-8">
                  "{t.text}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-brand-ink mb-1">{t.name}</h4>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">{t.role}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
