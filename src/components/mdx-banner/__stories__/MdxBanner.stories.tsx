import { useState } from 'react';

import type { ComponentStory, Meta } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import styled from 'styled-components';

import { MdxBanner } from '../MdxBanner';

const MdxBannerStories: Meta = {
  component: MdxBanner,
};

export default MdxBannerStories;

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
type ID = typeof ids[number];
const Template: ComponentStory<typeof MdxBanner> = ({
  footerActions,
  headerActions,
  intent,
}) => {
  const [openIds, setOpenIds] = useState<ID[]>(ids.filter(Boolean));

  const toggleMdxBannerId = (id: ID) =>
    openIds.includes(id)
      ? setOpenIds(openIds.filter(x => x !== id))
      : setOpenIds(openIds.concat(id));

  const title = 'A new software update is available';
  const paragraph =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum massa nisi, quis fringilla ante facilisis et. Maecenas risus est, mollis pulvinar metus vitae.';

  return (
    <StyledVStack>
      <MdxBanner
        intent={intent}
        footerActions={
          <Button
            color="inherit"
            onClick={() => setOpenIds(ids.filter(Boolean))}
            intent="outline"
          >
            Open MdxBanners
          </Button>
        }
      />

      {openIds.includes('withTitle') && (
        <MdxBanner
          intent={intent}
          onClose={() => toggleMdxBannerId('withTitle')}
          xtitle={title}
        />
      )}
      {openIds.includes('withHeaderAction') && (
        <MdxBanner
          headerActions={headerActions}
          intent={intent}
          onClose={() => toggleMdxBannerId('withHeaderAction')}
          xtitle={title}
        />
      )}
      {openIds.includes('withoutClose') && (
        <MdxBanner
          headerActions={headerActions}
          intent={intent}
          xtitle={title}
        />
      )}
      {openIds.includes('withoutTitle') && (
        <MdxBanner
          intent={intent}
          onClose={() => toggleMdxBannerId('withoutTitle')}
        >
          {paragraph}
        </MdxBanner>
      )}
      {openIds.includes('titleWithParagraph') && (
        <MdxBanner
          intent={intent}
          xtitle={title}
          onClose={() => toggleMdxBannerId('titleWithParagraph')}
        >
          {paragraph}
        </MdxBanner>
      )}
      {openIds.includes('titleWithParagraphWithFooterActions') && (
        <MdxBanner
          footerActions={footerActions}
          onClose={() =>
            toggleMdxBannerId('titleWithParagraphWithFooterActions')
          }
          intent={intent}
          xtitle={title}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </MdxBanner>
      )}
      {openIds.includes('titleWithParagraphWithHeaderActions') && (
        <MdxBanner
          intent={intent}
          xtitle={title}
          onClose={() =>
            toggleMdxBannerId('titleWithParagraphWithHeaderActions')
          }
          headerActions={
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              rel="noreferrer"
            >
              <Button
                borderColor="black"
                background="inherit"
                color="inherit"
                intent="outline"
              >
                View additional details
              </Button>
            </a>
          }
        >
          {paragraph}
        </MdxBanner>
      )}
      {openIds.includes('longSoloTitle') && (
        <MdxBanner
          intent={intent}
          onClose={() => toggleMdxBannerId('longSoloTitle')}
        >
          Did you know that over 50% of trees on planet earth harbor enough
          different species that if you were to add them all up you would come
          up with a large number that makes about as much sense as this
          sentence.
        </MdxBanner>
      )}
    </StyledVStack>
  );
};

export const DefaultMdxBanner = Template.bind({});
DefaultMdxBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="gray400"
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
    <Button
      background="inherit"
      borderColor="gray400"
      color="inherit"
      intent="outline"
      icon={<ChevronDownIcon size={20} />}
      iconRight
    >
      Details
    </Button>
  ),
};
DefaultMdxBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=776%3A12439',
  },
};

export const InfoMdxBanner = Template.bind({});
InfoMdxBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="blue400"
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
    <Button
      background="inherit"
      borderColor="blue400"
      color="inherit"
      intent="outline"
      icon={<ChevronDownIcon size={20} />}
      iconRight
    >
      Details
    </Button>
  ),
  intent: 'info',
};
InfoMdxBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A56507',
  },
};

export const SuccessMdxBanner = Template.bind({});
SuccessMdxBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="green400"
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
    <Button
      background="inherit"
      borderColor="green400"
      color="inherit"
      intent="outline"
      icon={<ChevronDownIcon size={20} />}
      iconRight
    >
      Details
    </Button>
  ),
  intent: 'success',
};
SuccessMdxBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A57333',
  },
};

export const WarningMdxBanner = Template.bind({});
WarningMdxBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="orange400"
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
    <Button
      background="inherit"
      borderColor="orange400"
      color="inherit"
      intent="outline"
      icon={<ChevronDownIcon size={20} />}
      iconRight
    >
      Details
    </Button>
  ),
  intent: 'warning',
};
WarningMdxBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A58159',
  },
};

export const ErrorMdxBanner = Template.bind({});
ErrorMdxBanner.args = {
  footerActions: (
    <>
      <Button
        background="inherit"
        borderColor="red400"
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
    <Button
      background="inherit"
      borderColor="red400"
      color="inherit"
      intent="outline"
      icon={<ChevronDownIcon size={20} />}
      iconRight
    >
      Details
    </Button>
  ),
  intent: 'error',
};
ErrorMdxBanner.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A58985',
  },
};
