import React, { Component } from 'react';
import loading from '../../auth/loading.svg';

class Callback extends Component {
  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }

    return (
      <div style={style}>
        <h2>{this.props.message}</h2>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;