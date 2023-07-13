import { type ReactNode, useState } from 'react';

import styled from 'styled-components';

import { HStack } from 'src/components/stack/HStack';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { theme } from 'src/styles/constants/theme';

import { Button } from '../button/Button';
import { Collapse } from '../collapse/Collapse';
import { Text } from '../text/Text';
import { SectionInnerWrapper } from './_SectionInnerWrapper';
import { SectionSubheader } from './_SectionSubheader';

const StyledSectionWrapper = styled(HStack)`
  padding: ${theme.space8};
  margin-bottom: ${theme.space40};
  grid-template-columns: 1fr 2fr;
`;

const StyledCollapseIndicator = styled(Button)`
  position: relative;
  margin-left: ${theme.space4};
  transition: 0.2s all ease;
  background: transparent;

  && {
    &:hover {
      path[data-is-secondary-color] {
        fill: ${theme.gray300};
      }
    }
    &:active,
    &:focus {
      path[data-is-secondary-color] {
        fill: ${theme.gray400};
      }
    }

    &:active,
    &:focus,
    &:hover {
      background: transparent;
      color: ${theme.gray800};
    }

    &.collapsed {
      transform: rotate(90deg);
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export type HSectionProps = {
  children: ReactNode;
  className?: string;
  /**
   * @info Initial collapse state. **Note**: only have effect when `collapsible` is specified
   * @default false
   * */
  collapseByDefault?: boolean;
  /**
   * @info Make the section content collapsible or not
   * @default false
   */
  collapsible?: boolean;
  label?: ReactNode;
  sublabel?: ReactNode;
};

export const HSection = ({
  children,
  className,
  collapseByDefault = false,
  collapsible = false,
  label,
  sublabel = '',
}: HSectionProps) => {
  const [collapsed, setCollapsed] = useState(collapseByDefault);
  const renderContent = () =>
    collapsible ? (
      <Collapse collapsed={collapsed}>{children}</Collapse>
    ) : (
      <div>{children}</div>
    );
  return (
    <StyledSectionWrapper className={className || ''}>
      {label && (
        <SectionInnerWrapper>
          <StyledDiv>
            {collapsible ? (
              <TitleDiv
                onClick={() => setCollapsed(!collapsed)}
                onKeyDown={() => null}
                role="button"
                tabIndex={0}
              >
                <Text type="title">{label}</Text>
                <StyledCollapseIndicator
                  className={collapsed ? 'collapsed' : ''}
                  icon={<ChevronUpIcon />}
                  intent="plain"
                  onClick={() => setCollapsed(!collapsed)}
                  size="sm"
                />
              </TitleDiv>
            ) : (
              <Text type="title">{label}</Text>
            )}

            {sublabel && <SectionSubheader>{sublabel}</SectionSubheader>}
          </StyledDiv>
        </SectionInnerWrapper>
      )}
      {renderContent()}
    </StyledSectionWrapper>
  );
};
