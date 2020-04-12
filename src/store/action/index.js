export function getArticles(payload) {
	return {
		type: "GET_ARTICLES",
		payload: payload,
	};
}
export function getTags(payload) {
	return {
		type: "GET_TAGS",
		payload: payload,
	};
}
