import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { languages, d_language } from './i18n/config.mjs';
// import { find } from './config/router';
// import { login } from './config/router/home';

const IS_LOGIN_AUTH = false;

const nextIntlMiddleware = createMiddleware({
  locales: languages,
  defaultLocale: d_language,
  localePrefix: 'never',
});

export async function middleware(request: NextRequest) {
  // 保留原有的 cookie 和语言检测逻辑
  let locale = request.cookies.get('NEXT_LOCALE')?.value;
  const { pathname } = request.nextUrl;
  //   const route = find(pathname);

  //   if (route && route.auth && IS_LOGIN_AUTH) {
  //     return NextResponse.redirect(new URL(login.href!, request.url));
  //   }

  if (!locale) {
    const acceptLanguage = request.headers.get('accept-language');
    const browserLang =
      acceptLanguage?.split(',')[0]?.split('-')[0] || d_language;
    locale = languages.includes(browserLang) ? browserLang : d_language;
  }

  // 先处理语言
  const response = await nextIntlMiddleware(request);

  // 添加原有的头部设置
  response.headers.set('x-locale', locale!);
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  // 设置 Cookie
  if (!request.cookies.get('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', locale!, {
      maxAge: 365 * 24 * 3600,
    });
  }

  return response;
}

export const config = {
  matcher: ['/api/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
