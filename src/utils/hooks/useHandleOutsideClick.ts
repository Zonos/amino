import { type RefObject, useCallback, useEffect } from 'react';

type Props = {
  onClick: () => void;
  ref: RefObject<HTMLElement>;
};

export const useHandleOutsideClick = ({ onClick, ref }: Props) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClick();
      }
    },
    [onClick, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick, onClick, ref]);
};
