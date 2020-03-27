import React from "react";
import ReactDOM from "react-dom";

import { Toast } from "../components/Toast";

export const useToast = () => {
  const notify = (text: string) => {
    return ReactDOM.createPortal(
      <Toast text={text} />,
      document.querySelector("body")!
    );
  };

  return notify;
};
