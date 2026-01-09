import { useMemo } from 'react';
import type { Column } from 'react-data-grid';

import { TranslateAminoText } from 'src/components/__amino__/TranslateAminoText';
import type { RowWithIndex } from 'src/components/pivot-table/PivotTable';
import { MultiSelect } from 'src/components/select/MultiSelect';
import { FilterIcon } from 'src/icons/FilterIcon';
import { useDropdown } from 'src/utils/hooks/useDropdown';
import { translateAminoText } from 'src/utils/translations/__amino__/translateAminoText';
import { useCurrentLanguage } from 'src/utils/translations/AminoTranslationStore';

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
  const languageCode = useCurrentLanguage();

  const hideColumnOptions = useMemo(
    () =>
      columns.map(column => ({
        label: column.key,
        value: column.key,
      })),
    [columns],
  );

  return (
    <div ref={wrapperRef} className={styles.styledFilterWrapper}>
      <button
        ref={refs.setReference}
        className={styles.styledTriggerButton}
        onClick={() => setVisible(!visible)}
        type="button"
      >
        <FilterIcon size={16} />{' '}
        <TranslateAminoText text="Filter --context: button text referencing filtering data" />
      </button>
      <div
        ref={refs.setFloating}
        className={styles.styledFilter}
        style={{
          ...floatingStyles,
          opacity: visibility === 'visible' ? 1 : 0,
          zIndex: visibility === 'visible' ? 1 : -1,
        }}
      >
        <MultiSelect
          hideSelectedOptions={false}
          label={translateAminoText({ languageCode, text: 'Hide column' })}
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
