import React, { createRef } from "react";
import axios from "axios";
import Loader from "../Spinner/index";
import "../../styles/common.scss";

class Settings extends React.Component {
	constructor() {
		super();
		this.state = {
			user: null,
			isLoggedIn: true
		};
		this.username = createRef(null);
		this.email = createRef(null);
		this.password = createRef(null);
		this.bio = createRef(null);

		if (localStorage["accessToken"]) {
			fetch(`https://conduit.productionready.io/api/user`, {
				method: "GET",
				headers: {
					authorization: `Token ${localStorage["accessToken"]}`
				}
			})
				.then(res => res.json())
				.then(userData => {
					console.log(userData.user);
					this.setState({
						user: userData.user
					});

					this.username.current.value = userData.user.username;
					this.email.current.value = userData.user.email;
					this.password.current.value = userData.user.password;
					this.bio.current.value = userData.user.bio;
				})
				.catch(err => {
					console.log(err);
				});
		}
	}

	handleUpdateData = () => {
		if (localStorage["accessToken"]) {
			axios
				.put(`https://conduit.productionready.io/api/user`, {
					method: "PUT",
					headers: {
						authorization: `Token ${localStorage["accessToken"]}`
					}
				})
				.then(userData => {
					this.setState({ user: userData.data.user });
				})
				.catch(err => {
					console.log(err);
				});
		}
	};
	// componentDidMount() {}
	render() {
		return (
			<div>
				{this.state.user ? (
					<div className="form_container">
						<h3 className="form_heading">Your Settings</h3>
						<div>
							<input
								className="text_input"
								type="text"
								placeholder="Url of profile pic"
							/>
							<input
								className="text_input"
								type="text"
								placeholder="Username"
								ref={this.username}
							/>
							<textarea
								className="text_input"
								type="text"
								placeholder="Short bio about you"
								ref={this.bio}
							></textarea>
							<input
								className="text_input"
								type="email"
								placeholder="email"
								ref={this.email}
							/>
							<input
								className="text_input"
								type="text"
								placeholder="password"
								// ref={ this.password }
							/>
							<button
								className="submit_button"
								onClick={this.handleUpdateData}
							>
								Publish !
							</button>
						</div>
					</div>
				) : (
					<Loader />
				)}
			</div>
		);
	}
}

export default Settings;
