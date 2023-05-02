import { useState } from 'react';

export const useCopyText = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyText = (text: string) => {
    /** @desc The navigator has access to the browser and user agent. It uses the clipboard API to give read/write access to the clipboard * */
    navigator.clipboard.writeText(text);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 4000);
  };
  return { showTooltip, setShowTooltip, copyText };
};
