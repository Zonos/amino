import React from 'react';

import { theme } from 'src/styles/constants/theme';
import styled, { CSSProperties } from 'styled-components';

type GradientSquareType = {
  gradientStart: string;
  gradientEnd: string;
};

// Used in store list, and when too many classes are generated styled-components complains. This is their recommended solution to make the changes styles inline, rather than generating a CSS class for each one.
const GradientSquare = styled.div.attrs<GradientSquareType>(
  (props): { style: CSSProperties } => ({
    style: {
      background: `linear-gradient(
      137deg,
      ${props.gradientStart},
      ${props.gradientEnd}
    )`,
    },
  })
)<GradientSquareType>`
  width: 32px;
  height: 32px;
  border-radius: ${theme.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: ${theme.grayD80} !important;
  font-weight: 500;
`;

export type TextAvatarProps = {
  label: string;
};

const colorForString = (stringInput: string, brightness: number) => {
  const stringUniqueHash = Array.from(stringInput).reduce((acc, char) => {
    // eslint-disable-next-line no-bitwise
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  return `hsl(${stringUniqueHash % 360}, 95%, ${brightness}%)`;
};

export const TextAvatar = ({ label }: TextAvatarProps) => (
  <GradientSquare
    gradientStart={colorForString(label || 'default label', 75)}
    gradientEnd={colorForString(
      (label && label.split('').reverse().join('')) || 'default label',
      30
    )}
  >
    {(label && label[0].toUpperCase()) || 'D'}
  </GradientSquare>
);
