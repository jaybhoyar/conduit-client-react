import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/signin";
import Signup from "./components/Signup/Signup";
import Header from "./components/common/Header";
import Article from "./components/Article/index";

function App() {
	return (
		<>
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Signin} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/article/:slug" component={Article} />
		</>
	);
}

export default App;
