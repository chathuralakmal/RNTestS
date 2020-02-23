/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../redux/actions/types';
import * as postsSaga from './postsSaga';

export default function* watch() {
    yield all([takeEvery(types.GET_POSTS, postsSaga.requestPosts)]);
    yield all([takeEvery(types.GET_NEWS, postsSaga.requestNews)]);
}
