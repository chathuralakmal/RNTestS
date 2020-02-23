/* 
 * combines all th existing reducers
 */
import * as postsReducer from './postsReducer';
import * as appReducer from './appReducer';
export default Object.assign(appReducer, postsReducer);
