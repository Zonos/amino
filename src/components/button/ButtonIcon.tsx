import { Button, type ButtonProps } from 'src/components/button/Button';
import { cn } from 'src/utils/cn';

/**
 * A Button that is just an icon.
 */

export const ButtonIcon = ({ className, style, ...props }: ButtonProps) => (
  <Button
    className={cn(
      `bg-transparent p-0 text-gray-800 hover:bg-transparent hover:text-gray-800
      focus:bg-transparent focus:text-gray-800 active:bg-transparent
      active:text-gray-800 [&_path[data-is-secondary-color]]:fill-gray-200
      hover:[&_path[data-is-secondary-color]]:fill-gray-300
      focus:[&_path[data-is-secondary-color]]:fill-gray-400
      active:[&_path[data-is-secondary-color]]:fill-gray-400
      focus:[&_svg_path:not([data-is-secondary-color])]:fill-current`,
      className,
    )}
    style={style}
    {...props}
  />
);
