/**
 * Omits props from storybook controls
 */
export const omitControls = <T = object>(omittedProps: (keyof T)[]) =>
  omittedProps.reduce(
    (acc, key) => {
      acc[key] = {
        table: {
          disable: true,
        },
      };
      return acc;
    },
    {} as Record<keyof T, object>,
  );
