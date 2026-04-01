'use client';

import { useState } from 'react';
import { Product } from '@/data/products';
import BookingForm from './BookingForm';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [showBooking, setShowBooking] = useState(false);

  const tagColors: Record<string, string> = {
    BEST: 'bg-gold text-brown-dark',
    NEW: 'bg-emerald-600 text-white',
    PREMIUM: 'bg-amber-700 text-cream',
    SALE: 'bg-red-700 text-white',
  };

  const inclusions = [
    '왕복 항공권 (직항 또는 경유 1회)',
    '전 일정 특급 호텔 (2인 1실)',
    '전 일정 식사 포함 (호텔 조식 + 현지식)',
    '전용 관광버스 및 현지 이동',
    '한국어 성지순례 전문 가이드',
    '여행자 보험',
    '각 성지 입장료',
    '순례 가이드북 제공',
  ];

  if (showBooking) {
    return <BookingForm product={product} onBack={() => setShowBooking(false)} />;
  }

  return (
    <section id="products" className="py-24 bg-brown-dark">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-cream-dark hover:text-gold transition-colors mb-8 cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm">전체 상품 보기</span>
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden mb-8" style={{ backgroundColor: '#2a241d' }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              if (img.parentElement) {
                img.parentElement.style.background = 'linear-gradient(135deg, #2a241d, #3a3228)';
                const icon = document.createElement('div');
                icon.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;color:#c9a44a;font-size:80px';
                icon.textContent = '✝';
                img.parentElement.appendChild(icon);
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 to-transparent" />

          {product.tag && (
            <span
              className={`absolute top-4 left-4 px-4 py-1.5 text-sm font-bold rounded-sm ${tagColors[product.tag] || 'bg-gold text-brown-dark'}`}
            >
              {product.tag}
            </span>
          )}

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-sm text-cream-dark mb-2">
              <span>{product.region}</span>
              <span className="text-gold/40">|</span>
              <span>{product.duration}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-cream font-bold">{product.name}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bible Verse Block */}
            <blockquote className="border-l-4 border-gold pl-6 py-4 bg-brown-medium/50 rounded-r-lg">
              <p className="font-serif italic text-cream text-lg leading-relaxed">
                &ldquo;{product.verse}&rdquo;
              </p>
              <cite className="text-gold/80 text-sm not-italic mt-2 block">— {product.verseSource}</cite>
            </blockquote>

            {/* Description */}
            {product.description && (
              <p className="text-cream-dark leading-relaxed">{product.description}</p>
            )}

            {/* Highlights */}
            <div>
              <h3 className="text-gold font-serif text-xl mb-4">순례 하이라이트</h3>
              <ul className="space-y-3">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">✝</span>
                    <span className="text-cream-dark">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions */}
            <div>
              <h3 className="text-gold font-serif text-xl mb-4">포함 사항</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-cream-dark text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold flex-shrink-0">
                      <path
                        d="M13 4L6 12L3 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-brown-medium rounded-lg p-6 border border-gold/10 sticky top-24 space-y-6">
              {/* Price */}
              <div>
                <span className="text-gold text-2xl font-bold">상담 문의</span>
                <span className="text-cream-dark/60 text-xs block mt-1">가격은 상담 시 안내드립니다</span>
              </div>

              {/* Info */}
              <div className="space-y-3 text-sm border-t border-gold/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-cream-dark/70">출발일</span>
                  <span className="text-cream">일정 준비중</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream-dark/70">일정</span>
                  <span className="text-cream">{product.duration}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowBooking(true)}
                className="w-full bg-gold hover:bg-gold-light text-brown-dark py-4 rounded-sm font-semibold transition-all hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
              >
                이 순례에 함께하기
              </button>

              <p className="text-cream-dark/50 text-xs text-center leading-relaxed">
                순례 문의 및 상담<br />
                ☎ 02-1234-5678
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
