import type { JsonError } from 'src/types/JsonError';

export type FetcherError = {
  errors: JsonError[];
  status: number;
};
