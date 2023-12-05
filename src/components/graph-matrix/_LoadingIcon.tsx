import { Text } from 'src/components/text/Text';
import { ZonosLogoIcon } from 'src/icons/custom/ZonosLogoIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './_LoadingIcon.module.scss';

export const Loading = ({ style }: BaseProps) => (
  <div className={styles.wrapper} style={style}>
    <ZonosLogoIcon className={styles.styledIcon} size={64} />
    <Text className={styles.styledText} type="bold-subheader">
      Loading
    </Text>
  </div>
);
