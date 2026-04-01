import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '나함여행사 | 개신교 성지순례 전문',
  description:
    '나함여행사는 개신교 성지순례 전문 여행사입니다. 이스라엘, 터키, 그리스, 유럽 종교개혁 투어까지 — 믿음의 발자취를 따라 은혜의 여정을 함께합니다.',
  keywords: '성지순례, 개신교, 이스라엘, 터키, 그리스, 유럽, 종교개혁, 여행사, 교회 단체',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
