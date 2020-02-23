import * as types from "./types";

export function getPosts(payload) {
    return {
      type: types.GET_POSTS,
      payload: payload
    };
  }
  
export function savePosts(payload) {
    return {
    type: types.SAVE_POSTS,
    payload: payload
    };
}



export function getNews(payload) {
  return {
    type: types.GET_NEWS,
    payload: payload
  };
}

export function saveNews(payload) {
  return {
  type: types.SAVE_NEWS,
  payload: payload
  };
}