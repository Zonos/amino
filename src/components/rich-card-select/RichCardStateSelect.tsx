import { Card } from 'src/components/card/Card';
import { VStack } from 'src/components/stack/VStack';
import type { BaseProps } from 'src/types/BaseProps';
import type { UnitedState } from 'src/types/UnitedStates';
import { cn } from 'src/utils/cn';
import { translateAminoText as translate } from 'src/utils/translations/__amino__/translateAminoText';
import { useCurrentLanguage } from 'src/utils/translations/AminoTranslationStore';

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
  const languageCode = useCurrentLanguage();
  const regionOrder: Array<{
    key: UnitedState['region'];
    label: string;
  }> = [
    {
      key: 'West',
      label: translate({
        languageCode,
        text: 'West --context: region name for the United States',
      }),
    },
    {
      key: 'Midwest',
      label: translate({
        languageCode,
        text: 'Midwest --context: region name for the United States',
      }),
    },
    {
      key: 'South',
      label: translate({
        languageCode,
        text: 'South --context: region name for the United States',
      }),
    },
    {
      key: 'Northeast',
      label: translate({
        languageCode,
        text: 'Northeast --context: region name for the United States',
      }),
    },
    {
      key: 'Territories',
      label: translate({
        languageCode,
        text: 'Territories --context: region name for the United States',
      }),
    },
  ];
  const regions = regionOrder.filter(region =>
    states.some(state => state.region === region.key),
  );

  return (
    <VStack className={className} spacing={24} style={style}>
      {regions.map(region => (
        <div key={region.key}>
          <VStack spacing={16}>
            <div className="font-bold">{region.label}</div>
            <div className="flex flex-wrap gap-2">
              {states
                .filter(state => state.region === region.key)
                .map(state => (
                  <button
                    key={state.code}
                    onClick={() => onClick(state)}
                    type="button"
                  >
                    <Card
                      className={cn(
                        'cursor-pointer w-[180px] flex gap-6 h-fit items-center font-medium',
                        'flex-[0_0_180px] text-amino-s',
                        'hover:bg-gray-50',
                        state.highlighted &&
                          cn(
                            'text-blue-600 bg-blue-50 border-2 border-blue-400',
                            '[&_svg>path]:stroke-blue-600 [&_svg>path]:fill-blue-200',
                          ),
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
