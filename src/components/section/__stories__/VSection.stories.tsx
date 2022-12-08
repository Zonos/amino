import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Input } from 'src/components/input/Input';
import { ListItem } from 'src/components/list-item/ListItem';
import { VSection, VSectionProps } from 'src/components/section/VSection';
import { VStack } from 'src/components/stack/VStack';
import { CartIcon } from 'src/icons/CartIcon';
import styled from 'styled-components';

const VSectionMeta: Meta = {
  component: VSection,
};

export default VSectionMeta;

const Template: Story<VSectionProps> = (props: VSectionProps) => (
  <VSection {...props} />
);

const StyledDiv = styled.div`
  border: 1px solid black;
`;

export const BasicVSection = Template.bind({});
BasicVSection.args = {
  children: (
    <StyledDiv>
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
    </StyledDiv>
  ),
  sublabel: 'Sublabel',
  label: 'My VSection',
};
BasicVSection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const VSectionWithActions = Template.bind({});
VSectionWithActions.args = {
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
  actions: (
    <>
      <Button size="md">Receipt</Button>
      <Button size="md">Cancel order</Button>
    </>
  ),
};
VSectionWithActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};