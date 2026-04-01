export interface Product {
  id: number;
  name: string;
  region: string;
  regionFilter: string;
  duration: string;
  price: number;
  originalPrice?: number;
  tag?: string;
  departureDate: string;
  remainingSeats: number;
  verse: string;
  verseSource: string;
  highlights: string[];
  image: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: '이스라엘 성지순례',
    region: '이스라엘',
    regionFilter: '이스라엘',
    duration: '10일 8박',
    price: 4890000,
    originalPrice: 5290000,
    tag: 'BEST',
    departureDate: '2026.05.12',
    remainingSeats: 8,
    verse: '네 발로 밟는 곳이 네 땅이 되리라',
    verseSource: '신명기 11:24',
    highlights: [
      '예루살렘 구시가지 & 통곡의 벽',
      '갈릴리 호수 유람선 예배',
      '겟세마네 동산 묵상',
      '베들레헴 탄생교회',
      '감람산 일출 기도',
    ],
    image: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=800&h=500&fit=crop',
    description: '예수님의 탄생부터 부활까지, 성경의 모든 이야기가 살아 숨 쉬는 이스라엘 땅을 걸으며 믿음을 새롭게 하는 여정입니다.',
  },
  {
    id: 2,
    name: '터키 바울의 선교여행',
    region: '터키',
    regionFilter: '터키',
    duration: '9일 7박',
    price: 3990000,
    originalPrice: 4390000,
    tag: 'NEW',
    departureDate: '2026.06.03',
    remainingSeats: 12,
    verse: '온 세상에 다니며 복음을 전파하라',
    verseSource: '마가복음 16:15',
    highlights: [
      '에베소 고대 유적 탐방',
      '갑바도기아 초대교회 동굴',
      '안디옥 최초 교회 터',
      '소아시아 일곱 교회',
      '파묵칼레 목화석',
    ],
    image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=800&h=500&fit=crop',
    description: '사도 바울이 복음을 전하며 걸었던 터키 땅, 소아시아 일곱 교회의 현장에서 초대교회의 열정을 만납니다.',
  },
  {
    id: 3,
    name: '그리스 바울의 발자취',
    region: '그리스',
    regionFilter: '그리스',
    duration: '8일 6박',
    price: 4290000,
    departureDate: '2026.07.10',
    remainingSeats: 15,
    verse: '이 성 안에 내 백성이 많다',
    verseSource: '사도행전 18:10',
    highlights: [
      '빌립보 리디아 강가 세례터',
      '데살로니가 바울의 회당',
      '아테네 아레오바고 언덕',
      '고린도 비아 레크타',
      '메테오라 수도원',
    ],
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&h=500&fit=crop',
    description: '바울 사도의 2차, 3차 전도여행의 발자취를 따라 그리스의 아름다운 땅에서 복음의 능력을 체험합니다.',
  },
  {
    id: 4,
    name: '유럽 종교개혁 투어',
    region: '유럽 (이탈리아·독일·스위스)',
    regionFilter: '유럽',
    duration: '11일 9박',
    price: 5490000,
    originalPrice: 5990000,
    tag: 'PREMIUM',
    departureDate: '2026.09.15',
    remainingSeats: 6,
    verse: '의인은 믿음으로 말미암아 살리라',
    verseSource: '로마서 1:17',
    highlights: [
      '로마 카타콤 초대교회',
      '바티칸 성 베드로 대성당',
      '비텐베르크 루터 95개조',
      '제네바 칼뱅 기념관',
      '취리히 츠빙글리 교회',
    ],
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=500&fit=crop',
    description: '루터, 칼뱅, 츠빙글리의 종교개혁 현장을 순례하며, 오직 믿음·오직 은혜의 감동을 되새기는 특별한 여정입니다.',
  },
  {
    id: 5,
    name: '이스라엘·요르단 심화순례',
    region: '이스라엘·요르단',
    regionFilter: '이스라엘',
    duration: '12일 10박',
    price: 5890000,
    tag: 'PREMIUM',
    departureDate: '2026.10.06',
    remainingSeats: 10,
    verse: '여호와를 경외하는 것이 지혜의 근본',
    verseSource: '잠언 9:10',
    highlights: [
      '사해 사본 쿰란',
      '마사다 요새 일출',
      '요르단 페트라·느보산',
      '여리고 시험산',
      '나사렛 수태고지 교회',
    ],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop',
    description: '이스라엘과 요르단을 아우르는 깊이 있는 순례로, 출애굽의 역사와 예수님의 사역 현장을 더욱 깊이 만납니다.',
  },
  {
    id: 6,
    name: '터키·그리스 연합순례',
    region: '터키·그리스',
    regionFilter: '터키',
    duration: '14일 12박',
    price: 6390000,
    originalPrice: 6990000,
    tag: 'SALE',
    departureDate: '2026.08.20',
    remainingSeats: 5,
    verse: '믿음의 선한 싸움을 싸우라',
    verseSource: '디모데전서 6:12',
    highlights: [
      '바울의 1·2·3차 전도여행 루트',
      '에베소·빌립보·고린도',
      '밧모섬 요한 계시록 동굴',
      '이스탄불 성 소피아',
      '카파도키아 열기구',
    ],
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=500&fit=crop',
    description: '바울 사도의 전도여행 전체 루트를 터키와 그리스를 넘나들며 완주하는, 가장 풍성한 순례 여정입니다.',
  },
];

