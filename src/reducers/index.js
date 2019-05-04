import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "malibu", duration: "4:05" },
    { title: "talimu", duration: "3:30" },
    { title: "salim", duration: "2:20" },
    { title: "alib", duration: "1:02" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
