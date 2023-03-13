import { BsFillVolumeUpFill, BsVolumeMute } from 'react-icons/bs';
import { useMusicPlayer } from '../zustand/MusicPlayer';

export const Volume: React.FC<{ className?: string; audioRef: React.RefObject<HTMLAudioElement> }> = ({ className, audioRef }) => {
  const { volume, setVolume, setIsMute, isMute } = useMusicPlayer();

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = Number(e.target.value);
    setVolume(data);
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  };
  const handleMute = () => {
    if (isMute === false) {
      setIsMute(true);
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    } else {
      setIsMute(false);
      if (audioRef.current) {
        audioRef.current.volume = volume / 100;
      }
    }
  };
  return (
    <div className='mx-auto flex justify-center items-center gap-2 mt-4'>
      {isMute ? <BsVolumeMute onClick={handleMute} size={20} className={`cursor-pointer ${!isMute ? 'text-white' : 'text-[#148F77]'}`} /> : <BsFillVolumeUpFill onClick={handleMute} size={20} className='text-white cursor-pointer' />}
      {isMute ? <input disabled type='range' min='0' max='100' value={volume} onChange={handleVolumeChange} name='duration' className='max-w-[55%]' /> : <input type='range' min='0' max='100' value={volume} onChange={handleVolumeChange} name='duration' className='max-w-[55%]' />}
    </div>
  );
};
