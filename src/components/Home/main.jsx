import React, { Component } from "react";
import "./main.scss";
import { Link } from "react-router-dom";

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
			"https://conduit.productionready.io/api/articles?limit=10&offset=0";

		let articles = fetch(articlesUrl).then(res => res.json());
		let tags = fetch(tagsUrl).then(res => res.json());

		Promise.all([articles, tags]).then(res => {
			this.setState({ articles: res[0].articles, tags: res[1].tags });
			console.log(this.state.articles);
		});
	}

	render() {
		return (
			<div className="main_container">
				<div className="feed_bar">
					<p>Global</p>
				</div>
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
												alt={article.author.username}
											/>
										</div>
										<h4>{article.author.username}</h4>
									</div>
								</div>
							);
						})}
				</div>
				<div className="tags_container">
					<div className="tags_box">
						{this.state.tags &&
							this.state.tags.map(tag => {
								return <span> {tag}</span>;
							})}
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
