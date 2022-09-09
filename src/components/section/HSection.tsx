import React, { useState } from 'react';

import { HStack } from 'src/components/stack/HStack';
import { ChevronDownSolidIcon } from 'src/icons/ChevronDownSolidIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Button } from '../button/Button';
import { Collapse } from '../collapse/Collapse';
import { SectionHeader } from './_SectionHeader';
import { SectionInnerWrapper } from './_SectionInnerWrapper';
import { SectionSubheader } from './_SectionSubheader';

const StyledSectionWrapper = styled(HStack)`
  margin-bottom: ${theme.spaceDouble};
  grid-template-columns: 1fr 2fr;
`;

const StyledHeader = styled.div`
  position: relative;
`;

const StyledCollapseIndicator = styled(Button)`
  position: absolute;
  left: 100%;
  top: -2px;
  transition: 0.2s all ease;
  background: transparent;
  &:active,
  &:focus,
  &:hover {
    background: transparent;
    color: ${theme.grayD40};
  }

  .collapse & {
    transform: rotate(-90deg);
  }
`;

export type HSectionProps = {
  children: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  /**
   * @info Make the section content collapsable or not
   * @default false
   */
  collapsable?: boolean;
  /**
   * @info Initial collapse state. **Note**: only have effect when `collapsable` is specified
   * @default false
   * */
  collapseByDefault?: boolean;
};

export const HSection = ({
  children,
  className,
  label,
  sublabel = '',
  collapsable = false,
  collapseByDefault = false,
}: HSectionProps) => {
  const [collapse, setCollapse] = useState(collapseByDefault);
  const renderContent = () =>
    collapsable ? (
      <Collapse isExpand={!collapse}>{children}</Collapse>
    ) : (
      <div>{children}</div>
    );
  return (
    <StyledSectionWrapper className={className || ''}>
      {label && (
        <SectionInnerWrapper>
          <SectionHeader>
            <StyledHeader className={collapse ? 'collapse' : ''}>
              {label}{' '}
              {collapsable && (
                <StyledCollapseIndicator
                  size="sm"
                  icon={<ChevronDownSolidIcon size={20} />}
                  onClick={() => setCollapse(!collapse)}
                />
              )}
            </StyledHeader>
            <SectionSubheader>{sublabel}</SectionSubheader>
          </SectionHeader>
        </SectionInnerWrapper>
      )}
      {renderContent()}
    </StyledSectionWrapper>
  );
};
