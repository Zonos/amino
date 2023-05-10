import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';

import { MdxCodeBlock as MdxCodeBlockComponent } from '../MdxCodeBlock';

const MdxCodeBlockMeta: Meta = {
  component: MdxCodeBlockComponent,
};

export default MdxCodeBlockMeta;

const codeContent = JSON.stringify(
  {
    itemToClassify: [
      {
        category: "women's clothing",
        imageUrl: 'https://zonos.com/images/cozygloves.png',
        name: "Cozy Design Women's Knitted Gloves with Roll Up Cuffs for Winter",
      },
    ],
  },
  null,
  '  '
);

export const MdxCodeBlock: ComponentStory<
  typeof MdxCodeBlockComponent
> = () => (
  <MdxCodeBlockComponent xlabel="JSON Example" type="JSON">
    <pre>
      <code>{codeContent}</code>
    </pre>
  </MdxCodeBlockComponent>
);

export const MdxCodeBlockWithHeight: ComponentStory<
  typeof MdxCodeBlockComponent
> = () => (
  <MdxCodeBlockComponent xlabel="JSON Example" type="JSON" maxHeight={600}>
    <pre>
      <code>{`
{
  "border": "{{int(1, 5)}}px {{random(solid, dotted, dashed)}} {{color()}}",
  "coordinates": {
    "type": "array",
    "count": 2,
    "items": "{{float(0, 120, 5)}}"
  },
  "password": "xX{{animal()}}-{{string(6, 10, *)}}"
}

{
  "border": "1px dotted silver",
  "coordinates": [
    109.06664,
    61.56686
  ],
  "password": "xXjunglefowl-*********"
}
      `}</code>
    </pre>
  </MdxCodeBlockComponent>
);
