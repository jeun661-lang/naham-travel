'use client';

import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { number: 100, suffix: '회+', label: '성지순례 인솔' },
  { number: 20, suffix: '년+', label: '성지순례 경력' },
  { number: 15, suffix: '개국+', label: '순례 인솔' },
];

const timeline = [
  { year: '0000', title: 'OO신학대학교 졸업', desc: '신학의 기초를 세우다' },
  { year: '0000', title: 'OO신학대학원 졸업', desc: '더 깊은 말씀의 세계로' },
  { year: '0000', title: '목사 안수', desc: '하나님의 부르심에 응답하다' },
  { year: '0000', title: '나함여행사 설립', desc: '성도님들과 함께 성지를 걷는 사역을 시작하다' },
  { year: '현재', title: 'OO교회 담임', desc: '목회와 성지순례 사역을 함께 감당하다' },
];

function CountUp({ target, duration = 2000, started }: { target: number; duration?: number; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, started]);

  return <>{started ? count.toLocaleString() : '0'}</>;
}

export default function AboutPage() {
  const [statsStarted, setStatsStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const navigateHome = (section?: string) => {
    if (section) {
      sessionStorage.setItem('scrollTo', section);
    }
    window.location.href = '/';
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Profile Section */}
        <section className="py-16 sm:py-24 bg-brown-dark">
          <div
            className={`max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Profile Photo Placeholder */}
            <div className="mx-auto w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-gold shadow-lg shadow-gold/20 flex items-center justify-center mb-6 sm:mb-8 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #c9a44a, #a8873a)' }}
            >
              <span className="text-brown-dark text-5xl sm:text-6xl">✝</span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl sm:text-5xl text-cream font-bold mb-2 sm:mb-3">
              조용규 <span className="text-gold">목사</span>
            </h1>
            <p className="text-cream-dark text-base sm:text-lg mb-6 sm:mb-8">
              나함여행사 대표 · 성지순례 전문 인솔자
            </p>

            {/* Bible Verse */}
            <blockquote className="max-w-xl mx-auto border-l-4 border-gold pl-4 sm:pl-6 text-left">
              <p className="font-serif italic text-cream text-base sm:text-lg leading-relaxed">
                &ldquo;내가 선한 목자라 선한 목자는 양들을 위하여 목숨을 버리거니와&rdquo;
              </p>
              <cite className="text-gold/80 text-sm not-italic mt-2 block">— 요한복음 10:11</cite>
            </blockquote>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 sm:py-24 bg-brown-medium">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-gold text-sm tracking-[0.2em] uppercase">Journey of Ministry</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream mt-3 mb-4 font-bold">
                사역의 여정
              </h2>
              <p className="text-cream-dark/80 max-w-lg mx-auto leading-relaxed">
                하나님의 인도하심 가운데 신학을 공부하고,
                목회와 성지순례 사역의 길을 걸어왔습니다
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30" />

              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-4 sm:gap-8 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    {/* Circle Point */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brown-dark border-2 border-gold flex items-center justify-center">
                      <span className="text-gold text-xs font-bold">{item.year}</span>
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <h3 className="text-cream font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-cream-dark/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-brown-dark border-y border-gold/10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold text-sm tracking-[0.2em] uppercase">Ministry Record</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream mt-3 font-bold">
                성지와 함께한 시간
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${
                    statsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl sm:text-4xl md:text-5xl font-bold text-gold font-serif mb-2">
                    <CountUp target={stat.number} started={statsStarted} />
                    <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
                  </div>
                  <div className="text-cream-dark text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Greeting Letter Section */}
        <section className="py-24 bg-brown-medium">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold text-sm tracking-[0.2em] uppercase">Greeting</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream mt-3 font-bold">
                대표 인사말
              </h2>
            </div>

            <div className="bg-brown-dark/50 rounded-lg p-5 sm:p-12 border border-gold/15">
              <blockquote className="border-l-4 border-gold pl-4 sm:pl-8">
                <div className="font-serif text-cream/90 text-sm sm:text-lg leading-[1.8] sm:leading-[2] space-y-4 sm:space-y-6">
                  <p>사랑하는 성도님들께,</p>

                  <p>
                    저는 처음 성지를 밟았던 그날의 감동을 아직도 생생히 기억합니다.
                    예루살렘 성벽 위로 떠오르는 태양을 바라보며, 성경 속 이야기가
                    더 이상 먼 옛날의 기록이 아닌, 지금 이 순간에도 살아 역사하시는
                    하나님의 이야기임을 깨달았습니다.
                  </p>

                  <p>
                    그 은혜를 더 많은 분들과 나누고 싶은 마음으로 나함여행사를 시작했습니다.
                    단순한 관광이 아닌, 말씀 위에 서서 기도하고 찬양하며 함께 은혜를 나누는
                    진정한 순례가 되도록 한 분 한 분의 여정을 소중히 준비하고 있습니다.
                  </p>

                  <p>
                    성경의 땅에서 여러분과 함께 걸을 수 있기를 기도합니다.
                  </p>

                  <p>감사합니다.</p>
                </div>

                {/* Signature */}
                <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-gold/20">
                  <p className="text-gold font-serif text-base sm:text-lg">나함여행사 대표</p>
                  <p className="text-cream font-serif text-lg sm:text-xl font-bold mt-1">조용규 목사</p>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brown-dark border-t border-gold/10">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="font-serif text-cream-dark text-lg italic mb-8">
              &ldquo;믿음의 발자취를 따라, 은혜의 여정을 함께 걸어가겠습니다&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigateHome('products')}
                className="bg-gold hover:bg-gold-light text-brown-dark px-8 py-4 rounded-sm text-base font-semibold transition-all hover:shadow-lg hover:shadow-gold/20 w-full sm:w-auto cursor-pointer"
              >
                순례 일정 보기
              </button>
              <button
                onClick={() => navigateHome('contact')}
                className="border border-cream/30 hover:border-gold text-cream hover:text-gold px-8 py-4 rounded-sm text-base font-medium transition-all w-full sm:w-auto cursor-pointer"
              >
                상담 신청
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
