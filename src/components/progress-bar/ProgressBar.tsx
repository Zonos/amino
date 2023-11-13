import styled from 'styled-components';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import { getAminoColor } from 'src/utils/getAminoColor';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.space8};
`;

const Base = styled.div`
  width: ${theme.space56};
  height: ${theme.space8};
  background-color: ${theme.gray100};
  border-radius: ${theme.radius8};
  z-index: 0;
`;

const Bar = styled.div<{
  colorStyle: 'greenToRed' | 'redToGreen' | Color;
  progress: number;
}>`
  width: ${p => p.progress}%;
  height: ${theme.space8};
  background-color: ${p => {
    switch (p.colorStyle) {
      case 'greenToRed':
        if (p.progress <= 20) {
          return theme.green600;
        }
        if (p.progress >= 80) {
          return theme.red600;
        }
        return theme.orange600;
      case 'redToGreen':
        if (p.progress <= 20) {
          return theme.red600;
        }
        if (p.progress >= 80) {
          return theme.green600;
        }
        return theme.orange600;
      default:
        return getAminoColor(p.colorStyle);
    }
  }};
  z-index: 1;
  border-radius: ${theme.radius8};
`;

export type ProgressBarProps = {
  colorStyle?: 'greenToRed' | 'redToGreen' | Color;
  progress?: number;
  showText?: boolean;
};

export const ProgressBar = ({
  colorStyle = 'blue600',
  progress = 0,
  showText = false,
}: ProgressBarProps) => {
  const validateProgress = () => {
    if (progress < 0) {
      return 0;
    }
    if (progress > 100) {
      return 100;
    }
    return progress;
  };

  const validatedProgress = validateProgress();

  return (
    <Wrapper>
      <Base>
        <Bar colorStyle={colorStyle} progress={validatedProgress} />
      </Base>
      {showText && <Text type="caption">{validatedProgress}/100</Text>}
    </Wrapper>
  );
};
