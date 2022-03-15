import React from 'react';

import styled from 'styled-components';

type ColorList =
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red'
  | 'yellow';

enum ColorIntensity {
  'L80' = 100,
  'L60' = 200,
  'L40' = 300,
  'L20' = 400,
  'Base' = 500,
  'D20' = 600,
  'D40' = 700,
  'D60' = 800,
  'D80' = 900,
}
const colors: ColorList[] = [
  'blue',
  'cyan',
  'gray',
  'green',
  'orange',
  'purple',
  'red',
  'yellow',
];

const colorIntensity: (keyof typeof ColorIntensity)[] = [
  'L80',
  'L60',
  'L40',
  'L20',
  'Base',
  'D20',
  'D40',
  'D60',
  'D80',
];
interface ColorProps {
  color: ColorList;
  intensity: keyof typeof ColorIntensity;
}
const StyledWrapper = styled.div`
  margin-bottom: var(--amino-space);
`;
const StyledColorIntensities = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;
const StyledColorIntensity = styled.div<ColorProps>`
  width: 40px;
  height: 20px;
  background: var(
    --amino-${props => props.color}-${props => props.intensity.toLowerCase()}
  );
`;

export const ColorPalette = () => {
  return (
    <>
      {colors.map(color => (
        <StyledWrapper>
          <p>{color.toUpperCase()}</p>
          <StyledColorIntensities>
            {colorIntensity.map(intensity => (
              <div>
                <StyledColorIntensity color={color} intensity={intensity} />
                <div>{intensity}</div>
              </div>
            ))}
          </StyledColorIntensities>
        </StyledWrapper>
      ))}
    </>
  );
};
