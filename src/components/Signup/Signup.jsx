import React from "react";
import "../../styles/common.scss";

function Signup() {
	let email = React.useRef(null);
	let username = React.useRef(null);
	let password = React.useRef(null);
	function handleSignUp() {
		fetch(`https://conduit.productionready.io/api/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user: {
					username: username.current.value,
					email: email.current.value,
					password: password.current.value
				}
			})
		})
			.then(res => res.json())
			.then(userData => console.log(userData));
	}

	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">Sign Up</h3>
				<h6 className="form_subheading">Have an account?</h6>
				<input
					className="text_input"
					type="text"
					ref={username}
					placeholder="Username"
				/>
				<input
					className="text_input"
					type="email"
					ref={email}
					placeholder="Email"
				/>
				<input
					className="text_input"
					type="password"
					ref={password}
					placeholder="Password"
				/>
				<button className="submit_button" onClick={handleSignUp}>
					Signup
				</button>
			</div>
		</div>
	);
}

export default Signup;
