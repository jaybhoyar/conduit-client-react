export function singleArticleReducer(state = null, action) {
	switch (action.type) {
		case "GET_ARTICLE": {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}
