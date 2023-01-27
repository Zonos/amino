import { ReactNode, useState } from 'react';

import { HStack } from 'src/components/stack/HStack';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

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
  &:active,
  &:focus,
  &:hover {
    background: transparent;
    color: ${theme.gray800};
  }

  &.collapse {
    transform: rotate(-90deg);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export type HSectionProps = {
  children: ReactNode;
  className?: string;
  label?: ReactNode;
  sublabel?: ReactNode;
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
          <StyledDiv>
            {collapsable ? (
              <TitleDiv
                role="button"
                tabIndex={0}
                onClick={() => setCollapse(!collapse)}
                onKeyDown={() => null}
              >
                <Text type="title">{label}</Text>
                <StyledCollapseIndicator
                  className={collapse ? 'collapse' : ''}
                  size="sm"
                  icon={<ChevronDownIcon size={24} />}
                  onClick={() => setCollapse(!collapse)}
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
