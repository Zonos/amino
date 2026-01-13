'use client';

import {
  cloneElement,
  type HTMLAttributes,
  isValidElement,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Popover } from '@mui/material';
import clsx from 'clsx';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';
import { CheckCircleDuotoneIcon } from 'src/icons/CheckCircleDuotoneIcon';
import { GlobeIcon } from 'src/icons/GlobeIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import type { SelectOption } from 'src/types/SelectOption';

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
  trigger,
}: {
  languageCode: ExtractLanguageCodes<T>;
  languageOptions: T;
  setLanguageCode: (code: ExtractLanguageCodes<T>) => void;
  trigger?: ReactNode;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const languageMap = useMemo(() => {
    const map = new Map<string, string>();
    languageOptions.forEach(lang => map.set(lang.value, lang.label));
    return map;
  }, [languageOptions]);

  const sortedLanguageOptions = useMemo(
    () => [...languageOptions].sort((a, b) => a.label.localeCompare(b.label)),
    [languageOptions],
  );

  const currentLabel =
    languageMap.get(languageCode) ?? languageOptions[0]?.label ?? 'English';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = useCallback(
    (code: ExtractLanguageCodes<T>) => {
      setLanguageCode(code);
      handleClose();
    },
    [setLanguageCode],
  );

  const defaultTrigger = (
    <Button
      color="gray600"
      fitContentWidth
      onClick={handleClick}
      variant="text"
    >
      <Flex alignItems="center" gap={2}>
        <GlobeIcon color="gray600" size={16} />
        <Text className={styles.triggerButtonText} color="gray600">
          {currentLabel}
        </Text>
      </Flex>
    </Button>
  );

  const renderTrigger = () => {
    if (trigger) {
      if (isValidElement(trigger)) {
        return cloneElement(trigger, {
          onClick: handleClick,
        } as HTMLAttributes<HTMLElement>);
      }
      return trigger;
    }
    return defaultTrigger;
  };

  return (
    <>
      {renderTrigger()}

      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        onClose={handleClose}
        open={open}
        slotProps={{
          paper: {
            className: styles.popover,
          },
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <Flex flexDirection="column" gap={8}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight={600}>
              <Translate text="Select a language" />
            </Text>
            <Button
              icon={<RemoveCircleDuotoneIcon />}
              onClick={handleClose}
              variant="text"
            />
          </Flex>

          <div className={styles.languageGrid}>
            {sortedLanguageOptions.map(lang => {
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
                  <Flex alignItems="center" gap={6}>
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
          </div>
        </Flex>
      </Popover>
    </>
  );
};
