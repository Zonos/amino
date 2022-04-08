import React from 'react';

import styled from 'styled-components';

const StyledFlag = styled.img`
  width: 32px;
  height: auto;
  border-radius: 4px;
  display: inline-block;
`;

const StyledCompactFlag = styled.img`
  width: 25px;
  height: auto;
  border-radius: 3px;
  display: inline-block;
`;

type Props = {
  countryCode: string;
  compact?: boolean;
  src: string;
};

export const Flag = ({ compact, countryCode, src }: Props) =>
  compact ? (
    <StyledCompactFlag alt={countryCode} src={src} />
  ) : (
    <StyledFlag alt={countryCode} src={src} />
  );
