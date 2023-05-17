import React from 'react';
import styled from 'styled-components';
import '../src/styles/amino.css';
import '../src/styles/reset.css';
import '../src/styles/theme.css';
import { theme } from '../src/styles/constants/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'day',
    toolbar: {
      icon: 'circlehollow',
      dynamicTitle: true,
      items: [
        { value: 'day', title: 'Light', icon: 'circlehollow' },
        { value: 'night', title: 'Dark', icon: 'circle' },
        { value: 'side-by-side', title: 'Side by side', icon: 'sidebar' },
      ],
      defaultValue: 'day',
      onChange: value => {
        return value;
      },
    },
  },
};

const ThemeBlock = styled.div<{
  themeColor?: string;
  left?: boolean;
  fill?: boolean;
}>`
  position: absolute;
  top: 0;
  left: ${props => (props.left || props.fill ? 0 : '50vw')};
  border-right: ${props => (props.left ? '1px solid #202020' : 'none')};
  right: ${props => (props.left ? '50vw' : 0)};
  width: ${props => (props.fill ? '100vw' : '50vw')};
  height: 100vh;
  bottom: 0;
  overflow: auto;
  padding: 16px;
  background: ${theme.gray0};
`;

const SideBySideContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const withTheme = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme;

  if (theme === 'side-by-side') {
    return (
      <SideBySideContainer>
        <div data-theme="day">
          <ThemeBlock left>
            <Story {...context} />
          </ThemeBlock>
        </div>
        <div data-theme="night">
          <ThemeBlock themeColor={theme.gray1200}>
            <Story {...context} />
          </ThemeBlock>
        </div>
      </SideBySideContainer>
    );
  }

  return (
    <div data-theme={theme}>
      <ThemeBlock fill>
        <Story {...context} />
      </ThemeBlock>
    </div>
  );
};

export const decorators = [withTheme];
