import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	LineChart,
	LineSeries,
	TooltipArea,
} from 'reaviz';

import ReactTable from "react-table";
import "react-table/react-table.css";


class Posts extends Component {
	constructor(props) {
		super(props)

		this.state = {
			allData: [{
				key: "All posts",
				data: []
			},
			{
				key: "Hate posts",
				data: []
			}],
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

		this.props.user.posts.map(el => {
			const date = new Date(el.post_date * 1000);
			let month = date.getMonth();
			let year = date.getFullYear();

			this.state.allData[0].data.push(
				{
					key: new Date(year, month)
				}
			)

			if(el.hate) {
				this.state.allData[1].data.push(
					{
						key: new Date(year, month)
					}
				)
			}
		})

		this.state.allData[0].data = this.mergeObjects(this.state.allData[0].data);
		this.state.allData[1].data = this.mergeObjects(this.state.allData[1].data);

		this.state.allData[0].data = this.sortObjects(this.state.allData[0].data);
		this.state.allData[1].data = this.sortObjects(this.state.allData[1].data);

		console.log(this.state.allData)
	}


	mergeObjects(arr) {
		return arr.reduce((acc, item) => {
			let found = acc.find(obj => obj.key.toString() === item.key.toString())
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

	sortObjects(arr) {
		return arr.sort((a, b) => {
			return new Date(a.key) - new Date(b.key);
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="b-chart">
					<LineChart
						width={1000}
						height={500}
						data={this.state.allData}
						discrete={true}
						series={
							<LineSeries
								type="grouped"
								colorScheme={["#78dce8", "#fc9867"]}
								tooltip={
									<TooltipArea disabled={true}/>
								}
							/>
						}
					/>
				</div>
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