export const reviews = [
  {
    id: 1,
    name: '김은혜',
    title: '권사',
    church: '새빛교회',
    product: '이스라엘 성지순례',
    rating: 5,
    text: '갈릴리 호수에서 드린 새벽 예배는 평생 잊지 못할 은혜의 시간이었습니다. 성경 말씀이 눈앞에서 살아 움직이는 듯한 감동을 받았습니다. 나함여행사의 세심한 배려 덕분에 안전하고 편안한 여정이었습니다.',
  },
  {
    id: 2,
    name: '박성민',
    title: '목사',
    church: '은혜감리교회',
    product: '터키 바울의 선교여행',
    rating: 5,
    text: '교회 성도님 30분과 함께한 터키 순례는 우리 교회 역사에 남을 귀한 은혜였습니다. 바울 사도의 선교 열정을 현장에서 느끼며 다시 한번 사명감에 불타올랐습니다.',
  },
  {
    id: 3,
    name: '이미영',
    title: '집사',
    church: '소망장로교회',
    product: '그리스 바울의 발자취',
    rating: 5,
    text: '아레오바고 언덕에서 사도행전 17장을 읽었을 때, 눈물이 멈추지 않았습니다. 책으로만 읽던 말씀이 현실이 되는 놀라운 경험이었습니다. 감사합니다.',
  },
  {
    id: 4,
    name: '정태호',
    title: '장로',
    church: '열린문교회',
    product: '유럽 종교개혁 투어',
    rating: 5,
    text: '비텐베르크 성문 앞에서 루터의 95개조 반박문을 직접 보았을 때의 감동은 말로 다 할 수 없었습니다. 개혁자들의 믿음의 용기에 깊이 도전받는 시간이었습니다.',
  },
  {
    id: 5,
    name: '한수진',
    title: '권사',
    church: '평강제일교회',
    product: '이스라엘·요르단 심화순례',
    rating: 5,
    text: '마사다 요새에서 맞이한 일출은 하나님의 위대하심을 온몸으로 느끼게 해주었습니다. 12일 동안 매일매일이 은혜요 감사였습니다. 다음에는 남편과 함께 다시 오고 싶습니다.',
  },
  {
    id: 6,
    name: '최준혁',
    title: '전도사',
    church: '빛과소금교회',
    product: '터키·그리스 연합순례',
    rating: 5,
    text: '밧모섬에서 요한계시록 동굴에 앉아 묵상했던 시간, 에베소 도서관 앞에서 초대교회 성도들을 떠올리며 기도했던 시간이 저의 사역에 새로운 불씨가 되었습니다.',
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ko-KR').format(price);
}
