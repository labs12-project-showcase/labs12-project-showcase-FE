import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { homeData, getFilteredCards } from './homeActions';
import Cards from './Cards';
import Carousel from './Carousel';
import LocationSelect from '../location/LocationSelect.js';

const reactSelectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: 224
  }),
  control: provided => ({
    ...provided,
    minHeight: 48
  }),
  menu: provided => ({
    ...provided,
    zIndex: 2
  })
};

class Home extends React.Component {
  state = {
    android: false,
    badge: false,
    dataScience: false,
    filterDesLoc: true,
    fullStack: false,
    ios: false,
    uiux: false,
    within: 50
    // location: null
    // {
    // label: '',
    // value: {
    // 	lat: '',
    // 	locationName: '',
    // 	lon: ''
    // }
    // }
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
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

            <section>
              <div className="carousel-section">
                <Carousel {...this.props} />
              </div>
            </section>
            <p>
              Lambda School's diverse group of alumni span coast-to-coast,
              sharing a passion for learning and a drive to succeed. Discover
              more about our alumni and their robust skill sets below.
            </p>
          </div>
        </header>

        <main>
          <section className="formSection">
            <form className="search-bar" onSubmit={this.handleSubmit}>
              {/* Please use this section to implement the serch */}
              <hr className="hrTop" />
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
                  <hr />
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
                <hr />
                <div className="search-box">
                  <h3>Location</h3>
                  <label className="input-location">
                    Located within
                    <input
                      type="number"
                      size="3"
                      placeholder="50"
                      name="within"
                      value={this.state.within}
                      onChange={this.handleChange}
                    />
                    miles of:
                  </label>

                  {/* <label>
										Located */}
                  <LocationSelect
                    fieldValue={this.state.location}
                    isClearable
                    onChange={this.handleLocation}
                    styles={reactSelectStyles}
                  />
                  {/* </label> */}

                  <input
                    onChange={e => this.setState({ filterDesLoc: false })}
                    name="filterDesLoc"
                    type="radio"
                    value={false}
                  />
                  {'Currently Located Only'}
                  <input
                    onChange={e => this.setState({ filterDesLoc: true })}
                    checked={this.state.filterDesLoc}
                    name="filterDesLoc"
                    type="radio"
                    value={true}
                  />
                  {'Currently Located & Will Relocate'}
                </div>
              </div>
              <div className="search-button">
                <button className="bnt-search" type="submit">
                  Search
                </button>
              </div>
            </form>
          </section>
          <div className="cards-display">
            <hr className="hrTop" />
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
    { homeData, getFilteredCards }
  )(Home)
);
