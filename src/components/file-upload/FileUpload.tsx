import { type DropzoneOptions, useDropzone } from 'react-dropzone';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import { ButtonIcon } from 'src/components/button/ButtonIcon';
import { Text } from 'src/components/text/Text';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './FileUpload.module.scss';

type UploadFileNoImage = {
  name: string;
  size?: string;
};

export type FileUploadProps = BaseProps & {
  /**
   * This `disabled` state only applies when no file is selected
   * @default false
   * */
  disabled?: boolean;
  dropzoneOptions: Omit<DropzoneOptions, 'disabled' | 'multiple'>;
  error?: boolean;
  /**
   * Text to display in empty state
   * @default 'or drag your file here'
   * */
  instructionText?: string;

  loading?: boolean;
  /**
   * Text to show while loading state is active
   * @default 'Uploading...''
   */
  loadingText?: string;
  onRemoveFile?: () => void;
  /** Display file info if uploaded file property has data */
  uploadedFile: UploadFileNoImage | null;
};

/**
 * Single file input
 */
export const FileUpload = ({
  className,
  disabled = false,
  dropzoneOptions,
  error = false,
  instructionText = 'or drag your file here',
  loading,
  loadingText = 'Uploading...',
  onRemoveFile,
  style,
  uploadedFile,
}: FileUploadProps) => {
  const { getInputProps, getRootProps, open } = useDropzone({
    ...dropzoneOptions,
    disabled,
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });

  const renderFile = () => {
    if (uploadedFile) {
      const { name, size } = uploadedFile;

      return (
        <div className={styles.uploadedFileInfoWrapper}>
          <Text color="gray1000" type="label">
            {name}
          </Text>
          {size && (
            <Text color="gray700" type="caption">
              {size}
            </Text>
          )}
        </div>
      );
    }

    return null;
  };

  const renderText = () => {
    if (loading) {
      return <Text>{loadingText}</Text>;
    }

    return uploadedFile ? (
      renderFile()
    ) : (
      <Text color="gray600">{instructionText}</Text>
    );
  };

  const renderContent = () => (
    <div className={styles.styledFileInput} {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={styles.contentWrapper}>
        <Button loading={loading} onClick={open} spinnerColor="black">
          Browse
        </Button>
        {renderText()}
      </div>
    </div>
  );

  return (
    <div
      className={clsx(styles.wrapper, className)}
      style={{
        ...style,
        '--amino-file-upload-border-color': error
          ? theme.danger
          : theme.borderColor,
        '--amino-file-upload-cursor': disabled ? 'not-allowed' : 'auto',
        '--amino-file-upload-opacity': disabled ? theme.opacityDisabled : 1,
      }}
    >
      {renderContent()}
      {onRemoveFile && uploadedFile && (
        <ButtonIcon
          className={styles.removeFileButton}
          icon={<RemoveCircleDuotoneIcon size={20} />}
          onClick={() => onRemoveFile()}
          variant="text"
        />
      )}
    </div>
  );
};
