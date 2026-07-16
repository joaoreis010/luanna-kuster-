import React, { useState, useRef } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  category?: string;
  title?: string;
  description?: string;
  showDetails?: boolean;
  imagePosition?: string;
}

export const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  category = "Tratamento de Estrias",
  title = "Resultado Real",
  description = "Evolução visível na textura e coloração da pele após o protocolo personalizado.",
  showDetails = true,
  imagePosition = "center 15%"
 }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="group flex flex-col h-full select-none">
      <div 
        ref={containerRef}
        className={showDetails 
          ? "relative aspect-[4/3] rounded-[2rem] overflow-hidden select-none shadow-2xl bg-brand-paper"
          : "relative flex-1 rounded-[2rem] overflow-hidden select-none bg-brand-paper"
        }
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt="Depois" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: imagePosition }}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Before Image (Clip) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt="Antes" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ objectPosition: imagePosition }}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Slider Line & Handle */}
        <div 
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-white">
            <div className="flex gap-1.5">
              <div className={`w-1 h-3 rounded-full transition-colors duration-300 ${isDragging ? 'bg-brand-accent' : 'bg-brand-accent/30'}`} />
              <div className={`w-1 h-3 rounded-full transition-colors duration-300 ${isDragging ? 'bg-brand-accent' : 'bg-brand-accent/30'}`} />
            </div>
          </div>
        </div>

        {/* Invisible Input Range for 100% robust sliding on both desktop and mobile */}
        <input 
          type="range"
          min="0"
          max="100"
          step="0.01"
          value={sliderPosition}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 touch-none"
          aria-label="Controle de antes e depois"
        />
      </div>

      {showDetails && (
        <div className="mt-8 px-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent mb-2 block">
            {category}
          </span>
          <h3 className="text-xl font-serif text-brand-ink mb-3">{title}</h3>
          <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
            {description}
          </p>
          <a 
            href="https://wa.me/5531971602539" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-brand-ink hover:text-brand-accent transition-colors group/btn"
          >
            Quero saber mais
            <div className="w-6 h-[1px] bg-brand-ink/20 group-hover/btn:w-10 group-hover/btn:bg-brand-accent transition-all duration-500" />
          </a>
        </div>
      )}
    </div>
  );
};
