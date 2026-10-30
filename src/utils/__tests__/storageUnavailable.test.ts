import { renderHook } from '@testing-library/react';
import dayjs from 'dayjs';
import { z } from 'zod';

import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';
import { useStorage, useStorageWithLifetime } from 'src/utils/hooks/useStorage';
import {
  getRawStorageItem,
  getStorageItem,
  setStorageItem,
  setStorageItemWithLifetime,
  type StorageType,
} from 'src/utils/storage';

const storageNames = {
  local: 'localStorage',
  session: 'sessionStorage',
} as const;

const originals = {
  localStorage: Object.getOwnPropertyDescriptor(window, 'localStorage'),
  sessionStorage: Object.getOwnPropertyDescriptor(window, 'sessionStorage'),
};

const unavailableStorage: [string, PropertyDescriptor][] = [
  ['null (DOM storage off in an Android WebView)', { value: null }],
  [
    'blocked (SecurityError on access)',
    {
      get: () => {
        throw new DOMException('The operation is insecure.', 'SecurityError');
      },
    },
  ],
];

const cases = (['local', 'session'] as const).flatMap(type =>
  unavailableStorage.map(
    ([label, descriptor]) =>
      [type, label, descriptor] as [StorageType, string, PropertyDescriptor],
  ),
);

const stubStorage = (type: StorageType, descriptor: PropertyDescriptor) =>
  Object.defineProperty(window, storageNames[type], {
    configurable: true,
    ...descriptor,
  });

describe('storage when unavailable', () => {
  afterEach(() => {
    for (const name of ['localStorage', 'sessionStorage'] as const) {
      const original = originals[name];
      if (original) {
        Object.defineProperty(window, name, original);
      }
    }
    localStorage.clear();
    sessionStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  test.each(cases)('%s storage %s: reads return null', (type, _, stub) => {
    stubStorage(type, stub);

    expect(getRawStorageItem({ key: 'amino:test', type })).toBeNull();
    expect(
      getStorageItem({ key: 'amino:test', schema: z.string(), type }),
    ).toBeNull();
  });

  test.each(cases)('%s storage %s: writes do not throw', (type, _, stub) => {
    stubStorage(type, stub);

    expect(() =>
      setStorageItem({ key: 'amino:test', type, value: 'value' }),
    ).not.toThrow();
    expect(() =>
      setStorageItemWithLifetime({
        key: 'amino:test',
        lifetime: dayjs().add(1, 'day'),
        type,
        value: 'value',
      }),
    ).not.toThrow();
    expect(() =>
      setStorageItemWithLifetime({
        key: 'amino:test',
        lifetime: dayjs().add(1, 'day'),
        type,
        value: null,
      }),
    ).not.toThrow();
  });

  test.each(cases)(
    '%s storage %s: useStorage renders the default',
    (type, _, stub) => {
      stubStorage(type, stub);

      const { result } = renderHook(() =>
        useStorage({
          defaultValue: 'fallback',
          key: 'amino:test',
          schema: z.string(),
          type,
        }),
      );

      expect(result.current.value).toBe('fallback');
      expect(() => result.current.setValue('value')).not.toThrow();
    },
  );

  test.each(cases)(
    '%s storage %s: useStorageWithLifetime renders the default',
    (type, _, stub) => {
      stubStorage(type, stub);

      const { result } = renderHook(() =>
        useStorageWithLifetime({
          defaultValue: 'fallback',
          key: 'amino:test',
          lifetime: dayjs().add(1, 'day'),
          schema: z.string(),
          type,
        }),
      );

      expect(result.current.value).toBe('fallback');
      expect(() => result.current.setValue('value')).not.toThrow();
    },
  );

  test.each(unavailableStorage)(
    'useAminoTheme renders the default theme when storage is %s',
    (_, stub) => {
      stubStorage('local', stub);

      const { result } = renderHook(() => useAminoTheme({ root: true }));

      expect(result.current.aminoTheme).toBe('day');
    },
  );

  test.each(unavailableStorage)(
    'translation store initializes to EN when storage is %s',
    async (_, stub) => {
      stubStorage('local', stub);
      vi.resetModules();

      const { getCurrentLanguage } =
        await import('src/utils/translations/AminoTranslationStore');

      expect(getCurrentLanguage()).toBe('EN');
    },
  );

  test('a setItem that throws (quota exceeded) is swallowed', () => {
    const setItem = vi
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {
        throw new DOMException('Quota exceeded', 'QuotaExceededError');
      });

    expect(() =>
      setStorageItem({ key: 'amino:test', type: 'local', value: 'value' }),
    ).not.toThrow();

    setItem.mockRestore();
  });

  test('available storage still reads and writes', () => {
    setStorageItem({ key: 'amino:test', type: 'local', value: 'de' });

    expect(getRawStorageItem({ key: 'amino:test', type: 'local' })).toBe('de');
    expect(
      getStorageItem({ key: 'amino:test', schema: z.string(), type: 'local' }),
    ).toBe('de');
  });
});
