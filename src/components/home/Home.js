import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { homeData, getFilteredCards } from "./homeActions";
import Cards from "./Cards";
import Carousel from "./Carousel";
import LocationSelect from "../location/LocationSelect.js";

const reactSelectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: 224
  }),
  control: provided => ({
    ...provided,
    paddingLeft: 10,
    paddingTop: 4,
    minHeight: 48
  }),
  menu: provided => ({
    ...provided,
    zIndex: 2
  })
};

class Home extends React.Component {
  state = {
    fullStack: false,
    ios: false,
    android: false,
    uiux: false,
    dataScience: false,
    badge: false,
    within: 50,
    location: {
      label: "",
      value: {
        lat: "",
        locationName: "",
        lon: ""
      }
    }
  };

  componentDidMount() {
    this.props.homeData();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.getFilteredCards(this.state);
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleLocation = location => {
    this.setState({ location: location });
  };

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

        <section className="formSection">
          <form className="search-bar" onSubmit={this.handleSubmit}>
            {/* Please use this section to implement the serch */}
            <h2>Filters</h2>
            <div className="control-group">
              <div className="search-box">
                <label className="control control-checkbox">
                  Full Stack
                  <input
                    type="checkbox"
                    name="fullStack"
                    checked={this.state.fullStack}
                    onChange={this.handleChange}
                  />
                  <div className="control_indicator" />
                </label>
                <label className="control control-checkbox">
                  iOS
                  <input
                    type="checkbox"
                    name="ios"
                    checked={this.state.ios}
                    onChange={this.handleChange}
                  />
                  <div className="control_indicator" />
                </label>
                <label className="control control-checkbox">
                  Android
                  <input
                    type="checkbox"
                    name="android"
                    checked={this.state.android}
                    onChange={this.handleChange}
                  />
                  <div className="control_indicator" />
                </label>
                <label className="control control-checkbox">
                  UI/UX
                  <input
                    type="checkbox"
                    name="uiux"
                    checked={this.state.uiux}
                    onChange={this.handleChange}
                  />
                  <div className="control_indicator" />
                </label>
                <label className="control control-checkbox">
                  Data Science
                  <input
                    type="checkbox"
                    name="dataScience"
                    checked={this.state.dataScience}
                    onChange={this.handleChange}
                  />
                  <div className="control_indicator" />
                </label>

                <label className="control control-checkbox">
                  Lambda Badge
                  <input
                    type="checkbox"
                    name="badge"
                    checked={this.state.badge}
                    onChange={this.handleChange}
                  />
                  <div className="control_indicator" />
                </label>
              </div>
              <div className="search-box">
                <label className="input-location">
                  Within
                  <input
                    type="number"
                    size="3"
                    placeholder="50"
                    name="within"
                    value={this.state.within}
                    onChange={this.handleChange}
                  />
                  miles of
                </label>

                <label>
                  Located
                  <LocationSelect
                    fieldValue={this.state.location}
                    styles={reactSelectStyles}
                    onChange={this.handleLocation}
                  />
                </label>
              </div>
              <div className="search-box">
                <label>
                  Will Relocate
                  <div className="search-location">
                    <i className="fas fa-search" />
                    <input type="text" placeholder="Washington, DC" />
                  </div>
                </label>
              </div>
            </div>
            <div className="search-button">
              <button className="bnt-search">Search</button>
            </div>
          </form>
        </section>
        <main>
          <div className="cards-display">
            <h2>Featured Alumni</h2>
            {this.props.home.cards.map((cards, index) => (
              <Cards {...this.props} cards={cards} key={index} />
            ))}
          </div>
          <button className="btn-show-more">
            Show More <i className="fas fa-chevron-down" />
          </button>
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
    { homeData, getFilteredCards }
  )(Home)
);
