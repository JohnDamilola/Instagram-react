import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index.js';

import comments from './data/comments.js';
import posts from './data/posts.js';

//create an object for the default data
const initialState = {
  posts,
  comments
};

const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore( browserHistory, store);

export default store;
