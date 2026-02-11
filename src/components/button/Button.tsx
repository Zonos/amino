import type React from 'react';
import {
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import { cva } from 'class-variance-authority';

import {
  type RippleActions,
  RippleGroup,
} from 'src/components/button/RippleGroup';
import { useRipple } from 'src/components/button/useRipple';
import { Spinner, type SpinnerProps } from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import type { Size } from 'src/types/Size';
import type { Theme } from 'src/types/Theme';
import type { Variant } from 'src/types/Variant';
import { cn } from 'src/utils/cn';
import { getAminoColor } from 'src/utils/getAminoColor';
import { getTestId } from 'src/utils/getTestId';

type ButtonBase = BaseProps & {
  background?: Color | 'inherit';
  children?: ReactNode;
  color?: Color | 'inherit';
  disabled?: boolean;
  fitContentWidth?: boolean;
  hoverBackground?: Color | 'inherit';
  hoverColor?: Color | 'inherit';
  icon?: ReactNode;
  iconRight?: boolean;
  /** @default false */
  loading?: boolean;
  loadingText?: string;
  /**
   * Disable ripple effect
   * @default false
   */
  noRipple?: boolean;
  outline?: boolean;
  /**
   * @default 'sm'
   */
  size?: Size;
  /** Color for the spinner when in a loading state */
  spinnerColor?: SpinnerProps['color'];
  tabIndex?: number;
  testId?: string;
  themeOverride?: Theme;
  type?: 'button' | 'reset' | 'submit';
  /** @default 'standard' */
  variant?: Variant;
};

/** These types are a bit cobbled together to allow for the polymorphic tag names.
 * It may be a good idea to look into refactoring this funcitonality
 */

export type GroupTag = 'div' | 'a' | 'button';

const DEFAULT_TAG = 'button' as const;

type MyHtmlElement<T extends GroupTag> = T extends 'a'
  ? HTMLAnchorElement
  : T extends 'button'
    ? HTMLButtonElement
    : HTMLDivElement;

// source: https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript#:~:text=I%20don%27t%20see,the%20div%20tag.
export type ButtonProps<T extends GroupTag = typeof DEFAULT_TAG> =
  ButtonBase & {
    // Temporary fix for using styled components on Button. Remove after moving all buttons to CSS modules in the dashboard.
    href?: T extends 'a' ? string : never;
    onClick?: MouseEventHandler<MyHtmlElement<T>>;
    tag?: T | GroupTag;
  } & Omit<ComponentPropsWithoutRef<T>, keyof ButtonBase | 'onClick'>;

const buttonVariants = cva(
  'amino-button relative outline-none box-border flex flex-row items-center justify-center transition-all duration-200 select-none font-sans tracking-normal cursor-pointer disabled:cursor-not-allowed disabled:opacity-disabled whitespace-nowrap text-amino-base [&_svg_path:not([data-is-secondary-color])]:fill-current',
  {
    compoundVariants: [
      // Primary outline
      {
        className:
          'text-blue-600 shadow-[0px_0px_0px_1px] shadow-blue-600 bg-transparent [text-shadow:none] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-none hover:bg-blue-50 hover:bg-none active:bg-blue-100 disabled:bg-transparent disabled:shadow-blue-600 [&_.spinner-wrapper]:bg-transparent',
        outline: true,
        variant: 'primary',
      },
      // Success outline
      {
        className:
          'text-green-600 shadow-[0px_0px_0px_1px] shadow-green-600 bg-transparent [text-shadow:none] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-none hover:bg-green-50 hover:bg-none active:bg-green-100 disabled:bg-transparent disabled:shadow-green-600 [&_.spinner-wrapper]:bg-transparent',
        outline: true,
        variant: 'success',
      },
      // Danger outline
      {
        className:
          'text-red-600 shadow-[0px_0px_0px_1px] shadow-red-600 bg-transparent [text-shadow:none] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-none hover:bg-red-50 hover:bg-none active:bg-red-100 disabled:bg-transparent disabled:shadow-red-600 [&_.spinner-wrapper]:bg-transparent',
        outline: true,
        variant: 'danger',
      },
      // Warning outline
      {
        className:
          'text-orange-600 shadow-[0px_0px_0px_1px] shadow-orange-600 bg-transparent [text-shadow:none] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-none hover:bg-orange-50 hover:bg-none active:bg-orange-100 disabled:bg-transparent disabled:shadow-[0px_0px_0px_1px_inset] disabled:shadow-orange-600 [&_.spinner-wrapper]:bg-transparent',
        outline: true,
        variant: 'warning',
      },
      // Purple outline
      {
        className:
          'text-purple-600 shadow-[0px_0px_0px_1px] shadow-purple-600 bg-transparent [text-shadow:none] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-none hover:bg-purple-50 hover:bg-none active:bg-purple-100 disabled:bg-transparent disabled:shadow-[0px_0px_0px_1px_inset] disabled:shadow-orange-600 [&_.spinner-wrapper]:bg-transparent',
        outline: true,
        variant: 'purple',
      },
      // Cyan outline
      {
        className:
          'text-cyan-600 shadow-[0px_0px_0px_1px] shadow-cyan-600 bg-transparent [text-shadow:none] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-none hover:bg-cyan-50 hover:bg-none active:bg-cyan-100 disabled:bg-transparent disabled:shadow-[0px_0px_0px_1px_inset] disabled:shadow-cyan-600 [&_.spinner-wrapper]:bg-transparent',
        outline: true,
        variant: 'cyan',
      },
      // Standard outline
      {
        className:
          'bg-transparent shadow-none border border-gray-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.08] hover:bg-none active:bg-gray-100 focus:shadow-[rgba(0,0,0,0.08)_0px_0px_0px_4px] dark:focus:shadow-[rgba(220,225,255,0.24)_0px_0px_0px_4px]',
        outline: true,
        variant: 'standard',
      },
    ],
    defaultVariants: {
      outline: false,
      size: 'sm',
      variant: 'standard',
    },
    variants: {
      outline: {
        false: '',
        true: '',
      },
      size: {
        lg: 'h-amino-lg',
        md: 'h-amino-md',
        sm: 'h-amino-sm',
        xl: 'h-amino-xl',
      },
      variant: {
        cyan: 'shadow-btn-cyan [text-shadow:0px_1px_1px_rgba(0,0,0,0.2)] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] dark:text-gray-1000 active:bg-cyan-600 focus:shadow-btn-cyan-focus disabled:bg-gray-500 disabled:shadow-btn-disabled [&_.spinner-wrapper]:bg-amino-cyan',
        danger:
          'shadow-btn-danger [text-shadow:0px_1px_1px_rgba(0,0,0,0.2)] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] dark:text-gray-1000 active:bg-red-600 focus:shadow-btn-danger-focus disabled:bg-gray-500 disabled:shadow-btn-disabled [&_.spinner-wrapper]:bg-danger',
        inlineLink:
          'p-0 inline-flex leading-[inherit] text-[var(--amino-button-color)] hover:text-[var(--amino-button-text-button-hover-color)] active:text-[var(--amino-button-text-button-hover-color)]',
        inverted:
          'bg-gray-1000 text-gray-0 shadow-raised-standard hover:bg-gray-900 active:bg-gray-600 focus:shadow-raised-standard disabled:shadow-btn-disabled [&_.spinner-wrapper]:bg-gray-1000',
        link: 'active:bg-blue-100 hover:bg-blue-50 focus:shadow-btn-focus-ring',
        plain: '',
        primary:
          'shadow-btn-primary [text-shadow:0px_1px_1px_rgba(0,0,0,0.2)] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] dark:text-gray-1000 active:bg-blue-600 focus:shadow-btn-primary-focus disabled:bg-gray-500 disabled:shadow-btn-disabled [&_.spinner-wrapper]:bg-primary',
        purple:
          'shadow-btn-purple [text-shadow:0px_1px_1px_rgba(0,0,0,0.2)] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] dark:text-gray-1000 active:bg-purple-600 focus:shadow-btn-purple-focus disabled:bg-gray-500 disabled:shadow-btn-disabled [&_.spinner-wrapper]:bg-amino-purple',
        standard:
          'shadow-raised-standard active:bg-gray-100 focus:shadow-raised-standard',
        subtle: 'hover:bg-gray-50 active:bg-gray-100 focus:shadow-focus-btn',
        success:
          'shadow-btn-success [text-shadow:0px_1px_1px_rgba(0,0,0,0.2)] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] dark:text-gray-1000 active:bg-green-600 focus:shadow-btn-success-focus disabled:bg-gray-500 disabled:shadow-btn-disabled [&_.spinner-wrapper]:bg-success',
        text: 'text-[var(--amino-button-text-button-color)] hover:text-[var(--amino-button-text-button-hover-color)] disabled:text-[var(--amino-button-text-button-disabled-color)] [&.loading]:text-transparent',
        warning:
          'shadow-btn-warning [text-shadow:0px_1px_1px_rgba(0,0,0,0.2)] [&_svg_path:not([data-is-secondary-color])]:drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] dark:text-gray-1000 active:bg-orange-600 focus:shadow-btn-warning-focus disabled:bg-gray-500 disabled:shadow-btn-disabled [&_.spinner-wrapper]:bg-warning',
      },
    },
  },
);

/**
 * Button component provides a clickable element that can be customized with different variants,
 * sizes, and states. It supports various HTML tags (button, a, div) and includes features like
 * loading states, icons, and different visual styles.
 *
 * @example Basic button
 * <Button>Click me</Button>
 *
 * @example Primary variant
 * <Button variant="primary">Primary Button</Button>
 *
 * @example With icon
 * <Button icon={<CubeIcon size={24} />}>Button with Icon</Button>
 *
 * @example Icon on the right
 * <Button icon={<ArrowRightIcon />} iconRight>Next</Button>
 *
 * @example Loading state
 * <Button loading loadingText="Loading...">Submit</Button>
 *
 * @example Disabled state
 * <Button disabled>Disabled Button</Button>
 *
 * @example Different sizes
 * <Button size="sm">Small</Button>
 * <Button size="md">Medium</Button>
 * <Button size="lg">Large</Button>
 *
 * @example Variants
 * <Button variant="primary">Primary</Button>
 * <Button variant="success">Success</Button>
 * <Button variant="danger">Danger</Button>
 * <Button variant="warning">Warning</Button>
 * <Button variant="link">Link</Button>
 * <Button variant="subtle">Subtle</Button>
 * <Button variant="text">Text</Button>
 *
 * @example Outlined style
 * <Button variant="primary" outline>Outlined Primary</Button>
 *
 * @example As anchor tag
 * <Button tag="a" href="https://example.com">Visit Website</Button>
 *
 * @example Inline link
 * <Text>Read the <Button tag="a" href="#" variant="inlineLink">documentation</Button> for more info.</Text>
 *
 * @example Custom colors
 * <Button color="blue600" background="gray100">Custom Button</Button>
 */
export function Button<T extends GroupTag = typeof DEFAULT_TAG>({
  background,
  children,
  className,
  color,
  /** Whether the button is disabled */
  disabled = false,
  /** Makes the button width fit its content */
  fitContentWidth,
  hoverBackground,
  hoverColor,
  /** Icon to display in the button */
  icon,
  /** Whether to show the icon on the right side */
  iconRight,
  /** Shows a loading spinner */
  loading = false,
  /** Text to show when loading */
  loadingText,
  /** Disables ripple effect on click */
  noRipple = false,
  /** Shows an outlined version of the button */
  outline = false,
  /**
   * Size of the button
   * @default 'sm'
   */
  size = 'sm',
  /** Color of the spinner when loading */
  spinnerColor,
  style,
  /**
   * HTML element tag to use
   * @default 'button'
   */
  tag = DEFAULT_TAG,
  testId,
  themeOverride,
  /**
   * HTML button type attribute
   * @default 'button'
   */
  type = 'button',
  /**
   * Visual style variant of the button
   * @default 'standard'
   */
  variant = 'standard',
  ...props
}: ButtonProps<T>) {
  const Tag: GroupTag = tag;
  const [buttonText, setButtonText] = useState('');

  const handleButtonText = useCallback((node: Element | null) => {
    setButtonText(node?.textContent || '');
  }, []);

  const defaultTestId = useMemo(
    () =>
      getTestId({
        componentName: 'button',
        name: buttonText,
      }),
    [buttonText],
  );

  const getSpinnerSize = () => {
    switch (size) {
      case 'sm':
        return 16;
      case 'lg':
      case 'xl':
        return 24;
      case 'md':
      default:
        return 20;
    }
  };

  const renderContent = (_spinnerColor?: SpinnerProps['color']) => (
    <>
      {!iconRight && <span className="content">{icon}</span>}
      <div className={cn('content', children && 'px-amino-4')}>{children}</div>
      {iconRight && <span className="content">{icon}</span>}
      {variant !== 'plain' && variant !== 'text' && loading && (
        <span className="spinner-wrapper absolute inset-0 flex items-center justify-center rounded-amino-6 gap-amino-8">
          <Spinner color={_spinnerColor} size={getSpinnerSize()} />
          {loadingText}
        </span>
      )}
    </>
  );

  const buttonClassName = cn(
    buttonVariants({ outline, size, variant }),
    icon && !children && 'p-0',
    icon && !children && 'w-[var(--amino-button-size)]',
    iconRight && 'icon-right',
    icon && 'has-icon',
    loading && 'loading [&_.content]:invisible',
    !disabled &&
      !loading &&
      'active:scale-[0.99] hover:bg-[image:var(--amino-button-hover-background-color)]',
    disabled && 'cursor-not-allowed',
    icon &&
      children &&
      !iconRight &&
      '[&_svg:not(.amino-spinner)]:mr-[2px] [&_svg:not(.amino-spinner)]:ml-0 [&_svg:not(.amino-spinner)]:opacity-80',
    icon &&
      children &&
      iconRight &&
      '[&_svg:not(.amino-spinner)]:ml-[2px] [&_svg:not(.amino-spinner)]:mr-0 [&_svg:not(.amino-spinner)]:opacity-80',
    className,
  );

  const rippleRef = useRef<RippleActions>(null);

  const { getRippleHandlers, rippleEnabled } = useRipple({
    disabled: disabled || loading,
    rippleEnabled:
      !noRipple && !['plain', 'text', 'inlineLink'].includes(variant),
    rippleRef,
  });

  const baseProps = {
    className: buttonClassName,
    disabled: disabled || loading,
    size,
  };

  const buttonProps = {
    type,
    ...baseProps,
    ...(props as HTMLAttributes<HTMLElement>),
    ...getRippleHandlers(props),
  };

  const getPadding = () => {
    switch (size) {
      case 'sm':
        return `${theme.space4} ${theme.space8}`;
      case 'lg':
      case 'xl':
        return `${theme.space12} ${theme.space24}`;
      case 'md':
      default:
        return `${theme.space8} ${theme.space16}`;
    }
  };

  const getRadius = () => {
    switch (size) {
      case 'sm':
        return theme.radius6;
      case 'lg':
      case 'xl':
        return theme.radius10;
      case 'md':
      default:
        return theme.radius8;
    }
  };

  const getFontWeight = () => {
    switch (size) {
      case 'lg':
      case 'xl':
        return 600;
      case 'sm':
      case 'md':
      default:
        return 500;
    }
  };

  const getDefaultSpinnerColor = () => {
    switch (variant) {
      case 'primary':
        if (outline) {
          return 'info';
        }
        return 'white';
      case 'success':
        if (outline) {
          return 'success';
        }
        return 'white';
      case 'warning':
        if (outline) {
          return 'warning';
        }
        return 'white';
      case 'danger':
        if (outline) {
          return 'danger';
        }
        return 'white';
      case 'purple':
        if (outline) {
          return 'purple';
        }
        return 'white';
      case 'cyan':
        if (outline) {
          return 'cyan';
        }
        return 'white';
      case 'inverted':
        return 'white';
      case 'link':
      case 'inlineLink':
        return 'info';
      case 'plain':
      case 'subtle':
      case 'text':
      case 'standard':
      default:
        return 'black';
    }
  };

  const getColor = () => {
    if (color) {
      return getAminoColor(color) || '';
    }
    // Outline intent variants use their intent text color
    // Must return actual color value because inline style overrides Tailwind classes
    if (outline) {
      switch (variant) {
        case 'primary':
          return theme.blue600;
        case 'success':
          return theme.green600;
        case 'warning':
          return theme.orange600;
        case 'danger':
          return theme.red600;
        case 'cyan':
          return theme.cyan600;
        case 'purple':
          return theme.purple600;
        default:
          break;
      }
    }
    switch (variant) {
      case 'primary':
      case 'success':
      case 'warning':
      case 'danger':
      case 'cyan':
      case 'purple':
      case 'inverted':
        return theme.gray0;
      case 'link':
      case 'inlineLink':
        return theme.blue600;
      case 'subtle':
        return theme.textColorSecondary;
      case 'text':
      case 'plain':
      case 'standard':
      default:
        return theme.textColor;
    }
  };

  const getHoverBackground = () => {
    if (hoverBackground && hoverBackground !== 'inherit') {
      const aminoColor = getAminoColor(hoverBackground);
      return `linear-gradient(${aminoColor}, ${aminoColor})`;
    }
    // Outline variants use CVA compound variant hover styles (hover:bg-blue-50, etc.)
    if (outline) {
      return '';
    }
    switch (variant) {
      case 'primary':
        return theme.buttonPrimaryHover;
      case 'success':
        return theme.buttonSuccessHover;
      case 'warning':
        return theme.buttonWarningHover;
      case 'danger':
        return theme.buttonDangerHover;
      case 'cyan':
        return theme.buttonCyanHover;
      case 'purple':
        return theme.buttonPurpleHover;
      case 'standard':
        return theme.buttonStandardHover;
      case 'subtle':
        return theme.gray100;
      case 'link':
        return theme.blue100;
      case 'text':
        return theme.gray500;
      case 'inverted':
        return theme.gray100;
      default:
        return '';
    }
  };

  const getBackgroundColor = () => {
    if (background) {
      return getAminoColor(background) || '';
    }
    // Outline variants use transparent bg (handled by CVA compound variants)
    if (
      outline &&
      [
        'primary',
        'success',
        'warning',
        'danger',
        'cyan',
        'purple',
        'standard',
      ].includes(variant)
    ) {
      return 'transparent';
    }
    // For intent variants, disabled state should show gray-500
    if (
      disabled &&
      ['primary', 'success', 'warning', 'danger', 'cyan', 'purple'].includes(
        variant,
      )
    ) {
      return theme.gray500;
    }
    switch (variant) {
      case 'primary':
        return theme.primary;
      case 'success':
        return theme.success;
      case 'warning':
        return theme.warning;
      case 'danger':
        return theme.danger;
      case 'cyan':
        return theme.cyan;
      case 'purple':
        return theme.purple;
      case 'inverted':
        return theme.gray1000;
      case 'standard':
        return theme.raisedSurfaceColor;
      case 'subtle':
      case 'inlineLink':
        return 'none';
      default:
        return '';
    }
  };

  // For inlineLink variant with custom color, we need to handle hover color specially
  const getInlineLinkHoverColor = () => {
    if (variant === 'inlineLink' && color) {
      return getAminoColor(color) || theme.blue500;
    }
    return props.href ? theme.blue500 : theme.gray500;
  };

  const isIconOnly = !!icon && !children;

  return (
    <Tag
      ref={handleButtonText}
      data-testid={testId || defaultTestId}
      data-theme={themeOverride}
      style={{
        ...style,
        '--amino-button-background-color': getBackgroundColor(),
        '--amino-button-color': getColor(),
        '--amino-button-font-weight': getFontWeight(),
        '--amino-button-hover-background-color': getHoverBackground(),
        '--amino-button-padding': isIconOnly ? '0' : getPadding(),
        '--amino-button-radius': getRadius(),
        '--amino-button-size': `var(--amino-size-${size})`,
        '--amino-button-text-button-color':
          disabled || loading
            ? props.href
              ? theme.blue300
              : theme.gray300
            : props.href
              ? theme.primary
              : theme.textColorSecondary,
        '--amino-button-text-button-disabled-color': props.href
          ? theme.blue300
          : theme.gray300,
        '--amino-button-text-button-hover-color': getInlineLinkHoverColor(),
        background: 'var(--amino-button-background-color)',
        borderRadius: 'var(--amino-button-radius)',
        // Don't set inline color for text/inlineLink variants — their TW classes
        // handle base/hover/disabled colors and inline styles would override them.
        // Also skip for standard+outline — the CVA compound variant handles it,
        // and inline color would break themeOverride on a light page.
        ...(variant !== 'text' &&
          variant !== 'inlineLink' &&
          !(outline && variant === 'standard') && {
            color: 'var(--amino-button-color)',
          }),
        fontWeight: 'var(--amino-button-font-weight)' as unknown as number,
        // inlineLink uses leading-[inherit] and p-0 from CVA; inline would override
        ...(variant !== 'inlineLink' && {
          lineHeight: 'var(--amino-button-size)',
          padding: 'var(--amino-button-padding)',
        }),
        ...(fitContentWidth && { width: 'fit-content' }),
      }}
      tabIndex={tag === 'div' ? 0 : undefined}
      {...buttonProps}
    >
      {renderContent(spinnerColor || getDefaultSpinnerColor())}
      {rippleEnabled && <RippleGroup ref={rippleRef} />}
    </Tag>
  );
}
