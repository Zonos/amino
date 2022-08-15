export type TestIdFormat = `amino--${string}`;

const formatId = (str: string): TestIdFormat =>
  `amino--${str.toLowerCase().replace(/([^a-zA-Z0-9_]|\s)/g, '-')}`;

export const getTestId = ({
  componentName,
  name,
}: {
  componentName?: string;
  name?: string;
}): TestIdFormat => {
  if (!componentName && !name) {
    throw new Error("Need to have either 'componentName' or 'name'");
  }
  return name ? formatId(name) : formatId(componentName || '');
};
