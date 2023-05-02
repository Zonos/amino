import { Meta, Story } from '@storybook/react/types-6-0';

import {
  MdxBreadCrumbs as MdxBreadCrumbsComponent,
  Props,
} from '../MdxBreadCrumbs';

const MdxBreadcrumbsMeta: Meta = {
  component: MdxBreadCrumbsComponent,
};

export default MdxBreadcrumbsMeta;

const Template: Story<Props> = () => (
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
