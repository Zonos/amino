import React from 'react';
import styled from 'styled-components';
import { theme } from '../src/styles/constants/theme';
import '../src/styles/amino.css';
import '../src/styles/reset.css';
import '../src/styles/theme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  layout: 'fullscreen',
};

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'day',
    toolbar: {
      icon: 'circlehollow',
      dynamicTitle: true,
      items: [
        { value: 'day', title: 'Day', icon: 'circlehollow' },
        { value: 'night', title: 'Night', icon: 'circle' },
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
  left?: boolean;
}>`
  border-right: ${props =>
    props.left ? `1px solid ${theme.gray500}` : 'none'};
  width: 100%;
  overflow: auto;
  padding: ${theme.space16};
  background: ${theme.gray0};
  color: ${theme.textColor};
`;

const SideBySideContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  > * {
    flex: 1;
  }
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
          <ThemeBlock>
            <Story {...context} />
          </ThemeBlock>
        </div>
      </SideBySideContainer>
    );
  }

  return (
    <div data-theme={theme}>
      <ThemeBlock>
        <Story {...context} />
      </ThemeBlock>
    </div>
  );
};

export const decorators = [withTheme];