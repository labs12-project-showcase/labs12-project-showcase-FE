import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Cards from './Cards';

class Results extends React.Component {
	render() {
		if (!this.props.cards) {
			return null;
		}
		return (
			<div className="cards-display">
				{/* <hr className="hrTop" /> */}
				{this.props.location.search ? (
					<h2>Matching Candidates</h2>
				) : (
					<h2>Featured Alumni</h2>
				)}
				<React.Fragment>
					<InfiniteScroll
						initialLoad={false}
						pageStart={0}
						loadMore={this.props.loadMore}
						hasMore={this.props.hasMore}
					>
						{this.props.cards.map((cards, index) => (
							<Cards {...this.props} cards={cards} key={index} />
						))}
					</InfiniteScroll>
				</React.Fragment>
			</div>
		);
	}
}

export default Results;
