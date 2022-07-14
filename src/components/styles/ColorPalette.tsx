import React from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Color, colorContrasts, colorPrefixes } from 'src/types/Color';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-transform: capitalize;
`;

const StyledWrapper = styled.div`
  margin-bottom: var(--amino-space);

  &:last-child {
    height: 150px;
  }
`;
type AminoColor = `--amino-${Color}`;

const StyledColorIntensity = styled.div<{
  background: AminoColor;
}>`
  color: ${p => p.color};
  font-size: var(--amino-v3-text-sm);
  padding: var(--amino-space);
  background: var(${p => p.background});
`;

export const ColorPalette = () => (
  <>
    {colorPrefixes.map(color => (
      <StyledWrapper key={color}>
        <p>{color.toUpperCase()}</p>
        <HStack spacing="none">
          {colorContrasts.map(value => {
            const aminoColor: AminoColor = `--amino-${color}-${value}`;
            return (
              <div key={aminoColor}>
                <StyledColorIntensity
                  background={aminoColor}
                  color={Number(value) < 500 ? 'black' : 'white'}
                >
                  var({aminoColor})
                </StyledColorIntensity>
                <StyledDiv>{value}</StyledDiv>
              </div>
            );
          })}
        </HStack>
      </StyledWrapper>
    ))}
  </>
);
