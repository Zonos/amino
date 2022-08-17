import React, { ChangeEventHandler, ReactElement, ReactNode } from 'react';

import { SearchInput } from 'src/components/input/SearchInput';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { type NavigationGroupProps } from './NavigationGroup';

const Footer = styled.div`
  box-sizing: border-box;
  width: ${theme.sidebarWidth};
`;

const SidebarContent = styled.div`
  padding: ${theme.space};
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchInputWrapper = styled.div`
  margin-bottom: ${theme.spaceDouble};
`;
const StyledLogoSidebar = styled.div`
  margin-bottom: ${theme.space};
`;
const StyledSearchInput = styled(SearchInput)`
  border: 0;
  svg {
    color: black;
  }
  input {
    background-color: ${theme.grayL80};
    border: 0;
    ::placeholder {
      color: black;
    }
  }
`;
const StyledSidebar = styled.nav`
  border-right: ${theme.border};
  width: ${theme.sidebarWidth};
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr calc(39px + ${theme.space} * 2);
  height: inherit;
  background: ${theme.sidebarColor};
`;

const ContentGrid = styled.div<{ hasHeader: boolean }>`
  height: ${p =>
    p.hasHeader ? `calc(100vh - ${theme.appbarHeight})` : '100vh'};
  display: grid;
  grid-template-columns: ${theme.sidebarWidth} 1fr;
`;

const AminoLayout = styled.main`
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  height: inherit;
  overflow-y: auto;
  padding: ${theme.space} ${theme.space} calc(39px + ${theme.space} * 2);
  box-sizing: border-box;
`;

const Header = styled.header`
  background: ${theme.headerColor};
  box-shadow: ${theme.v3ShadowBase};
  border-bottom: ${theme.border};
  height: ${theme.appbarHeight};
  z-index: ${theme.appbarElevation};
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
