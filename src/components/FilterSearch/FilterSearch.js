import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Results from "./Results";
import { getFilteredCards, getInitialCards } from "./FilterSearchActions";
import LocationSelect from "../location/LocationSelect.js";
import { reactSelectStyles } from "../../styles/ReactSelectStyles";

class FilterSearch extends React.Component {
  state = {
    android: false,
    badge: false,
    dataScience: false,
    filterDesLoc: true,
    fullStack: false,
    hasMore: true,
    ios: false,
    location: null,
    page: 0,
    search: "",
    uiux: false,
    within: 50
  };

  componentWillUpdate(nextProps) {
    if (this.state.hasMore === true) {
      nextProps.cards.length % 8 > 0 &&
        this.setState({ hasMore: false }, () => {});
    } else if (this.state.hasMore === false) {
      nextProps.cards.length % 8 === 0 &&
        this.setState({ hasMore: true }, () => {});
    }
  }

  componentDidUpdate(prevProps) {
    const search = this.props.location.search;
    const prevSearch = prevProps.location.search;
    if (search !== prevSearch && !search) {
      this.setState(
        {
          android: false,
          badge: false,
          dataScience: false,
          filterDesLoc: true,
          fullStack: false,
          hasMore: true,
          ios: false,
          location: null,
          page: 0,
          search: "",
          uiux: false,
          within: 50
        },
        this.handleSubmit
      );
    }
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    if (params.toString()) {
      this.setState(
        {
          android: params.get("tracks")
            ? params.get("tracks").includes("4")
            : false,
          badge: params.get("badge") || false,
          dataScience: params.get("tracks")
            ? params.get("tracks").includes("3")
            : false,
          filterDesLoc: params.get("filterDesLoc") ? true : false,
          fullStack: params.get("tracks")
            ? params.get("tracks").includes("1")
            : false,
          ios: params.get("tracks")
            ? params.get("tracks").includes("2")
            : false,
          location:
            params.get("lat") && params.get("lon") && params.get("location")
              ? {
                  label: decodeURIComponent(params.get("location")),
                  value: {
                    locationName: decodeURIComponent(params.get("location")),
                    lat: params.get("lat"),
                    lon: params.get("lon")
                  }
                }
              : null,
          search: params.get("search") || "",
          uiux: params.get("tracks")
            ? params.get("tracks").includes("5")
            : false,
          within: Number(params.get("within")) || 50
        },
        () => {
          this.handleSubmit();
        }
      );
    } else {
      this.handleSubmit();
    }
  }

  loadMore = () => {
    if (this.state.hasMore) {
      this.fetchProjects();
    }
  };

  fetchProjects = () => {
    return this.props
      .getFilteredCards({ ...this.state })
      .then(({ queryString, results }) => {
        this.props.history.push({
          pathname: "/discover",
          search: queryString
        });
        if (results.length === 0) {
          this.setState(prevState => ({
            page: prevState.page + 1,
            hasMore: false
          }));
        } else {
          this.setState(prevState => ({ page: prevState.page + 1 }));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      () => {
        if (target.type === "checkbox") {
          this.handleSubmit();
        }
      }
    );
  };

  handleLocation = location => {
    this.setState({ location: location }, () => {
      this.handleSubmit();
    });
  };

  handleSubmit = event => {
    event && event.preventDefault();
    this.props
      .getFilteredCards({ ...this.state, page: 0 })
      .then(({ queryString, results }) => {
        this.props.history.push({
          pathname: "/discover",
          search: queryString
        });
        if (results.length === 0) {
          this.setState(prevState => ({ page: 0, hasMore: false }));
        } else {
          this.setState(prevState => ({ page: 0 }));
        }
        window.scrollTo(0, 0);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="search-page">
        <main>
          <section className="formSection">
            <form className="search-bar" onSubmit={this.handleSubmit}>
              {/* <hr className="hrTop" /> */}
              <h2>
                <label htmlFor="search">Search</label>
              </h2>
              <input
                type="text"
                name="search"
                aria-labelledby="search"
                placeholder="Search by name or skill"
                value={this.state.search}
                onChange={this.handleChange}
                className="search-class"
              />
              <div className="search-button">
                <button className="bnt-search" type="submit">
                  Search
                </button>
              </div>
              <hr />
              <h2>Filters</h2>
              <div className="control-group">
                <div className="search-box">
                  <h3>Location</h3>
                  <label className="input-location">
                    Located within
                    <input
                      type="number"
                      step="10"
                      size="3"
                      placeholder="50"
                      name="within"
                      value={this.state.within}
                      onChange={this.handleChange}
                    />
                    miles of:
                  </label>
                  <LocationSelect
                    fieldValue={this.state.location}
                    isClearable
                    onChange={this.handleLocation}
                    styles={reactSelectStyles}
                  />
                  <label className="control control-checkbox">
                    Currently Located Only
                    <input
                      onChange={e =>
                        this.setState({ filterDesLoc: false }, () => {
                          if (this.state.location) {
                            this.handleSubmit();
                          }
                        })
                      }
                      checked={this.state.filterDesLoc ? false : true}
                      name="filterDesLoc"
                      type="radio"
                      value={false}
                    />
                    <div className="control_indicator-radio" />
                  </label>
                  <label className="control control-checkbox">
                    {"Currently Located & Will Relocate"}{" "}
                    {/* Wrapped in {} because of the ampersand */}
                    <input
                      onChange={e =>
                        this.setState({ filterDesLoc: true }, () => {
                          if (this.state.location) {
                            this.handleSubmit();
                          }
                        })
                      }
                      checked={this.state.filterDesLoc}
                      name="filterDesLoc"
                      type="radio"
                      value={true}
                    />
                    <div className="control_indicator-radio" />
                  </label>
                </div>
                <hr />
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

              </div>
            </form>
          </section>

          <Route
            path=":search?"
            render={props => (
              <Results
                cards={this.props.cards}
                loadMore={this.loadMore}
                hasMore={this.state.hasMore}
                {...props}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.filterSearch.cards
});

export default connect(
  mapStateToProps,
  { getFilteredCards, getInitialCards }
)(FilterSearch);
