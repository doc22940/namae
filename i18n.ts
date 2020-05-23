import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  defaultNS: 'translation',
  localePath: 'public/locales',
  otherLanguages: ['ja'],
});

export const {appWithTranslation, useTranslation} = NextI18NextInstance;

export default NextI18NextInstance;
