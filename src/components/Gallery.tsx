import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';

export const Gallery = () => {
  const images = [
    { url: 'https://drive.google.com/thumbnail?id=1VrNVKXXIrDPWCrktdBh7bzT5Of1qbeFr&sz=w1200', title: 'Maquiagem Profissional' },
    { url: 'https://drive.google.com/thumbnail?id=1bVA86hIzWCBxt4Mlosn5ikInycuGS5JT&sz=w1200', title: 'Pele Blindada' },
    { url: 'https://drive.google.com/thumbnail?id=1ieC_0dol8rTtELuWZnWqG50_0Yw9os-D&sz=w1200', title: 'Design Personalizado' },
    { url: 'https://drive.google.com/thumbnail?id=1zEUtLYrGjqq7z_ZoUmq4W_p4LCOWw_xM&sz=w1200', title: 'Harmonia Facial' },
    { url: 'https://drive.google.com/thumbnail?id=1GFPTIb9ZxL-Swlf-qnqK_Qf3ftd7c-Si&sz=w1200', title: 'Sofisticação & Elegância' },
  ];

  return (
    <section id="clientes" className="py-32 bg-brand-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-6 block">
                Portfólio & Resultados
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-brand-ink">
                Minhas <span className="italic">Clientes</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-zinc-500 font-light max-w-xs text-right">
              Um olhar sobre as transformações e realces que realizamos diariamente em nosso estúdio.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <GalleryItem key={i} img={img} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GalleryItemProps {
  img: { url: string; title: string };
  i: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ img, i }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <FadeIn delay={i * 0.1} direction="up">
      <div 
        onClick={() => setIsActive(!isActive)}
        className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-brand-nude/20 shadow-xl border border-brand-ink/5 cursor-pointer"
      >
        {/* Loading Shimmer */}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-nude/30 animate-pulse z-10"
            />
          )}
        </AnimatePresence>

        <motion.img 
          src={img.url} 
          alt={img.title} 
          className={`w-full h-full object-cover transition-all duration-[1200ms] ease-out-expo ${
            isLoaded ? 'opacity-100' : 'opacity-0 scale-110'
          } ${isActive ? 'scale-105' : 'scale-100 group-hover:scale-105'}`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent transition-all duration-700 flex flex-col justify-end p-10 z-20 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent mb-2">
              Resultado Real
            </span>
            <h3 className="text-2xl font-serif text-white">
              {img.title}
            </h3>
          </motion.div>
        </div>
      </div>
    </FadeIn>
  );
};
