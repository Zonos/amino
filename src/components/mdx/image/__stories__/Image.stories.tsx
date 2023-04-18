import { Meta, Story } from '@storybook/react/types-6-0';
import { Image, Props } from 'src/components/mdx/image/Image';

const ImageMeta: Meta = {
  component: Image,
};

export default ImageMeta;

const Template: Story<Props> = ({ color, shadow, children }: Props) => (
  <Image color={color} shadow={shadow}>
    {children}
  </Image>
);

export const BasicImage = Template.bind({});
BasicImage.args = {
  color: true,
  shadow: true,
  children: <img src="logo.png" alt="logo" />,
};
