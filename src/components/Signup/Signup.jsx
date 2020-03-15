import React from "react";
import "../../styles/common.scss";

function Signup() {
	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">Sign Up</h3>
				<h6 className="form_subheading">Have an account?</h6>
				<form>
					<input
						className="text_input"
						type="text"
						name="username"
						placeholder="Username"
					/>
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
						value="Signup"
					/>
				</form>
			</div>
		</div>
	);
}

export default Signup;
