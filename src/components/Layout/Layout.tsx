import React from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

const Grid = styled.div`
  display: grid;
  grid-template-columns: var(${AminoTheme.sidebarWidth}) 1fr;
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
  padding: var(${AminoTheme.space});
  box-sizing: border-box;
  overflow-y: auto;
  height: calc(100vh - 128px);
  width: 100%;
`;

const Sidebar = styled.nav`
  border-right: var(${AminoTheme.border});
  height: calc(100vh - var(${AminoTheme.appbarHeight}));
  width: var(${AminoTheme.sidebarWidth});
  box-sizing: border-box;
  background: white;
  display: grid;
  grid-template-rows: 1fr var(${AminoTheme.appbarHeight});
  background: var(${AminoTheme.sidebarColor});
`;

const Content = styled.div`
  overflow-y: auto;
  padding: var(${AminoTheme.space});
  box-sizing: border-box;
  height: calc(100vh - var(${AminoTheme.appbarHeight}));
  margin-bottom: var(${AminoTheme.space});
`;

const Header = styled.header`
  background: white;
  box-shadow: var(${AminoTheme.shadowSmall});
  border-bottom: var(${AminoTheme.border});
  height: var(${AminoTheme.appbarHeight});
  z-index: var(${AminoTheme.appbarElevation});
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
  headerContent
}) => {
  return (
    <AminoLayout>
      <Header>
        {headerContent}
      </Header>
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
