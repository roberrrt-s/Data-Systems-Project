import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<div className="b-menu">
				<h1><Link to="/">DSP Data Explorer</Link></h1>
			</div>
		)
	}
}

export default Menu;