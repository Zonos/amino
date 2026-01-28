import { Fragment, type ReactNode } from 'react';

export const handleTranslateComponentText = ({
  translatedTextNoJsx,
  variables,
}: {
  translatedTextNoJsx: string;
  variables: Record<string, ReactNode>;
}) => {
  // Always strip --context: suffix first, regardless of variables
  let processedText = translatedTextNoJsx;
  // Remove --context: suffix if present
  if (translatedTextNoJsx.includes(' --context:')) {
    processedText = processedText.split(' --context:')[0] || processedText;
  }

  // Strip curly braces (brand name protection) - remove braces but keep content
  processedText = processedText.replace(/\{([^}]+)\}/g, '$1');

  // If no variables, return the processed text (with context already stripped)
  if (!variables || Object.keys(variables).length === 0) {
    return processedText;
  }

  // Separate string/number variables from ReactNode variables
  const stringVariables: Record<string, string | number> = {};
  const reactNodeVariables: Array<[string, ReactNode]> = [];

  Object.entries(variables).forEach(([key, value]) => {
    if (typeof value === 'string' || typeof value === 'number') {
      stringVariables[key] = value;
    } else {
      reactNodeVariables.push([key, value]);
    }
  });

  // Replace string/number variables
  Object.entries(stringVariables).forEach(([key, value]) => {
    processedText = processedText.replace(
      new RegExp(`\\[${key}\\]`, 'g'),
      String(value),
    );
  });

  // If no ReactNode variables, return the processed string
  if (reactNodeVariables.length === 0) {
    return processedText;
  }

  // Process ReactNode variables (replaces [key] with JSX components)
  let result: ReactNode[] = [processedText];

  reactNodeVariables.forEach(([key, value]) => {
    const newResult: ReactNode[] = [];
    result.forEach(segment => {
      if (typeof segment === 'string') {
        const parts = segment.split(`[${key}]`);
        parts.forEach((part, index) => {
          if (index > 0) {
            newResult.push(value);
          }
          if (part) {
            newResult.push(part);
          }
        });
      } else {
        newResult.push(segment);
      }
    });
    result = newResult;
  });

  return (
    <>
      {result.map((segment, index) => (
        <Fragment key={index}>{segment}</Fragment>
      ))}
    </>
  );
};
