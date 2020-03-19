import React from "react";
import "../../styles/common.scss";

function NewArticle() {
	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">New Article</h3>
				<div>
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
					<textarea
						className="text_input"
						type="text"
						placeholder="Start here ..."
					></textarea>
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
				</div>
			</div>
		</div>
	);
}

export default NewArticle;
