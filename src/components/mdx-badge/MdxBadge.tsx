import { type BadgeProps, Badge } from 'src/components/badge/Badge';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 8px;
`;

export const MdxBadge = (props: BadgeProps) => (
  <Wrapper>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Badge {...props} />
  </Wrapper>
);
