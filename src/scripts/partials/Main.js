import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from 'scripts/screens/Home';
import Account from 'scripts/screens/Account';
import Overview from 'scripts/screens/Overview';

class Main extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="l-main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/overview/" component={Overview} />
					<Route exact path="/user/" component={Account} />
				</Switch>
			</div>
		)
	}
}

export default Main;