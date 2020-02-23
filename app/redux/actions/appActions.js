import * as types from './types';

export function showFullScreenLoader(payload) {
    return {
      type: types.SHOW_LOADER_MODAL,
      payload: payload
    };
  }
  
  export function hideFullScreenLoader() {
    return {
      type: types.HIDE_LOADER_MODAL
    };
  }