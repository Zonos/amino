import { useMemo } from 'react';
import type { Column } from 'react-data-grid';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
import type { RowWithIndex } from 'src/components/pivot-table/PivotTable';
import { MultiSelect } from 'src/components/select/MultiSelect';
import { FilterIcon } from 'src/icons/FilterIcon';
import { cn } from 'src/utils/cn';
import { useDropdown } from 'src/utils/hooks/useDropdown';
import { translateAminoText as translate } from 'src/utils/translations/__amino__/translateAminoText';
import { useCurrentLanguage } from 'src/utils/translations/AminoTranslationStore';

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
    <div ref={wrapperRef} className={cn('relative')}>
      <button
        ref={refs.setReference}
        className={cn(
          'flex items-center justify-center h-amino-size-sm px-amino-12',
          'border border-amino rounded-amino-6',
        )}
        onClick={() => setVisible(!visible)}
        type="button"
      >
        <FilterIcon size={16} />{' '}
        <Translate text="Filter --context: button text referencing filtering data" />
      </button>
      <div
        ref={refs.setFloating}
        className={cn(
          'flex p-amino-16 bg-gray-0 border border-gray-200 rounded-amino-8 w-[300px]',
          'shadow-[0_0_1px_var(--amino-gray-400)]',
          '[&>div]:w-full',
          '[&_.value-container]:overflow-x-auto',
          '[&_.multi-value]:flex [&_.multi-value]:h-[22px] [&_.multi-value]:items-center',
          '[&_.multi-value_[role=button]]:flex [&_.multi-value_[role=button]]:items-center [&_.multi-value_[role=button]]:justify-center',
        )}
        style={{
          ...floatingStyles,
          opacity: visibility === 'visible' ? 1 : 0,
          zIndex: visibility === 'visible' ? 1 : -1,
        }}
      >
        <MultiSelect
          hideSelectedOptions={false}
          label={translate({ languageCode, text: 'Hide column' })}
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
