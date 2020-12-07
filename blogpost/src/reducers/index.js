import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import fetchUser from './userReducer';

export default combineReducers({
    posts : postsReducer,
    users : fetchUser
})

