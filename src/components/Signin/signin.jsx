import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/common.scss";

function Signin(props) {
	let email = useRef(null);
	let password = useRef(null);

	function handleSignIn() {
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
					props.updateIsLoggedIn(true);
				}
			});
	}
	return (
		<div>
			<div className="form_container">
				<h3 className="form_heading">Sign In</h3>
				<h6 className="form_subheading">Need an account?</h6>
				<div>
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
		</div>
	);
}

export default withRouter(Signin);
