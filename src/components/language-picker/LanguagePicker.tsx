'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { RemoveIcon } from 'src/icons/RemoveIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

import { AnimatedGlobe } from './AnimatedGlobe';
import { LanguageItem } from './LanguageItem';

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

export type Language = {
  /** Language code (e.g., 'en', 'es', 'fr') */
  code: string;
  /** English name of the language */
  englishName: string;
  /** Flag emoji for the language */
  flag: string;
  /** Native name of the language */
  nativeName: string;
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
  style,
  title = 'Choose your language',
  trigger,
}: LanguagePickerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLanguage);
  const [searchQuery, setSearchQuery] = useState('');

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
      setSelectedLanguage(currentLanguage);
    }
  }, [isOpen, currentLanguage]);

  const filteredLanguages = useMemo(
    () =>
      languages.filter(lang => {
        if (!searchQuery) return true;
        return (
          lang.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }),
    [searchQuery, languages],
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
              e.preventDefault();
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
          className={cn(
            'flex h-8 items-center gap-[6px] rounded-amino6 border border-gray-200 bg-transparent px-amino-12 py-[6px] text-sm font-medium text-gray-800 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-gray-300 hover:bg-gray-100',
            className,
          )}
          onClick={() => setIsOpen(true)}
          style={style}
          type="button"
        >
          <span className="text-base leading-none">
            {currentLanguageData?.flag || '🌐'}
          </span>
          <span className="text-sm uppercase">{currentLanguage}</span>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-[4px] animate-fade-in"
          onClick={handleClose}
        >
          <div
            aria-label="Select language"
            aria-modal="true"
            className="flex max-h-[calc(100vh-64px)] w-[calc(100%-32px)] max-w-[680px] flex-col overflow-hidden rounded-amino12 bg-surface shadow-amino-medium animate-slide-up"
            onClick={e => e.stopPropagation()}
            role="dialog"
          >
            {/* Header with globe */}
            <div className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-surface">
              {/* Animated background particles */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {PARTICLES.map(particle => (
                  <div
                    key={particle.id}
                    className="absolute rounded-full animate-float"
                    style={{
                      '--particle-delay': `${particle.delay}s`,
                      '--particle-duration': `${particle.duration}s`,
                      '--particle-left': `${particle.left}%`,
                      '--particle-opacity': particle.opacity,
                      '--particle-size': `${particle.size}px`,
                      '--particle-top': `${particle.top}%`,
                      backgroundColor: `rgba(37, 99, 235, ${particle.opacity})`,
                      height: `${particle.size}px`,
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      width: `${particle.size}px`,
                    }}
                  />
                ))}
              </div>

              <div className="relative flex items-center gap-amino-24 px-8 pb-amino-24 pt-8 max-[525px]:flex-col max-[525px]:px-5 max-[525px]:pb-5 max-[525px]:pt-amino-24 max-[525px]:text-center">
                <div className="relative flex-shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
                      transform: 'scale(1.5)',
                    }}
                  />
                  <AnimatedGlobe size={140} />
                </div>
                <div className="relative flex-1">
                  <h2 className="mb-amino-8 mt-0 text-[20px] font-semibold leading-tight tracking-[-0.01em] text-text-color">
                    {title}
                  </h2>
                  <p className="m-0 text-sm leading-[1.5] text-gray-600">
                    {description}
                  </p>
                  <button
                    aria-label="Close"
                    className="absolute -right-amino-8 -top-amino-8 flex h-[28px] w-[28px] items-center justify-center rounded-full border-none bg-transparent text-gray-400 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black/5 hover:text-gray-600"
                    onClick={handleClose}
                    type="button"
                  >
                    <RemoveIcon size={20} />
                  </button>
                </div>
              </div>

              {/* Search bar */}
              <div className="relative mx-8 mb-amino-16 max-[525px]:mx-5 max-[525px]:mb-amino-12">
                <SearchIcon
                  className="pointer-events-none absolute left-amino-12 top-1/2 -translate-y-1/2 text-gray-500"
                  size={16}
                />
                <input
                  aria-label="Search languages"
                  className="w-full rounded-amino8 border border-gray-200 bg-surface px-amino-12 py-[10px] pl-10 text-sm text-text-color outline-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-gray-400 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search languages..."
                  type="text"
                  value={searchQuery}
                />
              </div>
            </div>

            {/* Separator */}
            <div
              className="h-px"
              style={{
                background:
                  'linear-gradient(to right, transparent, var(--amino-gray-200), transparent)',
              }}
            />

            {/* Language list */}
            <div className="max-h-80 flex-1 overflow-y-auto px-5 py-amino-12 max-[525px]:max-h-[280px] max-[525px]:px-amino-16">
              {filteredLanguages.length === 0 ? (
                <div className="flex flex-col items-center justify-center px-amino-24 py-amino-48 text-center">
                  <div className="mb-amino-12 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    <SearchIcon size={20} />
                  </div>
                  <p className="m-0 text-sm font-medium text-text-color">
                    No languages found
                  </p>
                  <p className="mb-0 mt-amino-4 text-[13px] text-gray-500">
                    Try a different search term
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-amino-4 max-[525px]:grid-cols-1">
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
            <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-8 py-amino-16 max-[525px]:flex-col max-[525px]:gap-amino-12 max-[525px]:px-5">
              <div className="flex items-center gap-amino-8 text-xs text-gray-600">
                <div className="h-amino-8 w-amino-8 rounded-full bg-blue-500 animate-amino-pulse" />
                <span>{languages.length} languages available</span>
              </div>
              <button
                className="rounded-amino8 border-none bg-blue-600 px-5 py-[10px] text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-blue-700 hover:shadow-[0_2px_4px_rgba(0,0,0,0.15)] active:scale-[0.98] max-[525px]:w-full"
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
