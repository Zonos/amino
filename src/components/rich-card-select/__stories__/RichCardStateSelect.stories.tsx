import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import { Dialog } from 'src/components/dialog/Dialog';
import {
  type RichCardStateSelectProps,
  RichCardStateSelect,
} from 'src/components/rich-card-select/RichCardStateSelect';
import type { UnitedState } from 'src/types/UnitedStates';
import { unitedStates } from 'src/utils/unitedStates';

const RichCardStateSelectMeta: Meta = {
  component: RichCardStateSelect,
};

export default RichCardStateSelectMeta;

const Template: StoryFn<RichCardStateSelectProps> = ({
  states,
}: RichCardStateSelectProps) => {
  const [selectedState, setSelectedState] = useState<UnitedState | null>(null);
  return (
    <>
      <RichCardStateSelect onClick={setSelectedState} states={states} />

      <Dialog
        actions={
          <>
            <Button intent="outline" onClick={() => setSelectedState(null)}>
              Close
            </Button>

            <Button intent="primary" onClick={() => setSelectedState(null)}>
              Save {selectedState?.name} data
            </Button>
          </>
        }
        label={`${selectedState?.name} label!`}
        onClose={() => setSelectedState(null)}
        open={!!selectedState}
        subtitle={`This is a subtitle for ${selectedState?.name}`}
      >
        This dialog is for {selectedState?.name}!
      </Dialog>
    </>
  );
};

const usStates = [...unitedStates];
const modifiedState = usStates.find(state => state.code === 'CA');
if (modifiedState) {
  modifiedState.highlighted = true;
}

export const BasicRichCardStateSelect = Template.bind({});
BasicRichCardStateSelect.args = { states: unitedStates };
BasicRichCardStateSelect.parameters = {};
