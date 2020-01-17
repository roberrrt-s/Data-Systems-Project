// Core
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import composeDynamicImport from 'react-simple-async-import';
import PropTypes from 'prop-types';

import Main from 'scripts/partials/Main';
import Menu from 'scripts/partials/Menu';


const options = {
	load: () => import('./data/data.json'),
	refresh: module.hot && (load => module.hot.accept('data.json', load)),
	placeholder: <p>test</p>,
};

const data = composeDynamicImport(options);
console.log(data);

class App extends Component {
	constructor() {
		super();
	}

	render() {
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