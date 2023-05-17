import { type ReactElement, useRef } from 'react';

import { Badge } from 'src/components/badge/Badge';
import { Button } from 'src/components/button/Button';
import { HStack } from 'src/components/stack/HStack';
import { CopyIcon } from 'src/icons/CopyIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { useCopyText } from '../../utils/useCopyText';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${theme.gray1100};
  border-radius: 12px;
  color: ${theme.gray0};
  margin-bottom: 16px;
`;

const CodeBlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.gray1000};
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
      color: ${theme.gray100};
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
          color: ${theme.gray200};
        }

        &literal,
        &number {
          color: ${theme.blue400};
        }

        &string {
          color: ${theme.purple400};
        }
      }

      .key {
        color: ${theme.orange500};
      }

      div {
        height: 21px;
      }
    }
  }
`;

const BadgeStyled = styled(Badge)`
  > div {
    background-color: ${theme.gray800};
    p {
      color: #fff;
    }
  }
`;

const CodeBlockLines = styled.div`
  min-width: 24px;
  line-height: 20px;
  padding: 4px 0;
  font-size: 10px;
  color: ${theme.gray500};
  font-weight: 600;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

const HStackRight = styled(HStack)`
  align-items: center;
`;

type Props = {
  children?: ReactElement;
  xlabel: string;
  type: 'JSON' | 'GraphQL';
  maxHeight?: number;
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
  xlabel,
  type,
  maxHeight = 260,
}: Props) => {
  const pre = children?.type === 'pre' && children.props.children;
  const codeChildren = (pre?.type === 'code' && pre.props.children) || [];
  const lines: number = countLines(codeChildren);
  const { showTooltip, copyText } = useCopyText();
  const codeRef = useRef<HTMLDivElement | null>(null);

  return (
    <Wrapper>
      <CodeBlockHeader>
        <p>{xlabel}</p>
        <HStackRight spacing={16}>
          {type && <BadgeStyled>{type}</BadgeStyled>}
          {showTooltip ? (
            <p>Copied!</p>
          ) : (
            <Button
              intent="text"
              icon={<CopyIcon color="gray100" size={20} />}
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
