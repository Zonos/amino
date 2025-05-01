import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './HelpText.module.scss';

export type HelpTextProps = BaseProps & {
  /**
   * Whether to display the help text in error state (red color)
   * @default false
   */
  error?: boolean;
  /**
   * Content to display as help text
   * Can be a string or ReactNode for custom formatting
   */
  helpText?: ReactNode;
  /**
   * Whether to remove the top margin from the component
   * @default false
   */
  withoutMargin?: boolean;
};

/**
 * HelpText component provides contextual assistance text, typically used
 * below form inputs to show validation messages or helpful information.
 *
 * @example Basic usage
 * ```tsx
 * <Input
 *   label="Email"
 *   value={email}
 *   onChange={handleEmailChange}
 * />
 * <HelpText helpText="We'll never share your email with anyone else." />
 * ```
 *
 * @example Error state
 * ```tsx
 * <Input
 *   label="Password"
 *   type="password"
 *   value={password}
 *   onChange={handlePasswordChange}
 *   error={!!passwordError}
 * />
 * <HelpText
 *   error={!!passwordError}
 *   helpText={passwordError || "Password must be at least 8 characters"}
 * />
 * ```
 *
 * @example Without margin
 * ```tsx
 * <Textarea
 *   label="Description"
 *   value={description}
 *   onChange={handleDescriptionChange}
 * />
 * <HelpText
 *   helpText="Maximum 200 characters"
 *   withoutMargin
 * />
 * ```
 *
 * @example Custom ReactNode content
 * ```tsx
 * <Input
 *   label="API Key"
 *   value={apiKey}
 *   onChange={handleApiKeyChange}
 * />
 * <HelpText
 *   helpText={
 *     <div className="custom-help-text">
 *       <InfoIcon size={12} />
 *       <span>Find your API key in your account settings</span>
 *     </div>
 *   }
 * />
 * ```
 */
export const HelpText = ({
  className,
  error = false,
  helpText,
  style,
  withoutMargin = false,
}: HelpTextProps) => {
  if (helpText) {
    if (error && typeof helpText === 'string') {
      return (
        <div
          className={clsx(className, !withoutMargin && styles.styledHelpText)}
          style={style}
        >
          <Text color="red600" type="caption">
            {helpText}
          </Text>
        </div>
      );
    }

    if (typeof helpText === 'string') {
      return (
        <div
          className={clsx(className, !withoutMargin && styles.styledHelpText)}
          style={style}
        >
          <Text type="caption">{helpText}</Text>
        </div>
      );
    }

    return (
      <div
        className={clsx(className, !withoutMargin && styles.styledHelpText)}
        style={style}
      >
        {helpText}
      </div>
    );
  }
  return null;
};
