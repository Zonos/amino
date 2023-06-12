declare module 'react-split-it' {
  export type SplitProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
    direction?: 'horizontal' | 'vertical';
    /**
     * @param gutterSize The size of the gutter in pixels
     * @default 10
     */
    gutterSize?: number;
    /**
     * @param minSize The minumum size in css pixel
     * @default 10
     */
    minSize?: number;
    onSetSizes?(sizes: number[]): void;
    sizes?: number[];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export default function Split(props: SplitProps): any;
}
