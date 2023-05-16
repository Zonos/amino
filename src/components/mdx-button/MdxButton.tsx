import {
  type ButtonProps,
  Button as AminoButton,
} from 'src/components/button/Button';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { theme } from 'src/styles/constants/theme';
import { getIsInternalLink } from 'src/utils/getIsInternalLink';
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

export type MdxButtonProps = ButtonProps<'a'> & {
  internalPaths?: string[];
};

export const MdxButton = ({
  intent,
  href,
  children,
  className,
  internalPaths,
  ...props
}: MdxButtonProps) => {
  const isPrimary = intent === 'primary';
  const { isInternalLink } = getIsInternalLink({ href, internalPaths });

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
        target={!isInternalLink ? '_blank' : undefined}
        rel={!isInternalLink ? 'nofollow noopener noreferrer' : undefined}
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
