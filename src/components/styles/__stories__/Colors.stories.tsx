import type { Meta } from '@storybook/react';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import { type Color, colorContrasts, colorPrefixes } from 'src/types/Color';

const meta: Meta = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=3576%3A73760&t=GYq7PyhsfdRYIayr-0',
    },
  },
  title: 'Color Palette',
};

export default meta;

export const ColorPalette = () => (
  <div className="grid grid-cols-[repeat(auto-fit,calc(33%-24px))] gap-6 items-center">
    {colorPrefixes.map(color => (
      <div key={color} className="flex flex-col mb-6 text-center">
        <Text type="title">{color.toUpperCase()}</Text>
        <VStack spacing={0}>
          {(color !== 'gray' && color !== 'glass'
            ? colorContrasts
            : ['0', ...colorContrasts, '1000']
          ).map(value => {
            const aminoColor: Color = `${color}${value}` as Color;
            return (
              <div
                key={aminoColor}
                style={{
                  '--amino-colors-stories-background': theme[aminoColor],
                  '--amino-colors-stories-color':
                    Number(value) <= 500 ? theme.gray1000 : theme.gray0,
                }}
              >
                <div className="text-[length:var(--amino-font-size-s)] p-6 bg-[var(--amino-colors-stories-background)] [&_span]:text-[var(--amino-colors-stories-color)]">
                  <Text>{value}</Text>
                </div>
              </div>
            );
          })}
        </VStack>
      </div>
    ))}
  </div>
);
