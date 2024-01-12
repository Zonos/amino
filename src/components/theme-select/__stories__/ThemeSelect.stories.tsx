import type { Meta, StoryFn } from '@storybook/react';

import {
  type Props,
  ThemeSelect as ThemeSelectComponent,
} from 'src/components/theme-select/ThemeSelect';

import styles from './ThemeSelect.stories.module.scss';

const ThemeSelectMeta: Meta = {
  component: ThemeSelectComponent,
};

export default ThemeSelectMeta;

const Template: StoryFn = ({ type }: Props) => (
  <div className={styles.wrapper}>
    <ThemeSelectComponent type={type} />
  </div>
);

export const Default = Template.bind({});

export const Cards = Template.bind({});
Cards.args = { type: 'cards' };

export const Toggle = Template.bind({});
Toggle.args = { type: 'toggle' };
