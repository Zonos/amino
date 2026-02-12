import { Button, type ButtonProps } from 'src/components/button/Button';
import { cn } from 'src/utils/cn';

/**
 * A Button that is just an icon.
 */

export const ButtonIcon = ({ className, style, ...props }: ButtonProps) => (
  <Button
    className={cn(
      'p-0 [&_path[data-is-secondary-color]]:fill-gray-200 text-gray-800 bg-transparent hover:text-gray-800 hover:bg-transparent hover:[&_path[data-is-secondary-color]]:fill-gray-300 active:text-gray-800 active:bg-transparent active:[&_path[data-is-secondary-color]]:fill-gray-400 focus:text-gray-800 focus:bg-transparent focus:[&_svg_path:not([data-is-secondary-color])]:fill-current focus:[&_path[data-is-secondary-color]]:fill-gray-400',
      className,
    )}
    style={style}
    {...props}
  />
);
