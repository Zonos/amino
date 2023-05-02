import { emojiFileNames } from 'src/utils/emojiFileNames';
import styled from 'styled-components';

const StyledImage = styled.img`
  vertical-align: text-top;
  height: 20px;
  width: auto;
  display: inline-block;
`;

type Props = {
  code: string;
};

export const Emoji = ({ code }: Props) => {
  const emojiFileName = emojiFileNames.find(({ emoji }) => code === emoji);

  if (emojiFileName) {
    const attribution = `Attribution for Twitter Emojis: ©️ Twitter, Inc.`;
    const alt = `${emojiFileName.emoji} ${attribution}`;
    return <StyledImage src={`/emojis/${emojiFileName.fileName}`} alt={alt} />;
  }
  // eslint-disable-next-line no-console
  console.warn(`We do not have an image for ${code}`);
  return <span>{code}</span>;
};
