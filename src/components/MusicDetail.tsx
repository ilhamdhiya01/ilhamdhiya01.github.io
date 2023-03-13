import { Music } from '../zustand';
import { useMusicPlayer } from '../zustand/MusicPlayer';

export const MusicDetail: React.FC<{ allSong: Music }> = ({ allSong }) => {
  const { playSong } = useMusicPlayer();
  return (
    <>
      <img src={allSong.img} alt='image' className={`${playSong && 'spinner'} p-[5px] mx-auto shadow-[inset_5px_5px_5px_rgba(0,0,0,0.2),inset_-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.1)] rounded-full w-[220px] h-[220px] object-cover`} />
      <div className='mx-auto text-center'>
        <div className='text-[2.5rem] text-white font-bold'>{allSong.name}</div>
        <div className='text-[1.5rem] text-white font-semibold'>{allSong.singer}</div>
      </div>
    </>
  );
};
