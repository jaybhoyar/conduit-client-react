import React from "react";
import { withRouter } from "react-router-dom";

// import { Redirect } from "react-router-dom";

function Logout(props) {
	localStorage.removeItem("accessToken");
	props.history.push("/");
	props.updateIsLoggedIn(false);
	return <></>;
}

export default withRouter(Logout);
