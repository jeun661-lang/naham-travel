'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (target: string) => {
    setIsMobileMenuOpen(false);

    if (target.startsWith('/')) {
      router.push(target);
      return;
    }

    if (target === 'hero' && pathname !== '/') {
      router.push('/');
      return;
    }

    if (pathname === '/') {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Store scroll target, navigate home, then scroll after load
      sessionStorage.setItem('scrollTo', target);
      router.push('/');
    }
  };

  // After navigating home, scroll to stored target
  useEffect(() => {
    if (pathname === '/') {
      const target = sessionStorage.getItem('scrollTo');
      if (target) {
        sessionStorage.removeItem('scrollTo');
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [pathname]);

  const menuItems = [
    { label: '홈', target: 'hero' },
    { label: '대표 소개', target: '/about' },
    { label: '순례 상품', target: 'products' },
    { label: '상담 신청', target: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || pathname !== '/'
          ? 'bg-brown-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => navigateTo('hero')} className="flex items-center gap-3 group cursor-pointer">
            <span className="text-gold text-3xl font-serif">✝</span>
            <div className="flex flex-col">
              <span className="text-cream font-serif text-xl font-bold tracking-wide group-hover:text-gold transition-colors">
                나함여행사
              </span>
              <span className="text-cream-dark text-[10px] tracking-[0.2em] uppercase">
                Naham Travel Agency
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => navigateTo(item.target)}
                className={`text-sm font-medium tracking-wide cursor-pointer transition-colors ${
                  item.target.startsWith('/') && pathname === item.target
                    ? 'text-gold'
                    : 'text-cream/80 hover:text-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateTo('contact')}
              className="bg-gold hover:bg-gold-light text-brown-dark px-5 py-2.5 rounded-sm text-sm font-semibold transition-all hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
            >
              상담 신청
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cream p-2 cursor-pointer"
            aria-label="메뉴"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-cream transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-cream transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-cream transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brown-dark/98 backdrop-blur-md border-t border-gold/10 px-4 py-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => navigateTo(item.target)}
              className={`block w-full text-left px-4 py-3 rounded transition-colors text-sm cursor-pointer ${
                item.target.startsWith('/') && pathname === item.target
                  ? 'text-gold bg-brown-medium/50'
                  : 'text-cream/80 hover:text-gold hover:bg-brown-medium/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigateTo('contact')}
            className="block w-full bg-gold hover:bg-gold-light text-brown-dark px-4 py-3 rounded-sm text-sm font-semibold text-center mt-2 cursor-pointer"
          >
            상담 신청
          </button>
        </div>
      </div>
    </nav>
  );
}
