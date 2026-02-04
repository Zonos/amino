import { setProjectAnnotations } from '@storybook/react';

import * as previewAnnotations from './preview';

// Apply the project annotations from your Storybook preview
const annotations = setProjectAnnotations([previewAnnotations]);

// Run any necessary initialization from Storybook's preview
if (annotations.beforeAll) {
  annotations.beforeAll();
}
