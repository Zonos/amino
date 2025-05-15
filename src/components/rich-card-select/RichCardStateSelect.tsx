import clsx from 'clsx';

import { Card } from 'src/components/card/Card';
import { VStack } from 'src/components/stack/VStack';
import type { BaseProps } from 'src/types/BaseProps';
import type { UnitedState } from 'src/types/UnitedStates';

import styles from './RichCardStateSelect.module.scss';

export type RichCardStateSelectProps<T extends UnitedState = UnitedState> =
  BaseProps & {
    /**
     * Handler called when a state card is clicked
     * @param selectedState The state object that was selected
     */
    onClick: (selectedState: T) => void;
    /**
     * Array of state objects to display
     * Each state object should have code, name, region, and optional highlighted and icon properties
     */
    states: T[];
  };

/**
 * A component that displays US states organized by region in a card-based interface.
 * Each state is represented as a clickable card, grouped by geographic region.
 *
 * @example Basic usage
 * ```tsx
 * import type { UnitedState } from 'src/types/UnitedStates';
 *
 * const [selectedState, setSelectedState] = useState<UnitedState | null>(null);
 *
 * const states: UnitedState[] = [
 *   { code: 'CA', name: 'California', region: 'West' },
 *   { code: 'NY', name: 'New York', region: 'Northeast' },
 *   { code: 'TX', name: 'Texas', region: 'South' },
 *   { code: 'IL', name: 'Illinois', region: 'Midwest' }
 * ];
 *
 * <RichCardStateSelect
 *   onClick={setSelectedState}
 *   states={states}
 * />
 * ```
 *
 * @example With highlighted state
 * ```tsx
 * const states = [
 *   { code: 'CA', name: 'California', region: 'West', highlighted: true },
 *   { code: 'NY', name: 'New York', region: 'Northeast' },
 *   { code: 'TX', name: 'Texas', region: 'South' }
 * ];
 *
 * <RichCardStateSelect
 *   onClick={handleStateSelect}
 *   states={states}
 * />
 * ```
 *
 * @example With icons
 * ```tsx
 * const states = [
 *   {
 *     code: 'CA',
 *     name: 'California',
 *     region: 'West',
 *     icon: <FlagIcon code="US-CA" />
 *   },
 *   {
 *     code: 'NY',
 *     name: 'New York',
 *     region: 'Northeast',
 *     icon: <FlagIcon code="US-NY" />
 *   }
 * ];
 *
 * <RichCardStateSelect
 *   onClick={handleStateSelect}
 *   states={states}
 * />
 * ```
 */
export const RichCardStateSelect = <T extends UnitedState = UnitedState>({
  className,
  onClick,
  states,
  style,
}: RichCardStateSelectProps<T>) => {
  const regionOrder = ['West', 'Midwest', 'South', 'Northeast', 'Territories'];
  const regions = regionOrder.filter(region =>
    states.some(state => state.region === region),
  );

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
