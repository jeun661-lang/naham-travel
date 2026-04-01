'use client';

import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const tagColors: Record<string, string> = {
    BEST: 'bg-gold text-brown-dark',
    NEW: 'bg-emerald-600 text-white',
    PREMIUM: 'bg-amber-700 text-cream',
    SALE: 'bg-red-700 text-white',
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="group bg-brown-medium rounded-lg overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden" style={{ backgroundColor: '#2a241d' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.display = 'none';
            if (img.parentElement) {
              img.parentElement.style.background = 'linear-gradient(135deg, #2a241d, #3a3228)';
              const icon = document.createElement('div');
              icon.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;color:#c9a44a;font-size:48px';
              icon.textContent = '✝';
              img.parentElement.appendChild(icon);
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 to-transparent" />

        {/* Tag */}
        {product.tag && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-sm ${tagColors[product.tag] || 'bg-gold text-brown-dark'}`}
          >
            {product.tag}
          </span>
        )}

        {/* Remaining Seats - hidden until confirmed */}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Region & Duration */}
        <div className="flex items-center gap-2 text-xs text-cream-dark mb-2">
          <span>{product.region}</span>
          <span className="text-gold/40">|</span>
          <span>{product.duration}</span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-cream group-hover:text-gold transition-colors mb-3">
          {product.name}
        </h3>

        {/* Bible Verse */}
        <p className="text-cream-dark/70 text-xs italic font-serif mb-4 leading-relaxed">
          &ldquo;{product.verse}&rdquo;
          <span className="block text-gold/60 mt-1 not-italic">— {product.verseSource}</span>
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.highlights.slice(0, 3).map((h, i) => (
            <span
              key={i}
              className="text-[10px] bg-brown-light/50 text-cream-dark px-2 py-0.5 rounded"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Price & Departure */}
        <div className="flex items-end justify-between border-t border-gold/10 pt-4">
          <div>
            <span className="text-gold text-lg font-bold">상담 문의</span>
          </div>
          <div className="text-right">
            <span className="text-cream-dark/60 text-xs block">출발</span>
            <span className="text-cream text-sm">일정 준비중</span>
          </div>
        </div>
      </div>
    </div>
  );
}
