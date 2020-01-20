import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'reaviz';

import ReactTable from "react-table";
import "react-table/react-table.css";


class Posts extends Component {
	constructor(props) {
		super(props)

		this.state = {
			plotData: [],
			parsedData: [],
			columns: [{
				Header: 'Date',
				accessor: 'post_date',
				show: true,
				sortable: true,
				filterable: true,
				Cell: content => {
					if(content.row.post_date) {
						let dateObj = new Date(content.row.post_date * 1000);
						let utcString = dateObj.toUTCString();
						return (
							utcString
						)
					} else {
						return (
							'No date specified'
						)
					}
				}
			},
			{
				Header: 'Content',
				accessor: 'post_content',
				show: true,
				sortable: false,
				filterable: true,
				className: 'is-content',
				Cell: content => {
					return content.row.post_content
				},
				filterMethod: (filter, row) => {
					return row.post_content && row.post_content.toLowerCase().indexOf(filter.value.toLowerCase()) >=0;
				}
			},
			{
				Header: 'Hateful?',
				accessor: 'hate',
				show: true,
				sortable: true,
				filterable: true,
				Cell: content => {
					return content.row.hate ? 'hateful' : 'not hateful'
				}
			}]
		}

		const formatter = new Intl.DateTimeFormat('en', { month: 'long' });

		this.props.user.posts.map(el => {
			const date = new Date(el.post_date * 1000);
			let month = formatter.format(date);
			let year = new Date(date).getFullYear();

			this.state.plotData.push(
				{
					key: `${month}, ${year}`,
				}
			)
		})

		this.state.parsedData = this.state.plotData.reduce((acc, item) => {
			let found = acc.find(obj => obj.key === item.key)
				if (typeof found === "undefined") {
					item.data = 1
					acc.push(item);
				} else {
					found.data++;
				}
				return acc;
			},
		[]);
	}

	render() {
		return (
			<React.Fragment>
				<LineChart width={800} height={300} data={this.state.parsedData} />
				<ReactTable
					showPagination={true}
					data={this.props.user.posts}
					filterable={true}
					columns={this.state.columns}
					defaultSorted={[{
						id: "post_date",
						desc: false
					}]}
				/>
			</React.Fragment>
		)
	}
}

export default Posts;

Posts.propTypes = {
	user: PropTypes.object
}