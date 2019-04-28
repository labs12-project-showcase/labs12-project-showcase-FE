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
				<header>
					<h1>Title and Image coming soon</h1>
				</header>
				<main>
					<div className="search-bar">
						{/* Please use this section to implement the serch */}
						<p>Filters</p>
						<input type={Text} />
						<br />
						<button>Submit</button>
					</div>
					<div className="cards-display">
						{this.props.home.cards.map((cards, index) => (
							<Cards {...this.props} cards={cards} key={index} />
						))}
					</div>
				</main>
				<div className="carousel-section">
					<Carousel />
				</div>
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
