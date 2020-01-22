import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends Component {

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
			<main id="home">
				<div className="jumbotron">
					<h1>Introduction</h1>
					<p>The Fascist Data Explorer is an exploratory tool to gain
						insights into the radicalization of right wing forum users. It
						combines natural language processing techniques, sentiment
						analysis and topic modelling to give an overview of the
						negativity, hatefulness and topics of single users or groups
						of users in right-wing extremist forums.
						Based on the Fascist Data Explorer behaviour of users can
						be tracked and analysed by experts.</p>
					<button type="button" className="btn btn-primary">Start exploring</button>
				</div>

				<div className="container-fluid">
					<h1>Data</h1>
					<h2>Users <span className="badge badge-secondary">1166</span></h2>
					<h2>Posts <span className="badge badge-secondary">156895</span></h2>
					<p>We used leaked data from Iron March, a fascist social network <a href="https://www.bellingcat.com/resources/how-tos/2019/11/06/massive-white-supremacist-message-board-leak-how-to-access-and-interpret-the-data/">(link to data)</a>.
					Further, we used labelled data to train our classifier <a href="https://github.com/aitor-garcia-p/hate-speech-dataset">(link to data)</a>.
					The data contains the information of <b>1166 users</b> with a total of <b>156895 posts</b></p>
				</div>

				<div className="container-fluid">
					<h1>Hate Speech Classifier</h1>
					<h2>F1 score <span className="badge badge-secondary">0.434</span></h2>
					<p>The hate speech classifier utilizes the BERT model to classify posts or comments in as hate
						speech or not.
						The definition of hate speech and the training set for the classifier were obtained by the
						research of Gibert et al (2018).
						On a hand labelled data from the Iron March dataset, the model reached an F1 score of 0.434.
						Whilst there are relatively little false positives, there is a substantial amount of false negatives
						present in the model.</p>
				</div>

				<div className="container-fluid">
					<h1>Sentiment Analysis</h1>
					<h2>Positive <span className="badge badge-secondary">12%</span></h2>
					<h2>Neutral <span className="badge badge-secondary">78%</span></h2>
					<h2>Negative <span className="badge badge-secondary">10%</span></h2>
					<p>The sentiment analysis is based on a pre-trained model from the NLTK-library in
						python.
						The sentiment model is used to sort out all non-English posts and evaluate the
						sentiment of every remaining post.</p>
				</div>

				<div className="container-fluid">
					<h1>Topic Modelling</h1>
					<h2>Topics <span className="badge badge-secondary">11</span></h2>
					<p>To extract the topics of every post a dictionary of all vocabulary, used in the Iron March dataset
						was created. After stop-word and punctuation removal the posts were tokenized and
						stemmed. Following the topics were extracted via a latent dirichlet analysis (LDA).
						After an initial number of 30 topics, we narrowed the total topic-number down to 11 by
						clustering related topics together via their distance.</p>
				</div>
			</main>
		)
	}
}

export default Home;

Home.propTypes = {
	data: PropTypes.array
}