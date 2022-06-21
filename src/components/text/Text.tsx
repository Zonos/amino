import React from 'react';

import styled from 'styled-components';

const Subtitle = styled.span`
  font-size: var(--amino-text-sm);
  line-height: 16px;
  color: var(--amino-gray-d60);
`;

const SmallHeader = styled.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.5;
  text-transform: uppercase;
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
  { label: '5XL · 53px (3.312rem)', size: '5xl', tag: 'h1', weight: '900' },
  { label: '4XL · 43px (2.688rem)', size: '4xl', tag: 'h2', weight: '700' },
  { label: '3XL · 34px (2.125rem)', size: '3xl', tag: 'h3', weight: '600' },
  { label: '2XL · 27px (1.688rem)', size: '2xl', tag: 'h4', weight: '500' },
  { label: 'XL · 22px (1.375rem)', size: 'xl', tag: 'h5', weight: '500' },
  { label: 'L · 18px (1.125rem)', size: 'l', tag: 'h6', weight: '400' },
  { label: 'Base · 14px (1rem)', size: 'base', tag: 'span', weight: '400' },
  { label: 'S · 12px (.857rem)', size: 's', tag: 'span', weight: '400' },
  { label: 'XS · 10px (.714rem)', size: 'xs', tag: 'span', weight: '400' },
] as const;
type Size = typeof textOptions[number]['size'];
type FontWeight = typeof textOptions[number]['weight'];
type Tag = typeof textOptions[number]['tag'];

type TypographyOverrides = {
  fontSize?: Size;
  fontWeight?: FontWeight;
  lineHeight?: Size;
};

const Typography = styled.h1<TypographyOverrides & { size: Size }>`
  font-size: ${p => p.fontSize || `var(--amino-font-size-${p.size})`};
  font-weight: ${p => p.fontWeight};
  line-height: ${p => p.lineHeight || `var(--amino-line-height-${p.size})`};
  margin: 0;
`;

type TextStyle = Size | OtherText;

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
  }: {
    as: Tag;
    fontWeight: FontWeight;
    size: Size;
  }) => (
    <Typography
      as={as}
      className={className}
      fontSize={fontSize}
      fontWeight={_fontWeight}
      lineHeight={lineHeight}
      size={size}
      title={title}
    >
      {children}
    </Typography>
  );
  switch (type) {
    case '5xl':
      return renderTypography({
        as: tag || 'h1',
        fontWeight: fontWeight || '900',
        size: type,
      });
    case '4xl':
      return renderTypography({
        as: tag || 'h2',
        fontWeight: fontWeight || '700',
        size: type,
      });
    case '3xl':
      return renderTypography({
        as: tag || 'h3',
        fontWeight: fontWeight || '600',
        size: type,
      });
    case '2xl':
      return renderTypography({
        as: tag || 'h4',
        fontWeight: fontWeight || '500',
        size: type,
      });
    case 'xl':
      return renderTypography({
        as: tag || 'h5',
        fontWeight: fontWeight || '500',
        size: type,
      });
    case 'l':
      return renderTypography({
        as: tag || 'h6',
        fontWeight: fontWeight || '400',
        size: type,
      });
    case 'base':
    case 's':
    case 'xs':
      return renderTypography({
        as: tag || 'span',
        fontWeight: fontWeight || '400',
        size: type,
      });
    case 'subtitle':
      return (
        <Subtitle className={className} title={title}>
          {children}
        </Subtitle>
      );
    case 'small-header':
      return (
        <SmallHeader className={className} title={title}>
          {children}
        </SmallHeader>
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
