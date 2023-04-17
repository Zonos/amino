import { useStorage } from './useStorage';

export const useCurrentSchema = <TValue extends string>(
  defaultSchema: TValue
) =>
  useStorage({
    type: 'local',
    key: 'current-schema',
    defaultValue: defaultSchema,
  });
