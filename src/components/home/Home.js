import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { homeData } from "./homeActions";
import Cards from "./Cards";
import Carousel from "./Carousel";

class Home extends React.Component {
  componentDidMount() {
    this.props.homeData();
    console.log("fetching here", homeData);
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
            <input type="text" />
            <br />
            <button>Submit</button>
          </div>
          <div className="cards-display">
            {this.props.home.cards.map((cards, index) => (
              <Cards {...this.props} cards={cards} key={index} />
            ))}
          </div>
        </main>
        <section>
          <div className="carousel-section">
            <h2>Super Cool Lambda Projects</h2>
            <p>
              Some description about labs. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc cursus nulla magna, eget egestas
              diam fringilla ut. Suspendisse ut aliquet nunc. Nunc sed feugiat
              ante. Suspendisse sem purus, gravida sit amet elit nec, suscipit
              vestibulum leo. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. In tincidunt at nibh
              cursus vestibulum.
            </p>
            <Carousel {...this.props} />
          </div>
        </section>
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
