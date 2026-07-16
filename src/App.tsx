import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChoose } from './components/WhyChoose';
import { ServiceItem } from './components/ServiceItem';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';
import { ResultsSection } from './components/ResultsSection';
import { FadeIn } from './components/FadeIn';
import { MakeupComparison } from './components/MakeupComparison';
import { MapSection } from './components/MapSection';
import { ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="bg-brand-paper selection:bg-brand-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <AboutSection />
        
        <WhyChoose />
        
        {/* Services Section */}
        <section id="servicos" className="py-32 bg-brand-paper">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-24">
              <FadeIn direction="up">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-6 block">
                  Experiência Premium
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-brand-ink mb-6">
                  Nossos <span className="italic">Serviços</span>
                </h2>
              </FadeIn>
              <div className="w-16 h-[1px] bg-brand-accent/30" />
            </div>

            <div className="space-y-32">
              <div className="space-y-4">
                <ServiceItem 
                  name="Maquiagem"
                  headline="Beleza que realça sua essência com sofisticação e durabilidade."
                  description="A maquiagem vai além da estética — é sobre realçar sua beleza natural com sofisticação e durabilidade. Trabalho com a técnica de pele blindada, que garante uma pele resistente ao calor, suor e oleosidade, mantendo o acabamento impecável por muito mais tempo. Cada produção é personalizada de acordo com seu estilo e ocasião, valorizando seus traços com leveza, elegância e um resultado que permanece perfeito do início ao fim."
                  imageUrl="https://lh3.googleusercontent.com/d/1VrNVKXXIrDPWCrktdBh7bzT5Of1qbeFr"
                  videoUrl="https://www.youtube.com/embed/Jo3fP8fRnMg?autoplay=1&mute=1&controls=0&loop=1&playlist=Jo3fP8fRnMg&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&disablekb=1"
                  reverse={false}
                  showCTA={false}
                />

                <div className="lg:-mt-24">
                  <MakeupComparison />
                  
                  <div className="container mx-auto px-6 mt-8">
                    <div className="grid lg:grid-cols-12">
                      <div className="lg:col-span-5">
                        <FadeIn direction="up">
                          <a 
                            href="https://wa.me/5531971602539" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center gap-3 bg-brand-ink text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-all shadow-xl hover:scale-105 active:scale-95 group"
                          >
                            Agendar Atendimento
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </FadeIn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ServiceItem 
                name="Tratamento de Estrias"
                headline="Regeneração e cuidado que devolvem sua confiança."
                description="O tratamento de estrias é realizado com técnicas avançadas, como o microagulhamento, que estimulam a produção natural de colágeno e promovem a regeneração da pele. O procedimento é personalizado de acordo com o tipo e estágio das estrias, buscando melhorar significativamente sua aparência, textura e coloração. Mais do que estética, é um cuidado que devolve a confiança e a autoestima."
                beforeAfterImages={{
                  before: "https://lh3.googleusercontent.com/d/1Zp6XGc7WevW5LijizTwi-0Lab04jTwTL",
                  after: "https://lh3.googleusercontent.com/d/1-_APHvKi68xNb6xpMbjs06CiXueKcoQj"
                }}
                reverse={true}
                showCTA={false}
              />

              <ResultsSection standalone={false} />

              <ServiceItem 
                name="Design de Sobrancelhas"
                headline="Harmonização e equilíbrio para valorizar o seu olhar."
                description="O design de sobrancelhas é feito de forma personalizada, respeitando o formato do rosto e suas características naturais. Através de técnicas precisas, busco harmonizar e valorizar o olhar, proporcionando um resultado natural e elegante. Cada atendimento é pensado para realçar sua expressão, trazendo mais definição e equilíbrio ao seu rosto."
                imageUrl="https://lh3.googleusercontent.com/d/1ieC_0dol8rTtELuWZnWqG50_0Yw9os-D"
                reverse={false}
              />
            </div>
          </div>
        </section>
        
        <Gallery />
        
        <Testimonials />
        
        <Offer />
        <MapSection />
      </main>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/5531971602539"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 group flex items-center justify-center cursor-pointer"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Crisp official WhatsApp SVG */}
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="relative z-10 transition-transform duration-300 group-hover:scale-105 w-7 h-7 md:w-8 md:h-8 shrink-0"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.455h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Premium Tooltip */}
        <span className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-ink px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-brand-ink/5">
          Agende pelo WhatsApp
        </span>
      </motion.a>
    </div>
  );
}

export default App;
