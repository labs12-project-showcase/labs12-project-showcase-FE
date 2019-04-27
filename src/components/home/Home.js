import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { homeData } from './homeActions';
import Cards from './Cards';
import Carousel from '../carousel/Carousel';

class Home extends React.Component {
	componentDidMount() {
		this.props.homeData();
		console.log('fetching here', homeData);
	}

	render() {
		return (
			<div className="home">
				{this.props.home.cards.map((cards, index) => (
					<Cards {...this.props} cards={cards} key={index} />
				))}

				{/* <Carousel /> */}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	cards: state.home
});

export default withRouter(
	connect(
		mapStateToProps,
		{ homeData }
	)(Home)
);
