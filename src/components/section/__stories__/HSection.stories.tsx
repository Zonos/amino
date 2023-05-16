import { useEffect, useState } from '@storybook/addons';
import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Input } from 'src/components/input/Input';
import { type HSectionProps, HSection } from 'src/components/section/HSection';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import styled from 'styled-components';
import { v4 } from 'uuid';

const HSectionMeta: Meta = {
  component: HSection,
};

export default HSectionMeta;

const Template: StoryFn<HSectionProps> = (props: HSectionProps) => {
  const [input, setInput] = useState('');
  const [renderDelay, setRenderDelay] = useState(false);
  const { collapseByDefault, collapsible } = props;

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
        label="Collapsible HSection"
        sublabel={
          <Button onClick={() => setRenderDelay(false)}>Reset delay</Button>
        }
        collapsible={collapsible}
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

export const Collapsible = Template.bind({});
Collapsible.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt
  illo asperiores quasi! Neque, praesentium.
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  sublabel: `SUB TITLE Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt
  illo asperiores quasi! Neque, praesentium.
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  label: 'My HSection',
  collapsible: true,
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
  collapsible: true,
  collapseByDefault: true,
};

const StyledVStack = styled(VStack)`
  max-width: 600px;
`;

export const VariableList = () => {
  const [collapsible, setcollapsible] = useState(true);
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
        label="collapsible"
        checked={collapsible}
        onChange={e => setcollapsible(e.valueOf())}
      />
      <Button onClick={() => setItems([])}>Clear</Button>
      <HSection label="Variable length list" collapsible={collapsible}>
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
        collapsible={collapsible}
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
