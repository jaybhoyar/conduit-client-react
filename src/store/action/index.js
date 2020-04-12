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
export function getSingleArticle(payload) {
	return {
		type: "GET_ARTICLE",
		payload: payload,
	};
}

export function fetchArticles() {
	return function (disptach) {
		// let tagsUrl = "https://conduit.productionready.io/api/tags";
		fetch(
			"https://conduit.productionready.io/api/articles?limit=20&offset=0"
		)
			.then((res) => res.json())
			// let tags = fetch(tagsUrl).then((res) => res.json());
			.then(({ articles }) => {
				dispatch(getArticles(articles));
			});
	};
}
