import {
  faFont,
  faMusic,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import Title from '../Title';
import Slider from './Slider';
import Symbol from './Symbol';

type Props = {
  handleRateSlider: (value: number) => void;
  handleChangeSymbol: (symbol: string) => void;
  handleMute: () => void;
  isMuted: boolean;
};

const Controls = ({
  handleRateSlider,
  handleChangeSymbol,
  handleMute,
  isMuted,
  ...props
}: Props) => {
  return (
    <div {...props}>
      <Title icon={faFont}>Set Ticker</Title>
      <Symbol handleChange={handleChangeSymbol} />
      <Title icon={faMusic}>Printer Speed</Title>
      <Slider handleRateSlider={handleRateSlider} />
      <Title icon={isMuted ? faVolumeMute : faMusic}>Sound</Title>
      <button type="button" onClick={handleMute}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
};

export default Controls;
