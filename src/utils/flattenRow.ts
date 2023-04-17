export const flattenRow = ({
  prev,
  currentVal: [key, value],
  previousKey = '',
}: {
  prev: Record<string, string>;
  currentVal: [string, unknown];
  previousKey?: string;
}): Record<string, string | number | boolean> => {
  const keyWithPrefix = previousKey ? `${previousKey}.${key}` : key;
  if (Array.isArray(value)) {
    return { ...prev, [key]: JSON.stringify(value) };
  }

  if (typeof value === 'object' && value) {
    // Flatten the object
    const nestedObj: Record<string, string> = Object.entries(value).reduce(
      (pre, [nestedKey, nestedVal]) => ({
        ...flattenRow({
          currentVal: [nestedKey, nestedVal],
          prev: pre,
          previousKey: previousKey ? `${previousKey}.${nestedKey}` : key,
        }),
      }),
      {}
    );

    return { ...prev, ...nestedObj };
  }
  if (typeof value === 'number') {
    return { ...prev, [keyWithPrefix]: value };
  }
  if (typeof value === 'boolean') {
    return { ...prev, [keyWithPrefix]: !!value };
  }
  if (!value) {
    return { ...prev, [keyWithPrefix]: '' };
  }
  return { ...prev, [keyWithPrefix]: `${value}` };
};
