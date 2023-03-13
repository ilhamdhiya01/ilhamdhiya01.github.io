import React from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { useMusicPlayer } from '../zustand/MusicPlayer';

export const SongNumber: React.FC<{ total: number }> = ({ total }) => {
  const { setShowListMusic } = useMusicPlayer();
  return (
    // <div className='flex gap-2 items-center absolute top-2 right-3 font-semibold text-lg text-white'>
    //   <span>{indexNo + 1}</span>
    //   <span>/</span>
    //   <span>{total}</span>
    // </div>
    <BsFilterLeft onClick={setShowListMusic} size={30} className='text-white absolute top-4 right-4 lg:top-5 lg:right-5 cursor-pointer' />
  );
};
