import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import Loader from "../Spinner/index";
import { getSingleArticle } from "../../store/action";

class Article extends Component {
	constructor(props) {
		super(props);
		fetch(
			`https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`
		)
			.then((res) => res.json())
			.then((articleObj) => {
				this.props.dispatch(getSingleArticle(articleObj.article));
			});
	}
	render() {
		return (
			<>
				{this.props.singleArticle ? (
					<div className="article_container ">
						{this.props.singleArticle && (
							<div className="single_article">
								<div className="article_author">
									<div className="thumbnail">
										<img
											width="40"
											height="40"
											src={
												this.props.singleArticle.author
													.image
											}
											alt={
												this.props.singleArticle.author
													.username
											}
										/>
									</div>
									<h4>
										{
											this.props.singleArticle.author
												.username
										}
									</h4>
								</div>
								<h3 className="article_title">
									{this.props.singleArticle.title}
								</h3>
								<p>{this.props.singleArticle.description}</p>
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
function mapStateToProps({ singleArticle }) {
	return {
		singleArticle,
	};
}
export default connect(mapStateToProps)(Article);
