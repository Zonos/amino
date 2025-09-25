'use client';

import { useCallback, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';

import { Translate } from 'src/components/__internal__/TranslateAminoText';
import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';
import { CheckCircleDuotoneIcon } from 'src/icons/CheckCircleDuotoneIcon';
import { GlobeIcon } from 'src/icons/GlobeIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import type { SelectOption } from 'src/types/SelectOption';
import { useHandleOutsideClick } from 'src/utils/hooks/useHandleOutsideClick';

import styles from './LanguageSelect.module.scss';

/**
 * Extract supported language codes from language options
 */
type ExtractLanguageCodes<T extends readonly SelectOption<string>[]> =
  T[number]['value'];

export const LanguageSelector = <T extends readonly SelectOption<string>[]>({
  languageCode,
  languageOptions,
  setLanguageCode,
}: {
  languageCode: ExtractLanguageCodes<T>;
  languageOptions: T;
  setLanguageCode: (code: ExtractLanguageCodes<T>) => void;
}) => {
  const [open, setOpen] = useState(false);

  const languageMap = useMemo(() => {
    const map = new Map<string, string>();
    languageOptions.forEach(lang => map.set(lang.value, lang.label));
    return map;
  }, [languageOptions]);

  const currentLabel = languageMap.get(languageCode) ?? 'English';

  const containerRef = useRef<HTMLDivElement>(null);
  useHandleOutsideClick({
    onClick: () => setOpen(false),
    ref: containerRef,
  });

  const handleSelect = useCallback(
    (code: ExtractLanguageCodes<T>) => {
      setLanguageCode(code);
      setOpen(false);
    },
    [setLanguageCode],
  );

  return (
    <div ref={containerRef}>
      <Button color="gray600" onClick={() => setOpen(o => !o)} variant="text">
        <Flex alignItems="center" gap={2}>
          <GlobeIcon color="gray600" size={16} />
          <Text className={styles.triggerButtonText} color="gray600">
            {currentLabel}
          </Text>
        </Flex>
      </Button>

      <Flex
        className={clsx([styles.popover, open && styles.open])}
        flexDirection="column"
        gap={8}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontWeight={600}>
            <Translate text="Select a language" />
          </Text>
          <Button
            icon={<RemoveCircleDuotoneIcon />}
            onClick={() => setOpen(false)}
            variant="text"
          />
        </Flex>

        <Flex
          alignItems="center"
          flexWrap="wrap"
          gap={8}
          justifyContent="space-between"
        >
          {languageOptions.map(lang => {
            const isSelected = lang.value === languageCode;
            return (
              <button
                key={lang.value}
                className={clsx([
                  styles.rowButton,
                  isSelected && styles.selected,
                ])}
                onClick={() => handleSelect(lang.value)}
                type="button"
              >
                <Flex alignItems="center" gap={8}>
                  <Text>{lang.label}</Text>
                  {isSelected ? (
                    <CheckCircleDuotoneIcon
                      color="green600"
                      secondaryColor="green200"
                      size={14}
                    />
                  ) : null}
                </Flex>
              </button>
            );
          })}
        </Flex>
      </Flex>
    </div>
  );
};
