import type { Meta, StoryFn } from '@storybook/react';

import { Button, type ButtonProps } from 'src/components/button/Button';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { CubeIcon } from 'src/icons/CubeIcon';

import styles from './Button.stories.module.scss';

const ButtonMeta: Meta = {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=81%3A1128&t=erzegCytT9AfSn9f-0',
    },
  },
};

export default ButtonMeta;

const ButtonRow = ({
  disabled,
  label,
  loading,
  variant,
  ...props
}: ButtonProps & { label: string }) => (
  <div>
    <Text className={styles.buttonRowLabel} type="bold-subheader">
      {label}
    </Text>
    <div className={styles.hWrapper}>
      <Button<'button'>
        {...props}
        disabled={disabled}
        loading={loading}
        variant={variant}
      />
      <Button
        {...props}
        disabled={disabled}
        icon={<CubeIcon size={24} />}
        loading={loading}
        variant={variant}
      />
      <Button
        {...props}
        disabled={disabled}
        icon={<CubeIcon size={24} />}
        iconRight
        loading={loading}
        variant={variant}
      />
      <Button
        {...props}
        children=""
        disabled={disabled}
        icon={<CubeIcon size={24} />}
        loading={loading}
        variant={variant}
      />
      <Button
        children=""
        color={props.color}
        disabled={disabled}
        icon={<CubeIcon size={24} />}
        loading={loading}
        onClick={e => e.preventDefault()}
        outline={props.outline}
        tag="div"
        variant={variant}
      />
      <Button
        color={props.color}
        disabled={disabled}
        loading={loading}
        onClick={e => e.preventDefault()}
        outline={props.outline}
        tag="div"
        variant={variant}
      >
        Div Button
      </Button>
      <Button
        color={props.color}
        disabled={disabled}
        href="#"
        loading={loading}
        onClick={e => e.preventDefault()}
        outline={props.outline}
        tag="a"
        variant={variant}
      >
        Anchor tag Button
      </Button>
      <Button
        {...props}
        disabled={disabled}
        loading={loading}
        themeOverride="night"
        variant={variant}
      >
        Night override
      </Button>
    </div>
    <div className={styles.hWrapper}>
      <Button
        {...props}
        disabled={disabled}
        loading={loading}
        size="lg"
        variant={variant}
      />
      <Button
        {...props}
        disabled={disabled}
        loading={loading}
        loadingText="Loading..."
        size="md"
        variant={variant}
      />
      <Button
        {...props}
        disabled={disabled}
        loading={loading}
        size="sm"
        variant={variant}
      />
    </div>
    <HStack>
      <Button
        {...props}
        disabled={disabled}
        loading={loading}
        variant={variant}
      >
        Full width
      </Button>
      <Button
        fitContentWidth
        {...props}
        disabled={disabled}
        loading={loading}
        variant={variant}
      >
        Fit content
      </Button>
    </HStack>
  </div>
);

const Template: StoryFn<ButtonProps> = props => (
  <div className={styles.vWrapper}>
    <ButtonRow {...props} label="Default" />
    <ButtonRow {...props} disabled label="Disabled" />
    <ButtonRow {...props} label="Loading" loading />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Example button',
  variant: 'standard',
};

export const DefaultOutline = Template.bind({});
DefaultOutline.args = {
  children: 'Example button',
  outline: true,
  variant: 'standard',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Example button',
  variant: 'primary',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  children: 'Example button',
  outline: true,
  variant: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Example button',
  variant: 'success',
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
  children: 'Example button',
  outline: true,
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Example button',
  variant: 'danger',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  children: 'Example button',
  outline: true,
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Example button',
  variant: 'warning',
};

export const WarningOutline = Template.bind({});
WarningOutline.args = {
  children: 'Example button',
  outline: true,
  variant: 'warning',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: 'Link button',
  variant: 'link',
};

export const Subtle = Template.bind({});
Subtle.args = {
  children: 'Example button',
  variant: 'subtle',
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Example button',
  variant: 'text',
};

export const PlainButton = Template.bind({});
PlainButton.args = {
  children: 'Plain button',
  variant: 'plain',
};

export const InvertedButton = Template.bind({});
InvertedButton.args = {
  children: 'Inverted button',
  variant: 'inverted',
};

export const InlineLinkButtonStory: StoryFn<ButtonProps> = () => (
  <VStack>
    <Text>
      Look at this inline link:
      <Button
        href="#"
        icon={<ArrowRightIcon />}
        iconRight
        tag="a"
        variant="inlineLink"
      >
        Learn more
      </Button>
    </Text>

    <Text>
      Look at
      <Button href="#" iconRight tag="a" variant="inlineLink">
        this link
      </Button>
      in a sentence
    </Text>
  </VStack>
);
InlineLinkButtonStory.storyName = 'Inline Link Button';
