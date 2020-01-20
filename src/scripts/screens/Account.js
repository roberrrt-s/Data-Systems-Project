import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from 'scripts/blocks/Posts';

class Account extends Component {

	constructor(props) {
		super(props);
	}

	getUser() {
		if(this.props.data && this.props.data.length && this.props.match.params.id) {
			let userObject = this.props.data.find(obj => obj.user_id == this.props.match.params.id)

			if(userObject) {
				return (
					<Posts user={userObject} />
				)
		}
		else {
				return (
					<p>This user doesnt exist</p>
				)
			}
		}
		else {
			return (
				<p>Loading...</p>
			)
		}
	}

	render() {
		return (
			<main id="account">
				{this.getUser()}
			</main>
		)
	}
}

export default Account;


Account.propTypes = {
	match: PropTypes.object,
	data: PropTypes.array,
	user: PropTypes.object
}