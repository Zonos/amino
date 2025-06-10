import type { Meta, StoryFn } from '@storybook/react';

import { Card } from 'src/components/card/Card';
import { Flex } from 'src/components/flex/Flex';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { ZonosIcon } from 'src/icons/custom/ZonosIcon';
import { ZonosLogoIcon } from 'src/icons/custom/ZonosLogoIcon';
import { ZonosWordmark } from 'src/icons/custom/ZonosWordmark';

const meta: Meta = {
  component: ZonosIcon,
  parameters: {
    docs: {
      description: {
        component:
          'Zonos brand icons including the full logo, cipher and wordmark.',
      },
    },
  },
  title: 'Zonos Logos',
};

export default meta;

export const Overview: StoryFn = () => (
  <VStack spacing={32}>
    <Card>
      <VStack spacing={8}>
        <Text type="title">Logo</Text>
        <Text color="gray600" type="body">
          The complete Zonos logo with text, ideal for headers and branding.
        </Text>
        <Flex alignItems="center" gap={48} justifyContent="center">
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosIcon size={240} />
            <Text type="caption">Default Size</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosIcon size={160} />
            <Text type="caption">Medium Size</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosIcon size={80} />
            <Text type="caption">Small Size</Text>
          </Flex>
        </Flex>
      </VStack>
    </Card>

    <Card>
      <VStack spacing={8}>
        <Text type="title">Cipher</Text>
        <Text color="gray600" type="body">
          The Zonos logo mark without text, perfect for icons and compact
          spaces.
        </Text>
        <Flex alignItems="center" gap={48} justifyContent="center">
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosLogoIcon size={72} />
            <Text type="caption">Large</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosLogoIcon size={48} />
            <Text type="caption">Medium</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosLogoIcon size={24} />
            <Text type="caption">Small</Text>
          </Flex>
        </Flex>
      </VStack>
    </Card>

    <Card>
      <VStack spacing={8}>
        <Text type="title">Wordmark</Text>
        <Text color="gray600" type="body">
          The Zonos wordmark without the logo mark, used for inline text.
        </Text>
        <Flex alignItems="center" gap={48} justifyContent="center">
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosWordmark size={124} />
            <Text type="caption">Large</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosWordmark size={72} />
            <Text type="caption">Medium</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column" gap={8}>
            <ZonosWordmark size={48} />
            <Text type="caption">Small</Text>
          </Flex>
        </Flex>
      </VStack>
    </Card>
  </VStack>
);
