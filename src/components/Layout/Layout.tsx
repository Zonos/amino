import React, { ChangeEventHandler, ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

import { SearchInput } from 'components/Input/SearchInput';

import { NavigationGroupProps } from './NavigationGroup';

const Footer = styled.div`
  box-sizing: border-box;
  width: var(--amino-sidebar-width);
`;

const SidebarContent = styled.div`
  padding: var(--amino-space);
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  width: 100%;
`;

const SearchInputWrapper = styled.div`
  margin-bottom: var(--amino-space-double);
`;
const StyledLogoSidebar = styled.div`
  margin-bottom: var(--amino-space);
`;
const StyledSearchInput = styled(SearchInput)`
  border: 0;
  svg {
    color: black;
  }
  input {
    background-color: var(--amino-gray-100);
    border: 0;
    ::placeholder {
      color: black;
    }
  }
`;
const StyledSidebar = styled.nav`
  border-right: var(--amino-border);
  width: var(--amino-sidebar-width);
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr calc(39px + var(--amino-space) * 2);
  height: inherit;
  background: var(--amino-sidebar-color);
`;

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

const Content = styled.div`
  height: inherit;
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
  display: flex;
`;

type SearchInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type LayoutProps = {
  footer: ReactNode;
  logoSidebar?: ReactNode;
  sidebar: ReactElement<NavigationGroupProps[] | NavigationGroupProps>;
  searchInput?: SearchInputProps;
  content: ReactNode;
  headerContent?: ReactNode;
};

export const Layout = ({
  content,
  footer,
  sidebar,
  logoSidebar,
  searchInput,
  headerContent,
}: LayoutProps) => {
  return (
    <AminoLayout>
      {!!headerContent && <Header>{headerContent}</Header>}
      <ContentGrid hasHeader={!!headerContent}>
        <StyledSidebar>
          <SidebarContent>
            {!!logoSidebar && (
              <StyledLogoSidebar>{logoSidebar}</StyledLogoSidebar>
            )}
            {!!searchInput && (
              <SearchInputWrapper>
                <StyledSearchInput
                  value={searchInput.value}
                  onChange={searchInput.onChange}
                />
              </SearchInputWrapper>
            )}
            {sidebar}
          </SidebarContent>

          <Footer>{footer}</Footer>
        </StyledSidebar>
        <Content>{content}</Content>
      </ContentGrid>
    </AminoLayout>
  );
};
