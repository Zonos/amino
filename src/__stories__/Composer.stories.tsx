import { Fragment, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { Dialog } from 'src/components/dialog/Dialog';
import { Input } from 'src/components/input/Input';
import { Select } from 'src/components/select/Select';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { MinusIcon } from 'src/icons/MinusIcon';
import { PlusIcon } from 'src/icons/PlusIcon';
import type { Size } from 'src/types/Size';

import styles from './Composer.stories.module.scss';

const ComposerMeta: Meta = {
  component: () => <div />,
};

export default ComposerMeta;

const InputOption = ({
  size,
  withValue,
}: {
  size: Size;
  withValue: boolean;
}) => (
  <Input
    label={`input-${size}`}
    onChange={() => {}}
    size={size}
    value={withValue ? size : ''}
  />
);
const getInputOptions = ({
  withValue,
}: {
  withValue: boolean;
}): { label: `input-${Size}`; value: () => React.JSX.Element }[] => [
  {
    label: 'input-sm',
    value: () => <InputOption size="sm" withValue={withValue} />,
  },
  {
    label: 'input-md',
    value: () => <InputOption size="md" withValue={withValue} />,
  },
  {
    label: 'input-lg',
    value: () => <InputOption size="lg" withValue={withValue} />,
  },
  {
    label: 'input-xl',
    value: () => <InputOption size="xl" withValue={withValue} />,
  },
];

const SelectOption = ({
  size,
  withValue,
}: {
  size: Size;
  withValue: boolean;
}) => (
  <Select
    label={`select-${size}`}
    onChange={() => {}}
    options={[{ label: size, value: size }]}
    size={size}
    value={withValue ? [{ label: size, value: size }] : []}
  />
);
const getSelectOptions = ({
  withValue,
}: {
  withValue: boolean;
}): { label: `select-${Size}`; value: () => React.JSX.Element }[] => [
  {
    label: 'select-sm',
    value: () => <SelectOption size="sm" withValue={withValue} />,
  },
  {
    label: 'select-md',
    value: () => <SelectOption size="md" withValue={withValue} />,
  },
  {
    label: 'select-lg',
    value: () => <SelectOption size="lg" withValue={withValue} />,
  },
  {
    label: 'select-xl',
    value: () => <SelectOption size="xl" withValue={withValue} />,
  },
];

const ButtonOption = ({ size }: { size: Size }) => (
  <Button size={size} variant="primary">
    button-{size}
  </Button>
);
const getButtonOptions = (): {
  label: `button-${Size}`;
  value: () => React.JSX.Element;
}[] => [
  {
    label: 'button-sm',
    value: () => <ButtonOption size="sm" />,
  },
  {
    label: 'button-md',
    value: () => <ButtonOption size="md" />,
  },
  {
    label: 'button-lg',
    value: () => <ButtonOption size="lg" />,
  },
  {
    label: 'button-xl',
    value: () => <ButtonOption size="xl" />,
  },
];

const range = (num: number) => Array.from(Array(num).keys()) as number[];

type OptionLabel = `${'button' | 'input' | 'select'}-${Size}`;
type DynamicComponent = {
  [key: string]: OptionLabel | null;
};

type Props = {
  columns: number;
  components: DynamicComponent;
  rows: number;
  withValue: boolean;
};

const Template: StoryFn<Props> = ({
  columns: _columns,
  components: _components,
  rows: _rows,
  withValue = false,
}: Props) => {
  const [openRowCol, setOpenRowCol] = useState<string | null>(null);
  const [columns, setColumns] = useState(_columns);
  const [rows, setRows] = useState(_rows);
  const [components, setComponents] = useState<DynamicComponent>(_components);

  const inputOptions = getInputOptions({ withValue });
  const selectOptions = getSelectOptions({ withValue });
  const buttonOptions = getButtonOptions();
  const renderDialogOptions = (
    options: typeof inputOptions | typeof selectOptions | typeof buttonOptions,
  ) => (
    <HStack className={styles.styledHStack} spacing={8}>
      {options.map(x => (
        <div
          key={x.label}
          onClick={() => {
            if (openRowCol) {
              components[openRowCol] = x.label;
              setComponents(components);
              setOpenRowCol(null);
            }
          }}
        >
          <x.value />
        </div>
      ))}
    </HStack>
  );
  return (
    <>
      <VStack>
        <div className={styles.styledActions}>
          Column
          <Button
            disabled={!columns}
            icon={<MinusIcon size={16} />}
            onClick={() => setColumns(columns - 1)}
          />
          <Button
            icon={<PlusIcon size={16} />}
            onClick={() => setColumns(columns + 1)}
          />
          Row
          <Button
            disabled={!rows}
            icon={<MinusIcon size={16} />}
            onClick={() => setRows(rows - 1)}
          />
          <Button
            icon={<PlusIcon size={16} />}
            onClick={() => setRows(rows + 1)}
          />
        </div>

        {range(rows).map(row => (
          <HStack key={row} className={styles.styledHStack} spacing={8}>
            {range(columns).map(column => {
              const rowCol = `${column}-${row}`;
              const Component = [
                ...selectOptions,
                ...buttonOptions,
                ...inputOptions,
              ].find(x => x.label === components[rowCol])?.value;

              return (
                <Fragment key={rowCol}>
                  {Component ? (
                    <Component />
                  ) : (
                    <Button
                      icon={<PlusIcon size={16} />}
                      onClick={() => setOpenRowCol(rowCol)}
                    />
                  )}
                </Fragment>
              );
            })}
          </HStack>
        ))}
      </VStack>
      <Dialog
        onClose={() => setOpenRowCol(null)}
        open={!!openRowCol}
        width={650}
      >
        <VStack>
          {renderDialogOptions(inputOptions)}
          {renderDialogOptions(selectOptions)}
          {renderDialogOptions(buttonOptions)}
        </VStack>
      </Dialog>
    </>
  );
};

export const ComposerWithValue = Template.bind({});
ComposerWithValue.args = {
  columns: 3,
  components: {
    '0-0': 'input-sm',
    '0-1': 'input-md',
    '0-2': 'input-lg',
    '0-3': 'input-xl',
    '1-0': 'select-sm',
    '1-1': 'select-md',
    '1-2': 'select-lg',
    '1-3': 'select-xl',
    '2-0': 'button-sm',
    '2-1': 'button-md',
    '2-2': 'button-lg',
    '2-3': 'button-xl',
  },
  rows: 4,
  withValue: true,
};

export const ComposerWithoutValue = Template.bind({});
ComposerWithoutValue.args = {
  columns: 3,
  components: {
    '0-0': 'input-sm',
    '0-1': 'input-md',
    '0-2': 'input-lg',
    '0-3': 'input-xl',
    '1-0': 'select-sm',
    '1-1': 'select-md',
    '1-2': 'select-lg',
    '1-3': 'select-xl',
    '2-0': 'button-sm',
    '2-1': 'button-md',
    '2-2': 'button-lg',
    '2-3': 'button-xl',
  },
  rows: 4,
};
