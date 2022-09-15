import React from 'react';

import { useEffect, useState } from '@storybook/addons';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Input } from 'src/components/input/Input';
import { HSection, HSectionProps } from 'src/components/section/HSection';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { withDesign } from 'storybook-addon-designs';

const HSectionMeta: Meta = {
  title: 'Amino/HSection',
  component: HSection,
  decorators: [withDesign],
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
