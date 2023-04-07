import { ReactNode, useEffect, useState } from 'react';
import ReactTooltip, { type TooltipProps } from 'react-tooltip';

import { VStack } from 'src/components/stack/VStack';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Text } from '../text/Text';

const StyledIcon = styled.div`
  position: absolute;
  content: ' ';
  right: ${theme.space16};
  background: ${theme.gray400};
  border-radius: 50px;
  padding: 5px;
  svg {
    color: white;
  }
`;
const StyledActiveIcon = styled.div`
  position: absolute;
  right: ${theme.space16};
  background: ${theme.blue600};
  content: ' ';
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledItem = styled.button<{ $itemHeight: number }>`
  position: relative;
  appearance: none;
  background: white;
  padding: ${theme.space16};
  padding-right: calc(${theme.space40} + 10px);
  border: ${theme.border};
  border-radius: ${theme.radius6};
  text-align: left;
  transition: all 150ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ $itemHeight }) => $itemHeight}px;
  &:hover {
    background: ${theme.gray100};
    border: 1px solid ${theme.gray200};
    ${StyledIcon} {
      background: ${theme.gray600};
    }
  }

  &:focus {
    outline: none;
    border: 1px solid ${theme.blue400};
    box-shadow: 0 0 0 1px ${theme.blue400};
  }
  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const Subtitle = styled(Text)``;

const Label = styled.span`
  font-weight: 500;
`;

const StyledRadioGroup = styled(VStack)`
  ${StyledItem}[data-state='checked'] {
    background: ${theme.blue100};
    border: 1px solid ${theme.blue400};
    box-shadow: 0 0 0 1px ${theme.blue400};
    color: ${theme.blue700};
    ${Subtitle} {
      color: ${theme.blue600};
    }
  }
  svg {
    color: white;
    width: 12px;
    height: 12px;
  }
`;
const StyledTooltip = styled(ReactTooltip)`
  && {
    max-width: 350px;
    border-radius: 10px;
  }
`;

export type RichRadioItemType<T extends string> = {
  disabled?: boolean;
  label: ReactNode;
  subtitle?: string;
  tooltip?: string;
  tooltipSetting?: Omit<TooltipProps, 'title' | 'children'>;
  value: T;
};

export type RichRadioProps<T extends string = string> = {
  activeIcon?: ReactNode;
  className?: string;
  icon?: ReactNode;
  /**
   * @param itemHeight
   * @default 40
   */
  itemHeight?: 40 | 64;
  items: RichRadioItemType<T>[];
  onChange: (value: T) => void;
  renderCustomText?: (option: RichRadioItemType<T>) => ReactNode;
  value: T | null;
};

export const RichRadio = <T extends string>({
  activeIcon,
  className,
  icon,
  itemHeight = 64,
  items,
  onChange,
  renderCustomText,
  value,
}: RichRadioProps<T>) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleChange = (v: T) => {
    setSelectedValue(v);
    onChange(v);
  };

  return (
    <StyledRadioGroup spacing={16} className={className}>
      {items.map(item => (
        <StyledItem
          type="button"
          $itemHeight={itemHeight}
          key={item.value}
          data-tip={item.tooltip}
          data-disabled={item.disabled}
          onClick={() => {
            handleChange(item.value);
          }}
          data-state={item.value === selectedValue ? 'checked' : ''}
        >
          {item.tooltip && (
            <StyledTooltip
              effect="solid"
              arrowColor="transparent"
              {...item.tooltipSetting}
            />
          )}
          {renderCustomText ? (
            renderCustomText(item)
          ) : (
            <div>
              <Label>{item.label}</Label>
              {item.subtitle && (
                <Subtitle color="gray900" type="body">
                  {item.subtitle}
                </Subtitle>
              )}
            </div>
          )}
          {!!icon && <StyledIcon>{icon || <CheckmarkIcon />}</StyledIcon>}
          {item.value === selectedValue && (
            <StyledActiveIcon>
              {activeIcon || <CheckmarkIcon />}
            </StyledActiveIcon>
          )}
        </StyledItem>
      ))}
    </StyledRadioGroup>
  );
};
