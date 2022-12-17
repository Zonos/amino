import { buildStories } from '../buildStories';

describe('Make sure buildStories work as expected', () => {
  test(`Should order by name for base folder 'src'`, () => {
    const stories = buildStories([
      '../src/components/text/__stories__/Typography.stories.tsx',
      '../src/components/toast/__stories__/ToastConsumer.stories.tsx',
      '../src/components/tooltip/__stories__/Tooltip.stories.tsx',
      '../src/icons/__stories__/AllIcons.stories.tsx',
      '../src/components/tag/__stories__/Tag.stories.tsx',
      '../src/components/text-avatar/__stories__/TextAvatar.stories.tsx',
      '../src/__stories__/Composer.stories.tsx',
      '../src/icons/__stories__/DynamicIcon.stories.tsx',
      '../src/components/toast/__stories__/Toast.stories.tsx',
      '../src/__stories__/ScratchPad.stories.tsx',
    ]);
    expect(stories.map(story => `${story.directory}/${story.files}`))
      .toMatchInlineSnapshot(`
      Array [
        "../src/__stories__/Composer.stories.tsx",
        "../src/icons/__stories__/AllIcons.stories.tsx",
        "../src/icons/__stories__/DynamicIcon.stories.tsx",
        "../src/__stories__/ScratchPad.stories.tsx",
        "../src/components/tag/__stories__/Tag.stories.tsx",
        "../src/components/text/__stories__/Typography.stories.tsx",
        "../src/components/text-avatar/__stories__/TextAvatar.stories.tsx",
        "../src/components/toast/__stories__/ToastConsumer.stories.tsx",
        "../src/components/toast/__stories__/Toast.stories.tsx",
        "../src/components/tooltip/__stories__/Tooltip.stories.tsx",
      ]
    `);
  });

  test(`Should order by name for base folder 'styles'`, () => {
    const stories = buildStories([
      '../src/components/sortable-list/__stories__/SortableList.stories.tsx',
      '../src/components/spinner/__stories__/Spinner.stories.tsx',
      '../src/components/stack/__stories__/HStack.stories.tsx',
      '../src/components/stack/__stories__/VStack.stories.tsx',
      '../src/components/styles/__stories__/BoxShadow.stories.tsx',
      '../src/components/styles/__stories__/Colors.stories.tsx',
      '../src/components/switch/__stories__/Switch.stories.tsx',
    ]);
    expect(stories.map(story => `${story.directory}/${story.files}`))
      .toMatchInlineSnapshot(`
      Array [
        "../src/components/styles/__stories__/BoxShadow.stories.tsx",
        "../src/components/styles/__stories__/Colors.stories.tsx",
        "../src/components/sortable-list/__stories__/SortableList.stories.tsx",
        "../src/components/spinner/__stories__/Spinner.stories.tsx",
        "../src/components/stack/__stories__/HStack.stories.tsx",
        "../src/components/stack/__stories__/VStack.stories.tsx",
        "../src/components/switch/__stories__/Switch.stories.tsx",
      ]
    `);
  });

  test('Mixed up cases', () => {
    const stories = buildStories([
      '../src/components/slide-over/__stories__/SlideOver.stories.tsx',
      '../src/components/slider/__stories__/Slider.stories.tsx',
      '../src/components/tooltip/__stories__/Tooltip.stories.tsx',
      '../src/components/sortable-list/__stories__/SortableList.stories.tsx',
      '../src/components/spinner/__stories__/Spinner.stories.tsx',
      '../src/components/styles/__stories__/BoxShadow.stories.tsx',
      '../src/icons/__stories__/AllIcons.stories.tsx',
      '../src/icons/__stories__/DynamicIcon.stories.tsx',
      '../src/components/stack/__stories__/HStack.stories.tsx',
      '../src/__stories__/Composer.stories.tsx',
      '../src/components/tabs/__stories__/Tabs.stories.tsx',
      '../src/components/switch/__stories__/Switch.stories.tsx',
      '../src/components/table/__stories__/Table.stories.tsx',
      '../src/components/styles/__stories__/Colors.stories.tsx',
      '../src/components/tag/__stories__/Tag.stories.tsx',
      '../src/components/stack/__stories__/VStack.stories.tsx',
      '../src/components/text-avatar/__stories__/TextAvatar.stories.tsx',
      '../src/components/text/__stories__/Typography.stories.tsx',
      '../src/__stories__/ScratchPad.stories.tsx',
      '../src/components/toast/__stories__/Toast.stories.tsx',
      '../src/components/toast/__stories__/ToastConsumer.stories.tsx',
    ]);
    expect(stories.map(story => `${story.directory}/${story.files}`))
      .toMatchInlineSnapshot(`
      Array [
        "../src/components/styles/__stories__/BoxShadow.stories.tsx",
        "../src/components/styles/__stories__/Colors.stories.tsx",
        "../src/__stories__/Composer.stories.tsx",
        "../src/icons/__stories__/AllIcons.stories.tsx",
        "../src/icons/__stories__/DynamicIcon.stories.tsx",
        "../src/__stories__/ScratchPad.stories.tsx",
        "../src/components/slide-over/__stories__/SlideOver.stories.tsx",
        "../src/components/slider/__stories__/Slider.stories.tsx",
        "../src/components/sortable-list/__stories__/SortableList.stories.tsx",
        "../src/components/spinner/__stories__/Spinner.stories.tsx",
        "../src/components/stack/__stories__/HStack.stories.tsx",
        "../src/components/stack/__stories__/VStack.stories.tsx",
        "../src/components/switch/__stories__/Switch.stories.tsx",
        "../src/components/table/__stories__/Table.stories.tsx",
        "../src/components/tabs/__stories__/Tabs.stories.tsx",
        "../src/components/tag/__stories__/Tag.stories.tsx",
        "../src/components/text/__stories__/Typography.stories.tsx",
        "../src/components/text-avatar/__stories__/TextAvatar.stories.tsx",
        "../src/components/toast/__stories__/Toast.stories.tsx",
        "../src/components/toast/__stories__/ToastConsumer.stories.tsx",
        "../src/components/tooltip/__stories__/Tooltip.stories.tsx",
      ]
    `);
  });
});
