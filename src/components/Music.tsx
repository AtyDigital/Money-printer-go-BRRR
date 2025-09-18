import styled from 'styled-components';
import YouTubePlayer from 'react-player/youtube';
import Player from './Player';

const MusicPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
  z-index: -2;
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
    config={{ // <-- START OF FIX
      youtube: {
        playerVars: {
          autoplay: 1,
          disablekb: 1,
        },
      },
    }} // <-- END OF FIX
    {...props}
  />
);

export default Music;
