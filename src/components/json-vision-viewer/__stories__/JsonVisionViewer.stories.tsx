import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import {
  JsonVisionViewer,
  type JsonVisionViewerProps,
} from 'src/components/json-vision-viewer/JsonVisionViewer';
import { VStack } from 'src/components/stack/VStack';

const sampleData = {
  user: {
    id: 'user_abc123',
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'dark',
      notifications: true,
      language: 'en-US',
    },
    tags: ['premium', 'early-adopter', 'beta-tester'],
  },
  orders: [
    {
      id: 'order_001',
      total: 99.99,
      currency: 'USD',
      items: [
        { sku: 'ITEM-A', name: 'Widget', quantity: 2, price: 29.99 },
        { sku: 'ITEM-B', name: 'Gadget', quantity: 1, price: 40.01 },
      ],
      shipping: {
        address: {
          line1: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
          country: 'US',
        },
        method: 'express',
        trackingNumber: '1Z999AA10123456784',
      },
    },
    {
      id: 'order_002',
      total: 149.99,
      currency: 'USD',
      items: [{ sku: 'ITEM-C', name: 'Gizmo Pro', quantity: 1, price: 149.99 }],
      shipping: {
        address: {
          line1: '456 Oak Ave',
          city: 'Somewhere',
          state: 'NY',
          zip: '67890',
          country: 'US',
        },
        method: 'standard',
        trackingNumber: null,
      },
    },
  ],
  metadata: {
    apiVersion: '2.0',
    requestId: 'req_xyz789',
    timestamp: '2024-01-15T10:30:00Z',
    deprecations: [],
  },
};

const largeData = {
  ...sampleData,
  products: Array.from({ length: 100 }, (_, i) => ({
    id: `prod_${i + 1}`,
    name: `Product ${i + 1}`,
    price: Math.round(Math.random() * 10000) / 100,
    inStock: Math.random() > 0.3,
    category: ['electronics', 'clothing', 'home', 'sports'][
      Math.floor(Math.random() * 4)
    ],
    tags: Array.from(
      { length: Math.floor(Math.random() * 5) },
      (_, j) => `tag-${j + 1}`,
    ),
  })),
};

const JsonVisionViewerMeta: Meta = {
  component: JsonVisionViewer,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/JsonVisionViewer',
};

export default JsonVisionViewerMeta;

const Template: StoryFn<JsonVisionViewerProps> = args => (
  <div style={{ height: '600px' }}>
    <JsonVisionViewer {...args} />
  </div>
);

export const TreeView = Template.bind({});
TreeView.args = {
  data: sampleData,
  defaultViewMode: 'tree',
  title: 'API Response',
};

export const ColumnView = Template.bind({});
ColumnView.args = {
  data: sampleData,
  defaultViewMode: 'column',
  title: 'API Response',
};

export const EditorView = Template.bind({});
EditorView.args = {
  data: sampleData,
  defaultViewMode: 'editor',
  title: 'API Response',
};

export const WithShareButton: StoryFn<JsonVisionViewerProps> = args => {
  const [lastUrl, setLastUrl] = useState<string | null>(null);

  return (
    <VStack style={{ height: '600px' }}>
      <JsonVisionViewer
        {...args}
        onShare={async () => {
          // Simulate creating a share link
          const url = `https://example.com/shared/${Math.random().toString(36).slice(2, 10)}`;
          await navigator.clipboard.writeText(url);
          setLastUrl(url);
          return url;
        }}
      />
      {lastUrl && (
        <div style={{ padding: '8px 16px', fontSize: 12, color: '#666' }}>
          Last shared URL: {lastUrl}
        </div>
      )}
    </VStack>
  );
};
WithShareButton.args = {
  data: sampleData,
  title: 'Shareable Response',
};

export const WithCloseButton: StoryFn<JsonVisionViewerProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div style={{ padding: 20 }}>
        <Button onClick={() => setIsOpen(true)}>Reopen Viewer</Button>
      </div>
    );
  }

  return (
    <div style={{ height: '600px' }}>
      <JsonVisionViewer
        data={sampleData}
        onClose={() => setIsOpen(false)}
        title="Closeable Viewer"
      />
    </div>
  );
};

export const LargeDataset = Template.bind({});
LargeDataset.args = {
  data: largeData,
  defaultViewMode: 'tree',
  title: 'Large Dataset (100+ items)',
};

export const EmptyData = Template.bind({});
EmptyData.args = {
  data: null,
  title: 'Empty Response',
};

export const SimpleData = Template.bind({});
SimpleData.args = {
  data: {
    message: 'Hello, World!',
    count: 42,
    active: true,
    nothing: null,
  },
  title: 'Simple Data',
};

export const DeeplyNested = Template.bind({});
DeeplyNested.args = {
  data: {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              level6: {
                value: 'Deep value',
                array: [1, 2, 3],
              },
            },
          },
        },
      },
    },
  },
  title: 'Deeply Nested',
};
