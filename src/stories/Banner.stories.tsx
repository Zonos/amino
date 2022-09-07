import React, { useState } from 'react';

import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Banner } from 'src/components/banner/Banner';
import { Button } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const BannerStories: Meta = {
  title: 'Amino/Banner',
  component: Banner,
  decorators: [withDesign],
};

export default BannerStories;

const StyledVStack = styled(VStack)`
  width: 1080px;
  margin: 0 auto;
`;

const ids = [
  'withTitle',
  'withHeaderAction',
  'withoutClose',
  'withoutTitle',
  'onlyFooterActions',
  'titleWithParagraph',
  'titleWithParagraphWithFooterActions',
] as const;
type ID = typeof ids[number];
const Template: ComponentStory<typeof Banner> = ({
  footerActions,
  headerActions,
  intent,
}) => {
  const [openIds, setOpenIds] = useState<ID[]>(ids.filter(Boolean));

  const toggleBannerId = (id: ID) =>
    openIds.includes(id)
      ? setOpenIds(openIds.filter(x => x !== id))
      : setOpenIds(openIds.concat(id));

  const title = 'A new software update is available';
  const paragraph =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum massa nisi, quis fringilla ante facilisis et. Maecenas risus est, mollis pulvinar metus vitae.';

  return (
    <StyledVStack>
      <Banner
        intent={intent}
        footerActions={
          <Button
            color="inherit"
            onClick={() => setOpenIds(ids.filter(Boolean))}
            intent="outline"
          >
            Open Banners
          </Button>
        }
      />

      {openIds.includes('withTitle') && (
        <Banner
          intent={intent}
          onClose={() => toggleBannerId('withTitle')}
          title={title}
        />
      )}
      {openIds.includes('withHeaderAction') && (
        <Banner
          headerActions={headerActions}
          intent={intent}
          onClose={() => toggleBannerId('withHeaderAction')}
          title={title}
        />
      )}
      {openIds.includes('withoutClose') && (
        <Banner headerActions={headerActions} intent={intent} title={title} />
      )}
      {openIds.includes('withoutTitle') && (
        <Banner intent={intent} onClose={() => toggleBannerId('withoutTitle')}>
          {paragraph}
        </Banner>
      )}
      {openIds.includes('onlyFooterActions') && (
        <Banner
          footerActions={footerActions}
          intent={intent}
          onClose={() => toggleBannerId('onlyFooterActions')}
        />
      )}
      {openIds.includes('titleWithParagraph') && (
        <Banner
          intent={intent}
          title={title}
          onClose={() => toggleBannerId('titleWithParagraph')}
        >
          {paragraph}
        </Banner>
      )}
      {openIds.includes('titleWithParagraphWithFooterActions') && (
        <Banner
          footerActions={footerActions}
          onClose={() => toggleBannerId('titleWithParagraphWithFooterActions')}
          intent={intent}
          title={title}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Banner>
      )}
    </StyledVStack>
  );
};

export const DefaultBanner = Template.bind({});
DefaultBanner.args = {
  footerActions: (
    <>
      <Button intent="outline">View status</Button>
      <Button intent="subtle">Dismiss</Button>
    </>
  ),
  headerActions: (
    <>
      <Button intent="outline" icon={<ChevronDownIcon size={20} />} iconRight>
        Details
      </Button>
    </>
  ),
};
DefaultBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=776%3A12439',
  },
};

export const InfoBanner = Template.bind({});
InfoBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="blue-l40"
        color="inherit"
        intent="outline"
      >
        View status
      </Button>
      <Button color="inherit" intent="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <>
      <Button
        background="inherit"
        borderColor="blue-l40"
        color="inherit"
        intent="outline"
        icon={<ChevronDownIcon size={20} />}
        iconRight
      >
        Details
      </Button>
    </>
  ),
  intent: 'info',
};
InfoBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A56507',
  },
};

export const SuccessBanner = Template.bind({});
SuccessBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="green-l40"
        color="inherit"
        intent="outline"
      >
        View status
      </Button>
      <Button color="inherit" intent="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <>
      <Button
        background="inherit"
        borderColor="green-l40"
        color="inherit"
        intent="outline"
        icon={<ChevronDownIcon size={20} />}
        iconRight
      >
        Details
      </Button>
    </>
  ),
  intent: 'success',
};
SuccessBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A57333',
  },
};

export const WarningBanner = Template.bind({});
WarningBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="orange-l40"
        color="inherit"
        intent="outline"
      >
        View status
      </Button>
      <Button color="inherit" intent="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <>
      <Button
        background="inherit"
        borderColor="orange-l40"
        color="inherit"
        intent="outline"
        icon={<ChevronDownIcon size={20} />}
        iconRight
      >
        Details
      </Button>
    </>
  ),
  intent: 'warning',
};
WarningBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A58159',
  },
};

export const ErrorBanner = Template.bind({});
ErrorBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="red-l40"
        color="inherit"
        intent="outline"
      >
        View status
      </Button>
      <Button color="inherit" intent="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <>
      <Button
        background="inherit"
        borderColor="red-l40"
        color="inherit"
        intent="outline"
        icon={<ChevronDownIcon size={20} />}
        iconRight
      >
        Details
      </Button>
    </>
  ),
  intent: 'error',
};
ErrorBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A58985',
  },
};
