import { CV_DATA as es } from './cv-data-es';
import { CV_DATA_EN as en } from './cv-data-en';

const dictionaries = {
  en,
  es,
};

export const getDictionary = (locale: string) => {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.es;
};
