import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Dialog } from 'src/components/dialog/Dialog';
import { IOption } from 'src/components/select/_StyledReactSelect';
import { Select, SelectProps } from 'src/components/select/Select';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { FileIcon } from 'src/icons/FileIcon';
import { FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 412px;
`;

const SelectMeta: Meta = {
  title: 'Amino/Select',
  component: Select,
  decorators: [withDesign],
};

export default SelectMeta;

const SelectTemplate: Story<SelectProps> = ({
  value: _value,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(_value);
  return (
    <StyledWrapper>
      <Select {...props} onChange={setValue} value={value} />
    </StyledWrapper>
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
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
  options: currencyOptions,
};

BasicSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const BasicSelectWithIcon = SelectTemplate.bind({});

BasicSelectWithIcon.args = {
  error: true,
  helpText: 'This input is required',
  icon: <FileIcon size={20} />,
  label: 'Currencies',
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
  options: currencyOptions,
};

BasicSelectWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const BasicSelectWithOptionIcon = SelectTemplate.bind({});

BasicSelectWithOptionIcon.args = {
  icon: <FlagIcon code="AE" iconScale="medium" />,
  label: 'Currencies',
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
  options: [
    {
      label: 'US Dollar (USD)',
      icon: <FlagIcon code="AE" iconScale="small" />,
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
};

BasicSelectWithOptionIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const SelectWithDeveloperException = SelectTemplate.bind({});

SelectWithDeveloperException.args = {
  icon: <FileIcon size={20} />,
  label: 'Currencies',
  value: [
    {
      label: 'US Dollar (USD)',
      icon: <FileIcon size={14} />,
      value: 'USD',
    },
    {
      icon: <FileIcon size={14} />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
  options: [
    {
      label: 'US Dollar (USD)',
      icon: <FileIcon size={14} />,
      value: 'USD',
    },
    {
      icon: <FileIcon size={14} />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
};

SelectWithDeveloperException.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledVStack = styled(VStack)`
  margin: 10px 0;
`;

export const ScrollableDialogSelect = () => {
  const [value, setValue] = useState<IOption | null>({
    label: 'US Dollar (USD)',
    value: 'USD',
  });
  const [open, setOpen] = useState(false);

  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog label="Selects" open={open} onClose={() => setOpen(false)}>
        <StyledVStack>
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
            label="Close on scroll"
            options={currencyOptions}
            onChange={setValue}
            value={value}
            closeOnOutsideScroll
          />
          <Select
            label="Normal"
            options={currencyOptions}
            onChange={setValue}
            value={value}
          />
        </StyledVStack>
      </Dialog>
    </CenteredDiv>
  );
};
