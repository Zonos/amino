import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AminoToast = styled(motion.div)`
  background: var(--amino-gray-700);
  z-index: 999999;
  border-radius: var(--amino-radius);
  color: white;
  box-shadow: var(--amino-shadow-large);
  padding: var(--amino-space-half) var(--amino-space);
  font-weight: 500;
  user-select: none;

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
    initial={{ opacity: 0, translateX: 5 }}
    animate={{ opacity: 1, translateX: 0 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </AminoToast>
);
