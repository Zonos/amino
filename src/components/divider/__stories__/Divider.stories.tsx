import type { Meta } from '@storybook/react';

import { Card } from 'src/components/card/Card';
import { Divider } from 'src/components/divider/Divider';
import { Text } from 'src/components/text/Text';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { ArrowLeftIcon } from 'src/icons/ArrowLeftIcon';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { ArrowUpIcon } from 'src/icons/ArrowUpIcon';
import { CircleIcon } from 'src/icons/CircleIcon';

const DividerMeta: Meta = {
  component: Divider,
};

export default DividerMeta;

export const Basic = () => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-5">
      <Text type="title">Vertical</Text>
      <div className="flex justify-evenly border border-amino rounded-amino6">
        <ArrowLeftIcon />
        <Divider vertical />
        <CircleIcon />
        <Divider vertical />
        <ArrowRightIcon />
      </div>
      <div className="flex justify-evenly border border-amino rounded-amino6 p-2">
        <ArrowLeftIcon />
        <Divider vertical />
        <CircleIcon />
        <Divider vertical />
        <ArrowRightIcon />
      </div>
      <div className="flex justify-evenly border border-amino rounded-amino6 p-2">
        <ArrowLeftIcon />
        <Divider className="-m-2" vertical />
        <CircleIcon />
        <Divider className="-m-2" vertical />
        <ArrowRightIcon />
      </div>
    </div>
    <Text type="title">Horizontal</Text>
    <div className="flex gap-5">
      <div className="flex flex-col justify-evenly border border-amino rounded-amino6">
        <ArrowUpIcon />
        <Divider />
        <CircleIcon />
        <Divider />
        <ArrowDownIcon />
      </div>
      <div className="flex flex-col justify-evenly border border-amino rounded-amino6 p-2">
        <ArrowUpIcon />
        <Divider />
        <CircleIcon />
        <Divider />
        <ArrowDownIcon />
      </div>
      <div className="flex flex-col justify-evenly border border-amino rounded-amino6 p-2">
        <ArrowUpIcon />
        <Divider className="-mx-2" />
        <CircleIcon />
        <Divider className="-mx-2" />
        <ArrowDownIcon />
      </div>
    </div>
  </div>
);

export const InCard = () => (
  <Card label="Default">
    <div>
      Cards automatically add negative margin to <code>{'<hr/>'}</code> tags
    </div>

    <Divider />

    <div>Some other stuff</div>
  </Card>
);
