import type { ChangeEventHandler, ReactElement, ReactNode } from 'react';

import clsx from 'clsx';

import { SearchInput } from 'src/components/input/SearchInput';
import type { NavigationGroupProps } from 'src/components/layout/NavigationGroup';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

// the build config only work with css module to be imported relatively, we will do absolute import in the future
import layoutStyles from './Layout.module.scss';

type SearchInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export type LayoutProps = BaseProps & {
  content: ReactNode;
  footer: ReactNode;
  headerContent?: ReactNode;
  logoSidebar?: ReactNode;
  searchInput?: SearchInputProps;
  sidebar: ReactElement<NavigationGroupProps[] | NavigationGroupProps>;
};

export const Layout = ({
  className,
  content,
  footer,
  headerContent,
  logoSidebar,
  searchInput,
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
          {!!searchInput && (
            <div className={layoutStyles.searchInputWrapper}>
              <SearchInput
                className={layoutStyles.styledSearchInput}
                onChange={searchInput.onChange}
                value={searchInput.value}
              />
            </div>
          )}
          {sidebar}
        </div>

        <div className={layoutStyles.footer}>{footer}</div>
      </nav>
      <div className={layoutStyles.content}>{content}</div>
    </div>
  </main>
);
