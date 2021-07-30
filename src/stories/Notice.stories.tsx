import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Notice, NoticeProps } from '../components/Notice';

const NoticeStories: Meta = {
  title: 'Amino/Notice',
  component: Notice,
  decorators: [withDesign],
};

export default NoticeStories;

const Template: Story<NoticeProps> = ({ intent, text, href }: NoticeProps) => (
  <Notice intent={intent} href={href} text={text} />
);

export const DefaultNotice = Template.bind({});
DefaultNotice.args = {
  text: 'Example notice',
};
DefaultNotice.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A98',
  },
};

export const InfoNotice = Template.bind({});
InfoNotice.args = {
  intent: 'info',
  text: 'Info notice',
};
InfoNotice.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A98',
  },
};

export const PrimaryNotice = Template.bind({});
PrimaryNotice.args = {
  intent: 'primary',
  text: 'Primary notice',
};
PrimaryNotice.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A106',
  },
};

export const WarningNotice = Template.bind({});
WarningNotice.args = {
  intent: 'warning',
  text: 'Warning notice',
};
WarningNotice.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A114',
  },
};

export const ErrorNotice = Template.bind({});
ErrorNotice.args = {
  intent: 'error',
  text: 'Error notice',
};
ErrorNotice.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A110',
  },
};

export const SuccessNotice = Template.bind({});
SuccessNotice.args = {
  intent: 'success',
  text: 'Success notice',
};
SuccessNotice.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A118',
  },
};
