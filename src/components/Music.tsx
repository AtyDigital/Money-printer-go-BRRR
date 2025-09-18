import ReactPlayer from 'react-player/lazy';
import YouTubePlayer from 'react-player/youtube';
import styled from 'styled-components';

const MusicPlayer = styled(ReactPlayer)`
  position: fixed !important;
  bottom: 1rem;
  right: 1rem;
  width: 1px !important;
  height: 1px !important;
  opacity: 0;
`;

type Props = {
  playbackRate: number;
  muted: boolean;
};

const Music = ({ playbackRate, muted, ...props }: Props) => (
  <MusicPlayer
    url="https://www.youtube.com/watch?v=fTFxE32onKs"
    player={YouTubePlayer}
    playbackRate={Math.max(playbackRate / 25, 0.25)}
    playing
    loop
    muted={muted}
    controls={false}
    config={{
      youtube: {
        playerVars: {
          autoplay: 1,
          disablekb: 1,
        },
      },
    }}
    {...props}
  />
);

export default Music;
