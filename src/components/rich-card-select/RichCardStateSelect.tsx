import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { UnitedState } from 'src/types/UnitedStates';

import { Card } from '../card/Card';
import { VStack } from '../stack/VStack';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RegionLabel = styled.div`
  font-weight: bold;
`;

const RegionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const StateCard = styled(Card)<{ highlighted: boolean | undefined }>`
  min-width: 180px;
  display: flex;
  gap: 24px;
  height: fit-content;
  align-items: center;
  font-weight: 500;
  flex: 0 0 180px;
  font-size: ${theme.fontSizeS};
  color: ${p => p.highlighted && theme.blue600};
  background-color: ${p => p.highlighted && theme.blue100};
  border: ${p => p.highlighted && `1px solid ${theme.blue400}`};

  svg > path {
    stroke: ${p => p.highlighted && theme.blue600};
    fill: ${p => p.highlighted && theme.blue200};
  }
`;

export type RichCardStateSelectProps = {
  states: UnitedState[];
  onClick: (selectedState: UnitedState) => void;
};

export const RichCardStateSelect = ({
  onClick,
  states,
}: RichCardStateSelectProps) => {
  const regions = Array.from(new Set(states.map(state => state.region)));

  return (
    <Wrapper>
      {regions.map(region => (
        <div key={region}>
          <VStack spacing={8}>
            <RegionLabel>{region}</RegionLabel>
            <RegionWrapper>
              {states
                .filter(state => state.region === region)
                .map(state => (
                  <button onClick={() => onClick(state)} type="button">
                    <StateCard
                      key={state.code}
                      highlighted={state.highlighted}
                      spacing="10px"
                    >
                      {state.icon}
                      {state.name}
                    </StateCard>
                  </button>
                ))}
            </RegionWrapper>
          </VStack>
        </div>
      ))}
    </Wrapper>
  );
};
