import type { Meta, StoryFn } from '@storybook/react';

import {
  type Props,
  MdxBreadCrumbs as MdxBreadCrumbsComponent,
} from '../MdxBreadCrumbs';

const MdxBreadcrumbsMeta: Meta = {
  component: MdxBreadCrumbsComponent,
};

export default MdxBreadcrumbsMeta;

const Template: StoryFn<Props> = () => (
  <MdxBreadCrumbsComponent>
    <span>
      <a href="/">Page 1</a>
    </span>

    <span>
      <a href="/">Page 2</a>
    </span>

    <span>
      <a href="/">Page 3</a>
    </span>
  </MdxBreadCrumbsComponent>
);

export const MdxBreadcrumbs = Template.bind({});
