import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { Input } from 'src/components/input/Input';
import { ListItem } from 'src/components/list-item/ListItem';
import { VSection, type VSectionProps } from 'src/components/section/VSection';
import { VStack } from 'src/components/stack/VStack';
import { textOptions } from 'src/components/text/Text';
import { CartIcon } from 'src/icons/CartIcon';

import styles from './VSection.stories.module.scss';

const VSectionMeta: Meta = {
  argTypes: {
    labelType: {
      control: { type: 'select' },
      options: textOptions.map(x => x.type),
    },
  },
  component: VSection,
};

export default VSectionMeta;

const Template: StoryFn<VSectionProps> = (props: VSectionProps) => (
  <VSection {...props} />
);

export const BasicVSection = Template.bind({});
BasicVSection.args = {
  children: (
    <div className={styles.styledDiv}>
      <h2>VSection Contents</h2>
      <p>
        Bacon ipsum dolor amet salami bresaola flank burgdoggen strip steak.
        Meatball beef ribs hamburger, porchetta sirloin turkey frankfurter
        landjaeger pig t-bone. Pork chop turkey kevin sirloin short loin strip
        steak. Tail spare ribs porchetta pancetta tri-tip shoulder short loin
        prosciutto turkey bresaola landjaeger leberkas chislic boudin. Meatloaf
        strip steak cupim pig, shankle short loin hamburger corned beef tongue.
        Chuck shankle tongue drumstick flank, pastrami buffalo ham short loin
        porchetta meatloaf andouille alcatra. Ham porchetta buffalo biltong,
        turducken capicola tenderloin picanha hamburger bacon turkey short loin.
        Sausage shoulder tongue jerky corned beef, chicken tenderloin swine
        venison andouille bacon shank ground round. Short loin drumstick jerky
        swine, corned beef sausage kevin chuck sirloin chislic leberkas. Boudin
        doner beef ribs brisket pastrami pork belly turkey frankfurter, flank
        leberkas spare ribs kevin. Pig tenderloin pastrami, turducken sausage
        ham ball tip pork ham hock brisket salami. Chicken picanha salami, rump
        frankfurter ground round pork belly kevin.
      </p>
    </div>
  ),
  label: 'My VSection',
  sublabel: 'Sublabel',
};
BasicVSection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const VSectionWithActions = Template.bind({});
VSectionWithActions.args = {
  actions: (
    <>
      <Button size="md">Receipt</Button>
      <Button size="md">Cancel order</Button>
    </>
  ),
  children: (
    <>
      <Input label="An input" onChange={() => null} value="value" />
      <VStack>
        <ListItem
          decorator={<CartIcon />}
          label="**** 1234"
          subtitle="processed with Stripe"
        />
      </VStack>
    </>
  ),
  label: 'Payment',
  sublabel: 'Sublabel',
};
VSectionWithActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};
