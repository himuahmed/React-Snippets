import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        {title:'Naruto Opening', duration:'4.06'},
        {title:'One Piece Opening', duration:'3.06'},
        {title:'AOT Opening', duration:'5.30'},
        {title:'HxH Opening', duration:'2.22'},
        {title:'Black Clover Opening', duration:'10.26'},
    ];
}

const selectedSongReducer = (selectedSong=[],action) =>{
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    else {
        return selectedSong;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong:selectedSongReducer
});