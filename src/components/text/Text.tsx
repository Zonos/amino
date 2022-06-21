import React from 'react';

import styled, { css } from 'styled-components';

const Subtitle = styled.span`
  font-size: var(--amino-text-sm);
  line-height: 16px;
  color: var(--amino-gray-d60);
`;
const InputLabel = styled.span`
  color: black;
  display: block;
  font-family: var(--amino-font-sans);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: var(--amino-space-quarter);
`;

export const textOthers = [
  'code',
  'subtitle',
  'small-header',
  'input-label',
] as const;
type OtherText = typeof textOthers[number];
export const textOptions = [
  {
    label: 'Page Header (3XL) · 34px (2.125rem)',
    size: '3xl',
    tag: 'h2',
    type: 'page-header', // default
    weight: '900',
  },
  {
    label: 'Header (2XL) · 28px (1.75rem)',
    size: '2xl',
    type: 'header', // default
    tag: 'h3',
    weight: '700',
  },
  {
    label: 'Description Header (2XL) · 28px (1.75rem)',
    size: '2xl',
    tag: 'h3',
    type: 'description-header',
    weight: '700',
  },
  {
    label: 'Title (XL) • 22px (1.375rem)',
    size: 'xl',
    tag: 'h4',
    type: 'title',
    weight: '600',
  },
  {
    label: 'Bold Subheader (L) • 18px (1.125rem)',
    size: 'l',
    tag: 'h5',
    type: 'bold-subheader',
    weight: '700',
  },
  {
    label: 'Subheader (L) • 18px (1.125rem)',
    size: 'l',
    tag: 'h5',
    type: 'subheader',
    weight: '500',
  },
  {
    label: 'Bold Label (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'bold-label',
    weight: '700',
  },
  {
    label: 'Label (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'label',
    weight: '500',
  },
  {
    label: 'Body (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'body',
    weight: '400',
  },
  {
    label: 'Small header (S) • 12px (.75rem)',
    size: 's',
    tag: 'span',
    type: 'small-header',
    weight: '600',
  },
  {
    label: 'Caption (S) • 12px (.75rem)',
    size: 's',
    tag: 'span',
    type: 'caption',
    weight: '400',
  },
  {
    label: 'Hint text (XS) • 10px (.625rem)',
    size: 'xs',
    tag: 'span',
    type: 'hint-text',
    weight: '400',
  },
] as const;

const [
  pageHeaderOption,
  headerOption,
  descriptionHeaderOption,
  titleOption,
  boldSubheaderOption,
  subheaderOption,
  boldLabelOption,
  labelOption,
  bodyOption,
  smallheaderOption,
  captionOption,
  hintTextOption,
] = textOptions;

type Size = typeof textOptions[number]['size'];
type Type = typeof textOptions[number]['type'];
type FontWeight = typeof textOptions[number]['weight'];
type Tag = typeof textOptions[number]['tag'];
type TypographyOverrides = {
  fontSize?: Size;
  fontWeight?: FontWeight;
  lineHeight?: Size;
};
type TypoDefaultProp = { size: Size; isUppercase: Boolean };
const Typography = styled.h1<TypographyOverrides & TypoDefaultProp>`
  font-size: ${p => p.fontSize || `var(--amino-font-size-${p.size})`};
  font-weight: ${p => p.fontWeight};
  line-height: ${p => p.lineHeight || `var(--amino-line-height-${p.size})`};
  margin: 0;
  ${p =>
    p.isUppercase &&
    css`
      text-transform: uppercase;
    `}
`;
type TextStyle = Type | OtherText;
export type TextProps = {
  children: React.ReactNode;
  className?: string;
  tag?: Tag;
  title?: string;
  type?: TextStyle;
} & TypographyOverrides;
export const Text: React.FC<TextProps> = ({
  children,
  className,
  fontSize,
  fontWeight,
  lineHeight,
  tag,
  title,
  type,
}) => {
  const renderTypography = ({
    as,
    fontWeight: _fontWeight,
    size,
    isUppercase = false,
  }: {
    as: Tag;
    fontWeight: FontWeight;
    size: Size;
    isUppercase?: boolean;
  }) => (
    <Typography
      as={as}
      className={className}
      fontSize={fontSize}
      fontWeight={_fontWeight}
      lineHeight={lineHeight}
      size={size}
      isUppercase={isUppercase}
      title={title}
    >
      {children}
    </Typography>
  );
  switch (type) {
    case 'page-header':
      return renderTypography({
        as: tag || pageHeaderOption.tag,
        fontWeight: fontWeight || pageHeaderOption.weight,
        size: pageHeaderOption.size,
      });
    case 'header':
      return renderTypography({
        as: tag || headerOption.tag,
        fontWeight: fontWeight || headerOption.weight,
        size: headerOption.size,
      });
    case 'description-header':
      return renderTypography({
        as: tag || descriptionHeaderOption.tag,
        fontWeight: fontWeight || descriptionHeaderOption.weight,
        size: descriptionHeaderOption.size,
      });
    case 'title':
      return renderTypography({
        as: tag || titleOption.tag,
        fontWeight: fontWeight || titleOption.weight,
        size: titleOption.size,
      });
    case 'bold-subheader':
      return renderTypography({
        as: tag || boldSubheaderOption.tag,
        fontWeight: fontWeight || boldSubheaderOption.weight,
        size: boldSubheaderOption.size,
      });
    case 'subheader':
      return renderTypography({
        as: tag || subheaderOption.tag,
        fontWeight: fontWeight || subheaderOption.weight,
        size: subheaderOption.size,
      });
    case 'bold-label':
      return renderTypography({
        as: tag || boldLabelOption.tag,
        fontWeight: fontWeight || boldLabelOption.weight,
        size: boldLabelOption.size,
      });
    case 'label':
      return renderTypography({
        as: tag || labelOption.tag,
        fontWeight: fontWeight || labelOption.weight,
        size: labelOption.size,
      });
    case 'body':
      return renderTypography({
        as: tag || bodyOption.tag,
        fontWeight: fontWeight || bodyOption.weight,
        size: bodyOption.size,
      });
    case 'small-header':
      return renderTypography({
        as: tag || smallheaderOption.tag,
        fontWeight: fontWeight || smallheaderOption.weight,
        size: smallheaderOption.size,
        isUppercase: true,
      });
    case 'caption':
      return renderTypography({
        as: tag || captionOption.tag,
        fontWeight: fontWeight || captionOption.weight,
        size: captionOption.size,
      });
    case 'hint-text':
      return renderTypography({
        as: tag || hintTextOption.tag,
        fontWeight: fontWeight || hintTextOption.weight,
        size: hintTextOption.size,
      });
    case 'subtitle':
      return (
        <Subtitle className={className} title={title}>
          {children}
        </Subtitle>
      );
    case 'input-label':
      return (
        <InputLabel className={className} title={title}>
          {children}
        </InputLabel>
      );
    default:
      return (
        <p className={className} title={title}>
          {children}
        </p>
      );
  }
};
