import { Fragment } from 'react';

import type { Meta } from '@storybook/react';
import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

const StyleMeta: Meta = {
  title: 'Box Shadows',
};

export default StyleMeta;

const shadows = [
  { label: 'Inset', value: 'inset' },
  { label: 'Base', value: 'small' },
  { label: 'Medium', value: 'base' },
  { label: 'Large', value: 'medium' },
  { label: 'XL', value: 'large' },
  { label: '2XL', value: 'larger' },
] as const;

type ShadowIntensity = (typeof shadows)[number]['value'];
type AminoShadow = `--amino-shadow-${ShadowIntensity}`;

interface ShadowProps {
  shadow: AminoShadow;
}
const StyledBoxShadowWrapper = styled.div<ShadowProps>`
  margin-bottom: ${theme.space40};
  box-shadow: var(${props => props.shadow});
  background: ${theme.gray100};
  padding: ${theme.space16} ${theme.space24};
`;
const StyledWrapper = styled.div`
  background: ${theme.gray0};
  padding: ${theme.space8} ${theme.space24};
`;

export const BoxShadows = () => (
  <StyledWrapper>
    {shadows.map(({ label, value }) => {
      const aminoShadow: AminoShadow = `--amino-shadow-${value}`;
      return (
        <Fragment key={aminoShadow}>
          <p>Shadow intensity: {label}</p>
          <StyledBoxShadowWrapper shadow={aminoShadow}>
            <p>var({aminoShadow})</p>
          </StyledBoxShadowWrapper>
        </Fragment>
      );
    })}
  </StyledWrapper>
);
