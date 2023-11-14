import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';
import { getAminoColor } from 'src/utils/getAminoColor';

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

export type ProgressBarProps = BaseProps & {
  colorStyle?: 'greenToRed' | 'redToGreen' | Color;
  progress?: number;
};

export const ProgressBar = ({
  className,
  colorStyle = 'blue600',
  progress = 0,
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
    <Base className={className}>
      <Bar colorStyle={colorStyle} progress={validatedProgress} />
    </Base>
  );
};
