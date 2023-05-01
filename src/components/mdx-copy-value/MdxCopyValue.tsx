import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { CopyIcon } from 'src/icons/CopyIcon';
import { theme } from 'src/styles/constants/theme';
import { useNotify } from 'src/utils/hooks/useNotify';
import styled from 'styled-components';

import { useCopyText } from '../../utils/useCopyText';

const Wrapper = styled.div`
  width: fit-content;
  border-radius: ${theme.radius4};
  background: ${theme.gray100};
  border: 1px solid ${theme.gray200};
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 12px;
  margin-bottom: 16px;
  position: relative;
  padding-right: 32px;
  max-width: 100%;
  cursor: pointer;

  code:not(.hljs) {
    background: none;
    border: none;
    font-size: 14px;
    line-height: 20px;
    padding: 0;
    font-weight: 500;
    margin-right: 4px;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const IconStyled = styled.div<{ showIcon: boolean }>`
  transition: all 0.3s ease;
  transform: ${({ showIcon }) => (showIcon ? 'scale(1)' : 'scale(0)')};
  height: fit-content;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
  cursor: pointer;
`;

export type Props = {
  text?: string;
};

export const MdxCopyValue = ({ text }: Props) => {
  const { showTooltip, copyText } = useCopyText();
  const notify = useNotify();

  const CopyValueClicked = () => {
    copyText(text || '');
    notify('Text was copied!', { intent: 'info', duration: 4000 });
  };

  return (
    <Wrapper onClick={() => CopyValueClicked()}>
      <code>{text}</code>

      <IconStyled showIcon={!showTooltip}>
        <CopyIcon size={16} />
      </IconStyled>

      <IconStyled showIcon={showTooltip}>
        <CheckmarkIcon size={16} />
      </IconStyled>
    </Wrapper>
  );
};
