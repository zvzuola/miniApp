import { handleActions } from 'redux-actions';
import {
  GET_ARTISTS,
  GET_ALBUMS_BY_ARTIST,
  GET_SONGS_BY_ALBUM,
  PLAY_SONG,
  SET_PLAY_INFO
} from '../types';

export default handleActions(
  {
    [GET_ARTISTS](state, actions) {
      const albums = {};
      actions.payload.forEach(artist => {
        albums[artist.artist] = [];
      });
      return {
        ...state,
        artists: actions.payload,
        albums
      };
    },

    [GET_ALBUMS_BY_ARTIST](
      state,
      {
        payload: { artist, albums }
      }
    ) {
      const songs = {};
      albums.forEach(v => {
        songs[v.album] = [];
      });
      return {
        ...state,
        albums: {
          ...state.albums,
          [artist]: albums
        },
        songs
      };
    },

    [GET_SONGS_BY_ALBUM](
      state,
      {
        payload: { songs, album }
      }
    ) {
      return {
        ...state,
        songs: {
          ...state.songs,
          [album]: songs
        }
      };
    },

    [PLAY_SONG](state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },

    [SET_PLAY_INFO](state, { payload }) {
      return {
        ...state,
        playInfo: {
          ...state.playInfo,
          ...payload
        }
      };
    }
  },
  {
    artists: [],
    albums: {},
    songs: {},
    currentIndex: 0,
    playlist: [],
    playInfo: {
      isPlaying: false,
      currentTime: 0,
      duration: 0
    }
  }
);
