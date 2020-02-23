
import { put, call, select } from 'redux-saga/effects';
import * as PostsServices from '../api/methods/PostsServices';
import * as postsActions from '../redux/actions/postsActions';
import * as appActions from '../redux/actions/appActions';

import { AppConstants } from "../constants/AppConstants";


export function* requestPosts(action) {
  try {
    var { country, callBack } = action.payload;
    yield put(appActions.showFullScreenLoader("Fetching Posts"));
    const response = yield call(yield PostsServices.getPost(country));
    console.log("Posts response", response);
    if (response) {
      yield put(postsActions.savePosts(response.data)); 
      callBack(response.data);
    }
    yield put(appActions.hideFullScreenLoader());
  } catch (error) {
    yield put(appActions.hideFullScreenLoader());
    action.payload.callBack(response.data);
  }
}


export function* requestNews(action) {
  try {
    var { query, callBack } = action.payload;
    // yield put(appActions.showFullScreenLoader("Fetching News"));
    const response = yield call(yield PostsServices.getNews(query));
    console.log("News response", response);
    if (response) {
      yield put(postsActions.saveNews(response.data)); 
      callBack(response.data);
    }
    // yield put(appActions.hideFullScreenLoader());
  } catch (error) {
    // yield put(appActions.hideFullScreenLoader());
    action.payload.callBack(response.data);
  }
}
