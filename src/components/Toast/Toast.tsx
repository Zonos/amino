import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AminoToast = styled(motion.div)`
  background: var(--amino-gray-800);
  z-index: 999999;
  border-radius: var(--amino-radius);
  color: white;
  box-shadow: var(--amino-shadow-large);
  padding: var(--amino-space-half) var(--amino-space);

  & + & {
    margin-top: var(--amino-space);
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
