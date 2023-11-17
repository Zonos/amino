import styled from 'styled-components';

import { Card } from 'src/components/card/Card';
import { VStack } from 'src/components/stack/VStack';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { UnitedState } from 'src/types/UnitedStates';

const RegionLabel = styled.div`
  font-weight: bold;
`;

const RegionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space8};
`;

const StateCard = styled(Card)<{ $highlighted?: boolean }>`
  cursor: pointer;
  width: 180px;
  display: flex;
  gap: 24px;
  height: fit-content;
  align-items: center;
  font-weight: 500;
  flex: 0 0 180px;
  font-size: ${theme.fontSizeS};
  color: ${p => p.$highlighted && theme.blue600};
  background-color: ${p => p.$highlighted && theme.blue100};
  border: ${p => p.$highlighted && `2px solid ${theme.blue400}`};

  &:hover {
    background-color: ${p => !p.$highlighted && theme.gray50};
  }

  svg > path {
    stroke: ${p => p.$highlighted && theme.blue600};
    fill: ${p => p.$highlighted && theme.blue200};
  }
`;

export type RichCardStateSelectProps<T extends UnitedState = UnitedState> =
  BaseProps & {
    states: T[];
    onClick: (selectedState: T) => void;
  };

export const RichCardStateSelect = <T extends UnitedState = UnitedState>({
  className,
  onClick,
  states,
}: RichCardStateSelectProps<T>) => {
  const regions = Array.from(new Set(states.map(state => state.region)));

  const regionOrder = ['West', 'Midwest', 'South', 'Northeast'];

  regions.sort((a, b) => regionOrder.indexOf(a) - regionOrder.indexOf(b));

  return (
    <VStack className={className} spacing={24}>
      {regions.map(region => (
        <div key={region}>
          <VStack spacing={16}>
            <RegionLabel>{region}</RegionLabel>
            <RegionWrapper>
              {states
                .filter(state => state.region === region)
                .map(state => (
                  <button
                    key={state.code}
                    onClick={() => onClick(state)}
                    type="button"
                  >
                    <StateCard $highlighted={state.highlighted} spacing="10px">
                      {state.icon}
                      {state.name}
                    </StateCard>
                  </button>
                ))}
            </RegionWrapper>
          </VStack>
        </div>
      ))}
    </VStack>
  );
};
