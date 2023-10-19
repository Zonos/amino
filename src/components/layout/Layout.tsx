import type { ChangeEventHandler, ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

import { SearchInput } from 'src/components/input/SearchInput';
import { type NavigationGroupProps } from 'src/components/layout/NavigationGroup';
import { theme } from 'src/styles/constants/theme';

const Footer = styled.div`
  box-sizing: border-box;
  width: ${theme.sidebarWidth};
`;

const SidebarContent = styled.div`
  padding: ${theme.space16};
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchInputWrapper = styled.div`
  margin-bottom: ${theme.space40};
`;
const StyledLogoSidebar = styled.div`
  margin-bottom: ${theme.space24};
`;
const StyledSearchInput = styled(SearchInput)`
  border: 0;
  svg {
    color: ${theme.gray1200};
  }
  input {
    background-color: ${theme.gray100};
    border: 0;
    ::placeholder {
      color: ${theme.gray1200};
    }
  }
`;
const StyledSidebar = styled.nav`
  border-right: ${theme.border};
  width: ${theme.sidebarWidth};
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr calc(39px + ${theme.space24} * 2);
  height: inherit;
  background: ${theme.sidebarColor};
`;

const ContentGrid = styled.div<{ $hasHeader: boolean }>`
  height: ${p =>
    p.$hasHeader ? `calc(100vh - ${theme.appbarHeight})` : '100vh'};
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
  padding: ${theme.space24};
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
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export type LayoutProps = {
  content: ReactNode;
  footer: ReactNode;
  headerContent?: ReactNode;
  logoSidebar?: ReactNode;
  searchInput?: SearchInputProps;
  sidebar: ReactElement<NavigationGroupProps[] | NavigationGroupProps>;
};

export const Layout = ({
  content,
  footer,
  headerContent,
  logoSidebar,
  searchInput,
  sidebar,
}: LayoutProps) => (
  <AminoLayout>
    {!!headerContent && <Header>{headerContent}</Header>}
    <ContentGrid $hasHeader={!!headerContent}>
      <StyledSidebar>
        <SidebarContent>
          {!!logoSidebar && (
            <StyledLogoSidebar>{logoSidebar}</StyledLogoSidebar>
          )}
          {!!searchInput && (
            <SearchInputWrapper>
              <StyledSearchInput
                onChange={searchInput.onChange}
                value={searchInput.value}
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
