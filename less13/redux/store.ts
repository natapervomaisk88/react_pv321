import { legacy_createStore, combineReducers } from "redux";

import reducerPosts from "./reducers/reducerPosts";

const combReducers = combineReducers({
    postsReducer: reducerPosts
});
const store = legacy_createStore(combReducers);

export default store;
