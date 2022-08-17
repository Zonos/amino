import { motion } from 'framer-motion';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export const Backdrop = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: ${theme.backdropColor};
  z-index: 999;
  position: fixed;
`;
