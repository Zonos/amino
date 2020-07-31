import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: var(--amino-sidebar-width) 1fr;
  //grid-column-gap: var(--amino-space);
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
  padding: var(--amino-space);
  box-sizing: border-box;
`;

const Sidebar = styled.nav`
  border-right: var(--amino-border);
  height: 100%;
  width: var(--amino-sidebar-width);
  box-sizing: border-box;
  background: var(--amino-page-background);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--amino-appbar-height) 1fr var(--amino-appbar-height);
`;

const Content = styled.div`
  overflow-y: auto;
  padding: var(--amino-space);
  box-sizing: border-box;
  background: var(--amino-page-background);
  //background: white;
  max-width: var(--amino-container-width);
  min-width: 760px;
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

          <Footer>
            {footer}
          </Footer>
        </Sidebar>
        <Content>
          {content}
        </Content>
      </ContentGrid>
    </AminoLayout>
  );
};
