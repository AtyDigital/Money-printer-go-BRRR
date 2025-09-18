import { useState, useMemo } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';
import Chart from '../components/Chart';
import Controls from '../components/Controls';
import Footer from '../components/Footer';
import Music from '../components/Music';
import Printer from '../components/Printer';
import Title from '../components/Title';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-family: 'Inter', sans-serif;
  }
`;

const Main = styled.main`
  display: grid;
  grid-gap: 2rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Home = () => {
  const [symbol, setSymbol] = useState('SPY');
  const [playbackRate, setPlaybackRate] = useState(50);
  const [muted, setMuted] = useState(false);
  const isPrinting = playbackRate > 0;
  const shakeClass = useMemo(
    () => (isPrinting ? 'shake-hard' : 'shake-little'),
    [isPrinting]
  );

  const handleRateSlider = (value: number) => {
    setPlaybackRate(value);
  };

  return (
    <>
      <GlobalStyle />
      <Title />
      <Main>
        <Chart symbol={symbol} className={shakeClass} />
        <Printer isPrinting={isPrinting} playbackRate={playbackRate} className={shakeClass} />
        <Controls
          handleRateSlider={handleRateSlider}
          handleChangeSymbol={setSymbol}
          handleMute={() => setMuted(!muted)}
          isMuted={muted}
        />
      </Main>
      <Music playbackRate={playbackRate} muted={muted} />
      <Footer />
    </>
  );
};

export default Home;
