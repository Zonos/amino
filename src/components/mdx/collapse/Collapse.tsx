import { ReactNode, useState } from 'react';

import { Button } from 'src/components/button/Button';
import { Collapse as AminoCollapse } from 'src/components/collapse/Collapse';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { theme } from 'src/styles/constants/theme';
import { getHashId } from 'src/utils/getHashId';
import styled from 'styled-components';

import { Section } from '../section/Section';

const StyledSection = styled(Section)`
  border-top: 1px solid ${theme.gray200};
  border-bottom: 1px solid ${theme.gray200};
  padding: 16px 0;
  border-radius: 0;
  margin: 0 16px;

  & + & {
    border-top: none;
  }
`;

const StepNumber = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: ${theme.gray500};
`;

const Label = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding-bottom: ${({ isCollapsed }) => (isCollapsed ? '0' : '16px')};
  transition: padding-bottom 0.3s ease;

  > div {
    display: flex;
    gap: 20px;
    align-items: center;
    padding-right: 16px;

    > h2 {
      font-size: 22px;
      font-weight: 600;
      margin: 0;
      padding-top: 0;
      display: inline-block;
    }
  }
`;

const ChevronDownIconStyled = styled(ChevronDownIcon)<{ isCollapsed: boolean }>`
  transition: 0.2s ease;
  transform: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'rotate(-180deg)')};
`;

export type Props = {
  stepNumber?: number;
  collapse?: boolean;
  children: ReactNode;
};

export const Collapse = ({ stepNumber, collapse = false, children }: Props) => {
  console.log('COLLAPSE');
  const [isCollapsed, setIsCollapsed] = useState(collapse);
  const firstChild = Array.isArray(children) && children?.find(Boolean);

  const labelWithLink =
    (firstChild.type?.name === 'h2' || firstChild.type === 'h2') && firstChild;
  if (!labelWithLink) {
    throw new Error('Expecting first child of MdxCollapse to have an H2 label');
  }

  const content =
    labelWithLink && children.filter(node => node !== labelWithLink);

  const hashId =
    labelWithLink.type?.name === 'h2'
      ? getHashId(labelWithLink.props?.children)
      : labelWithLink.props?.children?.id;

  const label =
    labelWithLink.type?.name === 'h2'
      ? labelWithLink.props?.children
      : labelWithLink.props?.children?.props?.title;

  return (
    <StyledSection>
      <Label
        isCollapsed={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div>
          {stepNumber && <StepNumber>{stepNumber}</StepNumber>}
          <h2 id={hashId}>{label}</h2>
        </div>
        <Button
          intent="plain"
          icon={<ChevronDownIconStyled isCollapsed={isCollapsed} />}
        />
      </Label>

      <AminoCollapse collapsed={isCollapsed}>
        {content || children}
      </AminoCollapse>
    </StyledSection>
  );
};
