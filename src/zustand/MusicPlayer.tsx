import { create } from 'zustand';
import { MusicPlayerStore, MusicPlayerState } from '.';
import { allSong } from '../data/allSongs';

const initialValue: MusicPlayerState = {
  indexNo: 0,
  playSong: false,
  volume: 50,
  isMute: false,
  duration: 0,
  music: {
    name: '',
    path: '',
    img: '',
    singer: '',
  },
  currentTime: '',
  durationTime: '',
  autoPlay: false,
  reapet: false,
  showListMusic: false,
};

export const useMusicPlayer = create<MusicPlayerStore>((set, get) => ({
  ...initialValue,
  setPlaySong: (data) => set((state) => ({ playSong: data })),
  setIndexNo: (data) =>
    set((state) => {
      if (data) {
        return {
          indexNo: allSong.length - 1,
        };
      } else {
        return {
          indexNo: 0,
        };
      }
    }),
  setIndexNoNext: () => set((state) => ({ indexNo: state.indexNo + 1 })),
  setIndexNoPrev: () => set((state) => ({ indexNo: state.indexNo - 1 })),
  setVolume: (data) => set((state) => ({ volume: data })),
  setIsMute: (data) => set((state) => ({ isMute: data })),
  setDuration: (data) => set((state) => ({ duration: data })),
  setMusic: (data) => set((state) => ({ music: data })),
  setCurrentTime: (second, minute) => set((state) => ({ currentTime: minute + ':' + second })),
  // setDurationTime: (second, minute) => set((state) => ({ durationTime: minute + ':' + second })),
  setDurationTime: (second, minute) =>
    set((state) => {
      if (minute === 'NaN' && second === 'NaN') {
        return {
          durationTime: '00:00',
        };
      } else {
        return {
          durationTime: `${minute}:${second}`,
        };
      }
    }),
  setAutoPlay: () => set((state) => ({ autoPlay: !state.autoPlay, reapet: state.autoPlay && false })),
  setAutoPlaySwitch: () =>
    set((state) => {
      if (state.autoPlay) {
        if (state.indexNo >= allSong.length - 1) {
          return {
            indexNo: 0,
            playSong: true,
          };
        } else {
          return {
            indexNo: state.indexNo + 1,
            playSong: true,
          };
        }
      } else {
        return {
          indexNo: state.indexNo,
          playSong: false,
        };
      }
    }),
  setReapet: () => set((state) => ({ reapet: !state.reapet, indexNo: state.indexNo, autoPlay: state.reapet && false })),
  setShowListMusic: () => set((state) => ({ showListMusic: !state.showListMusic })),
  setPlayMusicFromList: (data) => set((state) => ({ indexNo: data, playSong: true, showListMusic: !state.showListMusic })),
}));
