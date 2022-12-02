import React from 'react';

import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import styled from 'styled-components';

import { Button, ButtonProps } from '../button/Button';

const StyledButton = styled(Button)`
  svg {
    transition: transform 0.5s;
  }

  &.is-expanded {
    svg.collapse {
      opacity: 1;
      transform: rotate(-180deg);
    }
  }
`;

export type TableCellProps = {
  className?: string;
  isExpand: boolean;
} & ButtonProps;

export const ExpandButton = ({
  className,
  isExpand,
  ...props
}: TableCellProps) => (
  <StyledButton
    {...props}
    className={[className, isExpand ? 'is-expanded' : ''].join(' ')}
    icon={<ChevronDownIcon className="collapse" />}
    intent="subtle"
  />
);
