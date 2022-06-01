import React from 'react';

import styled from 'styled-components';

const Subtitle = styled.span`
  font-size: 11px;
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
`;

type TextStyle =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'code'
  | 'subtitle'
  | 'small-header'
  | 'input-label';

export type TextProps = {
  children: React.ReactNode;
  title?: string;
  type?: TextStyle;
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  className,
  children,
  title,
  type,
}) => {
  switch (type) {
    case 'h1':
      return (
        <h1 className={className} title={title}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={className} title={title}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={className} title={title}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={className} title={title}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={className} title={title}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={className} title={title}>
          {children}
        </h6>
      );
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
    case 'p':
    default:
      return (
        <p className={className} title={title}>
          {children}
        </p>
      );
  }
};
