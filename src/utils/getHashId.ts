import { ReactNode } from 'react';

export const getHashId = (title: ReactNode) => {
  if (typeof title === 'string') {
    return title
      .replace('#', '')
      .replace('/', '-')
      .replace(/[^\w\-\s]/g, '')
      .trim()
      .split(' ')
      .join('-')
      .toLocaleLowerCase();
  }
  return '';
};
