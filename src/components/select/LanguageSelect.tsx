'use client';

import { type ReactNode, useCallback, useMemo, useState } from 'react';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'src/components/ui/popover';
import { CheckCircleDuotoneIcon } from 'src/icons/CheckCircleDuotoneIcon';
import { GlobeIcon } from 'src/icons/GlobeIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import type { SelectOption } from 'src/types/SelectOption';
import { cn } from 'src/utils/cn';

/**
 * Extract supported language codes from language options
 */
type ExtractLanguageCodes<T extends readonly SelectOption<string>[]> =
  T[number]['value'];

export const LanguageSelector = <T extends readonly SelectOption<string>[]>({
  languageCode,
  languageOptions,
  onLanguageSelect,
  setLanguageCode,
  trigger,
}: {
  languageCode: ExtractLanguageCodes<T>;
  languageOptions: T;
  onLanguageSelect?: (code: ExtractLanguageCodes<T>) => void;
  setLanguageCode: (code: ExtractLanguageCodes<T>) => void;
  trigger?: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

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

  const handleSelect = useCallback(
    (code: ExtractLanguageCodes<T>) => {
      setLanguageCode(code);
      onLanguageSelect?.(code);
      setOpen(false);
    },
    [onLanguageSelect, setLanguageCode],
  );

  const defaultTrigger = (
    <Button color="gray600" fitContentWidth variant="text">
      <Flex alignItems="center" gap={2}>
        <GlobeIcon color="gray600" size={16} />
        <Text className="font-light" color="gray600">
          {currentLabel}
        </Text>
      </Flex>
    </Button>
  );

  const renderTrigger = () => trigger ?? defaultTrigger;

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>{renderTrigger()}</PopoverTrigger>

      <PopoverContent
        align="end"
        className="bg-gray-0 rounded-xl shadow-[0_20px_48px_rgba(16,24,40,0.18)] border-amino-subtle w-150 max-w-[calc(100vw-32px)] px-4 py-2 mt-2 max-[720px]:w-[92vw] max-[600px]:fixed max-[600px]:left-0 max-[600px]:right-0 max-[600px]:bottom-25 max-[600px]:w-screen max-[600px]:max-w-screen max-[600px]:origin-bottom max-[600px]:z-50"
        sideOffset={8}
      >
        <Flex flexDirection="column" gap={8}>
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

          <div className="grid grid-cols-3 gap-1.5 max-[720px]:grid-cols-2 max-[600px]:grid-cols-1">
            {sortedLanguageOptions.map(lang => {
              const isSelected = lang.value === languageCode;
              return (
                <button
                  key={lang.value}
                  className={cn(
                    'appearance-none border-none bg-transparent p-[6px_10px] text-left cursor-pointer text-gray-800 font-medium min-w-max whitespace-nowrap rounded-md pr-7.5 hover:bg-gray-50',
                    isSelected && 'text-blue-600',
                  )}
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
      </PopoverContent>
    </Popover>
  );
};
