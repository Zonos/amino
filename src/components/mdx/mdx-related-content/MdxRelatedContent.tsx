import { Button } from 'src/components/button/Button';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { theme } from 'src/styles/constants/theme';
import { devices } from 'src/styles/devices';
import { type Products, getProductDetails } from 'src/utils/getProductDetails';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  height: fit-content;

  > h4 {
    color: ${theme.gray1200};
    font-weight: 700;
    margin-top: 4px;
  }
  > p {
    color: ${theme.gray800};
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 0;
  }
  > a {
    margin-top: auto;
    padding: 0;
    border-radius: 0;

    :hover {
      background: none !important;
    }

    @media ${devices.mobileL} {
      margin-top: 8px;
    }
  }
`;

const IconWrap = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: ${theme.gray800};
  align-items: center;
`;

export type Props = {
  children?: JSX.Element;
  product: Products;
  xlabel: string;
  xsubLabel: string;
};

export const MdxRelatedContent = ({
  children,
  product,
  xlabel,
  xsubLabel,
}: Props) => {
  const productDetails = getProductDetails(product);

  if (children && !Array.isArray(children)) {
    const link = children?.props?.href
      ? children.props
      : children?.props?.children?.props;
    const { children: linkText, href } = link;

    if (linkText && href) {
      return (
        <Wrapper>
          <IconWrap>
            {productDetails.icon}
            <span>{productDetails.name}</span>
          </IconWrap>
          <h4>{xlabel}</h4>
          <p>{xsubLabel}</p>
          <Button
            href={href}
            icon={<ArrowRightIcon color="blue600" size={18} />}
            iconRight
            intent="link"
            tag="a"
          >
            {linkText}
          </Button>
        </Wrapper>
      );
    }
  }

  throw new Error('Expected exactly 1 child link in RelatedContent');
};
