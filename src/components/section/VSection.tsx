import type { ReactNode } from 'react';

import clsx from 'clsx';

import { SectionInnerWrapper } from 'src/components/section/_SectionInnerWrapper';
import { SectionSubheader } from 'src/components/section/_SectionSubheader';
import { HStack } from 'src/components/stack/HStack';
import type { FontType } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import { SectionHeader } from './_SectionHeader';
import styles from './VSection.module.scss';

export type VSectionProps = BaseProps & {
  actions?: ReactNode;
  children?: ReactNode;
  label?: ReactNode;
  labelType?: FontType;
  sublabel?: ReactNode;
};

export const VSection = ({
  actions,
  children,
  className,
  label,
  labelType = 'title',
  style,
  sublabel = '',
}: VSectionProps) => (
  <div className={clsx(className, styles.styledSectionWrapper)} style={style}>
    {label && (
      <SectionInnerWrapper>
        <div>
          {typeof label === 'string' ? (
            <SectionHeader type={labelType}>{label}</SectionHeader>
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
    {children && <div>{children}</div>}
  </div>
);
