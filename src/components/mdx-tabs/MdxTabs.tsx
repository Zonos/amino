import { ReactNode, useState } from 'react';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Tabs } from 'src/components/tabs/Tabs';
import styled from 'styled-components';

const TabsStyled = styled(Tabs)`
  margin-bottom: 32px;
`;

export type Props = {
  children?: ReactNode;
};

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    position: 'absolute',
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
        subtle
        selected={openTabIndex}
        onChange={index => {
          setDirection(index - openTabIndex);
          setOpenTabIndex(index);
        }}
      />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={openTabIndex}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 400, damping: 40 },
            opacity: { duration: 0.2 },
          }}
        >
          {currentTab}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const MdxTab = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  xlabel,
}: {
  children?: ReactNode;
  xlabel: string;
}) => <div>{children}</div>;

MdxTab.stableName = 'Tab';
