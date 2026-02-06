import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
import { Text } from 'src/components/text/Text';
import { ZonosLogoIcon } from 'src/icons/custom/logo/ZonosLogoIcon';
import { cn } from 'src/utils/cn';

export const Loading = () => (
  <div
    className={cn(
      'fixed top-0 bottom-0 left-0 right-0',
      'flex flex-col justify-center items-center gap-amino-12',
    )}
  >
    <ZonosLogoIcon
      className={cn('animate-[spin_2s_linear_infinite]')}
      size={64}
    />
    <Text
      className={cn(
        'relative',
        'after:absolute after:animate-[dots_1200ms_linear_infinite] after:content-[""]',
      )}
      type="bold-subheader"
    >
      <Translate text="Loading" />
    </Text>
  </div>
);
