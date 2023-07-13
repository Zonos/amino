import { useCallback, useState } from 'react';

import { extractQueryParams, paramRegex } from 'src/utils/_extractQueryParams';

type Props = {
  actionName: string;
  query: string;
  setCachingKey: (key: string) => void;
  setQuery: (query: string) => void;
};

export const useHasuraGqlPagination = ({
  actionName,
  query,
  setCachingKey,
  setQuery,
}: Props) => {
  const { limit: _limit, offset: _offset } = extractQueryParams({
    actionName,
    query,
  });
  const limit =
    _limit && typeof _limit === 'string' ? parseInt(_limit, 10) : 10;
  const offset =
    _offset && typeof _offset === 'string' ? parseInt(_offset, 10) : 0;
  const [currentPage, setCurrentPage] = useState(
    Math.floor(offset / limit) + 1,
  );

  const handlePagination = useCallback(
    (page: number) => {
      const pageOffset = page * limit - limit;
      const paginatedQuery = query.replace(
        new RegExp(`${actionName}${paramRegex}`, 'g'),
        match => {
          if (_offset !== undefined && _limit !== undefined) {
            // if offset and limit both exist, just replace the offset
            return match.replace(/offset:\s*\d+/g, `offset: ${pageOffset}`);
          }
          if (_limit !== undefined) {
            // if only limit exist, replace the limit with the offset
            return match.replace(
              /(limit:\s*(\d+))/g,
              `$1, offset: ${pageOffset}`,
            );
          }
          return match;
        },
      );
      setQuery(paginatedQuery);
      setCachingKey(`${actionName}?page=${page}`);
      setCurrentPage(page);
    },
    [_limit, _offset, actionName, limit, query, setCachingKey, setQuery],
  );

  return {
    currentPage,
    handlePagination,
    limit,
    offset,
  };
};
