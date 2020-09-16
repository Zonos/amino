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

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;

  img,
  svg {
    width: 120px;
    height: 100%;
  }
`;

const Footer = styled.div`
  box-sizing: border-box;
`;

const SidebarContent = styled.div`
  padding: var(${AminoTheme.space});
  box-sizing: border-box;
  overflow-y: scroll;
  height: calc(100vh - 128px);
`;

const Sidebar = styled.nav`
  border-right: var(${AminoTheme.border});
  height: 100%;
  width: var(${AminoTheme.sidebarWidth});
  box-sizing: border-box;
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(${AminoTheme.appbarHeight}) 1fr var(
      ${AminoTheme.appbarHeight}
    );
`;

const Content = styled.div`
  overflow-y: auto;
  padding: var(${AminoTheme.space});
  box-sizing: border-box;
`;

type Props = {
  footer: any;
  sidebar: any;
  brand: any;
  content: any;
};

export const Layout: React.FC<Props> = ({
  content,
  footer,
  sidebar,
  brand
}) => {
  return (
    <AminoLayout>
      <ContentGrid>
        <Sidebar>
          <Brand>
            <SidebarContent>{brand}</SidebarContent>
          </Brand>

          <SidebarContent>{sidebar}</SidebarContent>

          <Footer>{footer}</Footer>
        </Sidebar>
        <Content>{content}</Content>
      </ContentGrid>
    </AminoLayout>
  );
};
