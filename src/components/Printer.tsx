import ReactPlayer from 'react-player/lazy';
import FilePlayer from 'react-player/file';
import styled from 'styled-components';
import Shake from './Shake';

const Wrapper = styled.div`
  position: relative;
`;

const Video = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #000;
  line-height: 0;
`;

const PrinterPlayer = styled(ReactPlayer)`
  video {
    width: 100% !important;
    height: auto !important;
    display: block;
  }
`;

const Bill = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
  pointer-events: none;
`;

type Props = {
  isPrinting: boolean;
  playbackRate: number;
  className?: string; // This line was added
};

const Printer = ({ isPrinting, playbackRate, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Shake active={isPrinting}>
        <Video>
          <PrinterPlayer
            url="print.mp4"
            player={FilePlayer}
            playing={isPrinting}
            playbackRate={playbackRate}
            loop
            muted
            playsinline
            config={{
              file: {
                attributes: {
                  poster: 'poster.png',
                },
              },
            }}
          />
        </Video>
      </Shake>
      <Bill
        src="bill.png"
        alt="100 dollar bill"
        width="1440"
        height="614"
        style={{
          transform: `translateY(${isPrinting ? 0 : 100}%)`,
          transition: `transform 2s ease-in-out`,
        }}
      />
    </Wrapper>
  );
};

export default Printer;
