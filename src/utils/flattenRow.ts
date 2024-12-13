type Value = string | number | boolean;

type Params = {
  currentVal: [string, unknown];
  prev: Record<string, unknown>;
  previousKey?: string;
};

export const flattenRow = ({
  currentVal: [key, value],
  prev,
  previousKey = '',
}: Params): Record<string, unknown> | Value => {
  const keyWithPrefix = previousKey !== '' ? `${previousKey}.${key}` : key;
  if (Array.isArray(value)) {
    // Flatten the array
    return {
      ...prev,
      [keyWithPrefix]: value.map(arrayValue => {
        const nestedRow =
          typeof arrayValue === 'object' && arrayValue
            ? // keep flattening the object
              Object.entries(arrayValue).reduce(
                (_prev, currentVal) =>
                  flattenRow({
                    currentVal,
                    prev: _prev,
                  }),
                {},
              )
            : arrayValue;
        return nestedRow;
      }),
    };
  }

  if (typeof value === 'object' && value) {
    // Flatten the object
    const nestedObj: Record<string, string> = Object.entries(value).reduce(
      (pre, [nestedKey, nestedVal]) => {
        const newFlattenRow = flattenRow({
          currentVal: [nestedKey, nestedVal],
          prev: pre,
          previousKey: previousKey ? `${previousKey}.${nestedKey}` : key,
        });
        return typeof newFlattenRow === 'object'
          ? {
              ...newFlattenRow,
            }
          : newFlattenRow;
      },
      {},
    );

    return { ...prev, ...nestedObj };
  }
  if (typeof value === 'number') {
    return { ...prev, [keyWithPrefix]: value };
  }
  if (typeof value === 'boolean') {
    return { ...prev, [keyWithPrefix]: !!value };
  }
  if (typeof value === 'string') {
    try {
      const parsedValue = JSON.parse(value);
      if (Array.isArray(parsedValue)) {
        // Flatten the array
        return {
          ...prev,
          [keyWithPrefix]: parsedValue.map(arrayValue => {
            const nestedRow =
              typeof arrayValue === 'object' && arrayValue
                ? // keep flattening the object
                  Object.entries(arrayValue).reduce(
                    (_prev, currentVal) =>
                      flattenRow({
                        currentVal,
                        prev: _prev,
                      }),
                    {},
                  )
                : arrayValue;
            return nestedRow;
          }),
        };
      }

      if (typeof parsedValue === 'object' && !!parsedValue) {
        // Flatten the object
        const nestedObj: Record<string, string> = Object.entries(
          parsedValue,
        ).reduce((pre, [nestedKey, nestedVal]) => {
          const newFlattenRow = flattenRow({
            currentVal: [nestedKey, nestedVal],
            prev: pre,
            previousKey: previousKey ? `${previousKey}.${nestedKey}` : key,
          });
          return typeof newFlattenRow === 'object'
            ? {
                ...newFlattenRow,
              }
            : newFlattenRow;
        }, {});

        return { ...prev, ...nestedObj };
      }
    } catch {
      // ignore
    }
  }
  if (!value) {
    return { ...prev, [keyWithPrefix]: '' };
  }
  return { ...prev, [keyWithPrefix]: `${value}` };
};
