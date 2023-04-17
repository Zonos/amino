import { useStorage } from './useStorage';

export const useCurrentSchema = <TValue extends string>(
  defaultSchema: TValue
) =>
  useStorage({
    type: 'session',
    key: 'amino:current-schema',
    defaultValue: defaultSchema,
  });
