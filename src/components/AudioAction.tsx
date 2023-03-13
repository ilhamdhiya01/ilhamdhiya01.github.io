import { BsFillSkipStartFill, BsFillPauseFill, BsFillSkipEndFill, BsFillPlayFill, BsArrowCounterclockwise, BsShuffle } from 'react-icons/bs';
import { useMusicPlayer } from '../zustand/MusicPlayer';
import { allSong } from '../data/allSongs';
import { useEffect } from 'react';

export const AudioAction: React.FC<{ song: string; audioRef: React.RefObject<HTMLAudioElement> }> = ({ song, audioRef }) => {
  const { setPlaySong, playSong, setIndexNoNext, indexNo, setIndexNo, setIndexNoPrev, autoPlay, setAutoPlay, reapet, setReapet } = useMusicPlayer();
  const play = () => {
    audioRef.current?.play();
    setPlaySong(true);
  };
  const pause = () => {
    audioRef.current?.pause();
    setPlaySong(false);
  };

  const handlePlayMusic = () => {
    if (playSong === false) {
      play();
    } else {
      pause();
    }
  };

  const handleNextSong = () => {
    if (indexNo < allSong.length - 1) {
      setIndexNoNext();
      play();
    } else {
      setIndexNo(false);
      play();
    }
  };

  const handlePrevSong = () => {
    if (indexNo > 0) {
      setIndexNoPrev();
      play();
    } else {
      setIndexNo(true);
      play();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={song} autoPlay />
      <div className='flex justify-center items-center gap-6 mt-10'>
        <button>
          <BsShuffle size={30} onClick={setAutoPlay} className={`${!autoPlay ? 'text-[#cecece]' : 'text-[#148F77]'} transition duration-300 ease-in-out`} />
        </button>
        <button onClick={handlePrevSong}>
          <BsFillSkipStartFill size={40} className='text-[#cecece] hover:text-white transition duration-300 ease-in-out' />
        </button>
        <button onClick={handlePlayMusic} className='w-[70px] h-[70px] bg-[#148F77] transition ease-in-out duration-[.5s] flex justify-center items-center text-white rounded-full shadow-[inset_5px_5px_5px_rgba(0,0,0,0.2),inset_-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.1)]'>
          {playSong ? <BsFillPauseFill size={35} /> : <BsFillPlayFill size={35} />}
        </button>
        <button onClick={handleNextSong}>
          <BsFillSkipEndFill size={40} className='text-[#cecece] hover:text-white transition duration-300 ease-in-out' />
        </button>
        <button onClick={setReapet}>
          <BsArrowCounterclockwise size={30} className={`${!reapet ? 'text-[#cecece]' : 'text-[#148F77]'} transition duration-300 ease-in-out`} />
        </button>
      </div>
    </>
  );
};
