import { DropzoneOptions, useDropzone } from 'react-dropzone';

import { Text } from 'src/components/text/Text';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import { UploadedFile } from 'src/types/UploadedFile';
import styled from 'styled-components';

import { Button } from '../button/Button';

type WrapperProps = {
  disabled: boolean;
  error: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-start;
  padding: ${theme.space8} ${theme.space12};
  border-radius: ${theme.radius10};
  border: ${theme.border};
  border-color: ${({ error }) => (error ? theme.danger : theme.borderColor)};

  opacity: ${p => (p.disabled ? 0.5 : 1)};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'auto')};
`;

const StyledFileInput = styled.div`
  outline: none;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.space12};
`;

const UploadedFileInfoWrapper = styled.div`
  display: flex;
  gap: ${theme.space4};
  align-items: center;
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

export type FileUploadProps = {
  className?: string;
  dropzoneOptions: Omit<DropzoneOptions, 'disabled' | 'multiple'>;
  /**
   * This `disabled` state only applies when no file is selected
   * @default false
   * */
  disabled?: boolean;
  error?: boolean;
  /**
   * Text to display in empty state
   * @default 'or drag your file here'
   * */
  instructionText?: string;

  /** Display file info if uploaded file property has data */
  uploadedFile: UploadedFile | null;
  onRemoveFile?: () => void;
  loading?: boolean;
  /**
   * Text to show while loading state is active
   * @default 'Uploading...''
   */
  loadingText?: string;
};

/**
 * Single file input
 */
export const FileUpload = ({
  className,
  dropzoneOptions,
  disabled = false,
  error = false,
  onRemoveFile,
  uploadedFile,
  instructionText = 'or drag your file here',
  loading,
  loadingText = 'Uploading...',
}: FileUploadProps) => {
  const { getRootProps, getInputProps, open } = useDropzone({
    ...dropzoneOptions,
    disabled,
    noClick: true,
    noKeyboard: true,
    multiple: false,
  });

  const renderFile = () => {
    if (uploadedFile) {
      const { name, size } = uploadedFile;

      return (
        <UploadedFileInfoWrapper>
          <Text type="label" color="gray1200">
            {name}
          </Text>
          {size && (
            <Text type="caption" color="gray700">
              {size}
            </Text>
          )}
        </UploadedFileInfoWrapper>
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
    <StyledFileInput {...getRootProps()}>
      <input {...getInputProps()} />
      <ContentWrapper>
        <Button onClick={open} loading={loading} spinnerColor="black">
          Browse
        </Button>
        {renderText()}
      </ContentWrapper>
    </StyledFileInput>
  );

  return (
    <Wrapper disabled={disabled} error={error} className={className}>
      {renderContent()}
      {onRemoveFile && uploadedFile && (
        <RemoveFileButton onClick={() => onRemoveFile()}>
          <RemoveCircleDuotoneIcon size={20} />
        </RemoveFileButton>
      )}
    </Wrapper>
  );
};
