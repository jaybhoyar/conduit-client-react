import React, { useRef } from "react";

import "../../styles/common.scss";

function Signin() {
	let email = useRef(null);
	let password = useRef(null);

	function handleSignIn(props) {
		fetch("https://conduit.productionready.io/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user: {
					email: email.current.value,
					password: password.current.value
				}
			})
		})
			.then(res => res.json())
			.then(user => {
				if (user.erros) {
					localStorage.setItem("isLoggedIn", false);
				} else {
					localStorage.setItem("isLoggedIn", true);
					props.history.push("/");
				}
			});
	}
	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">Sign In</h3>
				<h6 className="form_subheading">Need an account?</h6>

				<input
					className="text_input"
					type="email"
					ref={email}
					placeholder="Email"
				/>
				<input
					className="text_input"
					type="text"
					ref={password}
					placeholder="Password"
				/>
				<button className="submit_button" onClick={handleSignIn}>
					SignIn
				</button>
			</div>
		</div>
	);
}

export default Signin;
