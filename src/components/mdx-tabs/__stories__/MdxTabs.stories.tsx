import type { Meta, StoryFn } from '@storybook/react';

import { MdxTab } from '../MdxTab';
import { MdxTabs as MdxTabsComponent } from '../MdxTabs';

const MdxTabsMeta: Meta = {
  component: MdxTabsComponent,
};

export default MdxTabsMeta;

export const MdxTabs: StoryFn<typeof MdxTabsComponent> = () => (
  <MdxTabsComponent>
    <MdxTab xlabel="Tab 1">Tab 1 content</MdxTab>
    <MdxTab xlabel="Tab 2">Tab 2 content</MdxTab>
    <MdxTab xlabel="Tab 3">Tab 3 content</MdxTab>
  </MdxTabsComponent>
);
