import React from 'react';
import { FadeIn } from './FadeIn';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const ResultsSection = ({ standalone = true }: { standalone?: boolean }) => {
  const results = [
    {
      before: "https://drive.google.com/thumbnail?id=1Zp6XGc7WevW5LijizTwi-0Lab04jTwTL&sz=w1600",
      after: "https://drive.google.com/thumbnail?id=1-_APHvKi68xNb6xpMbjs06CiXueKcoQj&sz=w1600",
      title: "Resultado Real I",
      description: "Evolução visível na textura e coloração da pele após o protocolo personalizado de regeneração."
    },
    {
      before: "https://drive.google.com/thumbnail?id=1MZh1gC6Av3Gsa8o10Ho7pdzZIB1WaWIZ&sz=w1600",
      after: "https://drive.google.com/thumbnail?id=1SkG4tN6QPow1kP4neVvLqu0p1sJz_EpC&sz=w1600",
      title: "Resultado Real II",
      description: "Melhora significativa na aparência das estrias através da estimulação natural de colágeno."
    }
  ];

  const content = (
    <div className={`${standalone ? 'max-w-7xl mx-auto px-6' : ''}`}>
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-24">
        {results.map((result, i) => (
          <FadeIn key={i} delay={i * 0.2} direction="up" className="h-full">
            <BeforeAfterSlider 
              beforeImage={result.before}
              afterImage={result.after}
              title={result.title}
              description={result.description}
            />
          </FadeIn>
        ))}
      </div>

      <FadeIn direction="up" delay={0.6} className="text-center">
        <div className="max-w-3xl mx-auto p-10 rounded-[2rem] bg-brand-paper border border-brand-ink/5 border-dashed">
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-400 leading-relaxed">
            "As imagens apresentam resultados reais obtidos durante tratamentos estéticos. Os resultados podem variar conforme as características individuais de cada cliente e o protocolo indicado."
          </p>
        </div>
      </FadeIn>
    </div>
  );

  if (!standalone) return content;

  return (
    <section className="py-32 bg-white overflow-hidden">
      {content}
    </section>
  );
};
