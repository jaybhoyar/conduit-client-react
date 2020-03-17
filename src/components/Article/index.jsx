import React, { Component } from "react";

class Article extends Component {
	state = {
		singleArticle: null
	};

	componentDidMount() {
		fetch(
			`https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`
		)
			.then(res => res.json())
			.then(({ article }) => {
				this.setState({ singleArticle: article });
			});
	}

	render() {
		return (
			<div>
				{this.state.singleArticle && this.state.singleArticle.title}
			</div>
		);
	}
}

export default Article;
