import React from 'react';
import { FadeIn } from './FadeIn';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const MakeupComparison = () => {
  return (
    <div className="relative overflow-hidden pt-8 pb-12">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-ink/2 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative group">
                {/* Premium Glow */}
                <div className="absolute -inset-4 bg-brand-accent/5 rounded-[4rem] blur-3xl opacity-50" />
                
                <div className="relative bg-white p-3 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-brand-ink/5 overflow-hidden">
                  <div className="grid grid-cols-2 gap-2 rounded-[2.8rem] overflow-hidden bg-zinc-100">
                    <div className="relative aspect-[3/4] md:aspect-square overflow-hidden group/item">
                      <img 
                        src="https://drive.google.com/thumbnail?id=1G_ct03gTL1U5cdLpp8bv1L1b3Xw_ah96&sz=w1200" 
                        alt="Antes" 
                        className="w-full h-full object-cover grayscale-[0.2]"
                      />
                    </div>
                    <div className="relative aspect-[3/4] md:aspect-square overflow-hidden group/item">
                      <img 
                        src="https://drive.google.com/thumbnail?id=1zEUtLYrGjqq7z_ZoUmq4W_p4LCOWw_xM&sz=w1200" 
                        alt="Depois" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Aesthetic Detail - Removed as requested */}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
