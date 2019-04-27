import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Carousel from '../carousel/Carousel';

const Home = props => {

  return (
    <div className="home">
      <Carousel />
    </div>
  );
};

const mapStateToProps = state => {
	return {
		...state.home
	};
};

export default withRouter(connect(mapStateToProps)(Home));
