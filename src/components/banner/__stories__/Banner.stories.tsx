import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Banner } from 'src/components/banner/Banner';
import { Button } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';

const BannerStories: Meta = {
  component: Banner,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A56507',
    },
  },
};

export default BannerStories;

const StyledVStack = styled(VStack)`
  max-width: 1080px;
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
  'titleWithParagraphWithHeaderActions',
  'longSoloTitle',
] as const;
type ID = (typeof ids)[number];

const Template: StoryFn<typeof Banner> = ({
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
        footerActions={
          <Button
            color="inherit"
            onClick={() => setOpenIds(ids.filter(Boolean))}
            outline
          >
            Open Banners
          </Button>
        }
        intent={intent}
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
          onClose={() => toggleBannerId('titleWithParagraph')}
          title={title}
        >
          {paragraph}
        </Banner>
      )}
      {openIds.includes('titleWithParagraphWithFooterActions') && (
        <Banner
          footerActions={footerActions}
          intent={intent}
          onClose={() => toggleBannerId('titleWithParagraphWithFooterActions')}
          title={title}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Banner>
      )}
      {openIds.includes('titleWithParagraphWithHeaderActions') && (
        <Banner
          headerActions={
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              rel="noreferrer"
              target="_blank"
            >
              <Button
                background="inherit"
                borderColor="gray1200"
                color="inherit"
                outline
              >
                View additional details
              </Button>
            </a>
          }
          intent={intent}
          onClose={() => toggleBannerId('titleWithParagraphWithHeaderActions')}
          title={title}
        >
          {paragraph}
        </Banner>
      )}
      {openIds.includes('longSoloTitle') && (
        <Banner intent={intent} onClose={() => toggleBannerId('longSoloTitle')}>
          Did you know that over 50% of trees on planet earth harbor enough
          different species that if you were to add them all up you would come
          up with a large number that makes about as much sense as this
          sentence.
        </Banner>
      )}
    </StyledVStack>
  );
};

export const DefaultBanner = Template.bind({});
DefaultBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="gray400"
        color="inherit"
        outline
      >
        View status
      </Button>
      <Button color="inherit" variant="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <Button
      background="inherit"
      borderColor="gray400"
      color="inherit"
      icon={<ChevronDownIcon size={20} />}
      iconRight
      outline
    >
      Details
    </Button>
  ),
};

export const InfoBanner = Template.bind({});
InfoBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="blue400"
        color="inherit"
        outline
      >
        View status
      </Button>
      <Button color="inherit" variant="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <Button
      background="inherit"
      borderColor="blue400"
      color="inherit"
      icon={<ChevronDownIcon size={20} />}
      iconRight
      outline
    >
      Details
    </Button>
  ),
  intent: 'info',
};

export const SuccessBanner = Template.bind({});
SuccessBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="green400"
        color="inherit"
        outline
      >
        View status
      </Button>
      <Button color="inherit" variant="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <Button
      background="inherit"
      borderColor="green400"
      color="inherit"
      icon={<ChevronDownIcon size={20} />}
      iconRight
      outline
    >
      Details
    </Button>
  ),
  intent: 'success',
};

export const WarningBanner = Template.bind({});
WarningBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="orange400"
        color="inherit"
        outline
      >
        View status
      </Button>
      <Button color="inherit" variant="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <Button
      background="inherit"
      borderColor="orange400"
      color="inherit"
      icon={<ChevronDownIcon size={20} />}
      iconRight
      outline
    >
      Details
    </Button>
  ),
  intent: 'warning',
};

export const ErrorBanner = Template.bind({});
ErrorBanner.args = {
  footerActions: (
    <>
      <Button background="inherit" borderColor="red400" color="inherit" outline>
        View status
      </Button>
      <Button color="inherit" variant="subtle">
        Dismiss
      </Button>
    </>
  ),
  headerActions: (
    <Button
      background="inherit"
      borderColor="red400"
      color="inherit"
      icon={<ChevronDownIcon size={20} />}
      iconRight
      outline
    >
      Details
    </Button>
  ),
  intent: 'error',
};

export const Basic: StoryFn<typeof Banner> = props => (
  <Banner
    {...props}
    headerActions={
      <Button
        href="https://zonos.com/contact-support"
        icon={<ArrowRightIcon />}
        iconRight
        outline
        tag="a"
        target="_blank"
        variant="warning"
      >
        Contact us
      </Button>
    }
    intent="warning"
    onClose={() => null}
    title="Lots of words about how Cade is a great engineer. He works diligently and tirelessly through day and night, rain or shine, to make sure that the code he writes is the best it can be. He is a great asset to the team and we are lucky to have him."
  />
);
