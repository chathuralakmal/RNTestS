import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";

const initialState = {
  // full screen white transparent loader
  fullScreenLoaderShow: false,
  fullScreenLoaderText: "",
};

export const appReducer = createReducer(initialState, {
 
  [types.SHOW_LOADER_MODAL](state, action) {
    return {
      ...state,
      fullScreenLoaderShow: true,
      fullScreenLoaderText: action.payload
    };
  },
  [types.HIDE_LOADER_MODAL](state) {
    return {
      ...state,
      fullScreenLoaderShow: false,
      fullScreenLoaderText: ""
    };
  }
});
