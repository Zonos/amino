import { Meta, Story } from '@storybook/react/types-6-0';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import {
  MdxBreadCrumbs as MdxBreadCrumbsComponent,
  Props,
} from '../MdxBreadCrumbs';

const MdxBreadcrumbsMeta: Meta = {
  component: MdxBreadCrumbsComponent,
};

export default MdxBreadcrumbsMeta;

const Slash = styled.div`
  display: inline-block;
  color: ${theme.gray500};
`;

const Template: Story<Props> = () => (
  <MdxBreadCrumbsComponent>
    <a href="/">Page 1</a> <Slash>{' /'}</Slash>
    <a href="/">Page 2</a> <Slash>{' /'}</Slash>
    <a href="/">Page 3</a> <Slash>{' /'}</Slash>
  </MdxBreadCrumbsComponent>
);

export const MdxBreadcrumbs = Template.bind({});
