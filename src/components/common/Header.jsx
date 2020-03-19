/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../styles/common.scss";
import { NavLink } from "react-router-dom";

function Header(props) {
	return (
		<div className="header_container">
			<header className="header">
				<div className="logo">
					<NavLink to="/" className="main_heading">
						Conduit
					</NavLink>
				</div>
				<div className="search_box">
					<input type="text" name="" id="" />
				</div>
				<div className="auth_button">
					{props.isLoggedIn ? (
						<>
							<NavLink
								activeclassName="active_link"
								to="/newpost"
							>
								NewArticle
							</NavLink>
							<NavLink
								activeclassName="active_link"
								to="/settings"
							>
								Settings
							</NavLink>
							<NavLink activeclassName="active_link" to="/logout">
								Logout
							</NavLink>
						</>
					) : (
						<>
							<NavLink activeClassName="active_link" to="/login">
								Sign in
							</NavLink>
							<NavLink activeClassName="active_link" to="/signup">
								Signup
							</NavLink>
						</>
					)}
				</div>
			</header>
		</div>
	);
}

export default Header;
