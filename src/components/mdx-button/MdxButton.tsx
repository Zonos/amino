import {
  Button as AminoButton,
  ButtonProps,
} from 'src/components/button/Button';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const Wrapper = styled.div<{ isPrimary: boolean }>`
  margin-bottom: 8px;
  max-width: fit-content;
  a {
    color: ${({ isPrimary }) =>
      isPrimary
        ? `${theme.textLight} !important`
        : `${theme.gray900}  !important`};
  }
  p {
    margin: 0 !important;
  }
`;

export type Props = ButtonProps<'a'> & {
  isExternalLink?: boolean;
};

export const MdxButton = ({
  intent,
  href,
  children,
  className,
  isExternalLink,
  ...props
}: Props) => {
  const isPrimary = intent === 'primary';
  if (!href) {
    throw new Error(`<MdxButton>${children}</MdxButton> requires an href`);
  }

  return (
    <Wrapper isPrimary={isPrimary}>
      <AminoButton
        tag="a"
        intent={intent}
        icon={isPrimary && <ArrowRightIcon size={20} />}
        iconRight={isPrimary}
        href={href}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'nofollow noopener noreferrer' : undefined}
        className={['link-button', className].join(' ')}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </AminoButton>
    </Wrapper>
  );
};

MdxButton.stableName = 'MdxButton';
