import { ZonosIcon } from 'src/icons/IconIndex';
import { theme } from 'src/styles/constants/theme';
import styled, { keyframes } from 'styled-components';

import { Text } from '../text/Text';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.space12};
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledIcon = styled(ZonosIcon)`
  animation: ${Rotate} 2s linear infinite;
`;

const StyledText = styled(Text)`
  position: relative;

  &:after {
    position: absolute;
    animation: dots 1200ms linear infinite;
    content: '';
  }

  @keyframes dots {
    0%,
    20% {
      content: '.';
    }
    40% {
      content: '..';
    }
    60% {
      content: '...';
    }
    90%,
    100% {
      content: '';
    }
  }
`;

export const Loading = () => (
  <Wrapper>
    <StyledIcon size={64} />
    <StyledText type="bold-subheader">Loading</StyledText>
  </Wrapper>
);
