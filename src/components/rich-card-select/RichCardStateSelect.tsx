import clsx from 'clsx';

import { Card } from 'src/components/card/Card';
import { VStack } from 'src/components/stack/VStack';
import type { BaseProps } from 'src/types/BaseProps';
import type { UnitedState } from 'src/types/UnitedStates';

import styles from './RichCardStateSelect.module.scss';

export type RichCardStateSelectProps<T extends UnitedState = UnitedState> =
  BaseProps & {
    onClick: (selectedState: T) => void;
    states: T[];
  };

export const RichCardStateSelect = <T extends UnitedState = UnitedState>({
  className,
  onClick,
  states,
  style,
}: RichCardStateSelectProps<T>) => {
  const regions = Array.from(new Set(states.map(state => state.region)));

  const regionOrder = ['West', 'Midwest', 'South', 'Northeast'];

  regions.sort((a, b) => regionOrder.indexOf(a) - regionOrder.indexOf(b));

  return (
    <VStack className={className} spacing={24} style={style}>
      {regions.map(region => (
        <div key={region}>
          <VStack spacing={16}>
            <div className={styles.regionLabel}>{region}</div>
            <div className={styles.regionWrapper}>
              {states
                .filter(state => state.region === region)
                .map(state => (
                  <button
                    key={state.code}
                    onClick={() => onClick(state)}
                    type="button"
                  >
                    <Card
                      className={clsx(
                        styles.stateCard,
                        state.highlighted && styles.highlighted,
                      )}
                      spacing="10px"
                    >
                      {state.icon}
                      {state.name}
                    </Card>
                  </button>
                ))}
            </div>
          </VStack>
        </div>
      ))}
    </VStack>
  );
};
