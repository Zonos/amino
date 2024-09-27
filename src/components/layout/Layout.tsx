import type { ReactElement, ReactNode } from 'react';

import clsx from 'clsx';

import type { NavigationGroupProps } from 'src/components/layout/NavigationGroup';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

import layoutStyles from './Layout.module.scss';

export type LayoutProps = BaseProps & {
  content: ReactNode;
  footer: ReactNode;
  headerContent?: ReactNode;
  logoSidebar?: ReactNode;
  noPaddingContent?: boolean;
  sidebar: ReactElement<NavigationGroupProps[] | NavigationGroupProps>;
};

export const Layout = ({
  className,
  content,
  footer,
  headerContent,
  logoSidebar,
  noPaddingContent,
  sidebar,
  style,
}: LayoutProps) => (
  <main
    className={clsx(className, layoutStyles.aminoLayout)}
    style={{
      ...style,
      '--amino-layout-height': headerContent
        ? `calc(100vh - ${theme.appbarHeight})`
        : '100vh',
    }}
  >
    {!!headerContent && (
      <header className={layoutStyles.header}>{headerContent}</header>
    )}
    <div className={layoutStyles.contentGrid}>
      <nav className={layoutStyles.styledSidebar}>
        <div className={layoutStyles.sidebarContent}>
          {!!logoSidebar && (
            <div className={layoutStyles.styledLogoSidebar}>{logoSidebar}</div>
          )}
          {sidebar}
        </div>

        <div className={layoutStyles.footer}>{footer}</div>
      </nav>
      <div
        className={clsx(
          layoutStyles.content,
          noPaddingContent && layoutStyles.noPadding,
        )}
      >
        {content}
      </div>
    </div>
  </main>
);
