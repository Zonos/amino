import { useStorage } from './useStorage';

export const useCurrentSchema = <TValue extends string>(
  defaultSchema: TValue
) =>
  useStorage({
    defaultValue: defaultSchema,
    key: 'amino:current-schema',
    type: 'session',
  });
