import React, { useEffect } from 'react';
import { useMusicPlayer } from '../zustand/MusicPlayer';

export const Duration: React.FC<{ audioRef: React.RefObject<HTMLAudioElement> }> = ({ audioRef }) => {
  const { reapet, playSong, duration, setDuration, setCurrentTime, currentTime, setDurationTime, durationTime, autoPlay, setAutoPlaySwitch, setPlaySong } = useMusicPlayer();

  const handleChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = Number(e.target.value);
    setDuration(data);
    if (audioRef.current) {
      const sliderPosition = audioRef.current.duration * (data / 100);
      audioRef.current.currentTime = sliderPosition;
    }
  };

  useEffect(() => {
    setInterval(() => {
      audioRef.current?.duration && setDuration(audioRef.current.currentTime * (100 / audioRef.current.duration));
      if (audioRef.current) {
        let currentMinutes: string = String(Math.floor(audioRef.current.currentTime / 60));
        let currentSeconds: string = String(Math.floor(audioRef.current.currentTime - Number(currentMinutes) * 60));
        let durationMinutes: string = String(Math.floor(audioRef.current.duration / 60));
        let durationSeconds: string = String(Math.floor(audioRef.current.duration - Number(durationMinutes) * 60));

        Number(currentSeconds) < 10 ? (currentSeconds = '0' + currentSeconds) : currentSeconds;
        Number(currentMinutes) < 10 ? (currentMinutes = '0' + currentMinutes) : currentMinutes;
        Number(durationSeconds) < 10 ? (durationSeconds = '0' + durationSeconds) : durationSeconds;
        Number(durationMinutes) < 10 ? (durationMinutes = '0' + durationMinutes) : durationMinutes;
        setCurrentTime(currentSeconds, currentMinutes);
        setDurationTime(durationSeconds, durationMinutes);

        if (audioRef.current.ended) {
          if (autoPlay) {
            setAutoPlaySwitch();
          } else {
            if (reapet) {
              setPlaySong(true);
              audioRef.current?.play();
            } else {
              setPlaySong(false);
              audioRef.current?.pause();
            }
          }
        }
      }
    }, 1000);
  }, [duration]);
  return (
    <div className='mx-auto flex items-center gap-2 w-full mt-1'>
      <span className='text-white font-semibold w-[40px]'>{currentTime}</span>
      {playSong ? <input type='range' min='0' max='100' value={duration} onChange={handleChangeDuration} name='duration' className='mt-[3px] flex-1' /> : <input disabled type='range' min='0' max='100' value={duration} onChange={handleChangeDuration} name='duration' className='mt-[3px] flex-1' />}
      <span className='text-white font-semibold w-[40px]'>{durationTime}</span>
    </div>
  );
};
