export default function Footer() {
  return (
    <footer className="bg-brown-medium border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold text-2xl font-serif">✝</span>
              <div>
                <span className="text-cream font-serif text-lg font-bold block">나함여행사</span>
                <span className="text-cream-dark text-xs tracking-[0.15em]">Naham Travel Agency</span>
              </div>
            </div>
            <p className="text-cream-dark/70 text-sm leading-relaxed">
              개신교 성지순례 전문 여행사<br />
              믿음의 발자취를 따라 은혜의 여정을 함께합니다
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-medium text-sm mb-4">연락처</h4>
            <div className="space-y-2 text-cream-dark/70 text-sm">
              <p>☎ 02-1234-5678</p>
              <p>✉ info@nahamtravel.com</p>
              <p>💬 카카오톡 @나함여행사</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold font-medium text-sm mb-4">영업시간</h4>
            <div className="space-y-2 text-cream-dark/70 text-sm">
              <p>평일 09:00 - 18:00</p>
              <p>토요일 10:00 - 15:00</p>
              <p>주일 / 공휴일 휴무</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream-dark/50 text-xs">
            <div className="text-center md:text-left">
              <p>사업자등록번호: 123-45-67890 | 관광사업등록번호: 제2005-000123호</p>
              <p className="mt-1">대표: 나함 | 서울특별시 종로구 종로 1길 50 나함빌딩 3층</p>
            </div>
            <p>&copy; {new Date().getFullYear()} 나함여행사. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
