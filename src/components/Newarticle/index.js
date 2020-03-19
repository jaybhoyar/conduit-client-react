import React, { useRef } from "react";
import "../../styles/common.scss";

function NewArticle(props) {
	let title = useRef(null);
	let description = useRef(null);
	let body = useRef(null);
	let tagList = useRef(null);

	function addArticle() {
		fetch(`https://conduit.productionready.io/api/articles`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: `Token ${localStorage["accessToken"]}`
			},
			body: JSON.stringify({
				article: {
					title: title.current.value,
					description: description.current.value,
					body: body.current.value,
					tagList: [tagList.current.value]
				}
			})
		})
			.then(res => res.json())
			.then(article => {
				if (article.errors) {
					console.log(article.errors);
				} else {
					props.history.push("/");
					// props.updateIsLoggedIn(true);
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">New Article</h3>
				<div>
					<input
						className="text_input"
						type="text"
						ref={title}
						placeholder="Article Title"
					/>
					<input
						className="text_input"
						type="text"
						ref={description}
						placeholder="What's this article about?"
					/>
					<textarea
						className="text_input"
						type="text"
						ref={body}
						placeholder="Start here ..."
					></textarea>
					<input
						className="text_input"
						type="text"
						ref={tagList}
						placeholder="tags"
					/>
					<button className="submit_button" onClick={addArticle}>
						Publish !
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewArticle;
