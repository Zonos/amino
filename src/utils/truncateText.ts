export type TruncateTextParams = {
  /**
   * Add ellipsis `...` in place of the missing text from truncation.
   * @default true
   */
  addEllipsis?: boolean;
  /**
   * Truncate the beginning and add ellipsis at the beginning.
   * @default false
   */
  fromFront?: boolean;
  /**
   * Included ellipsis in total length.
   * Useful for tabular data where you want the text to line up.
   * @default false
   */
  includeEllipsisLength?: boolean;
  /**
   * The length the text will be truncated to.
   * Does not include the ellipsis unless specified.
   */
  length: number;
  text: string;
};

export const truncateText = ({
  addEllipsis = true,
  fromFront = false,
  includeEllipsisLength = false,
  length: _length,
  text,
}: TruncateTextParams) => {
  const shouldAddEllipsis = addEllipsis && text.length > _length;

  const length =
    shouldAddEllipsis && includeEllipsisLength ? _length - 3 : _length;

  let truncated: string;

  if (fromFront) {
    truncated = text.substring(text.length - length);
  } else {
    truncated = text.substring(0, length);
  }

  if (!shouldAddEllipsis) {
    return truncated;
  }

  const withEllipsis = fromFront ? `...${truncated}` : `${truncated}...`;

  return withEllipsis;
};
