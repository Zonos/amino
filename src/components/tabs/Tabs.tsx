import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

import { Text } from '../text/Text';

const BaseTabs = styled.div`
  display: flex;
  align-items: center;
`;

const BaseTab = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  text-align: center;
  padding: ${theme.space12} 0;
  transition: ${theme.transition};
  color: ${theme.gray800};

  &::after {
    position: absolute;
    bottom: 0px;
    left: 0;
    content: '';
    background-color: ${theme.gray200};
    transition: ${theme.transition};
    height: 2px;
    width: 100%;
    transform: scaleX(0);
  }

  &.is-selected {
    color: ${theme.primary};

    &::after {
      background-color: ${theme.primary};
      transform: scaleX(1);
    }
  }

  &:not(.is-selected):hover {
    color: ${theme.gray1000};

    &::after {
      transform: scaleX(1);
    }
  }

  &:not(.is-selected):active {
    color: ${theme.gray1000};

    &::after {
      background-color: ${theme.gray300};
      transform: scaleX(1);
    }
  }
`;

const AminoTabs = styled(BaseTabs)`
  border: ${theme.border};
  border-radius: ${theme.radius8};
`;

const Tab = styled(BaseTab)`
  flex: 1;
  font-weight: 500;

  &::after {
    height: 4px;
  }

  &:first-of-type::after {
    border-bottom-left-radius: ${theme.radius8};
  }

  &:last-of-type::after {
    border-bottom-right-radius: ${theme.radius8};
  }

  & + & {
    border-left: ${theme.border};
  }

  &:not(.is-selected):hover {
    background: rgba(0, 0, 0, 0.03);
  }

  &:not(.is-selected):active {
    background: rgba(0, 0, 0, 0.08);
  }
`;

const SubtleTabs = styled(BaseTabs)<{ align: TabsProps['align'] }>`
  justify-content: ${p => p.align};
  gap: ${theme.space24};
  border-bottom: 1px solid ${theme.gray200};
`;

const SubtleTab = BaseTab;

export type TabsProps = {
  /**
   * Only applies to subtle design
   * Align tabs horizontally.
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end';
  className?: string;
  items: string[];
  selected: number;
  /**
   * Use the subtle design
   * @default false
   */
  subtle?: boolean;
  onChange: (selectedTab: number) => void;
};

export const Tabs = ({
  align = 'start',
  className,
  items,
  onChange,
  selected,
  subtle = false,
}: TabsProps) => {
  if (subtle) {
    return (
      <SubtleTabs align={align} className={className}>
        {items.map(item => (
          <SubtleTab
            key={item}
            className={selected === items.indexOf(item) ? 'is-selected' : ''}
            onClick={() => onChange(items.indexOf(item))}
          >
            <Text type="label">{item}</Text>
          </SubtleTab>
        ))}
      </SubtleTabs>
    );
  }

  return (
    <AminoTabs className={className}>
      {items.map(item => (
        <Tab
          key={item}
          className={selected === items.indexOf(item) ? 'is-selected' : ''}
          onClick={() => onChange(items.indexOf(item))}
        >
          {item}
        </Tab>
      ))}
    </AminoTabs>
  );
};
