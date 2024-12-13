import { type ReactNode, useEffect, useMemo, useRef } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import { getAminoColor } from 'src/utils/getAminoColor';
import { getProductDetails, type Product } from 'src/utils/getProductDetails';

import styles from './GlowWrapper.module.scss';

type Props = BaseProps & {
  children?: ReactNode;
  /**
   * @default 'gray600'
   */
  glowColor?: Color;
  /**
   * Use product colors.
   */
  product?: Product;
  /**
   * Border radius
   * @default 6
   */
  radius?: number;
  /**
   * Size of glow border in pixels
   * @default 1
   */
  size?: number;
};

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
      className={clsx(styles.wrapper, className)}
      style={{
        ...style,
        '--amino-glow-wrapper-background':
          gradient ||
          `radial-gradient(circle, ${getAminoColor(glowColor)} 0%, white 70%)`,
        '--amino-glow-wrapper-border-radius': `${radius}px`,
        '--amino-glow-wrapper-padding': `${size}px`,
      }}
    >
      {children}
    </div>
  );
};
