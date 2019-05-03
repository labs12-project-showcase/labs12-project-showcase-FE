import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { homeData } from "./homeActions";
import Cards from "./Cards";
import Carousel from "./Carousel";

class Home extends React.Component {
  componentDidMount() {
    this.props.homeData();
  }

  render() {
    return (
      <div className="home">
        <header>
          <div className="header-text">
            <h1>Lambda School Showcase</h1>
            <p>
              Lambda School's diverse group of alumni span coast-to-coast,
              sharing a passion for learning and a drive to succeed. Discover
              more about our alumni and their robust skill sets below.
            </p>
            <section>
              <div className="carousel-section">
                <Carousel {...this.props} />
              </div>
            </section>
          </div>
          <div className="hero-girl">&nbsp;</div>
        </header>
        <main>
          <div className="search-bar">
            {/* Please use this section to implement the serch */}
            <h2>Filters</h2>
            <div className="control-group">
              <label className="control control-checkbox">
                Full Stack
                <input type="checkbox" />
                <div className="control_indicator" />
              </label>
              <label className="control control-checkbox">
                iOS
                <input type="checkbox" />
                <div className="control_indicator" />
              </label>
              <label className="control control-checkbox">
                Android
                <input type="checkbox" />
                <div className="control_indicator" />
              </label>
              <label className="control control-checkbox">
                UI/UX
                <input type="checkbox" />
                <div className="control_indicator" />
              </label>
              <label className="control control-checkbox">
                Data Science
                <input type="checkbox" />
                <div className="control_indicator" />
              </label>

              <hr />

              <label className="control control-checkbox">
                Lambda Badge
                <input type="checkbox" />
                <div className="control_indicator" />
              </label>

              <hr />

              <label className="input-location">
                Within
                <input type="number" size="3" /> miles of
              </label>

              <hr />
              <label>
                Lambda Badge
                <div className="search-location">
                  <i className="fas fa-search" />
                  <input type="text" placeholder="Washington, DC" />
                </div>
              </label>

              <hr />
              <label>
                Will Relocate
                <div className="search-location">
                  <i className="fas fa-search" />
                  <input type="text" placeholder="Washington, DC" />
                </div>
              </label>
            </div>
            <button className="bnt-search">Submit</button>
          </div>
          <div className="cards-display">
            <h2>Featured Alumni</h2>
            {this.props.home.cards.map((cards, index) => (
              <Cards {...this.props} cards={cards} key={index} />
            ))}
            <button className="btn-show-more">
              Show More <i className="fas fa-chevron-down" />
            </button>
          </div>
        </main>
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
