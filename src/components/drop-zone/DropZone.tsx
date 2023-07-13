import { type DropzoneOptions, useDropzone } from 'react-dropzone';

import styled from 'styled-components';

import { FileDuotoneIcon } from 'src/icons/FileDuotoneIcon';
import { FileUploadDuotoneIcon } from 'src/icons/FileUploadDuotoneIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import { type UploadedFile } from 'src/types/UploadedFile';

import { ImageAvatar } from '../avatar/ImageAvatar';
import { Button } from '../button/Button';
import { Spinner } from '../spinner/Spinner';
import { Text } from '../text/Text';
import { Thumbnail } from '../thumbnail/Thumbnail';

const Wrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${theme.space16};
  opacity: ${p => (p.disabled ? 0.5 : 1)};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'auto')};
`;

const UploadWrapper = styled.div<{
  error?: boolean;
}>`
  border: 2px dashed;
  border-color: ${({ error }) => (error ? theme.danger : theme.borderColor)};
  border-radius: ${theme.radius12};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding: ${theme.space16};
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.space12};
`;

const InstructionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space4};
  align-items: center;
`;

const BrowseButton = styled.button<{ disabled: boolean }>`
  display: inline;
`;

const RemoveFileButton = styled(Button)`
  margin-left: auto;
  padding: 0;
  path[data-is-secondary-color] {
    fill: ${theme.gray200};
  }

  && {
    &,
    &:focus,
    &:hover,
    &:active {
      color: ${theme.gray800};
      background: transparent;
    }
    &:hover {
      path[data-is-secondary-color] {
        fill: ${theme.gray300};
      }
    }
    &:active,
    &:focus {
      path[data-is-secondary-color] {
        fill: ${theme.gray400};
      }
    }
  }

  :active,
  :focus {
    outline: none;
    box-shadow: unset;
  }
`;

const UploadedFilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space4};
`;

const UploadedFileRow = styled.div`
  border: ${theme.border};
  border-radius: ${theme.space12};
  padding: ${theme.space16};
  display: flex;
  justify-content: flex-start;
  gap: ${theme.space12};
`;

const UploadedFileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export type DropZoneProps = {
  className?: string;
  /**
   * This `disabled` state only applies when no file is selected
   * @default false
   * */
  disabled?: boolean;
  dropzoneOptions: Omit<DropzoneOptions, 'disabled'>;
  error?: boolean;
  helpText?: string;
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
  /** Display file info if uploaded file property has data */
  uploadedFiles: UploadedFile[];
  /** When the remove icon is clicked on an individual file */
  onRemoveFile: (index: number) => void;
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
    <ContentWrapper {...getRootProps()} role={undefined}>
      <input {...getInputProps()} />
      {!noIcon && <Thumbnail icon={<FileUploadDuotoneIcon />} size={40} />}
      <InstructionTextWrapper>
        <Text type="label">
          {instructionText} or{' '}
          <BrowseButton disabled={disabled} onClick={open} type="button">
            <Text color="blue600" type="label">
              browse
            </Text>
          </BrowseButton>
        </Text>
        {helpText && <Text type="caption">{helpText}</Text>}
      </InstructionTextWrapper>
    </ContentWrapper>
  );

  const renderFiles = () =>
    uploadedFiles.map((file, index) => (
      <UploadedFileRow key={file.name}>
        {file.imageUrl ? (
          <ImageAvatar imageUrl={file.imageUrl} shape="rounded" />
        ) : (
          <FileDuotoneIcon />
        )}
        <UploadedFileInfoWrapper>
          <Text color="gray1200" type="label">
            {file.name}
          </Text>
          {file.size && (
            <Text color="gray700" type="caption">
              {file.size}
            </Text>
          )}
        </UploadedFileInfoWrapper>
        {onRemoveFile && (
          <RemoveFileButton onClick={() => onRemoveFile(index)}>
            <RemoveCircleDuotoneIcon size={20} />
          </RemoveFileButton>
        )}
      </UploadedFileRow>
    ));

  const uploadedMaxFiles = maxFiles !== 0 && uploadedFiles.length >= maxFiles;

  const renderContent = () => {
    if (loading) {
      return (
        <UploadWrapper>
          <ContentWrapper>
            <Spinner />
            <Text color="gray800" type="label">
              {loadingText}
            </Text>
          </ContentWrapper>
        </UploadWrapper>
      );
    }

    return (
      <>
        {!uploadedMaxFiles && (
          <UploadWrapper error={error}>{renderUpload()}</UploadWrapper>
        )}
        {!!uploadedFiles.length && (
          <UploadedFilesWrapper>{renderFiles()}</UploadedFilesWrapper>
        )}
      </>
    );
  };

  return (
    <Wrapper className={className} disabled={disabled}>
      {renderContent()}
    </Wrapper>
  );
};
