import { Skeleton } from 'src/components/skeleton/Skeleton';
import { BookIcon } from 'src/icons/BookIcon';
import { CodeIcon } from 'src/icons/CodeIcon';
import { EyeDuotoneIcon } from 'src/icons/EyeDuotoneIcon';
import { StarIcon } from 'src/icons/StarIcon';
import { UserIcon } from 'src/icons/UserIcon';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import styled from 'styled-components';

import { devices } from '../../styles/devices';

const Wrapper = styled.div`
  padding: 24px;
  background-color: ${theme.gray50};
  border-radius: 10px;
  margin: 6px 28px 32px;
  overflow: hidden;
`;

const OwnersWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 48px;
  row-gap: 16px;
  justify-content: left;
  width: 100%;
  white-space: nowrap;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const Owner = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: ${theme.gray1200};
  width: fit-content;
  flex: 1 1 0px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(43, 196, 143, 0.14) 0%,
      rgba(43, 196, 143, 0) 100%
    );
    height: 116px;
    width: 116px;
    top: 34px;
    left: -50px;

    @media ${devices.desktop} {
      top: 30px;
      left: -16px;
      height: 50px;
      width: 50px;
    }
  }

  span {
    font-weight: 600;
  }
  b {
    font-weight: 700;
  }
`;

const OwnerRed = styled(Owner)`
  ::before {
    top: 0;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(202, 109, 120, 0.24) 0%,
      rgba(202, 109, 120, 0) 100%
    );
    @media ${devices.desktop} {
      top: -12px;
    }
  }
`;

const OwnerBlue = styled(Owner)`
  ::before {
    top: 0;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(126, 133, 219, 0.2) 0%,
      rgba(126, 133, 219, 0.24) 0.01%,
      rgba(126, 133, 219, 0) 100%
    );
    @media ${devices.desktop} {
      top: -12px;
    }
  }
`;

const OwnerOrange = styled(Owner)`
  ::before {
    top: 0;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(220, 127, 81, 0.24) 0%,
      rgba(220, 127, 81, 0) 100%
    );
    @media ${devices.desktop} {
      top: -6px;
    }
  }
`;

type DocOwner = {
  id: string | null;
  name: string | null;
} | null;

export type Props = {
  docChampion: DocOwner;
  docEngineer: DocOwner;
  docOwner: DocOwner;
  docWriter: DocOwner;
  isLoading: boolean;
  themeOverride?: Theme;
};

export const OwnershipBlock = ({
  docChampion,
  docEngineer,
  docOwner,
  docWriter,
  isLoading,
  themeOverride = 'night',
}: Props) => (
  <Wrapper data-theme={themeOverride}>
    <Owner>
      <EyeDuotoneIcon color="gray300" secondaryColor="gray800" size={20} />
      <span>Zonos Only</span>
    </Owner>

    <OwnersWrapper>
      <Owner>
        <UserIcon color="green500" size={20} />
        {isLoading ? (
          <Skeleton animation width={100} />
        ) : (
          <b>{docOwner?.name || 'N/A'}</b>
        )}
      </Owner>
      <OwnerRed>
        <BookIcon color="red500" size={20} />
        {isLoading ? (
          <Skeleton animation width={100} />
        ) : (
          <b>{docWriter?.name || 'N/A'}</b>
        )}
      </OwnerRed>
      <OwnerBlue>
        <CodeIcon color="blue500" size={20} />
        {isLoading ? (
          <Skeleton animation width={100} />
        ) : (
          <b>{docEngineer?.name || 'N/A'}</b>
        )}
      </OwnerBlue>
      <OwnerOrange>
        <StarIcon color="orange500" size={20} />
        {isLoading ? (
          <Skeleton animation width={100} />
        ) : (
          <b>{docChampion?.name || 'N/A'}</b>
        )}
      </OwnerOrange>
    </OwnersWrapper>
  </Wrapper>
);
