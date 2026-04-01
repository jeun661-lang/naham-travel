'use client';

import { useState, useEffect, useRef } from 'react';

const inquiryTypes = ['교회 단체 상담', '개인/가족 순례 상담', '맞춤 일정 상담', '기타 문의'];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: '',
    message: '',
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-brown-dark">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.2em] uppercase">Contact Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream mt-3 mb-4 font-bold">
            함께 걸을 여정을 준비합니다
          </h2>
          <p className="text-cream-dark/80 max-w-xl mx-auto leading-relaxed">
            궁금하신 점이 있으시면 편하게 문의해주세요.
            성지순례 전문 상담사가 은혜로운 여정을 도와드립니다
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-brown-medium rounded-lg p-10 border border-gold/20 text-center">
                <div className="text-4xl mb-4">🕊</div>
                <h3 className="font-serif text-2xl text-gold mb-3">문의가 접수되었습니다</h3>
                <p className="text-cream-dark leading-relaxed mb-6">
                  소중한 문의에 감사드립니다.<br />
                  담당 상담사가 빠른 시일 내에 연락드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', phone: '', type: '', message: '' });
                  }}
                  className="text-gold hover:text-gold-light text-sm underline underline-offset-4 cursor-pointer"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      className="w-full bg-brown-medium border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors"
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
                      className="w-full bg-brown-medium border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-cream text-sm font-medium block mb-2">문의 유형</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="w-full bg-brown-medium border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-cream-dark/40">
                      문의 유형을 선택해주세요
                    </option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t} className="bg-brown-dark text-cream">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-cream text-sm font-medium block mb-2">문의 내용</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="궁금하신 점을 자유롭게 남겨주세요"
                    className="w-full bg-brown-medium border border-gold/10 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream-dark/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-brown-dark py-4 rounded-sm font-semibold transition-all hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
                >
                  문의하기
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brown-medium rounded-lg p-6 border border-gold/10">
              <h3 className="text-gold font-serif text-lg mb-4">연락처</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">☎</span>
                  <div>
                    <span className="text-cream text-sm block font-medium">전화 상담</span>
                    <span className="text-cream-dark text-sm">010-2355-9595</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">✉</span>
                  <div>
                    <span className="text-cream text-sm block font-medium">이메일</span>
                    <span className="text-cream-dark text-sm">naham0928@naver.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brown-medium rounded-lg p-6 border border-gold/10">
              <h3 className="text-gold font-serif text-lg mb-4">영업시간</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-cream-dark">평일</span>
                  <span className="text-cream">09:00 - 21:00</span>
                </div>
              </div>
            </div>

            <div className="bg-brown-medium rounded-lg p-6 border border-gold/10">
              <h3 className="text-gold font-serif text-lg mb-3">찾아오시는 길</h3>
              <p className="text-cream-dark text-sm leading-relaxed">
                대구광역시 남구 신촌길 101<br />
                2층
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
