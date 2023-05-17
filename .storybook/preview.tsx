import React from 'react';
import '../src/styles/amino.css';
import '../src/styles/reset.css';
import '../src/styles/theme.css';
import styled, { css } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/constants/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'day',
      toolbar: {
        icon: 'circlehollow',
        // dynamicTitle: true,
        items: [
          { value: 'day', title: 'Day', icon: 'circlehollow' },
          { value: 'night', title: 'Night', icon: 'circle' },
        ],
        defaultValue: 'day',
        onChange: value => {
          return value;
        },
      },
    },
  },
};

const ThemeBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  background: ${theme.gray0};
`;

const withTheme = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme;

  return (
    <div data-theme={theme}>
      <ThemeBlock>
        <Story {...context} />
      </ThemeBlock>
    </div>
  );
};

export const decorators = [withTheme];
