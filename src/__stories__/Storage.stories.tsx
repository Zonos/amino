import { useState } from 'react';

import type { Meta } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import { Input } from 'src/components/input/Input';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { useStorage } from 'src/utils/hooks/useStorage';
import { z } from 'zod';

const meta: Meta = {
  title: 'Storage',
};

export default meta;

const schema = z.object({
  name: z.string(),
  age: z.number(),
  isCool: z.boolean(),
});

type Person = z.infer<typeof schema>;

const defaultPerson: Person = {
  name: 'John',
  age: 20,
  isCool: true,
};

export const Storage = () => {
  const [value, setValue] = useStorage({
    type: 'local',
    key: 'amino:story:storage:test',
    defaultValue: defaultPerson,
    json: {
      schema,
    },
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
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a value to set"
      />
      <HStack>
        <Button onClick={submit}>Set Value</Button>
        <Button onClick={submitAsJson}>Set Value as JSON</Button>
      </HStack>
    </VStack>
  );
};
