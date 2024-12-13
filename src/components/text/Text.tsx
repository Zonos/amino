import type { ReactNode } from 'react';

import clsx from 'clsx';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';

import styles from './Text.module.scss';

export const textOthers = [
  'code',
  'subtitle',
  'small-header',
  'input-label',
] as const;
type OtherText = (typeof textOthers)[number];

export const textOptions = [
  {
    label: 'Page Header (3XL) · 30px (1.875rem)',
    size: '3xl',
    tag: 'h1',
    type: 'page-header', // default
    weight: 700,
  },
  {
    label: 'Secondary Page Header (3XL) · 30px (1.875rem)',
    size: '3xl',
    tag: 'h2',
    type: 'secondary-page-header', // default
    weight: 500,
  },
  {
    label: 'Header (2XL) · 28px (1.75rem)',
    size: '2xl',
    tag: 'h3',
    type: 'header', // default
    weight: 600,
  },
  {
    label: 'Description Header (2XL) · 28px (1.75rem)',
    size: '2xl',
    tag: 'h3',
    type: 'description-header',
    weight: 700,
  },
  {
    label: 'Title (XL) • 22px (1.375rem)',
    size: 'xl',
    tag: 'h4',
    type: 'title',
    weight: 600,
  },
  {
    label: 'Bold Subheader (L) • 18px (1.125rem)',
    size: 'l',
    tag: 'h5',
    type: 'bold-subheader',
    weight: 700,
  },
  {
    label: 'Semi Bold Subheader (L / H4) • 18px (1.125rem)',
    size: 'l',
    tag: 'h5',
    type: 'semi-bold-subheader',
    weight: 600,
  },
  {
    label: 'Subheader (L) • 18px (1.125rem)',
    size: 'l',
    tag: 'h5',
    type: 'subheader',
    weight: 500,
  },
  {
    label: 'Bold Label (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'bold-label',
    weight: 700,
  },
  {
    label: 'Label (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'label',
    weight: 500,
  },
  {
    label: 'Body (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'body',
    weight: 400,
  },
  {
    label: 'Small header (S) • 12px (.75rem)',
    size: 's',
    tag: 'span',
    type: 'small-header',
    weight: 600,
  },
  {
    label: 'Caption (S) • 12px (.75rem)',
    size: 's',
    tag: 'span',
    type: 'caption',
    weight: 400,
  },
  {
    label: 'Hint text (XS) • 10px (.625rem)',
    size: 'xs',
    tag: 'span',
    type: 'hint-text',
    weight: 400,
  },
] as const;

const [
  pageHeaderOption,
  secondaryPageHeaderOption,
  headerOption,
  descriptionHeaderOption,
  titleOption,
  boldSubheaderOption,
  semiBoldSubheaderOption,
  subheaderOption,
  boldLabelOption,
  labelOption,
  bodyOption,
  smallheaderOption,
  captionOption,
  hintTextOption,
] = textOptions;

type Size = (typeof textOptions)[number]['size'];
export type FontType = (typeof textOptions)[number]['type'];
export type FontWeight = (typeof textOptions)[number]['weight'] | 800;
type Tag = (typeof textOptions)[number]['tag'];
type TypographyOverrides = {
  color?: Color | 'textColorSecondary' | 'textColor';
  fontSize?: Size;
  fontWeight?: FontWeight;
  lineHeight?: Size;
};

type TextStyle = FontType | OtherText;

export type TextProps = BaseProps & {
  children: ReactNode;
  isUppercase?: boolean;
  tag?: Tag;
  title?: string;
  type?: TextStyle;
} & TypographyOverrides;

