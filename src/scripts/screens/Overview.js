import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Overview extends Component {

	constructor() {
		super();
	}

	render() {
		console.log(this.props.data)

		const content = this.props.data.length ? (
			this.props.data.map((el, i) => {
				return (
				<div key={i}>
					<p><Link to={`/user/${el.user_id}`}>ID: {el.user_id}</Link> <br /> Name: {el.user_name} <br /> Posts: {el.post_count} </p>
				</div>
				)
			})
		) : (
			<p>Loading...</p>
		)

		return (
			<main id="overview">
				{content}
			</main>
		)
	}
}

export default Overview;

Overview.propTypes = {
	data: PropTypes.array
}