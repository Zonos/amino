import { useState } from 'react';

type Params = {
  /**
   * @default 4000
   */
  tooltipDuration?: number;
};

export const useCopyText = (params?: Params) => {
  const { tooltipDuration = 4000 } = params ?? {};
  const [showTooltip, setShowTooltip] = useState(false);

  const copyText = (text: string) => {
    /** @desc The navigator has access to the browser and user agent. It uses the clipboard API to give read/write access to the clipboard * */
    navigator.clipboard.writeText(text);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), tooltipDuration);
  };
  return { copyText, setShowTooltip, showTooltip };
};
