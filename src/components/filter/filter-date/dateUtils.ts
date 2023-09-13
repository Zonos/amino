import dayjs from 'dayjs';
import styled from 'styled-components';

import type { FilterDateData } from 'src/components/filter/filter-date/filterDateReducer';
import { theme } from 'src/styles/constants/theme';

export const DateControlsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: ${theme.space8};
  align-items: center;
`;

export type _DateControlProps = {
  value: FilterDateData;
  onChange: (value: FilterDateData) => void;
  onChangeFilterText: (text: string) => void;
};

export const formatDate = (date: string) => dayjs(date).format('MM/DD/YYYY');

export const defaultDateFormat = `YYYY-MM-DD`;
