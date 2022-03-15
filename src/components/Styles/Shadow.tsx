import React from 'react';

import styled from 'styled-components';

enum ShadowEnum {
  'Inset' = 'inset',
  'Base' = 'base',
  'Medium' = 'medium',
  'Large' = 'large',
  'XL' = 'xl',
  '2XL' = 'xxl',
}

const shadows: (keyof typeof ShadowEnum)[] = [
  'Inset',
  'Base',
  'Medium',
  'Large',
  'XL',
  '2XL',
];
interface ShadowProps {
  shadow: keyof typeof ShadowEnum;
}
const StyledBoxShadowWrapper = styled.div<ShadowProps>`
  margin-bottom: var(--amino-space-double);
  box-shadow: var(--amino-v3-shadow-${props => ShadowEnum[props.shadow]});
  background: var(--amino-gray-l80);
  padding: var(--amino-space-half) var(--amino-space);
`;
const StyledWrapper = styled.div`
  background: white;
  padding: var(--amino-space);
`;

export const Shadow = () => {
  return (
    <StyledWrapper>
      {shadows.map(shadow => (
        <StyledBoxShadowWrapper shadow={shadow}>
          <p>Shadow intensity: {shadow}</p>
        </StyledBoxShadowWrapper>
      ))}
    </StyledWrapper>
  );
};
