import { useMemo } from 'react';
import type { Column } from 'react-data-grid';

import styled from 'styled-components';

import type { RowWithIndex } from 'src/components/pivot-table/PivotTable';
import { MultiSelect } from 'src/components/select/MultiSelect';
import { FilterIcon } from 'src/icons/FilterIcon';
import { theme } from 'src/styles/constants/theme';
import { useDropdown } from 'src/utils/hooks/useDropdown';

const StyledTriggerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme.sizeSm};
  padding: 0 ${theme.space12};
  border: 1px solid ${theme.borderColor};
  border-radius: ${theme.radius6};
`;

const StyledFilterWrapper = styled.div`
  position: relative;
`;
const StyledFilter = styled.div`
  display: flex;
  padding: ${theme.space16};
  background-color: ${theme.gray0};
  border: 1px solid ${theme.gray200};
  box-shadow: 0 0 1px ${theme.gray400};
  border-radius: ${theme.radius8};
  width: 300px;
  > div {
    width: 100%;
  }
  /** Multi select styling */
  [class*='ValueContainer'] {
    overflow-x: auto;
  }
  [class*='-multiValue'] {
    display: flex;
    height: 22px;
    align-items: center;
    [role='button'] {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Filter = ({
  columns,
  hiddenColumns,
  setHiddenColumns,
}: {
  columns: Column<RowWithIndex, Record<string, unknown>>[];
  hiddenColumns: string[];
  setHiddenColumns: (hiddenColumns: string[]) => void;
}) => {
  const { floatingStyles, refs, setVisible, visibility, visible, wrapperRef } =
    useDropdown();

  const hideColumnOptions = useMemo(
    () =>
      columns.map(column => ({
        label: column.key,
        value: column.key,
      })),
    [columns],
  );

  return (
    <StyledFilterWrapper ref={wrapperRef}>
      <StyledTriggerButton
        ref={refs.setReference}
        onClick={() => setVisible(!visible)}
      >
        <FilterIcon size={16} /> Filter
      </StyledTriggerButton>
      <StyledFilter
        ref={refs.setFloating}
        style={{
          ...floatingStyles,
          opacity: visibility === 'visible' ? 1 : 0,
          zIndex: visibility === 'visible' ? 1 : -1,
        }}
      >
        <MultiSelect
          hideSelectedOptions={false}
          label="Hide column"
          onChange={_hiddenColumns => {
            setHiddenColumns(_hiddenColumns.flatMap(column => [column.value]));
          }}
          options={hideColumnOptions}
          value={hideColumnOptions.filter(col =>
            hiddenColumns.includes(col.value),
          )}
        />
      </StyledFilter>
    </StyledFilterWrapper>
  );
};
