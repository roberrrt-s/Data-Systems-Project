import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

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
					<Route exact path="/" render={(props) => <Home {...props} data={this.props.data} />} />
					<Route exact path="/overview" render={(props) => <Overview {...props} data={this.props.data} />} />
					<Route path="/user/:id" render={(props) => <Account {...props} data={this.props.data} />}  />
				</Switch>
			</div>
		)
	}
}

export default Main;

Main.propTypes = {
	data: PropTypes.array
}