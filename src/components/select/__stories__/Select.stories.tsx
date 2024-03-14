/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { Dialog } from 'src/components/dialog/Dialog';
import { type SelectProps, Select } from 'src/components/select/Select';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { FileIcon } from 'src/icons/FileIcon';
import { FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { type SelectOption } from 'src/types/SelectOption';

import styles from './Select.stories.module.scss';

const SelectMeta: Meta = {
  component: Select,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=1723%3A27908&mode=dev',
    },
  },
};

export default SelectMeta;

const SelectTemplate: StoryFn<SelectProps> = ({
  value: _value,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(_value);
  return (
    <div className={styles.styledWrapper}>
      <Select {...props} menuIsOpen onChange={setValue} value={value} />
    </div>
  );
};

const currencyOptions = [
  {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
  {
    label: 'European Euro (EUR)',
    value: 'EUR',
  },
  {
    label: 'Japanese Yen (JPY)',
    value: 'JPY',
  },
  {
    label: 'British Pound (GBP)',
    value: 'GBP',
  },
  {
    label: 'Swiss Frank (CHF)',
    value: 'CHF',
  },
  {
    label: 'Australian Dollar (AUD)',
    value: 'AUD',
  },
  {
    label: 'New Zealand Dollar (NZD)',
    value: 'NZD',
  },
];

export const BasicSelect = SelectTemplate.bind({});
BasicSelect.args = {
  label: 'Currencies',
  options: currencyOptions,
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
};

export const BasicSelectWithIcon = SelectTemplate.bind({});
BasicSelectWithIcon.args = {
  error: true,
  helpText: 'This input is required',
  icon: <FileIcon size={24} />,
  label: 'Currencies',
  options: currencyOptions,
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
};

export const BasicSelectWithOptionIcon = SelectTemplate.bind({});
BasicSelectWithOptionIcon.args = {
  icon: <FlagIcon code="AE" iconScale="medium" />,
  label: 'Currencies',
  options: [
    {
      icon: <FlagIcon code="AE" iconScale="small" />,
      label: 'US Dollar (USD)',
      value: 'USD',
    },
    {
      icon: <FlagIcon code="AD" iconScale="medium" />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
    {
      icon: <FlagIcon code="AE" iconScale="large" />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
};

export const SelectWithDeveloperException = SelectTemplate.bind({});
SelectWithDeveloperException.args = {
  icon: <FileIcon size={24} />,
  label: 'Currencies',
  options: [
    {
      icon: <FileIcon size={24} />,
      label: 'US Dollar (USD)',
      value: 'USD',
    },
    {
      icon: <FileIcon size={24} />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
  value: [
    {
      icon: <FileIcon size={24} />,
      label: 'US Dollar (USD)',
      value: 'USD',
    },
  ],
};

export const Customized = SelectTemplate.bind({});

const customOption: SelectProps['customOption'] = (value: string | number) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <Text color="blue500" fontWeight={800}>
      {value}
    </Text>
    <Text color="red500">{value}</Text>
  </div>
);

Customized.args = {
  customOption,
  icon: <FileIcon size={24} />,
  label: 'Currencies',
  options: [
    {
      icon: <FileIcon size={24} />,
      label: 'US Dollar (USD)',
      value: 'USD',
    },
    {
      icon: <FileIcon size={24} />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
  value: [
    {
      icon: <FileIcon size={24} />,
      label: 'US Dollar (USD)',
      value: 'USD',
    },
  ],
};

export const ScrollableDialogSelect = () => {
  const [value, setValue] = useState<SelectOption | null>({
    label: 'US Dollar (USD)',
    value: 'USD',
  });
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.centeredDiv}>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog label="Selects" onClose={() => setOpen(false)} open={open}>
        <VStack className={styles.styledVStack}>
          <span>
            Bacon ipsum dolor amet tongue ham hock pork chop, burgdoggen shank
            beef ribs beef buffalo cupim pork loin pastrami drumstick boudin.
            Pork chop drumstick cow porchetta, tri-tip turkey sausage shank pork
            loin turducken doner tenderloin ham. Sausage salami leberkas, rump
            prosciutto sirloin boudin pork chop ball tip bacon drumstick.
            Picanha pork chop bresaola jowl leberkas swine frankfurter, sausage
            tongue filet mignon pancetta ball tip rump turducken meatball. Pig
            brisket tongue, short loin ham alcatra fatback pork belly ribeye
            tail. Pork loin strip steak salami beef burgdoggen spare ribs t-bone
            brisket. Beef ribs bresaola filet mignon alcatra fatback venison
            spare ribs chuck ham hock. Chuck shoulder flank buffalo shankle
            capicola doner. Rump tongue sausage, turducken jerky spare ribs
            leberkas corned beef biltong andouille shankle landjaeger beef.
            Shankle buffalo tail sausage bresaola frankfurter. Drumstick short
            loin pastrami cupim, pork chop tri-tip hamburger prosciutto
            tenderloin filet mignon ham flank tail pork loin jerky. Ground round
            filet mignon tri-tip, ribeye short loin kevin venison. Shankle
            meatball pork chop beef ribs landjaeger flank jowl cupim. Filet
            mignon pork belly andouille bacon tenderloin salami fatback
            leberkas. Meatball biltong andouille drumstick ground round. Beef
            ribs tail ball tip fatback, flank kevin short ribs jerky rump
            prosciutto frankfurter chislic bresaola. Chislic filet mignon
            picanha, beef t-bone short loin capicola ribeye shoulder cupim cow
            salami sausage tongue. Salami jowl andouille pig filet mignon
            sausage pork belly bacon. Beef cow porchetta, sirloin doner fatback
            pig leberkas jowl. Ground round prosciutto shank, cupim corned beef
            kielbasa beef ribs rump cow shoulder. Pastrami strip steak buffalo
            shankle. Pastrami andouille ribeye, sirloin capicola turkey
            hamburger ground round short loin fatback filet mignon. Buffalo ham
            capicola t-bone jowl. Ham alcatra landjaeger cow pastrami beef
            brisket chicken andouille venison prosciutto pork belly tenderloin
            corned beef t-bone.
          </span>
          <Select
            closeOnOutsideScroll
            label="Close on scroll"
            onChange={setValue}
            options={currencyOptions}
            value={value}
          />
          <Select
            label="Normal"
            onChange={setValue}
            options={currencyOptions}
            value={value}
          />
        </VStack>
      </Dialog>
    </div>
  );
};

export const SelectWithNumberOptions = () => {
  const [value, setValue] = useState<number>(1);
  const options = [
    {
      icon: <FileIcon size={24} />,
      label: 'US Dollar (USD)',
      value: 1,
    },
    {
      icon: <FileIcon size={24} />,
      label: 'European Euro (EUR)',
      value: 2,
    },
  ];
  return (
    <div>
      <Select
        icon={<FileIcon size={24} />}
        label="Currencies"
        onChange={item => item?.value && setValue(item.value)}
        options={options}
        value={options.find(option => option.value === value) || null}
      />
      Selected value: {value} (typeof value: {typeof value})
    </div>
  );
};

export const Variants: StoryObj<SelectProps> = {
  args: {
    label: 'Label',
  },
  render: ({ ...props }) => {
    console.log('WHAT THE HECK');
    const [value, setValue] = useState<number>(1);

    const options = [
      {
        icon: <FileIcon size={24} />,
        label: 'US Dollar (USD)',
        value: 1,
      },
      {
        icon: <FileIcon size={24} />,
        label: 'European Euro (EUR)',
        value: 2,
      },
    ];

    const handleChange = (item: SelectOption | null) => {
      if (item?.value) {
        setValue(item.value);
      }
    };

    const valueProp = options.find(option => option.value === value) || null;

    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(3, 1fr)',
          width: '100%',
        }}
      >
        <VStack>
          <Text>Inline label</Text>
          <Select
            {...props}
            onChange={handleChange}
            options={options}
            size="sm"
            value={valueProp}
          />
          <Select
            {...props}
            onChange={handleChange}
            options={options}
            size="md"
            value={valueProp}
          />
          <Select
            {...props}
            onChange={handleChange}
            options={options}
            size="lg"
            value={valueProp}
          />
        </VStack>
        <VStack>
          <Text>No label</Text>
          <Select
            {...props}
            label={undefined}
            onChange={handleChange}
            options={options}
            size="sm"
            value={valueProp}
          />
          <Select
            {...props}
            label={undefined}
            onChange={handleChange}
            options={options}
            size="md"
            value={valueProp}
          />
          <Select
            {...props}
            label={undefined}
            onChange={handleChange}
            options={options}
            size="lg"
            value={valueProp}
          />
        </VStack>
        <VStack>
          <Text>Icon</Text>
          <Select
            {...props}
            label={undefined}
            onChange={handleChange}
            options={options}
            size="sm"
            value={valueProp}
          />
          <Select
            {...props}
            label={undefined}
            onChange={handleChange}
            options={options}
            size="md"
            value={valueProp}
          />
          <Select
            {...props}
            label={undefined}
            onChange={handleChange}
            options={options}
            size="lg"
            value={valueProp}
          />
        </VStack>
      </div>
    );
  },
};
