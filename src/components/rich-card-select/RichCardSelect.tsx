import { useUnitedStates } from 'src/utils/hooks/useStates';
import styled from 'styled-components';

import { Card } from '../card/Card';

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

const StateCard = styled(Card)`
  min-width: 180px;
  display: flex;
  gap: 32px;
  height: fit-content;
  align-items: center;
  font-weight: 500;
`;

export type RichCardSelectProps = {
  type: 'country' | 'state';
};

export const RichCardSelect = ({ type }: RichCardSelectProps) => {
  const { states } = useUnitedStates();

  if (type === 'state') {
    const regions = Array.from(new Set(states.map(state => state.region)));

    return (
      <Wrapper>
        {regions.map(region => (
          <div key={region}>
            <RegionLabel>{region}</RegionLabel>
            <RegionWrapper>
              {states
                .filter(state => state.region === region)
                .map(state => (
                  <StateCard key={state.code} spacing="10px">
                    {state.icon}
                    {state.name}
                  </StateCard>
                ))}
            </RegionWrapper>
          </div>
        ))}
      </Wrapper>
    );
  }

  return null;
};
