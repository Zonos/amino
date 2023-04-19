import { Banner, BannerProps } from 'src/components/banner/Banner';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${theme.space16} 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }
  p {
    line-height: 20px;
    margin-bottom: 0px !important;
  }
  ul {
    margin: 0px !important;
    li {
      list-style-position: inside;
      margin: 0px !important;
      list-style-type: '• ';
      padding-left: 0;

      ul li {
        list-style-type: circle;
        padding-left: 16px;
      }

      ::before {
        display: none;
      }
    }
  }
`;

type Props = Omit<BannerProps, 'title'> & { xtitle?: BannerProps['title'] };

export const MdxBanner = ({ xtitle, ...props }: Props) => (
  <Wrapper>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Banner {...props} title={xtitle} />
  </Wrapper>
);
