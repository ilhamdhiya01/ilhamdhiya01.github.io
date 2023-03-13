import './App.css';
import { useRef } from 'react';
import { Container } from './components/Container';
import { MusicPlayerPage } from './pages/MusicPlayerPage';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  function handlePlay() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  function handlePause() {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }
  return (
    <Container>
      <MusicPlayerPage />
    </Container>
  );
}

export default App;
