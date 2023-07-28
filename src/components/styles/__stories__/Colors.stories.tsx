import type { Meta } from '@storybook/react';
import type { Page } from 'puppeteer';
import styled from 'styled-components';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import { type Color, colorContrasts, colorPrefixes } from 'src/types/Color';
import { customSnapshotsDir } from 'src/utils/_snapshotsFolder';

const StyleMeta: Meta = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=3576%3A73760&t=GYq7PyhsfdRYIayr-0',
    },
    async puppeteerTest(page: Page) {
      const image = await page.screenshot({ fullPage: true });
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir,
      });
    },
  },
  title: 'Color Palette',
};

export default StyleMeta;

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
  $color: Color;
  background: Color;
}>`
  color: ${p => theme[p.$color]};
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
          {(color !== 'gray' && color !== 'glass'
            ? colorContrasts
            : ['0', '50', ...colorContrasts, '1100', '1200']
          ).map(value => {
            const aminoColor: Color = `${color}${value}` as Color;
            return (
              <div key={aminoColor}>
                <StyledColorIntensity
                  $color={Number(value) <= 500 ? 'gray1200' : 'gray0'}
                  background={aminoColor}
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
