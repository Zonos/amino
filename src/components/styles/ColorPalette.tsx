import { HStack } from 'src/components/stack/HStack';
import { theme } from 'src/styles/constants/theme';
import { Color, colorContrasts, colorPrefixes } from 'src/types/Color';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-transform: capitalize;
`;

const StyledWrapper = styled.div`
  margin-bottom: ${theme.space24};

  &:last-child {
    height: 150px;
  }
`;

const StyledColorIntensity = styled.div<{
  background: Color;
}>`
  color: ${p => p.color};
  font-size: ${theme.fontSizeS};
  padding: ${theme.space};
  background: ${p => theme[p.background]};
`;

export const ColorPalette = () => (
  <>
    {colorPrefixes.map(color => (
      <StyledWrapper key={color}>
        <p>{color.toUpperCase()}</p>
        <HStack spacing="none">
          {(color !== 'gray'
            ? colorContrasts
            : [...colorContrasts, '1100', '1200', '1300']
          ).map(value => {
            const aminoColor: Color = `${color}${value}` as Color;
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
