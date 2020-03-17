import React from "react";
import "../../styles/common.scss";

function NewArticle() {
	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">New Article</h3>
				<form>
					<input
						className="text_input"
						type="text"
						placeholder="Article Title"
					/>
					<input
						className="text_input"
						type="text"
						placeholder="What's this article about?"
					/>
					<input
						className="text_input"
						type="text"
						placeholder="Start here ..."
					/>
					<input
						className="text_input"
						type="text"
						placeholder="tags"
					/>
					<input
						className="submit_button"
						type="submit"
						value="Publish!"
					/>
				</form>
			</div>
		</div>
	);
}

export default NewArticle;
