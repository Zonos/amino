import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { AminoTheme } from "../../styles/AminoTheme";

const AminoToast = styled(motion.div)`
  background: var(${AminoTheme.gray800});
  z-index: 999999;
  border-radius: var(${AminoTheme.radius});
  color: white;
  box-shadow: var(${AminoTheme.shadowLarge});
  padding: var(${AminoTheme.spaceHalf}) var(${AminoTheme.space});

  & + & {
    margin-top: var(${AminoTheme.space});
  }
`;

type Props = {
  toastKey: string;
};

export const Toast: React.FC<Props> = ({ children, toastKey }) => (
  <AminoToast
    key={toastKey}
    initial={{ opacity: 0, translateY: 5, scale: 0.95 }}
    animate={{ opacity: 1, translateY: 0, scale: 1 }}
    exit={{ opacity: 0, translateY: 5 }}
  >
    {children}
  </AminoToast>
);


