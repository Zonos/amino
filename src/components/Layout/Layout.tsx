import React from 'react';
import styled from 'styled-components';

const ContentGrid = styled.div<{ hasHeader: boolean }>`
  height: ${p =>
    p.hasHeader ? `calc(100vh - var(--amino-appbar-height))` : '100vh'};
  display: grid;
  grid-template-columns: var(--amino-sidebar-width) 1fr;
`;

const AminoLayout = styled.main`
  height: 100vh;
  overflow: hidden;
`;

const Footer = styled.div`
  box-sizing: border-box;
`;

const SidebarContent = styled.div`
  padding: var(--amino-space);
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  width: 100%;
`;

const Sidebar = styled.nav`
  border-right: var(--amino-border);
  width: var(--amino-sidebar-width);
  box-sizing: border-box;
  background: white;
  display: grid;
  grid-template-rows: 1fr calc(39px + var(--amino-space) * 2);
  height: 100%;
  overflow-y: auto;
  background: var(--amino-sidebar-color);
`;

const Content = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: var(--amino-space) var(--amino-space)
    calc(39px + var(--amino-space) * 2);
  box-sizing: border-box;
`;

const Header = styled.header`
  background: var(--amino-header-color);
  box-shadow: var(--amino-shadow-small);
  border-bottom: var(--amino-border);
  height: var(--amino-appbar-height);
  z-index: var(--amino-appbar-elevation);
  position: sticky;
  top: 0;
  box-sizing: border-box;
`;

export type LayoutProps = {
  footer: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
  headerContent: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({
  content,
  footer,
  sidebar,
  headerContent,
}) => {
  const hasHeader = !!headerContent;
  return (
    <AminoLayout>
      {hasHeader && <Header>{headerContent}</Header>}
      <ContentGrid hasHeader={hasHeader}>
        <Sidebar>
          <SidebarContent>{sidebar}</SidebarContent>

          <Footer>{footer}</Footer>
        </Sidebar>
        <Content>{content}</Content>
      </ContentGrid>
    </AminoLayout>
  );
};
