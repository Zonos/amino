import React from 'react';

import styled from 'styled-components';

const sizelist = [
  { label: '5XL', value: 'xxxxl' },
  { label: '4XL', value: 'xxxl' },
  { label: '3XL', value: 'xxl' },
  { label: '2XL', value: 'xl' },
  { label: 'XL', value: 'lg' },
  { label: 'L', value: 'md' },
  { label: 'Base', value: 'base' },
  { label: 'Small', value: 'sm' },
  { label: 'XSmall', value: 'xs' },
] as const;

type SizeValue = typeof sizelist[number]['value'];
type SizeAmino = `--amino-text-${SizeValue}`;

interface SizeProps {
  size: SizeAmino;
}
const StyledWrapper = styled.div<SizeProps>`
  background-color: white;
  border: 1px solid var(--amino-gray-200);
  padding: var(--amino-space-half);
  margin-bottom: var(--amino-space);
  p {
    font-size: var(${props => props.size});
  }
  span {
    display: inline-block;
    background: var(--amino-gray-300);
    padding: 1px var(--amino-space-half);
    border-radius: 5px;
  }
`;

export const Typography = () => {
  return (
    <>
      {sizelist.map(({ label, value }) => {
        const sizeAmino: SizeAmino = `--amino-text-${value}`;
        return (
          <StyledWrapper key={label} size={sizeAmino}>
            <p>Font size: {label}</p>
            <span>var({sizeAmino})</span>
          </StyledWrapper>
        );
      })}
    </>
  );
};
