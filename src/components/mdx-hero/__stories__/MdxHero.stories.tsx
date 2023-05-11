import { Meta, Story } from '@storybook/react/types-6-0';
import { MdxButton } from 'src/components/mdx-button/MdxButton';
import { MdxHero as MdxHeroComponent } from 'src/components/mdx-hero/MdxHero';
import { MdxImage } from 'src/components/mdx-image/MdxImage';

const MdxHeroMeta: Meta = {
  component: MdxHeroComponent,
};

export default MdxHeroMeta;

const Template: Story = () => (
  <MdxHeroComponent>
    <h1>Zonos Hero</h1>

    <p>
      The MdxHero creates a nice side by side layout on Desktop and stacks
      responsively on mobile. The H1 or H2 used should pull styling from the
      projects heading styles.
    </p>

    <MdxButton
      intent="primary"
      href="/?path=/story/amino-mdxcopyvalue--mdx-copy-value"
    >
      See copy value
    </MdxButton>

    <MdxButton
      intent="outline"
      href="/?path=/story/amino-mdxprogresscheckbox--mdx-progress-checkbox"
    >
      See progress checkbox
    </MdxButton>

    <MdxImage>
      <img src="/logo.png" alt="Zonos Logo" />
    </MdxImage>
  </MdxHeroComponent>
);

export const MdxHero = Template.bind({});
