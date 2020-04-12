export function articleReducer(state = null, action) {
	switch (action.type) {
		case "GET_ARTICLES": {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}
