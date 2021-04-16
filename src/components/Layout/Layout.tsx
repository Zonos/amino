import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: var(--amino-sidebar-width) 1fr;
`;

const ContentGrid = styled(Grid)`
  height: 100%;
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
  height: calc(100vh - 128px);
  width: 100%;
`;

const Sidebar = styled.nav`
  border-right: var(--amino-border);
  height: calc(100vh - var(--amino-appbar-height));
  width: var(--amino-sidebar-width);
  box-sizing: border-box;
  background: white;
  display: grid;
  grid-template-rows: 1fr var(--amino-appbar-height);
  background: var(--amino-sidebar-color);
`;

const Content = styled.div`
  overflow-y: auto;
  padding: var(--amino-space);
  box-sizing: border-box;
  height: calc(100vh - var(--amino-appbar-height));
  margin-bottom: var(--amino-space);
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

type Props = {
  footer: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
  headerContent: React.ReactNode;
};

export const Layout: React.FC<Props> = ({
  content,
  footer,
  sidebar,
  headerContent,
}) => {
  return (
    <AminoLayout>
      <Header>{headerContent}</Header>
      <ContentGrid>
        <Sidebar>
          <SidebarContent>{sidebar}</SidebarContent>

          <Footer>{footer}</Footer>
        </Sidebar>
        <Content>{content}</Content>
      </ContentGrid>
    </AminoLayout>
  );
};
