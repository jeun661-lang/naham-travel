'use client';

import { useState, useEffect, useRef } from 'react';
import { products, Product } from '@/data/products';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';

const filters = ['전체', '이스라엘', '터키', '그리스', '유럽'];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('전체');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === '전체'
      ? products
      : products.filter((p) => p.regionFilter === activeFilter);

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return (
    <section id="products" ref={ref} className="py-16 sm:py-24 bg-brown-dark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase">Holy Land Pilgrimage</span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-cream mt-3 mb-3 sm:mb-4 font-bold">
            은혜의 발자취를 따라
          </h2>
          <p className="text-cream-dark/80 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            예수님과 사도들의 발자취가 남아 있는 성경의 현장에서,
            말씀이 눈앞에 펼쳐지는 감동을 경험하세요
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-gold text-brown-dark shadow-lg shadow-gold/20'
                  : 'bg-brown-medium text-cream-dark hover:text-gold border border-gold/10 hover:border-gold/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} onSelect={setSelectedProduct} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
