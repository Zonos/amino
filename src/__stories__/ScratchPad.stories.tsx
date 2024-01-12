import type { Meta } from '@storybook/react';

import { VStack } from 'src/components/stack/VStack';

import styles from './ScratchPad.stories.module.scss';

const Option = ({ label }: { label: string }) => (
  <div className={styles.multiValue}>
    <div className={styles.label}>{label}</div>
    <div className={styles.remove}>X</div>
  </div>
);

const SecondOption = ({ label }: { label: string }) => (
  <div className={styles.secondMultiValue}>
    <div className={styles.label}>{label}</div>
    <div className={styles.remove}>X</div>
  </div>
);

export const ScratchPad = () => (
  <VStack>
    <div className={styles.styledWrapper}>
      <div className={styles.valueContainer}>
        <Option label="France" />
        <Option label="Germany" />
        <Option label="Algeria" />
        <Option label="Angola" />
        <Option label="Benin" />
        <Option label="Austria" />
        <Option label="Greenland" />
        <Option label="Iceland" />
        <Option label="United States" />
      </div>
    </div>
    <div className={styles.styledWrapper}>
      <div className={styles.container}>
        <SecondOption label="France" />
        <SecondOption label="Germany" />
        <SecondOption label="Algeria" />
        <SecondOption label="Angola" />
        <SecondOption label="Benin" />
        <SecondOption label="Austria" />
        <SecondOption label="Greenland" />
        <SecondOption label="Iceland" />
        <SecondOption label="United States" />
      </div>
    </div>
  </VStack>
);

const ScratchPadMeta: Meta = {
  component: ScratchPad,
};

export default ScratchPadMeta;
