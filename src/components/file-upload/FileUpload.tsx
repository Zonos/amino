import { type DropzoneOptions, useDropzone } from 'react-dropzone';

import styled from 'styled-components';

import { LegacyButton } from 'src/components/button/LegacyButton';
import { Text } from 'src/components/text/Text';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

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

const RemoveFileButton = styled(LegacyButton)`
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
  /** Display file info if uploaded file property has data */
  uploadedFile: UploadFileNoImage | null;
  onRemoveFile?: () => void;
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
        <UploadedFileInfoWrapper>
          <Text color="gray1200" type="label">
            {name}
          </Text>
          {size && (
            <Text color="gray700" type="caption">
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
        <LegacyButton loading={loading} onClick={open} spinnerColor="black">
          Browse
        </LegacyButton>
        {renderText()}
      </ContentWrapper>
    </StyledFileInput>
  );

  return (
    <Wrapper className={className} disabled={disabled} error={error}>
      {renderContent()}
      {onRemoveFile && uploadedFile && (
        <RemoveFileButton onClick={() => onRemoveFile()}>
          <RemoveCircleDuotoneIcon size={20} />
        </RemoveFileButton>
      )}
    </Wrapper>
  );
};
