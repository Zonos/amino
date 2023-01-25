import { Meta } from '@storybook/react/types-6-0';
import { Text } from 'src/components/text/Text';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { ArrowLeftIcon } from 'src/icons/ArrowLeftIcon';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { ArrowUpIcon } from 'src/icons/ArrowUpIcon';
import { CircleIcon } from 'src/icons/CircleIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Divider as DividerComponent } from '../Divider';

const DividerMeta: Meta = {
  component: DividerComponent,
};

export default DividerMeta;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const RowInset = styled.div`
  padding: ${theme.space8};
  border: ${theme.border};
  border-radius: ${theme.radius6};
  display: flex;
  justify-content: space-evenly;
`;

const Row = styled(RowInset)`
  padding: 0;
  /* Put padding inside each item to allow the divider to be full size */
  > svg {
    margin: ${theme.space8};
  }
`;

const ColumnInset = styled.div`
  padding: ${theme.space8};
  border: ${theme.border};
  border-radius: ${theme.radius6};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Column = styled(ColumnInset)`
  padding: 0;
  /* Put padding inside each item to allow the divider to be full size */
  > svg {
    margin: ${theme.space8};
  }
`;

// These dividers have custom styling to not appear inset when the container has the padding. There are multiple approaches to make it full size, as demonstrated here.

const StyledDividerVertical = styled(DividerComponent)`
  margin: ${theme.spaceNegative8} 0;
`;

const StyledDividerHorizontal = styled(DividerComponent)`
  margin: 0 ${theme.spaceNegative8};
`;

export const Divider = () => (
  <Wrapper>
    <Wrapper>
      <Text type="title">Vertical</Text>
      <Row>
        <ArrowLeftIcon />
        <DividerComponent vertical />
        <CircleIcon />
        <DividerComponent vertical />
        <ArrowRightIcon />
      </Row>
      <RowInset>
        <ArrowLeftIcon />
        <DividerComponent vertical />
        <CircleIcon />
        <DividerComponent vertical />
        <ArrowRightIcon />
      </RowInset>
      <RowInset>
        <ArrowLeftIcon />
        <StyledDividerVertical vertical />
        <CircleIcon />
        <StyledDividerVertical vertical />
        <ArrowRightIcon />
      </RowInset>
    </Wrapper>
    <Text type="title">Horizontal</Text>
    <ColumnWrapper>
      <Column>
        <ArrowUpIcon />
        <DividerComponent />
        <CircleIcon />
        <DividerComponent />
        <ArrowDownIcon />
      </Column>
      <ColumnInset>
        <ArrowUpIcon />
        <DividerComponent />
        <CircleIcon />
        <DividerComponent />
        <ArrowDownIcon />
      </ColumnInset>
      <ColumnInset>
        <ArrowUpIcon />
        <StyledDividerHorizontal />
        <CircleIcon />
        <StyledDividerHorizontal />
        <ArrowDownIcon />
      </ColumnInset>
    </ColumnWrapper>
  </Wrapper>
);
