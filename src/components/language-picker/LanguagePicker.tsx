'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';

import { RemoveIcon } from 'src/icons/RemoveIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import type { BaseProps } from 'src/types/BaseProps';

import { AnimatedGlobe } from './AnimatedGlobe';
import { LanguageItem } from './LanguageItem';
import styles from './LanguagePicker.module.scss';

// Pre-generated particle configurations to avoid array index keys
const PARTICLES = Array.from({ length: 20 }).map((_, i) => ({
  delay: Math.random() * 5,
  duration: 6 + Math.random() * 8,
  id: `particle-${i}`,
  left: Math.random() * 100,
  opacity: 0.05 + Math.random() * 0.1,
  size: 2 + Math.random() * 3,
  top: Math.random() * 100,
}));

const DEFAULT_REGIONS = [
  'Americas',
  'Europe',
  'Asia Pacific',
  'Middle East & Africa',
] as const;

export type Language = {
  /** Language code (e.g., 'en', 'es', 'fr') */
  code: string;
  /** English name of the language */
  englishName: string;
  /** Flag emoji for the language */
  flag: string;
  /** Native name of the language */
  nativeName: string;
  /** Optional region for filtering (e.g., 'Americas', 'Europe') */
  region?: string;
};

export type LanguagePickerProps = BaseProps & {
  /** Currently selected language code */
  currentLanguage: string;
  /**
   * Custom header description text
   * @default 'Select your preferred language for the best experience. Content will be displayed in your chosen language across the platform.'
   */
  description?: string;
  /** List of available languages */
  languages: Language[];
  /** Called when user confirms language selection */
  onLanguageSelect: (code: string) => void;
  /**
   * Optional: Custom regions for filtering tabs
   * @default ['Americas', 'Europe', 'Asia Pacific', 'Middle East & Africa']
   */
  regions?: readonly string[];
  /**
   * Optional: Enable region filtering tabs
   * @default true
   */
  showRegionTabs?: boolean;
  /**
   * Custom header title
   * @default 'Choose your language'
   */
  title?: string;
  /** Custom button to open the picker. If not provided, a default trigger button is rendered. */
  trigger?: ReactNode;
};

export const LanguagePicker = ({
  className,
  currentLanguage,
  description = 'Select your preferred language for the best experience. Content will be displayed in your chosen language across the platform.',
  languages,
  onLanguageSelect,
  regions = DEFAULT_REGIONS,
  showRegionTabs = true,
  style,
  title = 'Choose your language',
  trigger,
}: LanguagePickerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLanguage);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const currentLanguageData = useMemo(
    () => languages.find(lang => lang.code === currentLanguage),
    [languages, currentLanguage],
  );

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
  };

  const handleConfirm = () => {
    if (selectedLanguage === currentLanguage) {
      setIsOpen(false);
      return;
    }

    onLanguageSelect(selectedLanguage);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setActiveRegion(null);
      setSelectedLanguage(currentLanguage);
    }
  }, [isOpen, currentLanguage]);

  const filteredLanguages = useMemo(
    () =>
      languages.filter(lang => {
        const matchesSearch =
          !searchQuery ||
          lang.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion =
          !activeRegion || !showRegionTabs || lang.region === activeRegion;
        return matchesSearch && matchesRegion;
      }),
    [searchQuery, activeRegion, languages, showRegionTabs],
  );

  return (
    <>
      {trigger ? (
        <div
          aria-label="Open language picker"
          className={className}
          onClick={() => setIsOpen(true)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsOpen(true);
            }
          }}
          role="button"
          style={style}
          tabIndex={0}
        >
          {trigger}
        </div>
      ) : (
        <button
          aria-label="Select language"
          className={clsx(styles.trigger, className)}
          onClick={() => setIsOpen(true)}
          style={style}
          type="button"
        >
          <span className={styles.triggerFlag}>
            {currentLanguageData?.flag || '🌐'}
          </span>
          <span className={styles.localeCode}>{currentLanguage}</span>
        </button>
      )}

      {isOpen && (
        <div
          aria-hidden="true"
          className={styles.overlay}
          onClick={handleClose}
        >
          <div
            aria-label="Select language"
            aria-modal="true"
            className={styles.modal}
            onClick={e => e.stopPropagation()}
            onKeyDown={e => e.stopPropagation()}
            role="dialog"
          >
            {/* Header with globe */}
            <div className={styles.modalHeader}>
              {/* Animated background particles */}
              <div className={styles.particles}>
                {PARTICLES.map(particle => (
                  <div
                    key={particle.id}
                    className={styles.particle}
                    style={
                      {
                        '--particle-delay': `${particle.delay}s`,
                        '--particle-duration': `${particle.duration}s`,
                        '--particle-left': `${particle.left}%`,
                        '--particle-opacity': particle.opacity,
                        '--particle-size': `${particle.size}px`,
                        '--particle-top': `${particle.top}%`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>

              <div className={styles.headerContent}>
                <div className={styles.globeWrapper}>
                  <div className={styles.globeGlow} />
                  <AnimatedGlobe size={140} />
                </div>
                <div className={styles.headerText}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <button
                    aria-label="Close"
                    className={styles.closeButton}
                    onClick={handleClose}
                    type="button"
                  >
                    <RemoveIcon size={20} />
                  </button>
                </div>
              </div>

              {/* Search bar */}
              <div className={styles.searchContainer}>
                <SearchIcon className={styles.searchIcon} size={16} />
                <input
                  aria-label="Search languages"
                  className={styles.searchInput}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search languages..."
                  type="text"
                  value={searchQuery}
                />
              </div>

              {/* Region tabs */}
              {showRegionTabs && (
                <div className={styles.regionTabs} role="tablist">
                  <button
                    aria-pressed={!activeRegion}
                    aria-selected={!activeRegion}
                    className={clsx(
                      styles.regionTab,
                      !activeRegion && styles.regionTabActive,
                    )}
                    onClick={() => setActiveRegion(null)}
                    role="tab"
                    type="button"
                  >
                    All regions
                  </button>
                  {regions.map(region => (
                    <button
                      key={region}
                      aria-pressed={activeRegion === region}
                      aria-selected={activeRegion === region}
                      className={clsx(
                        styles.regionTab,
                        activeRegion === region && styles.regionTabActive,
                      )}
                      onClick={() => setActiveRegion(region)}
                      role="tab"
                      type="button"
                    >
                      {region}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Separator */}
            <div className={styles.separator} />

            {/* Language list */}
            <div className={styles.languageList}>
              {filteredLanguages.length === 0 ? (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>
                    <SearchIcon size={20} />
                  </div>
                  <p className={styles.emptyTitle}>No languages found</p>
                  <p className={styles.emptySubtitle}>
                    Try a different search term
                  </p>
                </div>
              ) : (
                <div className={styles.languageGrid}>
                  {filteredLanguages.map((lang, i) => (
                    <LanguageItem
                      key={lang.code}
                      code={lang.code}
                      englishName={lang.englishName}
                      flag={lang.flag}
                      index={i}
                      isSelected={selectedLanguage === lang.code}
                      nativeName={lang.nativeName}
                      onSelect={handleLanguageSelect}
                      showEnglishName={lang.code !== currentLanguage}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className={styles.modalFooter}>
              <div className={styles.languageCount}>
                <div className={styles.pulseDot} />
                <span>{languages.length} languages available</span>
              </div>
              <button
                className={styles.confirmButton}
                onClick={handleConfirm}
                type="button"
              >
                Confirm selection
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
