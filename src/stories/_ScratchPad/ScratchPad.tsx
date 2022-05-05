import React from 'react';

import styled from 'styled-components';

import { VStack } from '~/src/components/Stack/VStack';

const StyledWrapper = styled.div`
  width: 412px;
  border: 1px solid gray;
`;

const ValueContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  padding: 2px 8px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const MultiValue = styled.div`
  background-color: hsl(0, 0%, 90%);
  border-radius: 2px;
  display: flex;
  margin: 2px;
  /* min-width: 0; */
  box-sizing: border-box;
`;

const Label = styled.div`
  border-radius: 2px;
  color: hsl(0, 0%, 20%);
  font-size: 85%;
  /* overflow: hidden; */
  padding: 3px;
  padding-left: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
`;

const Remove = styled.div`
  align-items: center;
  border-radius: 2px;
  display: flex;
  padding-left: 4px;
  padding-right: 4px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

const SecondMultiValue = styled.div`
  background-color: hsl(0, 0%, 90%);
  border-radius: 2px;
  display: flex;
  margin: 2px;
  /* min-width: 0; */
  box-sizing: border-box;
`;

const Option = ({ label }: { label: string }) => (
  <MultiValue>
    <Label>{label}</Label>
    <Remove>X</Remove>
  </MultiValue>
);

const SecondOption = ({ label }: { label: string }) => (
  <SecondMultiValue>
    <Label>{label}</Label>
    <Remove>X</Remove>
  </SecondMultiValue>
);

export const ScratchPad = () => {
  return (
    <VStack>
      <StyledWrapper>
        <ValueContainer>
          <Option label="France" />
          <Option label="Germany" />
          <Option label="Algeria" />
          <Option label="Angola" />
          <Option label="Benin" />
          <Option label="Austria" />
          <Option label="Greenland" />
          <Option label="Iceland" />
          <Option label="United States" />
        </ValueContainer>
      </StyledWrapper>
      <StyledWrapper>
        <Container>
          <SecondOption label="France" />
          <SecondOption label="Germany" />
          <SecondOption label="Algeria" />
          <SecondOption label="Angola" />
          <SecondOption label="Benin" />
          <SecondOption label="Austria" />
          <SecondOption label="Greenland" />
          <SecondOption label="Iceland" />
          <SecondOption label="United States" />
        </Container>
      </StyledWrapper>
    </VStack>
  );
};
