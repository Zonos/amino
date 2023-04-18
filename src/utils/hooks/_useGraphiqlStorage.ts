import { useEffect } from 'react';

import type { Storage } from '@graphiql/toolkit';
import kebabCase from 'lodash/kebabCase';

import { useCurrentSchema } from './useCurrentShema';

const whiteList = ['graphiql:theme', 'graphiql:shouldPersistHeaders'];

/** Suffixes localStorage keys with the current schema name */
export const useGraphiqlStorage = ({
  defaultSchema,
}: {
  defaultSchema: string;
}) => {
  const schemaToKebab = kebabCase(defaultSchema);

  const [schema] = useCurrentSchema(schemaToKebab);

  // Force initial light theme
  useEffect(() => {
    window.localStorage.setItem('graphiql:theme', 'light');
  }, []);

  const suffix = (key: string) => {
    if (whiteList.includes(key)) {
      return key;
    }

    return `${key}-schema:${schema}`;
  };

  const storageApi: Storage = {
    getItem: key => localStorage.getItem(suffix(key)),
    setItem: (key, value) => localStorage.setItem(suffix(key), value),
    removeItem: key => localStorage.removeItem(suffix(key)),
    clear: localStorage.clear,
    length: localStorage.length,
  };

  return storageApi;
};
