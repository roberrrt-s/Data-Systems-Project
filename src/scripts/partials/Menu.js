import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<div className="b-menu">
				<h1><Link to="/">Iron March database explorer</Link></h1>

				<ul>
					<li className="b-menu__item"><NavLink activeClassName='is-active' to="/overview"> View all users</NavLink></li>
				</ul>
			</div>
		)
	}
}

export default Menu;