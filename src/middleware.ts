import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { languages, defaultLanguage } from '@/config/i18n';

export function middleware(request: NextRequest) {
  // Get the language from the cookie
  const cookie = request.cookies.get('NEXT_LOCALE');
  const language = cookie?.value || defaultLanguage;

  // Create a response
  const response = NextResponse.next();

  // If no language cookie exists, set it to default
  if (!cookie) {
    response.cookies.set('NEXT_LOCALE', defaultLanguage, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  return response;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
