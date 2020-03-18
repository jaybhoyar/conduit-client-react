import React, { Component } from "react";
import "./main.scss";
import { Link } from "react-router-dom";
import Loader from "../Spinner/index";
class Main extends Component {
	constructor() {
		super();
		this.state = {
			tags: null,
			articles: null
		};
	}

	componentDidMount() {
		let tagsUrl = "https://conduit.productionready.io/api/tags";
		let articlesUrl =
			"https://conduit.productionready.io/api/articles?limit=20&offset=0";

		let articles = fetch(articlesUrl).then(res => res.json());
		let tags = fetch(tagsUrl).then(res => res.json());

		Promise.all([articles, tags])
			// .then(res => res.json())
			.then(res => {
				this.setState({ articles: res[0].articles, tags: res[1].tags });
			});
	}
	updateArticle(tagName) {
		fetch(
			`https://conduit.productionready.io/api/articles?tag=${tagName}&limit=10&offset=0`
		)
			.then(res => res.json())
			.then(res => this.setState({ articles: res.articles }));
	}
	render() {
		return (
			<div className="main_container">
				<div className="feed_bar">
					<p>Global</p>
					<p>tag</p>
				</div>
				{this.state.articles ? (
					<div className="articles_container">
						{this.state.articles &&
							this.state.articles.map(article => {
								return (
									<div className="single_article">
										<Link
											to={`/article/${article.slug}`}
											className="article_title"
										>
											{article.title}
										</Link>
										<p>{article.body}</p>
										<div className="article_author">
											<div className="thumbnail">
												<img
													width="40"
													height="40"
													src={article.author.image}
													alt={
														article.author.username
													}
												/>
											</div>
											<h4>{article.author.username}</h4>
										</div>
									</div>
								);
							})}
					</div>
				) : (
					<Loader />
				)}
				<div className="tags_container">
					{this.state.tags ? (
						<div className="tags_box">
							{this.state.tags &&
								this.state.tags.map(tag => {
									return (
										<Link
											to={`/tag/${tag}`}
											onClick={() =>
												this.updateArticle(tag)
											}
											className="tag_style"
										>
											{tag}
										</Link>
									);
								})}
						</div>
					) : (
						<Loader />
					)}
				</div>
			</div>
		);
	}
}

export default Main;
