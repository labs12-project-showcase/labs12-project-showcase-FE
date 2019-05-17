import React from "react";
import Cards from "./Cards";

class Results extends React.Component {
  render() {
    return (
      <div className="cards-display">
        <hr className="hrTop" />
        {this.props.location.search ? (
          <h2>Matching Candidates</h2>
        ) : (
          <h2>Featured Alumni</h2>
        )}
        <React.Fragment>
          {this.props.cards.map((cards, index) => (
            <Cards {...this.props} cards={cards} key={index} />
          ))}
          <button className="btn-show-more">
            Show More <i className="fas fa-chevron-down" />
          </button>
        </React.Fragment>
      </div>
    );
  }
}

export default Results;
