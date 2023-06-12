import type { Meta, StoryFn } from '@storybook/react';
import { MdxButton } from 'src/components/mdx/mdx-button/MdxButton';
import { MdxHero as MdxHeroComponent } from 'src/components/mdx/mdx-hero/MdxHero';
import { MdxImage } from 'src/components/mdx/mdx-image/MdxImage';

const MdxHeroMeta: Meta = {
  component: MdxHeroComponent,
};

export default MdxHeroMeta;

const Template: StoryFn = () => (
  <MdxHeroComponent>
    <h1>Zonos Hero</h1>

    <p>
      The MdxHero creates a nice side by side layout on Desktop and stacks
      responsively on mobile. The H1 or H2 used should pull styling from the
      projects heading styles.
    </p>

    <p>
      The MdxHero will look for an image as a child and automatically place it
      on the right side of the hero and place the rest of the content on the
      left.
    </p>

    <MdxButton
      href="/?path=/story/amino-mdxcopyvalue--mdx-copy-value"
      intent="primary"
    >
      See copy value
    </MdxButton>

    <MdxButton
      href="/?path=/story/amino-mdxprogresscheckbox--mdx-progress-checkbox"
      intent="outline"
    >
      See progress checkbox
    </MdxButton>

    <MdxImage>
      <img alt="Zonos Logo" src="/logo.png" />
    </MdxImage>
  </MdxHeroComponent>
);

export const MdxHero = Template.bind({});
