import type { ReactElement, ReactNode } from 'react';

import type { NavigationGroupProps } from 'src/components/layout/NavigationGroup';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type LayoutProps = BaseProps & {
  /**
   * Main content to display in the layout's content area
   */
  content: ReactNode;
  /**
   * Content to display in the footer of the sidebar
   * Typically contains user menu or authentication controls
   */
  footer: ReactNode;
  /**
   * Optional content for the header section above the main layout
   * If not provided, the header section won't be rendered
   */
  headerContent?: ReactNode;
  /**
   * Optional logo to display at the top of the sidebar
   */
  logoSidebar?: ReactNode;
  /**
   * Whether to remove default padding from the content area
   * @default false
   */
  noPaddingContent?: boolean;
  /**
   * Navigation elements to render in the sidebar
   * Should be NavigationGroup or NavigationItem components
   */
  sidebar: ReactElement<NavigationGroupProps[] | NavigationGroupProps>;
};

/**
 * Layout component provides the main application layout structure with
 * configurable header, sidebar navigation, content area, and footer.
 *
 * @example Basic usage with header
 * ```tsx
 * <Layout
 *   headerContent={<div className="header">Header Content</div>}
 *   sidebar={<NavigationGroup content={<NavigationItem content="Home" />} />}
 *   content={<div className="content">Main content area</div>}
 *   footer={<div className="footer">Footer content</div>}
 * />
 * ```
 *
 * @example Without header, with logo in sidebar
 * ```tsx
 * <Layout
 *   logoSidebar={<img src="logo.png" alt="Logo" />}
 *   sidebar={
 *     <>
 *       <NavigationItem content="Dashboard" icon={<DashboardIcon />} />
 *       <NavigationGroup
 *         content={<NavigationItem content="Settings" icon={<SettingsIcon />} />}
 *       >
 *         <NavigationItem content="Profile" />
 *         <NavigationItem content="Preferences" />
 *       </NavigationGroup>
 *     </>
 *   }
 *   content={<MainContent />}
 *   footer={<UserMenu />}
 * />
 * ```
 *
 * @example With no content padding
 * ```tsx
 * <Layout
 *   noPaddingContent
 *   sidebar={<Navigation />}
 *   content={<FullWidthDashboard />}
 *   footer={<Footer />}
 * />
 * ```
 *
 * @example With search in header
 * ```tsx
 * <Layout
 *   headerContent={
 *     <div className="header">
 *       <Logo />
 *       <Input
 *         placeholder="Search..."
 *         onChange={handleSearch}
 *         value={searchQuery}
 *       />
 *       <UserControls />
 *     </div>
 *   }
 *   sidebar={<SideNavigation />}
 *   content={<PageContent />}
 *   footer={<VersionInfo />}
 * />
 * ```
 */
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
    className={cn('h-screen overflow-hidden', className)}
    style={{
      ...style,
      '--amino-layout-height': headerContent
        ? `calc(100vh - ${theme.appbarHeight})`
        : '100vh',
    }}
  >
    {!!headerContent && (
      <header className="sticky top-0 z-[var(--amino-appbar-elevation)] flex h-[var(--amino-appbar-height)] box-border border-b border-amino bg-header shadow-[var(--amino-v3-shadow-base)]">
        {headerContent}
      </header>
    )}
    <div
      className="grid h-[var(--amino-layout-height)]"
      style={{
        gridTemplateColumns: `var(--amino-sidebar-width) 1fr`,
      }}
    >
      <nav className="grid h-full w-[var(--amino-sidebar-width)] box-border grid-rows-[1fr_auto] border-r border-amino-subtle bg-sidebar">
        <div className="h-full w-full box-border overflow-y-auto p-amino-16">
          {!!logoSidebar && <div className="mb-amino-24">{logoSidebar}</div>}
          {sidebar}
        </div>

        <div className="w-[var(--amino-sidebar-width)] box-border">
          {footer}
        </div>
      </nav>
      <div
        className={cn(
          'h-full box-border overflow-y-auto p-amino-32',
          noPaddingContent && 'p-0',
        )}
      >
        {content}
      </div>
    </div>
  </main>
);
