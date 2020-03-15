import React from "react";

import "../../styles/common.scss";

function Signin() {
	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">Sign In</h3>
				<h6 className="form_subheading">Need an account?</h6>
				<form>
					<input
						className="text_input"
						type="email"
						name="email"
						placeholder="Email"
					/>
					<input
						className="text_input"
						type="text"
						name="password"
						placeholder="Password"
					/>
					<input
						className="submit_button"
						type="submit"
						value="SignIn"
					/>
				</form>
			</div>
		</div>
	);
}

export default Signin;
