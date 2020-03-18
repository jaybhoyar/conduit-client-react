import React, { Component } from "react";

import "./style.scss";
import Loader from "../Spinner/index";

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
			<>
				{this.state.singleArticle ? (
					<div className="article_container ">
						{this.state.singleArticle && (
							<div className="single_article">
								<div className="article_author">
									<div className="thumbnail">
										<img
											width="40"
											height="40"
											src={
												this.state.singleArticle.author
													.image
											}
											alt={
												this.state.singleArticle.author
													.username
											}
										/>
									</div>
									<h4>
										{
											this.state.singleArticle.author
												.username
										}
									</h4>
								</div>
								<h3 className="article_title">
									{this.state.singleArticle.title}
								</h3>
								<p>{this.state.singleArticle.body}</p>
							</div>
						)}
					</div>
				) : (
					<Loader />
				)}
			</>
		);
	}
}

export default Article;
