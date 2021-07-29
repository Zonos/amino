import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Backdrop = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: var(--amino-backdrop-color);
  z-index: 999;
  position: fixed;
`;
