import { Text } from 'src/components/text/Text';
import { ZonosLogoIcon } from 'src/icons/custom/ZonosLogoIcon';

import styles from './_LoadingIcon.module.scss';

export const Loading = () => (
  <div className={styles.wrapper}>
    <ZonosLogoIcon className={styles.styledIcon} size={64} />
    <Text className={styles.styledText} type="bold-subheader">
      Loading
    </Text>
  </div>
);
