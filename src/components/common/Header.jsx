/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../styles/common.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header_container">
			<header className="header">
				<div className="logo">
					<Link to="/" className="main_heading">
						Conduit
					</Link>
				</div>
				<div className="search_box">
					<input type="text" name="" id="" />
				</div>
				<div className="auth_button">
					{Boolean(localStorage.isLoggedIn) ? (
						<>
							<Link to="/newpost">NewArticle</Link>
							<Link to="/settings">Settings</Link>
						</>
					) : (
						<>
							<Link to="/login">Sign in</Link>
							<Link to="/signup">Signup</Link> 
						</>
					)}
				</div>
			</header>
		</div>
	);
}

export default Header;
