import { type ReactElement, useRef } from 'react';

import { Badge } from 'src/components/badge/Badge';
import { Button } from 'src/components/button/Button';
import { HStack } from 'src/components/stack/HStack';
import { CopyIcon } from 'src/icons/CopyIcon';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import { useCopyText } from 'src/utils/useCopyText';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${theme.gray50};
  border-radius: 12px;
  color: ${theme.gray1200};
  margin-bottom: 16px;
`;

const CodeBlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.gray100};
  padding: 8px 16px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const CodeBlockBody = styled.div<{ maxHeight: number }>`
  padding: 16px;
  display: flex;
  max-height: ${p => p.maxHeight}px;
  overflow: auto;
  height: fit-content;

  pre {
    white-space: pre;
    word-break: break-word;
    border-radius: 0;
    padding: 0;
    background: transparent;

    .hljs {
      color: ${theme.gray1000};
      background: transparent;
    }

    code {
      display: block;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
        monospace;
      line-height: 20px;
      font-weight: 600;
      font-size: 12px;

      .hljs- {
        &attr,
        &tag {
          color: ${theme.gray900};
        }

        &literal,
        &number {
          color: ${theme.blue700};
        }

        &string {
          color: ${theme.purple700};
        }
      }

      .key {
        color: ${theme.orange600};
      }

      div {
        height: 21px;
      }
    }
  }
`;

const BadgeStyled = styled(Badge)`
  > div {
    background-color: ${theme.gray300};
    p {
      color: ${theme.gray1200};
    }
  }
`;

const CodeBlockLines = styled.div`
  min-width: 24px;
  line-height: 20px;
  padding: 4px 0;
  font-size: 10px;
  color: ${theme.gray600};
  font-weight: 600;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

const HStackRight = styled(HStack)`
  align-items: center;
`;

export type Props = {
  children?: ReactElement;
  maxHeight?: number;
  themeOverride?: Theme;
  type: 'JSON' | 'GraphQL';
  xlabel: string;
};

/**
 * Recursively counts newlines in children content.
 */
const countLines = (codeChildren?: ReactElement[] | ReactElement): number => {
  if (!codeChildren) {
    return 0;
  }

  if (typeof codeChildren === 'string') {
    const matchedNewLines = `${codeChildren}`.match(/\n/g) || [];
    return matchedNewLines.length;
  }
  if (Array.isArray(codeChildren)) {
    // Count lines for each child
    return codeChildren.reduce((a, c) => a + countLines(c), 0);
  }
  if (codeChildren.props.children) {
    return countLines(codeChildren.props.children);
  }

  return 0;
};

export const MdxCodeBlock = ({
  children,
  maxHeight = 260,
  themeOverride = 'night',
  type,
  xlabel,
}: Props) => {
  const pre = children?.type === 'pre' && children.props.children;
  const codeChildren = (pre?.type === 'code' && pre.props.children) || [];
  const lines: number = countLines(codeChildren);
  const { copyText, showTooltip } = useCopyText();
  const codeRef = useRef<HTMLDivElement | null>(null);

  return (
    <Wrapper data-theme={themeOverride}>
      <CodeBlockHeader>
        <p>{xlabel}</p>
        <HStackRight spacing={16}>
          {type && <BadgeStyled>{type}</BadgeStyled>}
          {showTooltip ? (
            <p>Copied!</p>
          ) : (
            <Button
              icon={<CopyIcon color="gray1000" size={20} />}
              intent="text"
              onClick={() =>
                copyText(
                  codeRef.current?.innerText ||
                    'Oops... Something went wrong copying the text'
                )
              }
            />
          )}
        </HStackRight>
      </CodeBlockHeader>
      <CodeBlockBody maxHeight={maxHeight}>
        <CodeBlockLines>
          {[...Array(lines)].map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i}>{i + 1}</div>
          ))}
        </CodeBlockLines>
        <div ref={codeRef}>{children}</div>
      </CodeBlockBody>
    </Wrapper>
  );
};
