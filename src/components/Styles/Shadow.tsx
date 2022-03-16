import React from 'react';

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
  margin-bottom: var(--amino-space-double);
  box-shadow: var(${props => props.shadow});
  background: var(--amino-gray-l80);
  padding: var(--amino-space-half) var(--amino-space);
`;
const StyledWrapper = styled.div`
  background: white;
  padding: var(--amino-space-quarter) var(--amino-space);
`;

export const Shadow = () => {
  return (
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
};
