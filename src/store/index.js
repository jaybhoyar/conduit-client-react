import { createStore, combineReducers } from "redux";
import { articleReducer } from "./reducers/article";
import { tagsReducer } from "./reducers/tags";

const rootReducers = combineReducers({
	articles: articleReducer,
	tags: tagsReducer,
});

export let store = createStore(rootReducers);
