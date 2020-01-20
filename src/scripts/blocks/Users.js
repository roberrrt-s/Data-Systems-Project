import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ReactTable from "react-table";
import "react-table/react-table.css";

class Users extends Component {
	constructor(props) {
		super(props)

		console.log(this.props.users)

		this.state = {
			columns: [{
				Header: 'User ID',
				accessor: 'user_id',
				show: true,
				sortable: true,
				filterable: true,
				Cell: content => {
					return <Link to={`user/${content.row.user_id}`}>{content.row.user_id}</Link>
				}
			},
			{
				Header: 'Username',
				accessor: 'user_name',
				show: true,
				sortable: true,
				filterable: true,
				Cell: content => {
					return <Link to={`user/${content.row.user_id}`}>{content.row.user_name}</Link>
				},
				filterMethod: (filter, row) => {
					return row.user_name && row.user_name.toLowerCase().indexOf(filter.value.toLowerCase()) >=0;
				}
			},
			{
				Header: 'Postcount',
				accessor: 'post_count',
				show: true,
				sortable: true,
				filterable: false,
			},
			{
				Header: 'Percentage of hateful posts',
				accessor: 'percentage_hate',
				show: true,
				sortable: true,
				filterable: false,
				Cell: content => {
					return `${Math.round(content.row.percentage_hate * 100) / 100}%`;
				}
			}]
		}
	}

	render() {

		return (
			<React.Fragment>
				<ReactTable
					showPagination={true}
					data={this.props.users}
					filterable={true}
					columns={this.state.columns}
					defaultSorted={[{
						id: "user_id",
						desc: false
					}]}
				/>
			</React.Fragment>
		)
	}
}

export default Users;

Users.propTypes = {
	users: PropTypes.array
}