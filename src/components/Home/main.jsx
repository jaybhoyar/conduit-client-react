import React, { Component } from "react";
import { connect } from "react-redux";
import "./main.scss";
import { Link } from "react-router-dom";
import Loader from "../Spinner/index";
import { fetchArticles } from "../../store/action/";

class Main extends Component {
	componentDidMount() {
		this.props.dispatch(fetchArticles());
		// this.props.dispatch(getTags(res[1].tags));
	}
	updateArticle(tagName) {
		fetch(
			`https://conduit.productionready.io/api/articles?tag=${tagName}&limit=10&offset=0`
		)
			.then((res) => res.json())
			.then((res) =>
				this.props.dispatch({
					type: "GET_ARTICLES",
					payload: res.articles,
				})
			);
	}
	render() {
		return (
			<div className="main_container">
				<div className="feed_bar">
					<p>Global</p>
					<p>tag</p>
				</div>

				{this.props.articles ? (
					<div className="articles_container">
						{this.props.articles &&
							this.props.articles.map((article) => {
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
					{this.props.tags ? (
						<div className="tags_box">
							{this.props.tags &&
								this.props.tags.map((tag) => {
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
function mapStateToProps({ articles, tags }) {
	return {
		articles,
		tags,
	};
}
export default connect(mapStateToProps)(Main);
