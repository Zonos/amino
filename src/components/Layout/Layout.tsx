import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: var(--amino-sidebar-width) 1fr;
  grid-column-gap: var(--amino-space);
`;

const ContentGrid = styled(Grid)`
  height: 100%;
`;

const AminoLayout = styled.main`
  height: 100vh;
  overflow: hidden;
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
  margin-right: var(--amino-space-negative);
  margin-left: var(--amino-space-negative);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - var(--amino-sidebar-width));
  background: var(--amino-page-background);
`;

const Wrapper = styled.div`
  width: calc(var(--amino-container-width) - var(--amino-sidebar-width));
`;

type Props = {
  sidebar: any;
  content: any;
};

export const Layout: React.FC<Props> = ({
  content,
  sidebar,
}) => {
  return (
    <AminoLayout>
      <ContentGrid>
        <Sidebar>
          <SidebarContent>{sidebar}</SidebarContent>
        </Sidebar>
        <Content>
          <Wrapper>{content}</Wrapper>
        </Content>
      </ContentGrid>
    </AminoLayout>
  );
};
