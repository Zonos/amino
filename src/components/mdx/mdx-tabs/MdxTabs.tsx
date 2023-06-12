import { type ReactNode, useState } from 'react';

import { type Variants, AnimatePresence, motion } from 'framer-motion';
import { Tabs } from 'src/components/tabs/Tabs';
import styled from 'styled-components';

const TabsStyled = styled(Tabs)`
  margin-bottom: 32px;
`;

export type Props = {
  children?: ReactNode;
};

const variants: Variants = {
  center: {
    opacity: 1,
    x: 0,
    zIndex: 1,
  },
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 1000 : -1000,
  }),
  exit: (direction: number) => ({
    opacity: 0,
    position: 'absolute',
    x: direction < 0 ? 1000 : -1000,
    zIndex: 0,
  }),
};

export const MdxTabs = ({ children }: Props) => {
  const [openTabIndex, setOpenTabIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isArray = children && Array.isArray(children);

  const getTabs = () => {
    if (isArray) {
      return children.filter(node => node.type.stableName === 'Tab');
    }
    const child = children as JSX.Element;
    if (child?.type.stableName === 'Tab') {
      return [child];
    }
    return [];
  };

  const tabs = getTabs();

  const tabLabels = tabs && tabs.map((node: JSX.Element) => node?.props.xlabel);

  const currentTab = tabs[openTabIndex];

  return (
    <div>
      <TabsStyled
        items={tabLabels || ['Error loading tabs']}
        onChange={index => {
          setDirection(index - openTabIndex);
          setOpenTabIndex(index);
        }}
        selected={openTabIndex}
        subtle
      />

      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={openTabIndex}
          animate="center"
          custom={direction}
          exit="exit"
          initial="enter"
          transition={{
            opacity: { duration: 0.2 },
            x: { damping: 40, stiffness: 400, type: 'spring' },
          }}
          variants={variants}
        >
          {currentTab}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
