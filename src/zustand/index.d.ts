export interface Music {
  name: string;
  path: string;
  img: string;
  singer: string;
}

export interface MusicPlayerState {
  indexNo: number;
  music: Music;
  playSong: boolean;
  volume: number;
  isMute: boolean;
  duration: number;
  currentTime: string;
  durationTime: string;
  autoPlay: boolean;
  reapet: boolean;
  showListMusic: boolean;
}

export interface MusicPlayerAction {
  setPlaySong: (data: boolean) => void;
  setIndexNoNext: () => void;
  setIndexNo: (data: boolean) => void;
  setIndexNoPrev: () => void;
  setVolume: (data: number) => void;
  setIsMute: (data: boolean) => void;
  setDuration: (data: number) => void;
  setMusic: (data: Music) => void;
  setCurrentTime: (second: string, minute: string) => void;
  setDurationTime: (second: string, minute: string) => void;
  setAutoPlay: () => void;
  setAutoPlaySwitch: () => void;
  setReapet: () => void;
  setShowListMusic: () => void;
  setPlayMusicFromList: (data: number) => void;
}

export interface MusicPlayerStore extends MusicPlayerState, MusicPlayerAction {}
