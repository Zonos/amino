import type { ReactNode } from 'react';

import { Flex } from 'src/components/flex/Flex';
import { cn } from 'src/utils/cn';

type ButtonGroupProps = {
  /**
   * @note The children of the ButtonGroup component must be Amino Button components
   */
  children: ReactNode;
};

export const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <Flex
    className={cn(
      'rounded-amino-6 shadow-amino-base w-fit',
      // Remove box shadows from all buttons
      '[&>*]:shadow-none [&>*]:focus:shadow-none',
      '[&>.menu-button-action_*]:shadow-none [&>.menu-button-action_*]:focus:shadow-none',
      '[&>.tooltip-wrapper>*]:shadow-none [&>.tooltip-wrapper>*]:focus:shadow-none',
      // Remove left border radius from non-first children
      '[&>*:not(:first-child)]:rounded-tl-none [&>*:not(:first-child)]:rounded-bl-none [&>*:not(:first-child)]:ml-0',
      '[&>.menu-button-action:not(:first-child)_*]:rounded-tl-none [&>.menu-button-action:not(:first-child)_*]:rounded-bl-none',
      '[&>.tooltip-wrapper:not(:first-child)>*]:rounded-tl-none [&>.tooltip-wrapper:not(:first-child)>*]:rounded-bl-none',
      // Remove right border radius from non-last children and add divider
      '[&>*:not(:last-child)]:relative [&>*:not(:last-child)]:rounded-tr-none [&>*:not(:last-child)]:rounded-br-none',
      '[&>.menu-button-action:not(:last-child)_*]:rounded-tr-none [&>.menu-button-action:not(:last-child)_*]:rounded-br-none',
      '[&>.tooltip-wrapper:not(:last-child)>*]:rounded-tr-none [&>.tooltip-wrapper:not(:last-child)>*]:rounded-br-none',
      // Divider using ::after pseudo-element
      "[&>*:not(:last-child)]:after:content-[''] [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:right-0 [&>*:not(:last-child)]:after:top-0 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:w-px [&>*:not(:last-child)]:after:bg-black/[0.16] dark:[&>*:not(:last-child)]:after:bg-white/[0.12] [&>*:not(:last-child)]:after:z-[1]",
    )}
    gap={0}
  >
    {children}
  </Flex>
);
