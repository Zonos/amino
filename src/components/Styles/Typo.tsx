import React from 'react';

import styled from 'styled-components';

enum SizeEnum {
  '5XL' = 'xxxxxl',
  '4XL' = 'xxxxl',
  '3XL' = 'xxxl',
  '2XL' = 'xxl',
  'XL' = 'xl',
  'L' = 'lg',
  'M' = 'md',
  'Base' = 'base',
  'Small' = 'sm',
}

const sizes: (keyof typeof SizeEnum)[] = [
  '5XL',
  '4XL',
  '3XL',
  '2XL',
  'XL',
  'L',
  'M',
  'Base',
  'Small',
];
interface SizeProps {
  size: keyof typeof SizeEnum;
}
const StyledWrapper = styled.div<SizeProps>`
  margin-bottom: var(--amino-space-half);
  p {
    font-size: var(--amino-v3-text-${props => SizeEnum[props.size]});
  }
`;

export const Typo = () => {
  return (
    <>
      {sizes.map(size => (
        <StyledWrapper size={size}>
          <p>Font size: {size}</p>
        </StyledWrapper>
      ))}
    </>
  );
};
