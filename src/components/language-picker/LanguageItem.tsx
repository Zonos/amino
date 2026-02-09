'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { ChevronRightIcon } from 'src/icons/ChevronRightIcon';
import { cn } from 'src/utils/cn';

export type LanguageItemProps = {
  /** Language code (e.g., 'en', 'es', 'fr') */
  code: string;
  /** English name of the language */
  englishName: string;
  /** Flag emoji for the language */
  flag: string;
  /** Index for staggered animation */
  index: number;
  /** Whether this language is currently selected */
  isSelected: boolean;
  /** Native name of the language */
  nativeName: string;
  /** Callback when the language is selected */
  onSelect: (code: string) => void;
  /** Whether to show the English name (when viewing in non-current language) */
  showEnglishName: boolean;
};

export const LanguageItem = ({
  code,
  englishName,
  flag,
  index,
  isSelected,
  nativeName,
  onSelect,
  showEnglishName,
}: LanguageItemProps): ReactNode => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 40 * index);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <button
      className={cn(
        'flex cursor-pointer items-center gap-amino-12 rounded-amino-8 border-none bg-transparent px-amino-12 py-[10px] text-left opacity-0 translate-y-[8px] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-100 [&:hover_.flag]:animate-wiggle [&:hover_.chevron]:translate-x-[2px] [&:hover_.chevron]:opacity-100',
        isSelected &&
          'bg-[rgba(37,99,235,0.05)] shadow-[inset_0_0_0_1px_rgba(37,99,235,0.2)] hover:bg-[rgba(37,99,235,0.08)] [&_.nativeName]:text-blue-700',
        isVisible && 'opacity-100 translate-y-0',
      )}
      onClick={() => onSelect(code)}
      style={{
        transitionDelay: `${40 * index}ms`,
      }}
      type="button"
    >
      <span
        aria-label={`${englishName} flag`}
        className="flag text-[20px] leading-none transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
        role="img"
      >
        {flag}
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="nativeName text-sm font-medium text-text-color">
          {nativeName}
        </span>
        {showEnglishName && (
          <span className="mt-px text-xs text-gray-500">{englishName}</span>
        )}
      </div>
      {isSelected ? (
        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 [&_svg]:text-white">
          <CheckmarkIcon size={12} />
        </div>
      ) : (
        <ChevronRightIcon
          className="chevron flex-shrink-0 text-gray-300 opacity-0 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
          size={16}
        />
      )}
    </button>
  );
};
