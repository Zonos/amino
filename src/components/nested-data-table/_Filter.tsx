import { useMemo } from 'react';
import type { Column } from 'react-data-grid';

import type { RowWithIndex } from 'src/components/pivot-table/PivotTable';
import { MultiSelect } from 'src/components/select/MultiSelect';
import { FilterIcon } from 'src/icons/FilterIcon';
import { useDropdown } from 'src/utils/hooks/useDropdown';

import styles from './_Filter.module.scss';

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
    <div className={styles.styledFilterWrapper} ref={wrapperRef}>
      <button
        className={styles.styledTriggerButton}
        onClick={() => setVisible(!visible)}
        ref={refs.setReference}
        type="button"
      >
        <FilterIcon size={16} /> Filter
      </button>
      <div
        className={styles.styledFilter}
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
      </div>
    </div>
  );
};
