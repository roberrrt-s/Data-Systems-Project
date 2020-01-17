// Core
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from 'scripts/partials/Main';
import Menu from 'scripts/partials/Menu';


class App extends Component {
	constructor() {
		super();

		this.state = {};
		this.importData();
	}

	async importData() {
		await fetch('./data.json')
			.then(res => res.json())
			.then(json => this.setState({ data: json }));
	}

	render() {
		console.log(this.state);

		return (
			<div className="l-app">
				<HashRouter>
					<div className="l-header">
						<Menu />
					</div>

					<Main />
				</HashRouter>
			</div>
		);
	}
}

export default App;

App.propTypes = {
	data: PropTypes.array
}