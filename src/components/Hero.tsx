'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0" style={{ backgroundColor: '#2a241d' }}>
        <img
          src="https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=1920&h=1080&fit=crop"
          alt="예루살렘 전경"
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.display = 'none';
            if (img.parentElement) {
              img.parentElement.style.background = 'linear-gradient(135deg, #2a241d, #3a3228)';
              const icon = document.createElement('div');
              icon.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;color:#c9a44a;font-size:120px;opacity:0.3';
              icon.textContent = '✝';
              img.parentElement.appendChild(icon);
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/60 to-brown-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-gold/60" />
            <span className="text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">
              개신교 성지순례 전문
            </span>
            <span className="w-8 sm:w-12 h-px bg-gold/60" />
          </div>

          {/* Main Copy */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6 sm:mb-8 font-bold">
            말씀이 살아 숨쉬는
            <br />
            <span className="text-gold">그 땅</span>을 함께 걷겠습니다
          </h1>

          {/* Bible Verse */}
          <blockquote className="mb-6 sm:mb-8">
            <p className="font-serif italic text-cream-dark text-base sm:text-xl leading-relaxed mb-2">
              &ldquo;내가 너와 함께 하여 네가 어디로 가든지 너를 지키며&rdquo;
            </p>
            <cite className="text-gold/80 text-sm not-italic tracking-wide">
              — 창세기 28:15
            </cite>
          </blockquote>

          {/* Description */}
          <p className="text-cream-dark/90 text-sm sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            나함여행사는 지난 20여 년간 성도님들의 소중한 신앙 여정을 동행해 왔습니다.
            예수님의 발자취를 따라, 사도 바울의 선교 길을 걸으며,
            성경 속 은혜의 현장으로 여러분을 안내합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <button
              onClick={() => scrollTo('products')}
              className="bg-gold hover:bg-gold-light text-brown-dark px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-sm sm:text-base font-semibold transition-all hover:shadow-lg hover:shadow-gold/20 w-full sm:w-auto cursor-pointer"
            >
              순례 일정 보기
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="border border-cream/30 hover:border-gold text-cream hover:text-gold px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-sm sm:text-base font-medium transition-all w-full sm:w-auto cursor-pointer"
            >
              교회 단체 상담
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
