import { useState } from 'react';

import type { Meta } from '@storybook/react';
import { z } from 'zod';

import { Button } from 'src/components/button/Button';
import { Input } from 'src/components/input/Input';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { useStorage } from 'src/utils/hooks/useStorage';

const meta: Meta = {
  title: 'Storage',
};

export default meta;

const schema = z.object({
  age: z.number(),
  isCool: z.boolean(),
  name: z.string(),
});

type Person = z.infer<typeof schema>;

const defaultPerson: Person = {
  age: 20,
  isCool: true,
  name: 'John',
};

export const Storage = () => {
  const [value, setValue] = useStorage({
    defaultValue: defaultPerson,
    json: true,
    key: 'amino:story:storage:test',
    schema,
    type: 'local',
  });

  const [input, setInput] = useState('');

  const rawValue = localStorage.getItem('amino:story:storage:test');

  const submit = () => {
    setValue(input as unknown as Person);
  };

  const submitAsJson = () => {
    setValue(JSON.parse(input) as Person);
  };

  return (
    <VStack>
      <div>
        Raw local storage value: <strong>{rawValue}</strong>
      </div>
      <div>
        Parsed Value: <strong>{JSON.stringify(value, null, 2)}</strong>
      </div>
      <Input
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a value to set"
        type="text"
        value={input}
      />
      <HStack>
        <Button onClick={submit}>Set Value</Button>
        <Button onClick={submitAsJson}>Set Value as JSON</Button>
      </HStack>
    </VStack>
  );
};
