import { createStore, combineReducers } from "redux";
import { articleReducer } from "./reducers/article";
import { tagsReducer } from "./reducers/tags";
import { singleArticleReducer } from "./reducers/singlearticle";

const rootReducers = combineReducers({
	articles: articleReducer,
	tags: tagsReducer,
	singleArticle: singleArticleReducer,
});

export let store = createStore(rootReducers);
