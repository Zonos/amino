import { motion } from 'framer-motion';
import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

export const Backdrop = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: ${theme.backdropColor};
  z-index: 999;
  position: fixed;
`;
