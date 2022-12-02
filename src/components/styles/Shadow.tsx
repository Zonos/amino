import React from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const shadows = [
  { label: 'Inset', value: 'inset' },
  { label: 'Base', value: 'small' },
  { label: 'Medium', value: 'base' },
  { label: 'Large', value: 'medium' },
  { label: 'XL', value: 'large' },
  { label: '2XL', value: 'larger' },
] as const;

type ShadowIntensity = typeof shadows[number]['value'];
type AminoShadow = `--amino-shadow-${ShadowIntensity}`;

interface ShadowProps {
  shadow: AminoShadow;
}
const StyledBoxShadowWrapper = styled.div<ShadowProps>`
  margin-bottom: ${theme.spaceDouble};
  box-shadow: var(${props => props.shadow});
  background: ${theme.grayL80};
  padding: ${theme.spaceHalf} ${theme.space};
`;
const StyledWrapper = styled.div`
  background: white;
  padding: ${theme.spaceQuarter} ${theme.space};
`;

export const Shadow = () => (
  <StyledWrapper>
    {shadows.map(({ label, value }) => {
      const aminoShadow: AminoShadow = `--amino-shadow-${value}`;
      return (
        <React.Fragment key={aminoShadow}>
          <p>Shadow intensity: {label}</p>
          <StyledBoxShadowWrapper shadow={aminoShadow}>
            <p>var({aminoShadow})</p>
          </StyledBoxShadowWrapper>
        </React.Fragment>
      );
    })}
  </StyledWrapper>
);
