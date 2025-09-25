import { Translate } from 'src/components/__internal__/TranslateAminoText';
import { Text } from 'src/components/text/Text';
import { ZonosLogoIcon } from 'src/icons/custom/logo/ZonosLogoIcon';

import styles from './_LoadingIcon.module.scss';

export const Loading = () => (
  <div className={styles.wrapper}>
    <ZonosLogoIcon className={styles.styledIcon} size={64} />
    <Text className={styles.styledText} type="bold-subheader">
      <Translate text="Loading" />
    </Text>
  </div>
);
