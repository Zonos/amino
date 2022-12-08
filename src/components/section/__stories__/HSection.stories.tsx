import { useEffect, useState } from '@storybook/addons';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Input } from 'src/components/input/Input';
import { HSection, HSectionProps } from 'src/components/section/HSection';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import styled from 'styled-components';
import { v4 } from 'uuid';

const HSectionMeta: Meta = {
  component: HSection,
};

export default HSectionMeta;

const Template: Story<HSectionProps> = (props: HSectionProps) => {
  const [input, setInput] = useState('');
  const [renderDelay, setRenderDelay] = useState(false);
  const { collapseByDefault, collapsable } = props;

  useEffect(() => {
    const interval = setTimeout(() => {
      setRenderDelay(true);
    }, 1500);
    return () => {
      clearTimeout(interval);
    };
  }, [renderDelay]);
  return (
    <VStack>
      <HSection {...props} />
      <HSection
        label="Collapsable HSection"
        sublabel={
          <Button onClick={() => setRenderDelay(false)}>Reset delay</Button>
        }
        collapsable={collapsable}
        collapseByDefault={collapseByDefault}
      >
        <VStack>
          <Input
            label="No delay input"
            onChange={e => setInput(e.target.value)}
            value={input}
          />

          {renderDelay ? (
            <Input
              label="Delay input"
              onChange={e => setInput(e.target.value)}
              value={input}
            />
          ) : (
            <Text>Another input will appear after 1.5 second</Text>
          )}
        </VStack>
      </HSection>
    </VStack>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt
  illo asperiores quasi! Neque, praesentium.
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  label: 'My HSection',
};

export const Collapsable = Template.bind({});
Collapsable.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt
  illo asperiores quasi! Neque, praesentium.
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  sublabel: `SUB TITLE Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt
  illo asperiores quasi! Neque, praesentium.
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  label: 'My HSection',
  collapsable: true,
};

export const CollapsedByDefault = Template.bind({});
CollapsedByDefault.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt
  illo asperiores quasi! Neque, praesentium.
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  sublabel: `SUB TITLE Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt
  illo asperiores quasi! Neque, praesentium.
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  label: 'My HSection',
  collapsable: true,
  collapseByDefault: true,
};

const StyledVStack = styled(VStack)`
  max-width: 600px;
`;

export const VariableList = () => {
  const [collapsable, setCollapsable] = useState(true);
  const [items, setItems] = useState<string[]>(['Couch']);

  const removeItem = (index: number) => {
    setItems(prevIems => {
      const newItems = [...prevIems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const addItem = () => {
    setItems(prevItems => [...prevItems, v4()]);
  };

  return (
    <StyledVStack>
      <Checkbox
        label="Collapsable"
        checked={collapsable}
        onChange={e => setCollapsable(e.valueOf())}
      />
      <Button onClick={() => setItems([])}>Clear</Button>
      <HSection label="Variable length list" collapsable={collapsable}>
        <Input label="No padding input" onChange={() => null} value="value" />
        <VStack>
          {items.map((item, idx) => (
            <Card
              key={item}
              label={item}
              actions={<Button onClick={() => removeItem(idx)}>Remove</Button>}
            >
              <Input label="An input" onChange={() => null} value="value" />
            </Card>
          ))}
          <Button onClick={() => addItem()}>Add item</Button>
        </VStack>
      </HSection>
      <HSection
        label="Variable length list"
        sublabel="With a sublabel"
        collapsable={collapsable}
      >
        <VStack>
          {items.map((item, idx) => (
            <Card
              key={item}
              label={item}
              actions={<Button onClick={() => removeItem(idx)}>Remove</Button>}
            >
              <Input label="An input" onChange={() => null} value="value" />
            </Card>
          ))}
          <Button onClick={() => addItem()}>Add item</Button>
        </VStack>
      </HSection>
    </StyledVStack>
  );
};