export const Text = ({
  children,
  className,
  color,
  fontSize,
  fontWeight,
  isUppercase,
  lineHeight,
  style,
  tag,
  title,
  type,
}: TextProps) => {
  const renderTypography = ({
    as,
    fontWeight: _fontWeight,
    isUppercase: _isUppercase,
    size,
  }: {
    as: Tag;
    fontWeight: FontWeight;
    isUppercase?: boolean;
    size: Size;
  }) => {
    const typographyProps = {
      className: clsx(className, styles.typography),
      style: {
        ...style,
        '--amino-text-color': color ? theme[color] : 'inherit',
        '--amino-text-font-size': `var(--amino-font-size-${fontSize || size})`,
        '--amino-text-font-weight': _fontWeight || '',
        '--amino-text-line-height': `var(--amino-line-height-${
          lineHeight || size
        })`,
        '--amino-text-transform': _isUppercase ? 'uppercase' : 'inherit',
      },
      title,
    };

    switch (as) {
      case 'h1':
        return <h1 {...typographyProps}>{children}</h1>;
      case 'h2':
        return <h2 {...typographyProps}>{children}</h2>;
      case 'h3':
        return <h3 {...typographyProps}>{children}</h3>;
      case 'h4':
        return <h4 {...typographyProps}>{children}</h4>;
      case 'h5':
        return <h5 {...typographyProps}>{children}</h5>;
      case 'span':
      default:
        return <span {...typographyProps}>{children}</span>;
    }
  };

  switch (type) {
    case 'page-header':
      return renderTypography({
        as: tag || pageHeaderOption.tag,
        fontWeight: fontWeight || pageHeaderOption.weight,
        isUppercase,
        size: pageHeaderOption.size,
      });
    case 'secondary-page-header':
      return renderTypography({
        as: tag || secondaryPageHeaderOption.tag,
        fontWeight: fontWeight || secondaryPageHeaderOption.weight,
        isUppercase,
        size: secondaryPageHeaderOption.size,
      });
    case 'header':
      return renderTypography({
        as: tag || headerOption.tag,
        fontWeight: fontWeight || headerOption.weight,
        isUppercase,
        size: headerOption.size,
      });
    case 'description-header':
      return renderTypography({
        as: tag || descriptionHeaderOption.tag,
        fontWeight: fontWeight || descriptionHeaderOption.weight,
        isUppercase,
        size: descriptionHeaderOption.size,
      });
    case 'title':
      return renderTypography({
        as: tag || titleOption.tag,
        fontWeight: fontWeight || titleOption.weight,
        isUppercase,
        size: titleOption.size,
      });
    case 'bold-subheader':
      return renderTypography({
        as: tag || boldSubheaderOption.tag,
        fontWeight: fontWeight || boldSubheaderOption.weight,
        isUppercase,
        size: boldSubheaderOption.size,
      });
    case 'semi-bold-subheader':
      return renderTypography({
        as: tag || semiBoldSubheaderOption.tag,
        fontWeight: fontWeight || semiBoldSubheaderOption.weight,
        isUppercase,
        size: semiBoldSubheaderOption.size,
      });
    case 'subheader':
      return renderTypography({
        as: tag || subheaderOption.tag,
        fontWeight: fontWeight || subheaderOption.weight,
        isUppercase,
        size: subheaderOption.size,
      });
    case 'bold-label':
      return renderTypography({
        as: tag || boldLabelOption.tag,
        fontWeight: fontWeight || boldLabelOption.weight,
        isUppercase,
        size: boldLabelOption.size,
      });
    case 'label':
      return renderTypography({
        as: tag || labelOption.tag,
        fontWeight: fontWeight || labelOption.weight,
        isUppercase,
        size: labelOption.size,
      });

    case 'small-header':
      return renderTypography({
        as: tag || smallheaderOption.tag,
        fontWeight: fontWeight || smallheaderOption.weight,
        isUppercase,
        size: smallheaderOption.size,
      });
    case 'caption':
      return renderTypography({
        as: tag || captionOption.tag,
        fontWeight: fontWeight || captionOption.weight,
        isUppercase,
        size: captionOption.size,
      });
    case 'hint-text':
      return renderTypography({
        as: tag || hintTextOption.tag,
        fontWeight: fontWeight || hintTextOption.weight,
        isUppercase,
        size: hintTextOption.size,
      });
    case 'subtitle':
      return (
        <span className={clsx(className, styles.subTitle)} title={title}>
          {children}
        </span>
      );
    case 'input-label':
      return (
        <span className={clsx(className, styles.inputLabel)} title={title}>
          {children}
        </span>
      );
    case 'body':
    default:
      return renderTypography({
        as: tag || bodyOption.tag,
        fontWeight: fontWeight || bodyOption.weight,
        isUppercase,
        size: bodyOption.size,
      });
  }
};
