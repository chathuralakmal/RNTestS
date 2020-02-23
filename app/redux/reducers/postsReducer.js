import createReducer from '../../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    posts:[],
    news:[]
};

export const postsReducer = createReducer(initialState, {
    [types.SAVE_POSTS](state, action) {
        return {
            ...state,
            posts: action.payload
        };
    },
    [types.SAVE_NEWS](state, action) {
        return {
            ...state,
            news: action.payload
        };
    },

});
