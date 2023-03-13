import { Logo } from '../components/Logo';
import { SongNumber } from '../components/SongNumber';
import { Volume } from '../components/Volume';
import { AudioAction } from '../components/AudioAction';
import { useMusicPlayer } from '../zustand/MusicPlayer';
import { allSong } from '../data/allSongs';
import { useRef } from 'react';
import { Duration } from '../components/Duration';
import { MusicDetail } from '../components/MusicDetail';
import { AnimateSound } from '../components/AnimateSound';
import { MusicList } from '../components/MusicList';

export const MusicPlayerPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { indexNo, playSong } = useMusicPlayer();
  return (
    <div className='flex relative m-auto w-full h-[100vh] lg:w-[80%] md:w-[80%]  lg:h-[80vh] md:h-[80vh] bg-[#232427] lg:rounded-lg md:rounded-lg shadow-[inset_5px_5px_5px_rgba(0,0,0,0.2),inset_-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.1)]'>
      <MusicList />
      <div id='mobile-version' className='flex flex-col w-[85%]  m-auto'>
        <Logo />
        <SongNumber total={allSong.length} />
        <MusicDetail allSong={allSong[indexNo]} />
        <Duration audioRef={audioRef} />
        <Volume audioRef={audioRef} />
        <AudioAction audioRef={audioRef} song={allSong[indexNo].path} />
        {/* {playSong && <AnimateSound />} */}
      </div>
    </div>
  );
};
