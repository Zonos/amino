import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import {
  Anchor as AminoAnchor,
  type AnchorProps,
} from '~/src/components/Button/Anchor';
import { CubeIcon } from '~/src/icons/CubeIcon';

const ButtonMeta: Meta = {
  title: 'Amino/Button',
  component: AminoAnchor,
  decorators: [withDesign],
  argTypes: {
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    href: {
      defaultValue: '',
      type: 'string',
    },
    iconRight: {
      defaultValue: false,
      type: 'boolean',
    },
    tooltip: {
      type: 'string',
      defaultValue: 'Example Tooltip',
    },
    tabIndex: {
      type: 'number',
    },
  },
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
`;

export default ButtonMeta;

const Template: Story<AnchorProps> = ({
  children,
  className,
  disabled,
  size,
  tabIndex,
  tooltip,
}) => (
  <StyledWrapper>
    <>
      <div>
        <AminoAnchor
          className={className}
          disabled={disabled}
          size={size}
          tabIndex={tabIndex}
          tooltip={tooltip}
        >
          {children}
        </AminoAnchor>
      </div>
      <div>
        <AminoAnchor
          className={className}
          disabled={disabled}
          icon={<CubeIcon size={16} />}
          size={size}
          tabIndex={tabIndex}
          tooltip={tooltip}
        >
          {children}
        </AminoAnchor>
      </div>
      <div>
        <AminoAnchor
          className={className}
          disabled={disabled}
          icon={<CubeIcon size={16} />}
          iconRight
          size={size}
          tabIndex={tabIndex}
          tooltip={tooltip}
        >
          {children}
        </AminoAnchor>
      </div>
      <div>
        <AminoAnchor
          className={className}
          disabled={disabled}
          icon={<CubeIcon size={16} />}
          size={size}
          tabIndex={tabIndex}
          tooltip={tooltip}
        />
      </div>
    </>
  </StyledWrapper>
);

export const Anchor = Template.bind({});
Anchor.args = {
  children: 'Example Anchor',
};
Anchor.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=77%3A51',
  },
};
