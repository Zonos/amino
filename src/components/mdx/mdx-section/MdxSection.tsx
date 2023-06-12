import {
  type ReactElement,
  type ReactNode,
  cloneElement,
  createElement,
} from 'react';

import { LinkIcon } from 'src/icons/LinkIcon';
import { theme } from 'src/styles/constants/theme';
import { devices } from 'src/styles/devices';
import { getHashId } from 'src/utils/getHashId';
import { useCopyText } from 'src/utils/useCopyText';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 4px 12px;
  border-radius: 12px;
  border: 1px solid transparent;

  .link-icon {
    display: inline;
    white-space: nowrap;

    > span {
      font-size: 12px;
      font-weight: 700;
      color: ${theme.gray500};
      display: inline-block;
      vertical-align: middle;
    }
  }

  h1,
  h2 {
    scroll-margin-top: 140px;

    > div {
      position: relative;
      width: fit-content;
    }
  }

  h2 {
    cursor: pointer;
  }
`;

const HeadingLink = styled.a`
  ${StyledSection} &:link {
    color: ${theme.textColor};
    border-bottom: none;
  }
`;

const StyledLinkIcon = styled(LinkIcon)`
  display: inline-block;
  opacity: 0;
  white-space: nowrap;

  h2:hover .link-icon > & {
    display: inline-block;
    opacity: 1;

    @media ${devices.tablet} {
      display: none;
    }
  }
`;

type Props = {
  children?: ReactNode;
  className?: string;
};

export const MdxSection = ({ children, className }: Props) => {
  const { copyText, showTooltip } = useCopyText();
  const href = typeof window !== 'undefined' ? window.location.href : null;

  const createHeadingElement = (node: JSX.Element) => {
    const nodeChildren = node.props.children;
    const id = getHashId(nodeChildren);
    const hashId = `#${id}`;

    if (node.type.name === 'h1') {
      return createElement(
        node.type.name,
        {
          id,
          key: id,
        },
        nodeChildren
      );
    }
    return createElement(
      node.type.name,
      {
        id,
        key: id,
        onClick: () =>
          window.innerWidth > 768 &&
          href &&
          copyText(`${href.replace(/#.*/g, '') + hashId}`),
      },
      <HeadingLink
        key={hashId}
        className="link-button"
        href={hashId}
        title={nodeChildren}
      >
        {nodeChildren}
        <span className="link-icon">
          &nbsp;
          {showTooltip ? <span>Copied!</span> : <StyledLinkIcon size={16} />}
        </span>
      </HeadingLink>
    );
  };

  const getHeadings = ({
    node,
  }: {
    node: ReactElement | ReactElement[];
  }): ReactElement[] | ReactElement => {
    if (Array.isArray(node)) {
      return node.flatMap(item => getHeadings({ node: item }));
    }
    if (typeof node.type === 'string') {
      if (Array.isArray(node.props.children)) {
        const newNode = cloneElement(
          node,
          { ...node.props, key: node.key || `k${Math.random()}` },
          node.props.children.map((childNode: ReactElement) =>
            getHeadings({ node: childNode })
          )
        );
        return newNode;
      }
      return {
        ...node,
        key: `k${Math.random()}`,
      };
    }
    if (node.type && ['h1', 'h2'].includes(node.type.name)) {
      return createHeadingElement(node as JSX.Element);
    }
    if (node.props && Array.isArray(node.props.children) && node.type.name) {
      const newNode = cloneElement(
        node,
        { ...node.props, key: node.key },
        node.props.children?.map((childNode: ReactElement) =>
          getHeadings({ node: childNode })
        )
      );
      return newNode;
    }

    return node;
  };

  const sectionClone = Array.isArray(children)
    ? children.map(node => getHeadings({ node }))
    : getHeadings({ node: children as ReactElement });

  return (
    <StyledSection className={`${className || ''} comment-mode-section`}>
      {sectionClone}
    </StyledSection>
  );
};
