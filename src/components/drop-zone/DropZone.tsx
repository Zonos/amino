import { type DropzoneOptions, useDropzone } from 'react-dropzone';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
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
import { cn } from 'src/utils/cn';
import { translateAminoText as translate } from 'src/utils/translations/__amino__/translateAminoText';

const getInstructionTextDefault = () =>
  translate({
    text: 'Drop your file(s) here',
  });

const getLoadingTextDefault = () =>
  translate({
    text: 'Uploading file(s)...',
  });

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

/**
 * DropZone component provides a drag-and-drop interface for file uploads.
 * It supports single or multiple file uploads, image previews, and various states
 * including loading, error, and success.
 *
 * @example Basic usage
 * const [files, setFiles] = useState<UploadedFile[]>([]);
 *
 * const handleDrop = useCallback((acceptedFiles: File[]) => {
 *   const newFiles = acceptedFiles.map(file => ({
 *     name: file.name,
 *     size: `${(file.size / 1024).toFixed(2)} KB`,
 *     file
 *   }));
 *
 *   setFiles(prevFiles => [...prevFiles, ...newFiles]);
 * }, []);
 *
 * const handleRemoveFile = (index: number) => {
 *   setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
 * };
 *
 * <DropZone
 *   dropzoneOptions={{
 *     onDrop: handleDrop,
 *     accept: {'image/*': []}
 *   }}
 *   onRemoveFile={handleRemoveFile}
 *   uploadedFiles={files}
 * />
 *
 * @example With validation and error state
 * const [files, setFiles] = useState<UploadedFile[]>([]);
 * const [error, setError] = useState(false);
 * const [errorText, setErrorText] = useState('');
 *
 * const handleDrop = useCallback((acceptedFiles: File[]) => {
 *   if (acceptedFiles.some(file => file.size > 1024 * 1024)) {
 *     setError(true);
 *     setErrorText('File size must be less than 1MB');
 *     return;
 *   }
 *
 *   setError(false);
 *   setErrorText('');
 *   // Process files...
 * }, []);
 *
 * <DropZone
 *   dropzoneOptions={{
 *     onDrop: handleDrop,
 *     maxSize: 1024 * 1024
 *   }}
 *   error={error}
 *   helpText={errorText}
 *   onRemoveFile={handleRemoveFile}
 *   uploadedFiles={files}
 * />
 *
 * @example With image previews
 * const [files, setFiles] = useState<UploadedFile[]>([]);
 *
 * const handleDrop = useCallback((acceptedFiles: File[]) => {
 *   const newFiles = acceptedFiles.map(file => {
 *     const imageUrl = URL.createObjectURL(file);
 *
 *     return {
 *       name: file.name,
 *       size: `${(file.size / 1024).toFixed(2)} KB`,
 *       file,
 *       imageUrl
 *     };
 *   });
 *
 *   setFiles(prevFiles => [...prevFiles, ...newFiles]);
 * }, []);
 *
 * <DropZone
 *   dropzoneOptions={{
 *     onDrop: handleDrop,
 *     accept: {'image/*': []}
 *   }}
 *   onRemoveFile={handleRemoveFile}
 *   uploadedFiles={files}
 * />
 *
 * @example With loading state
 * const [files, setFiles] = useState<UploadedFile[]>([]);
 * const [loading, setLoading] = useState(false);
 *
 * const handleDrop = useCallback(async (acceptedFiles: File[]) => {
 *   setLoading(true);
 *
 *   try {
 *     // Simulate upload
 *     await new Promise(resolve => setTimeout(resolve, 2000));
 *
 *     const newFiles = acceptedFiles.map(file => ({
 *       name: file.name,
 *       size: `${(file.size / 1024).toFixed(2)} KB`,
 *       file
 *     }));
 *
 *     setFiles(prevFiles => [...prevFiles, ...newFiles]);
 *   } finally {
 *     setLoading(false);
 *   }
 * }, []);
 *
 * <DropZone
 *   dropzoneOptions={{
 *     onDrop: handleDrop
 *   }}
 *   loading={loading}
 *   loadingText="Uploading your files..."
 *   onRemoveFile={handleRemoveFile}
 *   uploadedFiles={files}
 * />
 *
 * @example With file type restrictions
 * <DropZone
 *   dropzoneOptions={{
 *     onDrop: handleDrop,
 *     accept: {
 *       'application/pdf': ['.pdf'],
 *       'application/msword': ['.doc', '.docx']
 *     },
 *     maxFiles: 5
 *   }}
 *   instructionText="Drop PDF or Word documents here"
 *   onRemoveFile={handleRemoveFile}
 *   uploadedFiles={files}
 * />
 *
 * @example With disabled state
 * <DropZone
 *   disabled={true}
 *   dropzoneOptions={{
 *     onDrop: handleDrop
 *   }}
 *   instructionText="File uploads are currently disabled"
 *   onRemoveFile={handleRemoveFile}
 *   uploadedFiles={files}
 * />
 */
