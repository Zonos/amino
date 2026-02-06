'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { ChevronRightIcon } from 'src/icons/ChevronRightIcon';

import styles from './LanguagePicker.module.scss';

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
}: LanguageItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 40 * index);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <button
      className={clsx(
        styles.languageItem,
        isSelected && styles.languageItemActive,
        isVisible && styles.languageItemVisible,
      )}
      onClick={() => onSelect(code)}
      type="button"
    >
      <span
        aria-label={`${englishName} flag`}
        className={styles.flag}
        role="img"
      >
        {flag}
      </span>
      <div className={styles.languageText}>
        <span className={styles.nativeName}>{nativeName}</span>
        {showEnglishName && (
          <span className={styles.englishName}>{englishName}</span>
        )}
      </div>
      {isSelected ? (
        <div className={styles.checkmarkCircle}>
          <CheckmarkIcon size={12} />
        </div>
      ) : (
        <ChevronRightIcon className={styles.chevron} size={16} />
      )}
    </button>
  );
};
