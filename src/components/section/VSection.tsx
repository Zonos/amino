import type { ReactNode } from 'react';

import clsx from 'clsx';

import { SectionHeader } from 'src/components/section/_SectionHeader';
import { SectionInnerWrapper } from 'src/components/section/_SectionInnerWrapper';
import { SectionSubheader } from 'src/components/section/_SectionSubheader';
import { HStack } from 'src/components/stack/HStack';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './VSection.module.scss';

export type VSectionProps = BaseProps & {
  actions?: ReactNode;
  children: ReactNode;
  label?: ReactNode;
  sublabel?: ReactNode;
};

export const VSection = ({
  actions,
  children,
  className,
  label,
  style,
  sublabel = '',
}: VSectionProps) => (
  <div className={clsx(className, styles.styledSectionWrapper)} style={style}>
    {label && (
      <SectionInnerWrapper>
        <div>
          {typeof label === 'string' ? (
            <SectionHeader>{label}</SectionHeader>
          ) : (
            label
          )}
          {typeof sublabel === 'string' ? (
            <SectionSubheader>{sublabel}</SectionSubheader>
          ) : (
            sublabel
          )}
        </div>

        <HStack spacing={8}>{actions}</HStack>
      </SectionInnerWrapper>
    )}
    <div>{children}</div>
  </div>
);
