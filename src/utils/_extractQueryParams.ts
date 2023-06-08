export const paramRegex = `\\s*\\(([\\W\\w]*)\\)`;

export const extractQueryParams = ({
  actionName,
  query,
}: {
  actionName: string;
  query: string;
}) => {
  const paramsRegex = `${actionName}${paramRegex}`;
  const paramsRegexResult = new RegExp(paramsRegex).exec(query);
  const [, paramsString] = paramsRegexResult
    ? Array.from(paramsRegexResult)
    : [];
  // trim extracted params list
  const paramSplit =
    paramsString?.split(/\s*,\s*/).map(param => param.trim()) || [];
  const params: Record<string, unknown> = paramSplit.reduce((prev, param) => {
    const [key, value] = param.split(/\s*:\s*/);
    return {
      ...prev,
      [key as string]: value,
    };
  }, {});

  return params;
};
