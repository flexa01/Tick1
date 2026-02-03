import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// GÜNLÜK 10.000 GÖSTERİM LİMİTİ
const LIMIT = 10000; 
let count = 0;

export function middleware(request: NextRequest) {
  if (count >= LIMIT) {
    // Limit dolunca site "Sınır aşıldı" mesajı verir ve Vercel faturası artmaz
    return new NextResponse('Daily limit reached.', { status: 429 });
  }
  count++;
  return NextResponse.next();
}

// Tüm sayfaları korumaya alıyoruz
export const config = {
  matcher: '/:path*',
}
