import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useMusicPlayer } from '../zustand/MusicPlayer';
import { allSong } from '../data/allSongs';
import { AnimateSound } from './AnimateSound';

export const MusicList = () => {
  const { indexNo, showListMusic, playSong, setPlayMusicFromList } = useMusicPlayer();
  return (
    <div className={`absolute ${showListMusic ? 'h-[100vh] lg:h-[80vh] md:h-[80vh]' : 'h-0'} overflow-y-auto disbaled-scroll-bar flex justify-center w-full lg:w-[100%] md:w-[80%] bottom-0  lg:rounded-lg md:rounded-lg bg-white z-[1] opacity-[0.9] transition-all duration-300 ease-in-out`}>
      <ul className='w-full flex flex-col gap-4 p-8'>
        {allSong.map((item, i) => (
          <li key={item.name} onClick={() => setPlayMusicFromList(i)} className={`${playSong && i === indexNo && 'bg-[#232427]'} flex justify-between items-center shadow-[rgba(0,_0,_0,_0.16)_0px_1px_4px] rounded-lg px-3 py-3 hover:bg-[#232427] cursor-pointer group transition-all ease-in-out duration-300`}>
            <div className='flex items-center gap-x-2'>
              <img src={item.img} alt='image' className='w-10 h-10 object-cover rounded-full' />
              <div className='flex flex-col justify-start'>
                <div className={`${playSong && i === indexNo && 'text-white'} group-hover:text-white text-sm font-semibold transition-all ease-in-out duration-300`}>{item.name}</div>
                <div className={`${playSong && i === indexNo && 'text-white'} group-hover:text-white text-xs transition-all ease-in-out duration-300`}>{item.singer}</div>
              </div>
            </div>
            {playSong && i === indexNo ? <AnimateSound /> : <BsFillPlayFill className='group-hover:text-[#148F77] transition-all ease-in-out duration-300' />}
          </li>
        ))}
      </ul>
    </div>
  );
};
