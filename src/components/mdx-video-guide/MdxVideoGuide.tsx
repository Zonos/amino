import { useEffect, useRef, useState } from 'react';

import { BaseDialog } from 'src/components/dialog/_BaseDialog';
import { PlayCircleDuotoneIcon } from 'src/icons/PlayCircleDuotoneIcon';
import styled from 'styled-components';

const StyledBaseDialog = styled(BaseDialog)`
  background: black;
  border: 0;
`;

const VideoButton = styled.button<{ thumbnail: string }>`
  width: 100%;
  height: 150px;
  background: ${({ thumbnail }) =>
    thumbnail && `url(${thumbnail}) center center no-repeat`};
  background-size: cover;
  color: #fff;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  transition: all 150ms ease-in-out;

  svg {
    transition: all 250ms ease-in-out;
    transform: scale(1);
  }

  :before {
    transition: all 250ms ease-in-out;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    opacity: 0.85;
  }

  :hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

    svg {
      transform: scale(1.1);
    }

    :before {
      opacity: 0.8;
    }
  }
`;

const ButtonContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  b {
    font-weight: 600;
  }
`;

export type Props = {
  url: string;
  xtitle: string;
};

export const getYoutubeVideo = ({ url }: { url: string }) => {
  const youtubeRe =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#\\&?]*).*/;
  const videoId = url?.match(youtubeRe)?.pop();
  const thumbnail =
    videoId?.length === 11 ? `https://img.youtube.com/vi/${videoId}/0.jpg` : '';
  const videoUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;

  return { thumbnail, videoUrl };
};

export const MdxVideoGuide = ({ url, xtitle }: Props) => {
  const { thumbnail, videoUrl } = getYoutubeVideo({ url });
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const iframeContentWindow = iframeRef?.current?.contentWindow;

    if (iframeContentWindow) {
      if (videoOpen) {
        iframeContentWindow.postMessage(
          `{"event":"command","func":"playVideo","args":""}`,
          '*'
        );
      } else {
        iframeContentWindow.postMessage(
          `{"event":"command","func":"pauseVideo","args":""}`,
          '*'
        );
      }
    }
  }, [iframeRef, videoOpen]);

  return (
    <>
      <VideoButton
        thumbnail={thumbnail}
        onClick={e => {
          e.stopPropagation();
          setVideoOpen(true);
        }}
      >
        <ButtonContent>
          <PlayCircleDuotoneIcon color="gray800" secondaryColor="gray100" />
          <b>Watch the video guide</b>
        </ButtonContent>
      </VideoButton>

      <StyledBaseDialog
        width={1080}
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        closeOnBlur
        closeOnEsc
      >
        <iframe
          ref={iframeRef}
          src={videoUrl}
          title={xtitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          width="1080"
          height="608"
        />
      </StyledBaseDialog>
    </>
  );
};
