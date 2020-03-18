import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Signin from "./components/Signin/signin";
import Signup from "./components/Signup/Signup";
import Header from "./components/common/Header";
import Article from "./components/Article/index";
import NewArticle from "./components/Newarticle";
import Settings from "./components/Settings";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}
	updateIsLoggedIn = value => {
		this.setState({ isLoggedIn: value });
	};
	render() {
		return (
			<>
				<Header isLoggedIn={this.state.isLoggedIn} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/tag/:tag" component={Home} />
					<Route exact path="/newpost" component={NewArticle} />
					<Route
						path="/login"
						render={() => (
							<Signin updateIsLoggedIn={this.updateIsLoggedIn} />
						)}
					/>
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/settings" component={Settings} />
					<Route exact path="/article/:slug" component={Article} />
					<Route
						path="*"
						render={() => <h1>"404 Page not Found"</h1>}
					/>
				</Switch>
			</>
		);
	}
}

export default App;
