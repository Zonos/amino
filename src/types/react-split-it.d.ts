declare module 'react-split-it' {
  export type SplitProps = {
    direction?: 'horizontal' | 'vertical';
    /**
     * @param minSize The minumum size in css pixel
     * @default 10
     */
    minSize?: number;
    /**
     * @param gutterSize The size of the gutter in pixels
     * @default 10
     */
    gutterSize?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
    sizes?: number[];
    onSetSizes?(sizes: number[]): void;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export default function Split(props: SplitProps): any;
}
