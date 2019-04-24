import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
  return (
    <div className="home">
      {props.welcome}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.home
  };
};

export default connect(mapStateToProps)(Home);