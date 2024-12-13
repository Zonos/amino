import { useState } from 'react';

import type { Meta } from '@storybook/react';
import { z } from 'zod';

import { Button } from 'src/components/button/Button';
import { Input } from 'src/components/input/Input';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { useStorage } from 'src/utils/hooks/useStorage';
import type { StorageType } from 'src/utils/storage';

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
  const [storageType, setStorageType] = useState<StorageType>('local');

  const { setValue, value } = useStorage({
    defaultValue: defaultPerson,
    key: 'amino:story:storage:test',
    schema,
    type: storageType,
  });

  const [input, setInput] = useState('');

  const rawValue = localStorage.getItem('amino:story:storage:test');

  const submit = () => {
    try {
      setValue(JSON.parse(input) as Person);
    } catch {
      alert('Invalid JSON');
    }
  };

  return (
    <VStack>
      <div>
        <select
          onChange={e => setStorageType(e.target.value as StorageType)}
          value={storageType}
        >
          <option value="local">Local Storage</option>
          <option value="session">Session Storage</option>
        </select>
      </div>
      <div>
        Raw storage value: <strong>{rawValue}</strong>
      </div>
      <div>
        Parsed Value: <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
      <Input
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a JSON value to set"
        type="text"
        value={input}
      />
      <HStack>
        <Button onClick={submit}>Set Value as JSON</Button>
      </HStack>
    </VStack>
  );
};