export const DropZone = ({
  className,
  disabled = false,
  dropzoneOptions,
  error = false,
  helpText,
  instructionText,
  loading,
  loadingText,
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
    <div
      className="p-4 outline-none flex flex-col justify-center items-center gap-3 w-full h-full"
      {...getRootProps()}
      role={undefined}
    >
      <input {...getInputProps()} />
      {!noIcon && <Thumbnail icon={<FileUploadDuotoneIcon />} size={40} />}
      <div className="flex flex-col items-center gap-1">
        <Text type="label">
          <Translate
            text="[instructionText] or [browseText]"
            variables={{
              browseText: (
                <button
                  className="inline"
                  disabled={disabled}
                  onClick={open}
                  type="button"
                >
                  <Text color="blue600" type="label">
                    <Translate text="browse --context: button text referencing browsing more files" />
                  </Text>
                </button>
              ),
              instructionText: instructionText || getInstructionTextDefault(),
            }}
          />
        </Text>
        <HelpText error={error} helpText={helpText} />
      </div>
    </div>
  );

  const renderFiles = () =>
    uploadedFiles.map((file, index) => (
      <div
        key={file.name}
        className="border border-amino rounded-xl p-4 flex justify-start gap-3"
      >
        {file.imageUrl ? (
          <ImageAvatar imageUrl={file.imageUrl} shape="rounded" />
        ) : (
          <FileDuotoneIcon />
        )}
        <div className="flex flex-col">
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
            className="ml-auto"
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
        <div
          className="border-2 border-dashed rounded-xl flex flex-col items-center"
          style={{ borderColor: 'var(--amino-drop-zone-border-color)' }}
        >
          <div className="p-4 outline-none flex flex-col justify-center items-center gap-3 w-full h-full">
            <Spinner />
            <Text color="gray800" type="label">
              {loadingText || getLoadingTextDefault()}
            </Text>
          </div>
        </div>
      );
    }

    return (
      <>
        {!uploadedMaxFiles && (
          <div
            className="border-2 border-dashed rounded-xl flex flex-col items-center"
            style={{ borderColor: 'var(--amino-drop-zone-border-color)' }}
          >
            {renderUpload()}
          </div>
        )}
        {!!uploadedFiles.length && (
          <div className="flex flex-col gap-1">{renderFiles()}</div>
        )}
      </>
    );
  };

  return (
    <div
      className={cn('flex flex-col gap-4', className)}
      style={{
        ...style,
        '--amino-drop-zone-border-color': error
          ? theme.danger
          : theme.borderColor,
        '--amino-drop-zone-cursor': disabled ? 'not-allowed' : 'auto',
        '--amino-drop-zone-opacity': disabled ? theme.opacityDisabled : '1',
        cursor: 'var(--amino-drop-zone-cursor)',
        opacity: 'var(--amino-drop-zone-opacity)',
      }}
    >
      {renderContent()}
    </div>
  );
};
