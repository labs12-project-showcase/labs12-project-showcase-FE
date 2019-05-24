import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { getJwtRole } from '../../config/utilities.js';

import EmptyState from './EmptyState';
import Cards from './Cards';

class Results extends React.Component {
  render() {
    const role = getJwtRole();
    if (!this.props.cards.length) {
      return <EmptyState queryString={this.props.location.search} />;
    }
    return (
      <div className="cards-display">
        {/* <hr className="hrTop" /> */}
        {this.props.location.search &&
        this.props.location.search !== '?tracks=none' ? (
          <h2>Matching Candidates</h2>
        ) : (
          <h2>Featured Candidates</h2>
        )}
        <React.Fragment>
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.props.loadMore}
            hasMore={this.props.hasMore}
          >
            {this.props.cards.map((cards, index) => (
              <Cards {...this.props} cards={cards} key={index} role={role} />
            ))}
          </InfiniteScroll>
        </React.Fragment>
      </div>
    );
  }
}

export default Results;
