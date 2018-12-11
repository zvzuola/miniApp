import { GET_ARTISTS, GET_ALBUMS_BY_ARTIST, GET_SONGS_BY_ALBUM, PLAY_SONG, SET_PLAY_INFO } from '../types';
import { createAction } from 'redux-actions';

export const getArtists = createAction(GET_ARTISTS, () => {
  console.log('call getArtists');
  return wx.cloud
    .callFunction({
      name: 'getArtists'
    })
    .then(({ result }) => {
      return result.artists;
    });
});

export const getAlbumsByArtist = createAction(GET_ALBUMS_BY_ARTIST, artist => {
  console.log('call getAlbumsByArtist');
  return wx.cloud
    .callFunction({
      data: {
        artist
      },
      name: 'getAlbumsByArtist'
    })
    .then(({ result }) => {
      return {
        albums: result.albums,
        artist
      };
    });
});

export const getSongsByAlbum = createAction(GET_SONGS_BY_ALBUM, album => {
  console.log('call getSongsByAlbum');
  return wx.cloud
    .callFunction({
      data: {
        album
      },
      name: 'getSongsByAlbum'
    })
    .then(({ result }) => {
      return {
        album,
        songs: result.songs
      };
    });
});

export const playSong = createAction(PLAY_SONG, (data) => {
  console.log('call playSong');
  return data
});

export const setPlayInfo = createAction(SET_PLAY_INFO, (data) => {
  console.log('call setPlayInfo');
  return data
})