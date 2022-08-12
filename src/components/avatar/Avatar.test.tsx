import React from 'react';
import * as renderer from 'react-test-renderer';

import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';

import { DynamicIconAvatar } from './DynamicIconAvatar';
import { IconAvatar } from './IconAvatar';
import { ImageAvatar } from './ImageAvatar';
import { UserAvatar } from './UserAvatar';

describe('Avatar DOM snapshot tests', () => {
  it('UserAvatar matches snapshot', () => {
    const tree = renderer
      .create(<UserAvatar size="lg" shape="round" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('IconAvatar matches snapshot', () => {
    const tree = renderer
      .create(<IconAvatar icon={<ArrowDownIcon />} size="lg" shape="round" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ImageAvatar matches snapshot', () => {
    const tree = renderer
      .create(
        <ImageAvatar
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/23/Mountain_Goat%2C_Enchantments_Basin.jpg"
          size="lg"
          shape="round"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('DynamicIconAvatar matches snapshot', () => {
    const tree = renderer
      .create(
        <DynamicIconAvatar icon="ArrowDownIcon" size="lg" shape="round" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
