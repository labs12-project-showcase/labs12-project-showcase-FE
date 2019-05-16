import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Carousel from './Carousel';

class Home extends React.Component {
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

        <main>{/* put a very neat map here please */}</main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default withRouter(connect(mapStateToProps)(Home));
