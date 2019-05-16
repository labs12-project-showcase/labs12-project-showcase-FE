import React from 'react';
import { withRouter } from 'react-router-dom';

import Cards from './Cards';

class Results extends React.Component {
  render() {
    return (
      <div className="cards-display">
        <hr className="hrTop" />
        {this.props.location.search ? (
          <>
            <h2>Matching Candidates</h2>
            {this.props.filteredCards.map((cards, index) => (
              <Cards {...this.props} cards={cards} key={index} />
            ))}
            <button className="btn-show-more">
              Show More <i className="fas fa-chevron-down" />
            </button>
          </>
        ) : (
          <>
            <h2>Featured Alumni</h2>
            {this.props.initialCards.map((cards, index) => (
              <Cards {...this.props} cards={cards} key={index} />
            ))}
            <button className="btn-show-more">
              Show More <i className="fas fa-chevron-down" />
            </button>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Results);