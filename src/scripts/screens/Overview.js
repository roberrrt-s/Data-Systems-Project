import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserTable from 'scripts/blocks/UserTable';

class Overview extends Component {

	constructor(props) {
		super(props);
	}

	getUsers() {
		if(this.props.data && this.props.data.length) {
			return (
				<UserTable users={this.props.data} />
			)
		}
		else {
			return (
				<p>Loading users...</p>
			)
		}
	}

	render() {
		return (
			<main id="overview">
				{this.getUsers()}
			</main>
		)
	}
}

export default Overview;

Overview.propTypes = {
	data: PropTypes.array
}