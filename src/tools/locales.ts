export async function getLocales(locale: string, d_language: string = 'en') {
  try {
    console.log(locale, 'locale');
    const res = (await import(`@/locales/${locale}/index.ts`)).default;
    return res;
  } catch (error) {
    // 加载失败时使用英文作为后备语言
    const res = (await import(`@/locales/${d_language}/index.ts`)).default;
    return res;
  }
}
