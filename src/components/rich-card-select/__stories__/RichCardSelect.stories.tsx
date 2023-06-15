import type { Meta, StoryFn } from '@storybook/react';
import {
  type RichCardSelectProps,
  RichCardSelect,
} from 'src/components/rich-card-select/RichCardSelect';

const RichCardSelectMeta: Meta = {
  component: RichCardSelect,
};

export default RichCardSelectMeta;

const Template: StoryFn<RichCardSelectProps> = ({
  type,
}: RichCardSelectProps) => <RichCardSelect type={type} />;

export const BasicRichCardSelect = Template.bind({});
BasicRichCardSelect.args = { type: 'state' };
BasicRichCardSelect.parameters = {};
