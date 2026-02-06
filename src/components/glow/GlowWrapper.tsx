import { type ReactNode, useEffect, useMemo, useRef } from 'react';

import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import { cn } from 'src/utils/cn';
import { getAminoColor } from 'src/utils/getAminoColor';
import { getProductDetails, type Product } from 'src/utils/getProductDetails';

type Props = BaseProps & {
  /**
   * Content to be wrapped with the glowing effect
   */
  children?: ReactNode;
  /**
   * Custom color for the glow effect
   * @default 'gray600'
   */
  glowColor?: Color;
  /**
   * Product name to use for product-specific colors
   * When specified, overrides glowColor with the product's gradient
   */
  product?: Product;
  /**
   * Border radius of the glowing wrapper in pixels
   * @default 6
   */
  radius?: number;
  /**
   * Size of glow border in pixels
   * @default 1
   */
  size?: number;
};

/**
 * GlowWrapper component adds an interactive glowing border effect to its children.
 * The glow follows the user's mouse movement, creating a dynamic highlight effect.
 * It can use either a custom color or product-specific gradients.
 *
 * @example Basic usage
 * ```tsx
 * <GlowWrapper>
 *   <Card label="Content">Card with glow effect</Card>
 * </GlowWrapper>
 * ```
 *
 * @example With custom color
 * ```tsx
 * <GlowWrapper glowColor="blue500" size={2}>
 *   <Card label="Blue Glow">Card with blue glow</Card>
 * </GlowWrapper>
 * ```
 *
 * @example With product-specific colors
 * ```tsx
 * <GlowWrapper product="checkout">
 *   <Card label="Checkout">Checkout product card</Card>
 * </GlowWrapper>
 * ```
 *
 * @example Custom radius
 * ```tsx
 * <GlowWrapper radius={12} size={2}>
 *   <div className="custom-content">
 *     Content with larger radius glow
 *   </div>
 * </GlowWrapper>
 * ```
 *
 * @example Multiple items with product-specific glows
 * ```tsx
 * <div className="products-grid">
 *   <GlowWrapper product="classify">
 *     <ProductCard product="classify" />
 *   </GlowWrapper>
 *
 *   <GlowWrapper product="clear">
 *     <ProductCard product="clear" />
 *   </GlowWrapper>
 *
 *   <GlowWrapper product="dashboard">
 *     <ProductCard product="dashboard" />
 *   </GlowWrapper>
 * </div>
 * ```
 */
export const GlowWrapper = ({
  children,
  className,
  glowColor = 'gray600',
  product,
  radius = 6,
  size = 1,
  style,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const gradient = useMemo(() => {
    if (!product) {
      return null;
    }

    return getProductDetails({ product }).gradient;
  }, [product]);

  useEffect(() => {
    const { current } = ref;
    const onMouseMove = (e: MouseEvent) => {
      if (current) {
        const { x, y } = current.getBoundingClientRect();
        current.style.setProperty(
          '--amino-glow-wrapper-x',
          (e.clientX - x).toString(),
        );
        current.style.setProperty(
          '--amino-glow-wrapper-y',
          (e.clientY - y).toString(),
        );
      }
    };

    current?.addEventListener('mousemove', onMouseMove);
    return () => {
      current?.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'relative z-[1] overflow-hidden shadow-[inset_0_0_1px_1px_rgb(var(--amino-gray-200))]',
        'after:absolute after:opacity-0 after:transition-opacity after:duration-500 after:content-[""] after:-z-[1] after:blur-[20px]',
        'hover:after:opacity-100',
        className,
      )}
      style={{
        ...style,
        '--amino-glow-wrapper-background':
          gradient ||
          `radial-gradient(circle, ${getAminoColor(glowColor)} 0%, white 70%)`,
        '--amino-glow-wrapper-x': '0',
        '--amino-glow-wrapper-y': '0',
        borderRadius: `${radius}px`,
        padding: `${size}px`,
      }}
    >
      <style>{`
        [style*="--amino-glow-wrapper-x"]::after {
          width: min(100%, 400px);
          height: min(100%, 400px);
          top: calc(var(--amino-glow-wrapper-y) * 1px - min(50%, calc(400px / 2)));
          left: calc(var(--amino-glow-wrapper-x) * 1px - min(50%, calc(400px / 2)));
          background: var(--amino-glow-wrapper-background);
        }
      `}</style>
      {children}
    </div>
  );
};
