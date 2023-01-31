import { Meta, Story } from '@storybook/react/types-6-0';
import type puppeteer from 'puppeteer';
import { ColorPalette } from 'src/components/styles/ColorPalette';

const StyleMeta: Meta = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=3576%3A73760&t=GYq7PyhsfdRYIayr-0',
    },
    async puppeteerTest(page: puppeteer.Page) {
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    },
  },
};

export default StyleMeta;

const ColorTemplate: Story = () => <ColorPalette />;

export const Colors = ColorTemplate.bind({});
