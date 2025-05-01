import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';

export type LightBoxProps = BaseDialogProps & {
  /**
   * Function called when the lightbox is closed
   */
  onClose: () => void;
};

/**
 * LightBox component provides a modal view for displaying images, videos, or other media
 * content with a darkened background overlay.
 *
 * @example Basic usage
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Button onClick={() => setOpen(true)}>Open Image</Button>
 *
 * <LightBox
 *   open={open}
 *   onClose={() => setOpen(false)}
 * >
 *   <img src="/path/to/image.jpg" alt="Preview" />
 * </LightBox>
 * ```
 *
 * @example With custom width
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <LightBox
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   width={800}
 * >
 *   <img src="/path/to/image.jpg" alt="Preview" style={{ maxWidth: '100%' }} />
 * </LightBox>
 * ```
 *
 * @example With video content
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <LightBox
 *   open={open}
 *   onClose={() => setOpen(false)}
 * >
 *   <video
 *     controls
 *     width="100%"
 *     autoPlay
 *   >
 *     <source src="/path/to/video.mp4" type="video/mp4" />
 *     Your browser does not support the video tag.
 *   </video>
 * </LightBox>
 * ```
 *
 * @example With carousel of images
 * ```tsx
 * const [open, setOpen] = useState(false);
 * const [currentIndex, setCurrentIndex] = useState(0);
 * const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];
 *
 * <LightBox
 *   open={open}
 *   onClose={() => setOpen(false)}
 * >
 *   <div style={{ display: 'flex', alignItems: 'center' }}>
 *     <Button
 *       icon={<ArrowLeftIcon />}
 *       onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
 *       disabled={currentIndex === 0}
 *       variant="plain"
 *     />
 *     <img
 *       src={images[currentIndex]}
 *       alt={`Image ${currentIndex + 1}`}
 *       style={{ maxWidth: '90%', maxHeight: '80vh' }}
 *     />
 *     <Button
 *       icon={<ArrowRightIcon />}
 *       onClick={() => setCurrentIndex(prev => Math.min(images.length - 1, prev + 1))}
 *       disabled={currentIndex === images.length - 1}
 *       variant="plain"
 *     />
 *   </div>
 * </LightBox>
 * ```
 */
export const LightBox = ({ children, ...props }: LightBoxProps) => (
  <BaseDialog {...props}>{children}</BaseDialog>
);
