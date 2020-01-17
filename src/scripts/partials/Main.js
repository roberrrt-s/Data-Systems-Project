import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from 'scripts/screens/Home';
import Account from 'scripts/screens/Account';

class Main extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="l-main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/user/" component={Account} />
				</Switch>
			</div>
		)
	}
}

export default Main;