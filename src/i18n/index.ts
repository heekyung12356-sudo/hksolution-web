import { ko } from './ko';
import { en } from './en';
import { ja } from './ja';
import type { Dict } from './ko';

export type Locale = 'ko' | 'en' | 'ja';
export type { Dict };

export const dictionaries: Record<Locale, Dict> = { ko, en, ja };
export const locales: Locale[] = ['ko', 'en', 'ja'];
export const defaultLocale: Locale = 'ko';

export function getDict(locale: string): Dict {
  return dictionaries[locale as Locale] || dictionaries[defaultLocale];
}
