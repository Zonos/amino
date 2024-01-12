import type { Meta } from '@storybook/react';
import clsx from 'clsx';

import { Card } from 'src/components/card/Card';
import { Divider } from 'src/components/divider/Divider';
import { Text } from 'src/components/text/Text';
import { ArrowDownIcon } from 'src/icons/ArrowDownIcon';
import { ArrowLeftIcon } from 'src/icons/ArrowLeftIcon';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { ArrowUpIcon } from 'src/icons/ArrowUpIcon';
import { CircleIcon } from 'src/icons/CircleIcon';

import styles from './Divider.stories.module.scss';

const DividerMeta: Meta = {
  component: Divider,
};

export default DividerMeta;

export const Basic = () => (
  <div className={styles.wrapper}>
    <div className={styles.wrapper}>
      <Text type="title">Vertical</Text>
      <div className={clsx(styles.rowInset, styles.row)}>
        <ArrowLeftIcon />
        <Divider vertical />
        <CircleIcon />
        <Divider vertical />
        <ArrowRightIcon />
      </div>
      <div className={styles.rowInset}>
        <ArrowLeftIcon />
        <Divider vertical />
        <CircleIcon />
        <Divider vertical />
        <ArrowRightIcon />
      </div>
      <div className={styles.rowInset}>
        <ArrowLeftIcon />
        <Divider className={styles.styledDividerVertical} vertical />
        <CircleIcon />
        <Divider className={styles.styledDividerVertical} vertical />
        <ArrowRightIcon />
      </div>
    </div>
    <Text type="title">Horizontal</Text>
    <div className={styles.columnWrapper}>
      <div className={clsx(styles.columnInset, styles.column)}>
        <ArrowUpIcon />
        <Divider />
        <CircleIcon />
        <Divider />
        <ArrowDownIcon />
      </div>
      <div className={styles.columnInset}>
        <ArrowUpIcon />
        <Divider />
        <CircleIcon />
        <Divider />
        <ArrowDownIcon />
      </div>
      <div className={styles.columnInset}>
        <ArrowUpIcon />
        <Divider className={styles.styledDividerHorizontal} />
        <CircleIcon />
        <Divider className={styles.styledDividerHorizontal} />
        <ArrowDownIcon />
      </div>
    </div>
  </div>
);

export const InCard = () => (
  <Card label="Default">
    <div>
      Cards automatically add negative margin to <code>{'<hr/>'}</code> tags
    </div>

    <Divider />

    <div>Some other stuff</div>
  </Card>
);
