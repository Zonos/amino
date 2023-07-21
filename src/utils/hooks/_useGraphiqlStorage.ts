import { useEffect } from 'react';

import type { Storage } from '@graphiql/toolkit';
import kebabCase from 'lodash/kebabCase';

import { useCurrentSchema } from 'src/utils/hooks/useCurrentShema';

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
    clear: localStorage.clear,
    getItem: key => localStorage.getItem(suffix(key)),
    length: localStorage.length,
    removeItem: key => localStorage.removeItem(suffix(key)),
    setItem: (key, value) => localStorage.setItem(suffix(key), value),
  };

  return storageApi;
};
