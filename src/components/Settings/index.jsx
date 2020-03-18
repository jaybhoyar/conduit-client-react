import React from "react";
import "../../styles/common.scss";

function Settings() {
	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">Your Settings</h3>
				<form>
					<input
						className="text_input"
						type="text"
						placeholder="Url of profile pic"
					/>
					<input
						className="text_input"
						type="text"
						placeholder="Username"
					/>
					<textarea
						className="text_input"
						type="text"
						placeholder="Short bio about you"
					></textarea>
					<input
						className="text_input"
						type="email"
						placeholder="email"
					/>
					<input
						className="text_input"
						type="password"
						placeholder="password"
					/>
					<input
						className="submit_button"
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		</div>
	);
}

export default Settings;
