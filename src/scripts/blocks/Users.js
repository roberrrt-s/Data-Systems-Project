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
				width: 75,
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
				width: 150,
				sortable: true,
				filterable: false,
			},
			{
				Header: 'Percentage of hateful posts',
				accessor: 'percentage_hate',
				show: true,
				width: 150,
				sortable: true,
				filterable: false,
				Cell: content => {
					return `${Math.round(content.row.percentage_hate * 100) / 100}%`;
				}
			},
			{
				Header: 'Subjects of interest',
				accessor: 'user_topic',
				show: true,
				sortable: false,
				filterable: false,
				Cell: content => {
					let data = Object.keys(content.value)

					data = data.filter((el) => {
						return content.value[el] != 0;
					}).sort((a, b) => {
						return content.value[b] - content.value[a];
					})

					data.length = 3;

					data = data.map((el, i) => {
						return <span className="is-topic" key={i}>{`${el}`}</span>
					})

					return data.length && data || 'No interests';
				},
				filterMethod: (filter, row) => {
					console.log(Object.keys(row.user_topic));
					return row.user_topic && row.user_topic.toString().toLowerCase().indexOf(filter.value.toLowerCase()) >=0;
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