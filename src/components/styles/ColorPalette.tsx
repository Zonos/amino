import { theme } from 'src/styles/constants/theme';
import { Color, colorContrasts, colorPrefixes } from 'src/types/Color';
import styled from 'styled-components';

import { VStack } from '../stack/VStack';
import { Text } from '../text/Text';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, calc(33% - ${theme.space24}));
  gap: ${theme.space24};
  align-items: center;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.space24};
  text-align: center;
`;

const StyledColorIntensity = styled.div<{
  background: Color;
}>`
  color: ${p => p.color};
  font-size: ${theme.fontSizeS};
  padding: ${theme.space24};
  background: ${p => theme[p.background]};
`;

export const ColorPalette = () => (
  <Wrapper>
    {colorPrefixes.map(color => (
      <ColorWrapper key={color}>
        <Text type="title">{color.toUpperCase()}</Text>
        <VStack spacing={0}>
          {(color !== 'gray'
            ? colorContrasts
            : ['0', '50', ...colorContrasts, '1100', '1200', '1300']
          ).map(value => {
            const aminoColor: Color = `${color}${value}` as Color;
            return (
              <div key={aminoColor}>
                <StyledColorIntensity
                  background={aminoColor}
                  color={Number(value) < 500 ? 'black' : 'white'}
                >
                  <Text>{value}</Text>
                </StyledColorIntensity>
              </div>
            );
          })}
        </VStack>
      </ColorWrapper>
    ))}
  </Wrapper>
);
