import { createStore, combineReducers, applyMiddleware } from "redux";
import { articleReducer } from "./reducers/article";
import { tagsReducer } from "./reducers/tags";
import { singleArticleReducer } from "./reducers/singlearticle";

const rootReducers = combineReducers({
	articles: articleReducer,
	tags: tagsReducer,
	singleArticle: singleArticleReducer,
	// getUser: userReducer,
});

const thunk = (store) => (next) => (action) => {
	if (typeof action === "function") {
		return action(store.dispatch);
	}
	next(action);
};

export let store = createStore(rootReducers, applyMiddleware(thunk));
