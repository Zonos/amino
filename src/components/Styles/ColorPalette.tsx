import React from 'react';

import { HStack } from 'src/components/Stack';
import styled from 'styled-components';

const colors = [
  'blue',
  'cyan',
  'gray',
  'green',
  'orange',
  'purple',
  'red',
  'yellow',
] as const;

const contrastList = [
  { label: 'L80', value: '100' },
  { label: 'L60', value: '200' },
  { label: 'L40', value: '300' },
  { label: 'L20', value: '400' },
  { label: 'Base', value: '500' },
  { label: 'D20', value: '600' },
  { label: 'D40', value: '700' },
  { label: 'D60', value: '800' },
  { label: 'D80', value: '900' },
] as const;

type ColorIntensity = typeof contrastList[number]['value'];
type Color = typeof colors[number];
type AminoColor = `--amino-${Color}-${ColorIntensity}`;

interface ColorProps {
  background: AminoColor;
}
const StyledWrapper = styled.div`
  margin-bottom: var(--amino-space);

  &:last-child {
    height: 150px;
  }
`;
const StyledColorIntensity = styled.div<ColorProps>`
  color: ${p => p.color};
  font-size: var(--amino-v3-text-sm);
  padding: var(--amino-space);
  background: var(${p => p.background});
`;

export const ColorPalette = () => (
  <>
    {colors.map(color => (
      <StyledWrapper key={color}>
        <p>{color.toUpperCase()}</p>
        <HStack spacing="none">
          {contrastList.map(({ label, value }) => {
            const aminoColor: AminoColor = `--amino-${color}-${value}`;
            return (
              <div key={aminoColor}>
                <StyledColorIntensity
                  background={aminoColor}
                  color={Number(value) < 500 ? 'black' : 'white'}
                >
                  var({aminoColor})
                </StyledColorIntensity>
                <div>{label}</div>
              </div>
            );
          })}
        </HStack>
      </StyledWrapper>
    ))}
  </>
);
