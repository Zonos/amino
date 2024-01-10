import type { ReactNode } from 'react';

import clsx from 'clsx';

import { SectionHeader } from 'src/components/section/_SectionHeader';
import { SectionInnerWrapper } from 'src/components/section/_SectionInnerWrapper';
import { SectionSubheader } from 'src/components/section/_SectionSubheader';
import { HStack } from 'src/components/stack/HStack';

import styles from './VSection.module.scss';

export type VSectionProps = {
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  label?: ReactNode;
  sublabel?: ReactNode;
};

export const VSection = ({
  actions,
  children,
  className,
  label,
  sublabel = '',
}: VSectionProps) => (
  <div className={clsx(className, styles.styledSectionWrapper)}>
    {label && (
      <SectionInnerWrapper>
        <SectionHeader>
          {label}
          <SectionSubheader>{sublabel}</SectionSubheader>
        </SectionHeader>

        <HStack spacing={8}>{actions}</HStack>
      </SectionInnerWrapper>
    )}
    <div>{children}</div>
  </div>
);
