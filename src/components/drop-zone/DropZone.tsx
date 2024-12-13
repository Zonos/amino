import { type DropzoneOptions, useDropzone } from 'react-dropzone';

import clsx from 'clsx';

import { ImageAvatar } from 'src/components/avatar/ImageAvatar';
import { ButtonIcon } from 'src/components/button/ButtonIcon';
import {
  HelpText,
  type HelpTextProps,
} from 'src/components/help-text/HelpText';
import { Spinner } from 'src/components/spinner/Spinner';
import { Text } from 'src/components/text/Text';
import { Thumbnail } from 'src/components/thumbnail/Thumbnail';
import { FileDuotoneIcon } from 'src/icons/FileDuotoneIcon';
import { FileUploadDuotoneIcon } from 'src/icons/FileUploadDuotoneIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { UploadedFile } from 'src/types/UploadedFile';

import styles from './DropZone.module.scss';

export type DropZoneProps = BaseProps &
  HelpTextProps & {
    /**
     * This `disabled` state only applies when no file is selected
     * @default false
     * */
    disabled?: boolean;
    dropzoneOptions: Omit<DropzoneOptions, 'disabled'>;
    /**
     * Text to display in empty state
     * @default 'Drop your file(s) here'
     * */
    instructionText?: string;
    loading?: boolean;
    /**
     * Text to show while loading state is active
     * @default 'Uploading file(s)...''
     */
    loadingText?: string;
    /**
     * Whether to show the icon in file upload
     * @default false
     * */
    noIcon?: boolean;
    /** When the remove icon is clicked on an individual file */
    onRemoveFile: (index: number) => void;
    /** Display file info if uploaded file property has data */
    uploadedFiles: UploadedFile[];
  };

export const DropZone = ({
  className,
  disabled = false,
  dropzoneOptions,
  error = false,
  helpText,
  instructionText = 'Drop your file(s) here',
  loading,
  loadingText = 'Uploading file(s)...',
  noIcon = false,
  onRemoveFile,
  style,
  uploadedFiles,
}: DropZoneProps) => {
  const maxFiles = dropzoneOptions.maxFiles || 0;

  const { getInputProps, getRootProps, open } = useDropzone({
    ...dropzoneOptions,
    disabled,
    noClick: true,
    noKeyboard: true,
  });

  const renderUpload = () => (
    // The role gets set to button despite setting `noClick`, so override it as `undefined`
    <div className={styles.contentWrapper} {...getRootProps()} role={undefined}>
      <input {...getInputProps()} />
      {!noIcon && <Thumbnail icon={<FileUploadDuotoneIcon />} size={40} />}
      <div className={styles.instructionTextWrapper}>
        <Text type="label">
          {instructionText} or{' '}
          <button
            className={styles.browseButton}
            disabled={disabled}
            onClick={open}
            type="button"
          >
            <Text color="blue600" type="label">
              browse
            </Text>
          </button>
        </Text>
        <HelpText error={error} helpText={helpText} />
      </div>
    </div>
  );

  const renderFiles = () =>
    uploadedFiles.map((file, index) => (
      <div key={file.name} className={styles.uploadedFileRow}>
        {file.imageUrl ? (
          <ImageAvatar imageUrl={file.imageUrl} shape="rounded" />
        ) : (
          <FileDuotoneIcon />
        )}
        <div className={styles.uploadedFileInfoWrapper}>
          <Text color="gray1000" type="label">
            {file.name}
          </Text>
          {file.size && (
            <Text color="gray700" type="caption">
              {file.size}
            </Text>
          )}
        </div>
        {onRemoveFile && (
          <ButtonIcon
            className={styles.removeFileButton}
            icon={<RemoveCircleDuotoneIcon size={20} />}
            onClick={() => onRemoveFile(index)}
            variant="text"
          />
        )}
      </div>
    ));

  const uploadedMaxFiles = maxFiles !== 0 && uploadedFiles.length >= maxFiles;

  const renderContent = () => {
    if (loading) {
      return (
        <div className={styles.uploadWrapper}>
          <div className={styles.contentWrapper}>
            <Spinner />
            <Text color="gray800" type="label">
              {loadingText}
            </Text>
          </div>
        </div>
      );
    }

    return (
      <>
        {!uploadedMaxFiles && (
          <div className={styles.uploadWrapper}>{renderUpload()}</div>
        )}
        {!!uploadedFiles.length && (
          <div className={styles.uploadedFilesWrapper}>{renderFiles()}</div>
        )}
      </>
    );
  };

  return (
    <div
      className={clsx(styles.wrapper, className)}
      style={{
        ...style,
        '--amino-drop-zone-border-color': error
          ? theme.danger
          : theme.borderColor,
        '--amino-drop-zone-cursor': disabled ? 'not-allowed' : 'auto',
        '--amino-drop-zone-opacity': disabled ? theme.opacityDisabled : 1,
      }}
    >
      {renderContent()}
    </div>
  );
};
