import React, { ReactNode } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

type UploadedFileProps = {
  uploadedSize: string;
  uploadedThumbnailUrl: string;
  uploadedFilename: string;
};

export interface FileUploadProps {
  dropzoneOptions: DropzoneOptions;
  loading: boolean;
  loadingText?: ReactNode;
  error?: boolean;

  /** Display file info if uploaded file property has data */
  uploadedFile?: UploadedFileProps;
  onRemove?: () => void;
  width?: number;
  helperText?: string;
}

type DropzoneWrapper = {
  width?: number;
  loading: boolean;
  error?: boolean;
  hasUploadedFile?: boolean;
};

const StyledDropzoneWrapper = styled.div<{ width?: number }>`
  display: flex;
  flex-direction: column;
  ${({ width }) => width && `width: ${width}px;`}
`;

const StyledWrapper = styled.div<DropzoneWrapper>`
  position: relative;
  border: 1px dashed
    ${({ error }) => (error ? theme.danger : theme.borderColor)};
  border-radius: ${theme.radius};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: ${({ hasUploadedFile, loading }) =>
    hasUploadedFile || loading ? 'left' : 'center'};

  padding-left: ${({ hasUploadedFile, loading }) =>
    (hasUploadedFile || loading) && theme.spaceHalf};
  img {
    height: auto;
  }
  & strong {
    display: block;
  }
`;
const StyledImageWrapper = styled.div``;
const StyledHStack = styled(HStack)`
  grid-template-columns: auto;
  height: 100%;
  flex-basis: calc(100% - ${theme.spaceDouble});
  ${StyledImageWrapper} {
    margin: auto;
    width: 32px;
  }
`;
const StyledFileInput = styled.div`
  outline: none;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const StyledFileInfo = styled.div<{ hasUploadedFile: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${theme.spaceQuarter};
  align-items: center;
  justify-content: ${({ hasUploadedFile }) =>
    hasUploadedFile ? 'left' : 'center'};
`;
const StyledFileName = styled.span`
  font-style: normal;
  font-size: ${theme.textSm};
`;
const StyledCloseButton = styled.button`
  position: absolute;
  right: ${theme.spaceHalf};
  top: calc(50% - 10px);
  :active,
  :focus {
    outline: none;
    box-shadow: unset;
  }
`;
const StyledLink = styled.span`
  color: ${theme.blueBase};
  cursor: pointer;
`;
const StyledHelperText = styled(Text)`
  font-style: normal;
`;
export const FileUpload = ({
  dropzoneOptions,
  error,
  helperText,
  loading,
  loadingText,
  onRemove,
  uploadedFile,
  width,
}: FileUploadProps) => {
  const localDropzoneOption = { ...dropzoneOptions };
  // override onDropAccepted event
  localDropzoneOption.onDropAccepted = (files, e) => {
    if (dropzoneOptions.onDropAccepted) {
      dropzoneOptions.onDropAccepted(files, e);
    }
  };

  // override onDropRejected event
  localDropzoneOption.onDropRejected = (files, e) => {
    if (dropzoneOptions.onDropRejected) {
      dropzoneOptions.onDropRejected(files, e);
    }
  };
  const { getRootProps, getInputProps } = useDropzone(localDropzoneOption);
  const renderContent = () => {
    if (loading) {
      return loadingText || 'Loading...';
    }
    if (uploadedFile) {
      return (
        <>
          <StyledHStack>
            <StyledImageWrapper>
              <img
                src={uploadedFile.uploadedThumbnailUrl || ''}
                alt="Uploaded thumbnail"
              />
            </StyledImageWrapper>
            <StyledFileInfo hasUploadedFile={!!uploadedFile}>
              <strong>{uploadedFile.uploadedFilename}</strong>
              <StyledFileName>{uploadedFile.uploadedSize}</StyledFileName>
            </StyledFileInfo>
          </StyledHStack>

          {onRemove && (
            <StyledCloseButton onClick={() => onRemove()}>
              <RemoveCircleIcon size={20} />
            </StyledCloseButton>
          )}
        </>
      );
    }
    return (
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      <StyledFileInput {...getRootProps()}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...getInputProps()} />
        <HStack>
          <p>
            Drag &amp; drop or <StyledLink>browse</StyledLink>
          </p>
        </HStack>
      </StyledFileInput>
    );
  };
  return (
    <StyledDropzoneWrapper width={width}>
      <StyledWrapper
        error={!!error}
        hasUploadedFile={
          uploadedFile && Object.entries(uploadedFile).length > 0
        }
        loading={loading}
      >
        {renderContent()}
      </StyledWrapper>

      {helperText && (
        <StyledHelperText type="subtitle">{helperText}</StyledHelperText>
      )}
    </StyledDropzoneWrapper>
  );
};
