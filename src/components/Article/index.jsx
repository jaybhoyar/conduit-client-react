import React, { Component } from "react";
// import { connect } from "react-redux";
import "./style.scss";
import Loader from "../Spinner/index";

class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			singleArticle: "",
		};
		fetch(
			`https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`
		)
			.then((res) => res.json())
			.then((articleObj) => {
				this.setState({ singleArticle: articleObj.article });
			});
	}
	render() {
		const { title, author, description } = this.state.singleArticle;

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
											src={author.image}
											alt={author.username}
										/>
									</div>
									<h4>{author.username}</h4>
								</div>
								<h3 className="article_title">{title}</h3>
								<p>{description}</p>
							</div>
						)}
						<div className="comment_container">
							<div className="comment_input">
								<input
									className="text_input"
									type="text"
									placeholder="Write a Comment.."
								/>
							</div>
							<div className="comment"></div>
						</div>
					</div>
				) : (
					<Loader />
				)}
			</>
		);
	}
}

export default Article;
