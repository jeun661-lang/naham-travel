'use client';

import { useState } from 'react';
import { Product } from '@/data/products';

interface BookingFormProps {
  product: Product;
  onBack: () => void;
}

export default function BookingForm({ product, onBack }: BookingFormProps) {
  const [type, setType] = useState<'individual' | 'group'>('individual');
  const [people, setPeople] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    churchName: '',
    pastorName: '',
    requests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="products" className="py-24 bg-brown-dark">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-brown-medium rounded-lg p-6 sm:p-10 border border-gold/20">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">🕊</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-gold mb-3 sm:mb-4">순례 신청이 완료되었습니다</h2>
            <p className="text-cream-dark leading-relaxed mb-6">
              소중한 신앙 여정에 함께하게 되어 감사합니다.<br />
              담당자가 영업일 기준 1~2일 이내에 연락드리겠습니다.
            </p>
            <blockquote className="border-l-4 border-gold pl-4 text-left mb-8">
              <p className="font-serif italic text-cream text-sm leading-relaxed">
                &ldquo;여호와가 너의 출입에 지금부터 영원까지 지키시리로다&rdquo;
              </p>
              <cite className="text-gold/80 text-xs not-italic">— 시편 121:8</cite>
            </blockquote>
            <button
              onClick={onBack}
              className="bg-gold hover:bg-gold-light text-brown-dark px-8 py-3 rounded-sm font-semibold transition-all cursor-pointer"
            >
              상품으로 돌아가기
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 bg-brown-dark">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-cream-dark hover:text-gold transition-colors mb-8 cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm">상품 상세로 돌아가기</span>
        </button>

        <h2 className="font-serif text-2xl sm:text-3xl text-cream mb-2">순례 신청</h2>
        <p className="text-cream-dark mb-8">
          <span className="text-gold">{product.name}</span> · {product.duration}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Type Toggle */}
          <div>
            <label className="text-cream text-sm font-medium block mb-3">순례 유형</label>
            <div className="flex rounded-sm overflow-hidden border border-gold/20">
              <button
                type="button"
                onClick={() => setType('individual')}
                className={`flex-1 py-3 text-sm font-medium transition-all cursor-pointer ${
                  type === 'individual'
                    ? 'bg-gold text-brown-dark'
                    : 'bg-brown-medium text-cream-dark hover:text-gold'
                }`}
              >
                개인 / 가족
              </button>
              <button
                type="button"
                onClick={() => setType('group')}
                className={`flex-1 py-3 text-sm font-medium transition-all cursor-pointer ${
                  type === 'group'
                    ? 'bg-gold text-brown-dark'
                    : 'bg-brown-medium text-cream-dark hover:text-gold'
                }`}
              >
                교회 단체
              </button>
            </div>
          </div>

          {/* Church Fields */}
          {type === 'group' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
              <div>
                <label className="text-cream text-sm font-medium block mb-2">교회명</label>
                <input
                  type="text"
                  name="churchName"
                  value={form.churchName}
                  onChange={handleChange}
                  required
                  placeholder="소속 교회명을 입력해주세요"
                  className="w-full bg-brown-light/50 border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-cream text-sm font-medium block mb-2">담임목사님 성함</label>
                <input
                  type="text"
                  name="pastorName"
                  value={form.pastorName}
                  onChange={handleChange}
                  required
                  placeholder="담임목사님 성함을 입력해주세요"
                  className="w-full bg-brown-light/50 border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>
          )}

          {/* Common Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-cream text-sm font-medium block mb-2">이름</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="성함을 입력해주세요"
                className="w-full bg-brown-light/50 border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-cream text-sm font-medium block mb-2">연락처</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="010-0000-0000"
                className="w-full bg-brown-light/50 border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-cream text-sm font-medium block mb-2">이메일</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="이메일을 입력해주세요"
              className="w-full bg-brown-light/50 border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          {/* People Count */}
          <div>
            <label className="text-cream text-sm font-medium block mb-2">인원수</label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPeople(Math.max(1, people - 1))}
                className="w-10 h-10 bg-brown-light border border-gold/10 rounded-sm text-cream hover:border-gold/30 transition-colors flex items-center justify-center cursor-pointer"
              >
                −
              </button>
              <span className="text-cream text-xl font-bold w-10 text-center">{people}</span>
              <button
                type="button"
                onClick={() => setPeople(Math.min(50, people + 1))}
                className="w-10 h-10 bg-brown-light border border-gold/10 rounded-sm text-cream hover:border-gold/30 transition-colors flex items-center justify-center cursor-pointer"
              >
                +
              </button>
              <span className="text-cream-dark text-sm">명 (최대 50명)</span>
            </div>
          </div>

          {/* Requests */}
          <div>
            <label className="text-cream text-sm font-medium block mb-2">요청사항 / 기도제목</label>
            <textarea
              name="requests"
              value={form.requests}
              onChange={handleChange}
              rows={4}
              placeholder="특별한 요청사항이나 기도제목이 있으시면 나눠주세요"
              className="w-full bg-brown-light/50 border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
            />
          </div>

          {/* Info */}
          <div className="bg-brown-medium rounded-lg p-6 border border-gold/10">
            <p className="text-cream-dark text-sm leading-relaxed">
              세부 일정과 비용은 신청 후 담당자가 안내해 드립니다.
              인원 및 일정에 따라 맞춤 견적을 준비해 드리겠습니다.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-light text-brown-dark py-4 rounded-sm font-semibold text-lg transition-all hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
          >
            순례 신청하기
          </button>

          <p className="text-cream-dark/50 text-xs text-center">
            신청 후 담당자가 연락드려 세부 일정을 안내해 드립니다
          </p>
        </form>
      </div>
    </section>
  );
}
