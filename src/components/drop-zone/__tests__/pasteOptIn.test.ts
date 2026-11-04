import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { DropzoneOptions } from 'react-dropzone';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { DropZone } from 'src/components/drop-zone/DropZone';
import { FileUpload } from 'src/components/file-upload/FileUpload';

const useDropzone = vi.hoisted(() =>
  vi.fn((_options: DropzoneOptions) => ({
    getInputProps: () => ({}),
    getRootProps: () => ({}),
    open: () => {},
  })),
);

vi.mock('react-dropzone', () => ({ useDropzone }));

const noPasteFor = (
  component: 'DropZone' | 'FileUpload',
  dropzoneOptions: DropzoneOptions,
) => {
  if (component === 'DropZone') {
    renderToStaticMarkup(
      createElement(DropZone, {
        dropzoneOptions,
        onRemoveFile: () => {},
        uploadedFiles: [],
      }),
    );
  } else {
    renderToStaticMarkup(
      createElement(FileUpload, { dropzoneOptions, uploadedFile: null }),
    );
  }
  return useDropzone.mock.calls.at(-1)?.[0].noPaste;
};

describe.each(['DropZone', 'FileUpload'] as const)(
  '%s paste-to-upload',
  component => {
    beforeEach(() => useDropzone.mockClear());

    it('is off by default', () => {
      expect(noPasteFor(component, {})).toBe(true);
    });

    it('stays off when noPaste is present but undefined', () => {
      expect(noPasteFor(component, { noPaste: undefined })).toBe(true);
    });

    it('turns on with an explicit noPaste: false', () => {
      expect(noPasteFor(component, { noPaste: false })).toBe(false);
    });
  },
);
